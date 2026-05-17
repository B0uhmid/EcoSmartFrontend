import { useEffect, useState } from "react";
import brandLogo from "../assets/images/ecoSmart.svg";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  FaWineBottle,
  FaNewspaper,
  FaCogs,
  FaLeaf,
  FaBox,
} from "react-icons/fa";
import {
  getStats,
  getCategories,
  getSources,
  getStatsByCategory,
} from "../services/api";
// ── Animated StatCard ──
const StatCard = ({
  label,
  value,
  icon,
  suffix = "",
  gradient = "from-green-600 to-emerald-500",
}) => {
  const [display, setDisplay] = useState(0);

  const duration = 1500;
  const frameRate = 60;
  const totalFrames = (duration / 1000) * frameRate;

  useEffect(() => {
    const numeric = parseFloat(value);

    if (isNaN(numeric)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplay(value);
      return;
    }

    let frame = 0;

    const counter = setInterval(() => {
      frame++;

      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      const current = numeric * progress;

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
    <div className="relative overflow-hidden rounded-2xl border border-green-100 bg-white p-5 group shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
      {/* Hover background */}
      <div
        className={`absolute inset-0 bg-linear-to-r ${gradient}
        translate-y-full group-hover:translate-y-0
        transition-transform duration-500`}
      />

      {/* Big background icon */}
      <span
        className="absolute -top-8 -right-8 text-8xl opacity-10
        group-hover:opacity-20 group-hover:rotate-12
        transition-all duration-500 z-0"
      >
        {icon}
      </span>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-2">
        <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>

        <span className="text-gray-500 group-hover:text-green-100 text-sm transition-colors duration-300">
          {label}
        </span>

        <span className="text-green-800 group-hover:text-white font-bold text-2xl transition-colors duration-300">
          {display} {suffix}
        </span>
      </div>
    </div>
  );
};
const categoryIcons = {
  Plastique: <FaBox />,
  Métal: <FaCogs />,
  Verre: <FaWineBottle />,
  Papier: <FaNewspaper />,
  Organique: <FaLeaf />,
};
const Badge = ({ label, icon }) => (
  <div
    className="
      flex items-center gap-2
      bg-linear-to-r from-green-50 to-green-100
      text-green-800
      px-4 py-2
      rounded-xl
      text-sm
      font-medium
      border border-green-200
      hover:scale-105
      hover:shadow-md
      transition-all duration-300
      cursor-pointer
    "
  >
    <span className="text-green-700 text-base">{icon}</span>

    <span>{label}</span>
  </div>
);

const DONUT_COLORS = [
  "#16a34a",
  "#0ea5e9",
  "#f59e0b",
  "#a855f7",
  "#ef4444",
  "#14b8a6",
];

const DonutChart = ({ data, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const formattedData = Object.entries(data).map(([name, value]) => ({
    name,
    value,
  }));

  //const activeItem = activeIndex !== null ? formattedData[activeIndex] : null;

  return (
    <div className="bg-white rounded-2xl shadow p-5 border border-green-100 h-105">
      <h2 className="text-green-700 font-semibold text-lg mb-4">{title}</h2>

      <div className="w-full h-80 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={formattedData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={4}
              dataKey="value"
              activeIndex={activeIndex}
              activeOuterRadius={125}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {formattedData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={DONUT_COLORS[index % DONUT_COLORS.length]}
                  opacity={
                    activeIndex === null || activeIndex === index ? 1 : 0.4
                  }
                  className="cursor-pointer transition-all duration-300"
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
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
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        {/* Left side */}
        <div>
          <h1 className="text-4xl font-extrabold text-green-800 tracking-tight flex items-center gap-2">
            <span className="grid size-10 place-content-center">
              <img src={brandLogo} />
            </span>{" "}
            Dashboard
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Vue globale de vos données de recyclage et performance
            environnementale
          </p>

          {/* optional small metadata */}
          <p className="text-xs text-gray-400 mt-1">
            Dernière mise à jour: aujourd’hui
          </p>
        </div>

        {/* Right side quick stats / badges */}
        <div className="flex gap-2 flex-wrap md:justify-end">
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
            ♻️ Recyclage
          </span>

          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
            📦 {stats?.total_lots || 0} lots
          </span>

          <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">
            ⚡ Live data
          </span>
        </div>
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
            gradient="from-green-600 to-emerald-500"
          />

          <StatCard
            icon="💶"
            label="Prix moyen"
            value={stats.prix_moyen}
            suffix="$"
            gradient="from-blue-600 to-cyan-500"
          />

          <StatCard
            icon="💰"
            label="Prix max"
            value={stats.prix_max}
            suffix="$"
            gradient="from-yellow-500 to-orange-500"
          />

          <StatCard
            icon="⚖️"
            label="Poids moyen"
            value={stats.poids_moyen}
            suffix="kg"
            gradient="from-purple-600 to-pink-500"
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
              <Badge key={cat} label={cat} icon={categoryIcons[cat]} />
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
      {/* ── Distribution Charts ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DonutChart
          title="📊 Distribution par catégorie"
          data={stats.category_counts}
        />

        <DonutChart
          title="🏭 Distribution par source"
          data={stats.source_counts}
        />
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
            Sélectionnez une catégorie pour voir ses statistiques
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
                gradient="from-blue-600 to-cyan-500"
              />
              <StatCard
                icon="💰"
                label="Prix max"
                value={`${catStats.prix_max} $`}
                gradient="from-yellow-500 to-orange-500"
              />
              <StatCard
                icon="⚖️"
                label="Poids moyen"
                value={`${catStats.poids_moyen} kg`}
                gradient="from-purple-600 to-pink-500"
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
