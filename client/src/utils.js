import axios from "axios"

export const uploadImage = async (imgPath, fileCloudinary)=> {
    const dataImg = new FormData()
    dataImg.append('file', imgPath)
    dataImg.append('upload_preset', `fastball${fileCloudinary}`)
    const { data } = await axios.post( 'https://api.cloudinary.com/v1_1/dviri5ov1/image/upload/', dataImg)
    return data.secure_url
}