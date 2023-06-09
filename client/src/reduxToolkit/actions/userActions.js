import { async } from "@firebase/util";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from './../../Auth/firebase'
import { logOut } from './../../Auth/firebase'

export const registerUserAction = createAsyncThunk('user/registerUserAction', async (user) => {
    try {
        const token = await axios.post('/users/registerUser', {
            name: user.name,
            lastName: user.lastName,
            profilePic: user.profilePic,
            email: user.email,
            password: user.password,
            address: user.address,
            contry: user.country,
            city: user.city
        })
        localStorage.setItem('tokenAuth', token.data);
        console.log(token.data)
        return token.data;
    } catch (error) {
        return error.message
    }

})

export const loginUserAction = createAsyncThunk('user/loginUserAction', async (user) => {
    const { email, password } = user
    const token = await axios.post('users/loginUser', {
        email,
        password
    });
    localStorage.setItem('tokenAuth', token.data);
    return token.data
});


export const loginUserGoogleAction = createAsyncThunk('user/loginUser', async (user) => {
    try {
        const provider = new GoogleAuthProvider();

        const result = await signInWithPopup(auth, provider);
        const response = await axios.post("/users/loginAndRegisterGoogle", result);
        //Guardar en local storage
        localStorage.setItem('tokenAuth', response.data);
        return response.data
    }
    catch (err) {
        return err.message
    }
})

export const logoutUserAction = createAsyncThunk(
    'user/logoutUserAction',
    async () => {
        localStorage.removeItem('tokenAuth');
        await logOut()
    }
);

export const getAllUsers = createAsyncThunk('user/getAllUsers',
    async () => {
        const users = await axios.get("/users")
        return users.data
    })


export const getUserById = createAsyncThunk('user/getUserById',
    async (id) => {
        const user = await axios.get(`/users/${id}`);
        return user.data;
    }
)

export const editUser = createAsyncThunk('user/editUser',
    async (userr) => {
        const {id, changes, isAdmin}= userr;
        console.log({"Action":changes})
        const user = await axios.patch(`/users/editUser/${id}`, {changes, isAdmin});
        return user.data;
    })

export const deleteUser = createAsyncThunk('/user/deleteUser',

    async (id)=>{
        const userDeleted = await axios.delete(`/users/deleteUser/${id}`);
        return userDeleted;
    }
)   