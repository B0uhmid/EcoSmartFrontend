

export default function Range({
                                           min = 0,
                                           max = 100,
                                           step = 0.1,
                                           value,
                                           onChange,
                                       }) {
    const parseValue = (val) =>
        parseFloat(val.toString().replace(",", "."));

    const handleRangeChange = (e) => {
        onChange(parseFloat(e.target.value));
    };

    const handleInputChange = (e) => {
        const raw = e.target.value;

        const parsed = parseValue(raw);

        if (!isNaN(parsed)) {
            if (parsed >= min && parsed <= max) {
                onChange(parsed);
            }
        }
    };

    return (
        <div className="flex items-center gap-4 w-full">
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleRangeChange}
                className="flex-1 bg-green-700"
            />

            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                className="w-24 px-2 py-1 border rounded text-center"
            />
        </div>
    );
}