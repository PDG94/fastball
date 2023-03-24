import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { auth } from './../../Auth/firebase'


export const registerUserAction = createAsyncThunk('user/registerUserAction', async (user) => {
    try {
        const token = await axios.post('http://localhost:3001/api/users/registerUser', {
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
        return token.data;
    } catch (error) {
        return error.message
    }

})

export const loginUserAction = createAsyncThunk('user/loginUserAction', async (email, password) => {
    console.log({email, password});
    const token = await axios.post('http://localhost:3001/api/users/loginUser', {
        email,
        password
    });
    console.log({email,password});
    localStorage.setItem('tokenAuth', token.data);
    return token.data
});


export const loginUserGoogleAction = createAsyncThunk('user/loginUser', async (user) => {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider)
    // const credentials = await GoogleAuthProvider.credentialFromResult(result);
    console.log({result})
    //Guardar en local storage
    localStorage.setItem('tokenAuth', result.user.accessToken);
    const response = await axios.post("http://localhost:3001/api/users/loginAndRegisterGoogle", result); 
    return response.data
})

export const logoutUserAction = createAsyncThunk(
    'user/logoutUserAction',
    async () => {
      localStorage.removeItem('tokenAuth');
      
    }
  );