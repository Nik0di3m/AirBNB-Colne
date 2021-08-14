export function getStrapiURL(path = "") {
    return `${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}${path}`
}

export async function fetchAPI(path) {

    const reqUrl = getStrapiURL(path)
    const res = await fetch(reqUrl)
    const data = await res.json()
    return data

}