import { useEffect, useState } from "react";
import {
  getStats,
  getCategories,
  getSources,
  getStatsByCategory,
} from "../services/api";

// ── Reusable StatCard ──
const StatCard = ({ label, value, icon }) => (
  <div className="bg-white rounded-2xl shadow p-5 flex flex-col gap-2 border border-green-100">
    <span className="text-2xl">{icon}</span>
    <span className="text-gray-500 text-sm">{label}</span>
    <span className="text-green-800 font-bold text-xl">{value}</span>
  </div>
);

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
        ]);
        setStats(statsData);
        setCategories(catsData.categories);
      } catch (err) {
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
          <StatCard icon="📦" label="Total lots" value={stats.total_lots} />
          <StatCard
            icon="💶"
            label="Prix moyen (€)"
            value={`${stats.prix_moyen} €`}
          />
          <StatCard
            icon="💰"
            label="Prix max (€)"
            value={`${stats.prix_max} €`}
          />
          <StatCard
            icon="⚖️"
            label="Poids moyen (kg)"
            value={`${stats.poids_moyen} kg`}
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
      </section>
    </div>
  );
}
