const createSlice = require('@reduxjs/toolkit').createSlice
const jwtDecode = require("jwt-decode") ;
const {registerUserAction, loginUserAction} = require('./../actions/userActions')


const initialState = {
    token : localStorage.getItem('tokenAuth'),
    name : "",
    lastName : "",
    email : "",
    _id : "",
    profilePic : "",
    address : "",
    contry : "",
    city : "",
    isAdmin : false,
    status : ""
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        loadUser(state,action){
            const token = state.token;
            if(token){
                const user = jwtDecode(token);
                return {
                    ...state,
                    token,
                    _id : user._id,
                    name : user.name,
                    lastName : user.lastName,
                    email : user.email,
                    city : user.city,
                    contry : user.contry,
                    address : user.address,
                    isAdmin : user.isAdmin
                };
            }else return { ...state};
        },
        logOutUser(state, action){
            localStorage.removeItem('tokenAuth');
            return {
                ...state,
                name : "",
                _id : "",
                email : "",
                lastName : "",
                city : "",
                address : "",
                contry : "",
                isAdmin : ""
            }
        }

    },
    extraReducers : (builder)=>{
        builder.addCase(registerUserAction.pending, (state,action)=> {
            state.status = 'pending'
        })
        builder.addCase(registerUserAction.fulfilled, (state, action)=> {
            if(action.payload){
                const user = jwtDecode(action.payload);
                return {
                    ...state,
                    token : action.payload,
                    name : user.name,
                    lastName : user.lastName,
                    email : user.email,
                    address : user.address,
                    city : user.city,
                    contry : user.contry,
                    isAdmin : user.isAdmin,
                    status : "fullfilled"
                }
            }else {
                return state;
            };
        });
        builder.addCase(registerUserAction.rejected, (state, action)=> {
            state.status = 'rejected';
        });
        builder.addCase(loginUserAction.pending, (state,action)=> {
            state.status = "pending";
        });
        builder.addCase(loginUserAction.fulfilled, (state,action)=>{
            if(action.payload){
                const user = jwtDecode(action.payload);
                return {
                    ...state,
                    name : user.name,
                    lastName : user.Lastnaem,


                }
            }else{
                return state;
            }
        });
        builder.addCase(loginUserAction.rejected, (state, action)=>{
            state.status = 'rejected';
        });
    }
});


module.exports = userSlice.reducer
module.exports.userActions = userSlice.actions  