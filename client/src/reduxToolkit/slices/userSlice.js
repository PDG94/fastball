const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    token : localStorage.getItem('tokenAuth'),
    name : "",
    email : "",
    _id : "",
    profilePic : "",
    isAdmin : false,
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        
    },
    extraReducers : {

    }
})


module.exports = userSlice.reducer
module.exports.userActions = userSlice.actions  