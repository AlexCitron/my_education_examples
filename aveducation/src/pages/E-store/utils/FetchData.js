import {products, categories} from "../data/products.jsx";

export async function FetchData(url) {
    const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Could not fetch data")
        }
    return await response.json()
}

export async function FetchDataCat() {
    return categories
}
export async function FetchDataProd() {
    return products

}

export default {FetchDataCat, FetchDataProd}
