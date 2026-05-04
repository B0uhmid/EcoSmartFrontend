const API_URL = import.meta.env.VITE_BACK_URL

// GET endpoints :

export const getCategories = async () => {
    const res = await fetch(`${BASE_URL}/categories`)
    return res.json()
}

export const getSources = async () => {
    const res = await fetch(`${BASE_URL}/sources`)
    return res.json()
}

export const getStats = async () => {
    const res = await fetch(`${BASE_URL}/stats`)
    return res.json()
}

export const getStatsByCategory = async (categorie) => {
    const res = await fetch(`${BASE_URL}/stats/${categorie}`)
    return res.json()
}

export const predictFull = async (lotData) => {
    const res = await fetch(`${API_URL}/predict/full`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lotData)
    })
    return res.json()
}