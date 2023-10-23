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