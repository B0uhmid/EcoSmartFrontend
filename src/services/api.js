const API_URL = import.meta.env.VITE_BACK_URL

export const predictFull = async (lotData) => {
    const res = await fetch(`${API_URL}/predict/full`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lotData)
    })
    return res.json()
}