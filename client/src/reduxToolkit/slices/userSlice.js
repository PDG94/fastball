const { decode } = require('./../../Auth/jwt')
const createSlice = require('@reduxjs/toolkit').createSlice
// const jwt = require('jwt-simple');

const { registerUserAction, loginUserAction,logoutUserAction, loginUserGoogleAction, getUserById, editUser } = require('./../actions/userActions')



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
    allUsers: [],
    singleUser:{},
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

        builder.addCase(getUserById.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(getUserById.fulfilled, (state,action)=> {
            state.singleUser = action.payload
            state.status = 'success';
        })
        builder.addCase(getUserById.rejected, (state,action)=> {
            state.status = 'rejected'
        })
        builder.addCase(editUser.pending, (state, action)=> {
            state.status = 'pending';
        })
        builder.addCase(editUser.fulfilled, (state,action)=> {
            // console.log('1111111111111', action);
            return {
                ...state,
                name: action.payload.name,
                lastName: action.payload.Lastname,
                profilePic:action.payload.profilePic,
                address: action.payload.address,
                city: action.payload.city,
                contry: action.payload.contry,
                status: 'fullfilled'
            }
        })
        builder.addCase(editUser.rejected, (state,action)=> {
            state.status = 'rejected'
        })
    }
});


module.exports = userSlice.reducer
module.exports.userActions = userSlice.actions  