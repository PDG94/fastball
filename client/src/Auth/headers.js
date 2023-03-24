export const headers = ()=>{
    const headers = {
        headers : {
            "authorization" : localStorage.getItem("tokenAuth")
        }
    }
    return headers;
}