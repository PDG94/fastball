const { decode } = require('./../../Auth/jwt')
const createSlice = require('@reduxjs/toolkit').createSlice
// const jwt = require('jwt-simple');

const { registerUserAction, loginUserAction,logoutUserAction, loginUserGoogleAction } = require('./../actions/userActions')



const initialState = {
    token: localStorage.getItem('tokenAuth'),
    name: "",
    lastName: "",
    email: "",
    _id: "",
    profilePic: "",
    address: "",
    contry: "",
    city: "",
    active: '',
    isAdmin: '',
    status: "",
    allUsers: []
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getAllusers(state, action) {
            state.allUsers = action.payload
        },
        loadUser(state, action) {
       
            if (state.token) {
                const user = decode(state.token);
                console.log({user})
                return {
                    ...state,
                    token : action.payload,
                    _id: user._id,
                    name: user.name,
                    profilePic : user.profilePic ? user.profilePic: user.profile ,
                    lastName: user.lastName,
                    email: user.email,
                    city: user.city,
                    contry: user.contry,
                    address: user.address,
                    active: user.active,
                    isAdmin: user.isAdmin
                };
            }else return {...state}
        },
        logOutUser(state, action) {
            localStorage.removeItem('tokenAuth');
            return {
                ...state,
                name: "",
                _id: "",
                email: "",
                lastName: "",
                city: "",
                address: "",
                contry: "",
                active: '',
                isAdmin: '',
            }
        }

    },
    extraReducers: (builder) => {
        builder.addCase(registerUserAction.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(registerUserAction.fulfilled, (state, action) => {
            if (action.payload) {
                const user = decode(action.payload);
                return {
                    ...state,
                    token : action.payload,
                    _id : user._id,
                    name: user.name,
                    lastName: user.lastName,
                    email: user.email,
                    address: user.address,
                    city: user.city,
                    contry: user.contry,
                    profilePic: user.profilePic,
                    active: user.active,
                    isAdmin: user.isAdmin,
                    status: "fullfilled"
                }
            } else {
                return state;
            };
        });
        builder.addCase(registerUserAction.rejected, (state, action) => {
            state.status = 'rejected';
        });
        builder.addCase(loginUserAction.pending, (state, action) => {
            state.status = "pending";
        });
        builder.addCase(loginUserAction.fulfilled, (state, action) => {
         
            if (action.payload) {
                const user = decode(action.payload)
            
                return {
                    ...state,
                    token:action.payload,
                    name: user.name,
                    lastName: user.Lastname,
                    email: user.email,
                    _id:user._id,
                    profilePic:user.profilePic,
                    address: user.address,
                    city: user.city,
                    contry: user.contry,
                    active: user.active,
                    isAdmin: user.isAdmin,
                    status: 'fullfilled'
                }
            } else {
                return {...state};
            }
        });
        builder.addCase(loginUserAction.rejected, (state, action) => {
            state.status = 'rejected';
        });
        builder.addCase(logoutUserAction.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(logoutUserAction.fulfilled, (state, action) => {
            
            state.token = null;
            state.name= "";
            state._id= "";
            state.profilePic="";
            state.email= "";
            state.lastName= "";
            state.city= "";
            state.address= "";
            state.contry= "";
            state.active= '';
            state.isAdmin= '';
            
          });
        builder.addCase(logoutUserAction.rejected, (state, action) => {
            state.status = 'rejected';
        });
        builder.addCase(loginUserGoogleAction.pending, (state,action)=> {
            state.status = "pending"
        });
        builder.addCase(loginUserGoogleAction.fulfilled, (state,action)=>{
            if(action.payload){
                const user = decode(action.payload)
        
                
                return {
                    ...state,
                    token : action.payload,
                    _id : user._id,
                    name : user.name,
                    lastName : user.LastName,
                    profilePic : user.profilePic,
                    email : user.email,
                    address : user.address,
                    contry : user.contry,
                    city : user.city,
                    active: user.active,
                    isAdmin : user.isAdmin,
                    status : "fullfilled"
                }
            }
        });
        builder.addCase(loginUserGoogleAction.rejected, (state,action)=>{
            state.status = "rejected"
        })
    }
});


module.exports = userSlice.reducer
module.exports.userActions = userSlice.actions  