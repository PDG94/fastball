const { decode } = require('./../../Auth/jwt')
const createSlice = require('@reduxjs/toolkit').createSlice
// const jwt = require('jwt-simple');

const { registerUserAction, loginUserAction,logoutUserAction } = require('./../actions/userActions')


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
    isAdmin: false,
    status: ""
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loadUser(state, action) {
            const token = state.token;
            if (token) {
                const user = decode(token);
                return {
                    ...state,
                    token,
                    _id: user._id,
                    name: user.name,
                    profilePic : user.profilePic,
                    lastName: user.lastName,
                    email: user.email,
                    city: user.city,
                    contry: user.contry,
                    address: user.address,
                    isAdmin: user.isAdmin
                };
            } else return { ...state };
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
                isAdmin: ""
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
                console.log({ user })
                return {
                    ...state,
                    name: user.name,
                    lastName: user.lastName,
                    email: user.email,
                    address: user.address,
                    city: user.city,
                    contry: user.contry,
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
            console.log(action.payload)
            console.log("hola este es el extre reducer")
            console.log(action.payload)
            if (action.payload) {
                console.log('dentro del payload')
                console.log(action.payload)
                const user = decode(action.payload)
                return {
                    name: user.name,
                    lastName: user.Lastname,
                    email: user.email,
                    profilePic:user.profilePic,
                    address: user.address,
                    city: user.city,
                    contry: user.contry,
                    isAdmin: user.isAdmin,
                    status: 'fullfilled'

                }

            } else {
                return state;
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
            state.email= "";
            state.lastName= "";
            state.city= "";
            state.address= "";
            state.contry= "";
            state.isAdmin= "";
            
          });
        builder.addCase(logoutUserAction.rejected, (state, action) => {
            state.status = 'rejected';
        });
    }
});


module.exports = userSlice.reducer
module.exports.userActions = userSlice.actions  