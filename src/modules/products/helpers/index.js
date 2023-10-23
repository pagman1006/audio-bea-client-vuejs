import { getDownloadURL } from "firebase/storage"


export const downloadImage = async (pathReference) => {
    let urlPath = ''
    await getDownloadURL(pathReference)
        .then((url) => {
            urlPath = url
        }).catch((error) => {
            console.error(error)
        })
    return urlPath
}

export const discountFn = (price, discount) => {
    if (price > 0 && discount > 0) {
        return price - (price * discount / 100)
    }
}