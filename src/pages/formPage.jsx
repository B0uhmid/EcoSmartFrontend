import { useState } from "react";
import RangeWithInput from "../components/Range";

export default function FormPage() {
    const [temperature, setTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [light, setLight] = useState(0);
    const [energy, setEnergy] = useState(0);
    const [automation, setAutomation] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            temperature,
            humidity,
            light,
            energy,
            automation,
        });
    };

    return (
        <div className="bg-gradient-to-t from-white via-green-100 to-white flex items-center justify-center p-6">
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
                        Optimisez votre environnement intelligent
                    </p>
                </div>

                {/* Paramètres */}

                <div>
                    <p className="text-green-700 font-medium mb-2">
                        🌡️ Température (°C)
                    </p>
                    <RangeWithInput
                        min={10}
                        max={35}
                        step={0.5}
                        value={temperature}
                        onChange={setTemperature}
                    />
                </div>

                <div>
                    <p className="text-green-700 font-medium mb-2">
                        💧 Humidité (%)
                    </p>
                    <RangeWithInput
                        min={0}
                        max={100}
                        step={1}
                        value={humidity}
                        onChange={setHumidity}
                    />
                </div>

                <div>
                    <p className="text-green-700 font-medium mb-2">
                        💡 Luminosité (%)
                    </p>
                    <RangeWithInput
                        min={0}
                        max={100}
                        step={1}
                        value={light}
                        onChange={setLight}
                    />
                </div>

                <div>
                    <p className="text-green-700 font-medium mb-2">
                        ⚡ Consommation énergétique (kWh)
                    </p>
                    <RangeWithInput
                        min={0}
                        max={500}
                        step={5}
                        value={energy}
                        onChange={setEnergy}
                    />
                </div>

                <div>
                    <p className="text-green-700 font-medium mb-2">
                        🤖 Niveau d’automatisation (%)
                    </p>
                    <RangeWithInput
                        min={0}
                        max={100}
                        step={1}
                        value={automation}
                        onChange={setAutomation}
                    />
                </div>

                {/* Bouton */}
                <button
                    type="submit"
                    className="mt-4 bg-green-600 hover:bg-green-800 text-white py-3 rounded-lg font-medium transition"
                >
                    Appliquer les paramètres
                </button>
            </form>
        </div>
    );
}