import { useEffect, useState, useRef } from "react";
import {
  getStats,
  getCategories,
  getSources,
  getStatsByCategory,
} from "../services/api";
// ── Animated StatCard ──
const StatCard = ({ label, value, icon, suffix = "" }) => {
  const [display, setDisplay] = useState(0);
  const duration = 1500; // ms
  const frameRate = 60;
  const totalFrames = (duration / 1000) * frameRate;

  useEffect(() => {
    // Extract numeric value
    const numeric = parseFloat(value);
    if (isNaN(numeric)) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      // Ease-out effect
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      const current = numeric * progress;

      // Format based on value size
      if (Number.isInteger(numeric)) {
        setDisplay(Math.floor(current));
      } else {
        setDisplay(current.toFixed(2));
      }

      if (frame >= totalFrames) {
        setDisplay(numeric % 1 === 0 ? numeric : numeric.toFixed(2));
        clearInterval(counter);
      }
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="bg-white rounded-2xl shadow p-5 flex flex-col gap-2 hover: border border-green-100">
      <span className="text-2xl">{icon}</span>
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="text-green-800 font-bold text-xl">
        {display} {suffix}
      </span>
    </div>
  );
};

// ── Reusable Badge ──
const Badge = ({ label }) => (
  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
    {label}
  </span>
);

// ── Simple Bar Chart ──
const BarChart = ({ data, colorClass = "bg-green-500" }) => {
  const max = Math.max(...Object.values(data));
  return (
    <div className="flex flex-col gap-3">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="flex items-center gap-3">
          <span className="text-gray-600 text-sm w-24 shrink-0">{key}</span>
          <div className="flex-1 bg-gray-100 rounded-full h-4">
            <div
              className={`${colorClass} h-4 rounded-full transition-all duration-500`}
              style={{ width: `${(value / max) * 100}%` }}
            />
          </div>
          <span className="text-gray-700 text-sm font-medium w-10 text-right">
            {value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function DashboardPage() {
  const [stats, setStats] = useState(null);
  const [categories, setCategories] = useState([]);
  const [sources, setSources] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [catStats, setCatStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Load API :
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [statsData, catsData, srcsData] = await Promise.all([
          getStats(),
          getCategories(),
          getSources(),
        ]);
        setStats(statsData);
        setCategories(catsData.categories);
        setSources(srcsData.sources);
      } catch (err) {
        console.error("Prediction error:", err);
        setError("Impossible de charger les données. Vérifiez votre API.");
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  //Load category stats when user selects one:
  useEffect(() => {
    if (!selectedCat) return;
    const fetchCatStats = async () => {
      try {
        const data = await getStatsByCategory(selectedCat);
        setCatStats(data);
      } catch (err) {
        console.error("Prediction error:", err);
        setError("Impossible de charger les stats de cette catégorie.");
      }
    };
    fetchCatStats();
  }, [selectedCat]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-64 text-green-700 font-medium">
        ⏳ Chargement du dashboard...
      </div>
    );

  if (error)
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg m-6">
        ❌ {error}
      </div>
    );

  return (
    <div className="p-6 flex flex-col gap-10 bg-linear-to-t from-white via-green-50 to-white min-h-screen">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-green-800">📊 Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">
          Vue globale de vos données de recyclage
        </p>
      </div>

      {/*Global Stats Cards*/}
      <section>
        <h2 className="text-green-700 font-semibold text-lg mb-4">
          🌍 Statistiques globales
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            icon="📦"
            label="Total lots"
            value={stats.total_lots}
            suffix=""
          />
          <StatCard
            icon="💶"
            label="Prix moyen"
            value={stats.prix_moyen}
            suffix="$"
          />
          <StatCard
            icon="💰"
            label="Prix max"
            value={stats.prix_max}
            suffix="$"
          />
          <StatCard
            icon="⚖️"
            label="Poids moyen"
            value={stats.poids_moyen}
            suffix="kg"
          />
        </div>
      </section>
      {/*Categories & Sources Badges*/}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-5 border border-green-100">
          <h2 className="text-green-700 font-semibold text-lg mb-4">
            🏷️ Catégories disponibles
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Badge key={cat} label={cat} />
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-5 border border-green-100">
          <h2 className="text-green-700 font-semibold text-lg mb-4">
            🏭 Sources disponibles
          </h2>
          <div className="flex flex-wrap gap-2">
            {sources.map((src) => (
              <Badge key={src} label={src} />
            ))}
          </div>
        </div>
      </section>
      {/* ── Section 3 : Category Distribution Bar Chart ── */}
      <section className="bg-white rounded-2xl shadow p-5 border border-green-100">
        <h2 className="text-green-700 font-semibold text-lg mb-4">
          📊 Distribution par catégorie
        </h2>
        <BarChart data={stats.category_counts} colorClass="bg-green-500" />
      </section>

      {/* ── Section 4 : Source Distribution Bar Chart ── */}
      <section className="bg-white rounded-2xl shadow p-5 border border-green-100">
        <h2 className="text-green-700 font-semibold text-lg mb-4">
          🏭 Distribution par source
        </h2>
        <BarChart data={stats.source_counts} colorClass="bg-blue-400" />
      </section>

      {/* ── Section 5 : Stats by Category ── */}
      <section className="bg-white rounded-2xl shadow p-5 border border-green-100">
        <h2 className="text-green-700 font-semibold text-lg mb-4">
          🔍 Stats par catégorie
        </h2>

        {/* Category selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
                                ${
                                  selectedCat === cat
                                    ? "bg-green-600 text-white"
                                    : "bg-green-100 text-green-800 hover:bg-green-200"
                                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category stats */}
        {!selectedCat && (
          <p className="text-gray-400 text-sm">
            👆 Sélectionnez une catégorie pour voir ses statistiques
          </p>
        )}

        {catStats && (
          <div className="flex flex-col gap-6">
            {/* Stat cards for selected category */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard
                icon="📦"
                label="Total lots"
                value={catStats.total_lots}
              />
              <StatCard
                icon="💶"
                label="Prix moyen"
                value={`${catStats.prix_moyen} $`}
              />
              <StatCard
                icon="💰"
                label="Prix max"
                value={`${catStats.prix_max} $`}
              />
              <StatCard
                icon="⚖️"
                label="Poids moyen"
                value={`${catStats.poids_moyen} kg`}
              />
            </div>

            {/* Sources distribution for selected category */}
            <div>
              <p className="text-gray-600 font-medium mb-3">
                Sources pour {selectedCat}
              </p>
              <BarChart data={catStats.sources} colorClass="bg-purple-400" />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
