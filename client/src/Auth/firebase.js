// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const dispatch = useDispatch();


const firebaseConfig = {
    apiKey: "AIzaSyDVbYkevMobF6ZkV4ogwhR3dLb4f4lQV3g",
    authDomain: "sportproyect-a38b1.firebaseapp.com",
    projectId: "sportproyect-a38b1",
    storageBucket: "sportproyect-a38b1.appspot.com",
    messagingSenderId: "728091974922",
    appId: "1:728091974922:web:abcdb1b25831fc7bd72ef3",
    measurementId: "G-MPLC8Z9BKM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);


//  export const registerAction =  async (email, password) => {
//     try {
//         const userCredentials = await createUserWithEmailAndPassword(auth, email, password); //Firebase espera una contraseña de 6 characters min
//         console.log(userCredentials.accessToken);
//         localStorage.setItem('tokenAuth', userCredentials.accessToken);
//         return userCredentials
//     } catch (error) {
//         console.log(error)
//         return error
//     }
// }

// export const loginUser = async (email,password)=> {
//     try {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         //Guardar en local storage
//     } catch (error) {
        
//     }
// }

// export const loginWithGoogle = async () => {
//     try {
//         const provider = new GoogleAuthProvider();

//         const credentials = await signInWithPopup(auth, provider)
//         console.log(credentials)
//     } catch (error) {
//         return error
//     }
// }


onAuthStateChanged(auth, async (user) => {
   if(user){
    console.log(user)
   }else{

   }
})

export const logOut = async ()=> {
    await signOut(auth)
    localStorage.removeItem('tokenAuth')
    console.log('user sing out')
}






