import { useState } from "react";
import RangeWithInput from "../components/Range";
import { predictFull } from "../services/api";

export default function FormPage() {
    const [poids, setPoids] = useState(0);
    const [volume, setVolume] = useState(0);
    const [conductivite, setConductivite] = useState(0);
    const [opacite, setOpacite] = useState(0);
    const [rigidite, setRigidite] = useState(1);
    const [source, setSource] = useState("Usine_A");

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const data = await predictFull({
                Poids:        poids,
                Volume:       volume,
                Conductivite: conductivite,
                Opacite:      opacite,
                Rigidite:     rigidite,
                Source:       source,
            });
            setResult(data);
        } catch (err) {
            console.error("Prediction error:", err);
            setError("Erreur lors de la prédiction. Vérifiez votre API.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-linear-to-t from-white via-green-100 to-white flex items-center justify-center p-6">
            <form
                onSubmit={handleSubmit}
                className="w-full p-8 flex flex-col gap-8"
            >
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold text-green-800">
                        EcoSmart Control Panel
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Prédisez la catégorie et le prix de revente de votre lot
                    </p>
                </div>

                {/* Poids */}
                <div>
                    <p className="text-green-700 font-medium mb-2">
                        ⚖️ Poids (kg)
                    </p>
                    <RangeWithInput
                        min={0}
                        max={300}
                        step={0.5}
                        value={poids}
                        onChange={setPoids}
                    />
                </div>

                {/* Volume */}
                <div>
                    <p className="text-green-700 font-medium mb-2">
                        📦 Volume (L)
                    </p>
                    <RangeWithInput
                        min={0}
                        max={554}
                        step={0.5}
                        value={volume}
                        onChange={setVolume}
                    />
                </div>

                {/* Conductivite */}
                <div>
                    <p className="text-green-700 font-medium mb-2">
                        ⚡ Conductivité
                    </p>
                    <RangeWithInput
                        min={0}
                        max={1}
                        step={0.01}
                        value={conductivite}
                        onChange={setConductivite}
                    />
                </div>

                {/* Opacite */}
                <div>
                    <p className="text-green-700 font-medium mb-2">
                        🔍 Opacité
                    </p>
                    <RangeWithInput
                        min={0}
                        max={2}
                        step={0.01}
                        value={opacite}
                        onChange={setOpacite}
                    />
                </div>

                {/* Rigidite */}
                <div>
                    <p className="text-green-700 font-medium mb-2">
                        🪨 Rigidité (1 - 10)
                    </p>
                    <RangeWithInput
                        min={1}
                        max={10}
                        step={1}
                        value={rigidite}
                        onChange={setRigidite}
                    />
                </div>

                {/* Source — dropdown */}
                <div>
                    <p className="text-green-700 font-medium mb-2">
                        🏭 Source
                    </p>
                    <select
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        className="w-full border border-green-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <option value="Usine_A">Usine A</option>
                        <option value="Usine_B">Usine B</option>
                        <option value="Centre_Tri">Centre de Tri</option>
                        <option value="Collecte_Citoyenne">Collecte Citoyenne</option>
                    </select>
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 bg-green-600 hover:bg-green-800 text-white py-3 rounded-lg font-medium transition disabled:opacity-50"
                >
                    {loading ? "Prédiction en cours..." : "Lancer la prédiction"}
                </button>

                {/* Error */}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                        ❌ {error}
                    </div>
                )}

                {/* Result */}
                {result && (
                    <div className="bg-green-50 border border-green-300 rounded-lg p-6 flex flex-col gap-3">
                        <h2 className="text-green-800 font-bold text-lg">
                            ✅ Résultat de la prédiction
                        </h2>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Catégorie prédite</span>
                            <span className="bg-green-600 text-white px-4 py-1 rounded-full font-medium">
                                {result.categorie_predite}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Prix de revente prédit</span>
                            <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full font-medium">
                                {result.prix_revente_predit} €
                            </span>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}