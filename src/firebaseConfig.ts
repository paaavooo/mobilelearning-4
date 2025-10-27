import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

const config = {
     apiKey: "AIzaSyB-g3TttK6m0fsPhIx1MN1Ilv_TletQRa4",
  authDomain: "mobilelab4-7fd6a.firebaseapp.com",
  projectId: "mobilelab4-7fd6a",
  storageBucket: "mobilelab4-7fd6a.firebasestorage.app",
  messagingSenderId: "5603056877",
  appId: "1:5603056877:web:d751a6487f4aca9b9240e4",
  measurementId: "G-LP5LG01F8G"
}
const app = initializeApp(config)
const auth = getAuth(app)

export async function loginUser(username: string, password: string) {
    const email = `${username}@codedamn.com`

    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        console.log(res)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

export async function registerUser(username: string, password: string) {
    const email = `${username}@codedamn.com`
    
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        console.log(res)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}