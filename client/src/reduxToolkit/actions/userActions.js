import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from './../../Auth/firebase'


export const registerUserAction = createAsyncThunk('user/registerUserAction', async (user) => {
    try {
        const token = await axios.post('https://fastball-production.up.railway.app/api/users/registerUser', {
            name: user.name,
            lastName: user.lasName,
            profilePic: user.profilePic,
            email: user.email,
            password: user.password,
            address: user.address,
            contry: user.contry,
            city: user.city
        })
        localStorage.setItem('tokenAuth', token.data);
        return token.data;
    } catch (error) {
        return error.message
    }

})

export const loginUserAction = createAsyncThunk('user/loginUserAction', async (email, password) => {
    const token = await axios.post('https://fastball-production.up.railway.app/api/users/loginUser', {
        email,
        password
    });
    localStorage.setItem('tokenAuth', token.data);
    return token.data
});


export const loginUserGoogleAction = createAsyncThunk('user/loginUser', async () => {
    const provider = new GoogleAuthProvider();

    const credentials = await signInWithPopup(auth, provider)
    //Guardar en local storage
    localStorage.setItem('tokenAuth', credentials.user.accessToken);
    console.log(credentials);
})