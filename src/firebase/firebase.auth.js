import {getAuth} from 'firebase/auth'
// import { getAuth } from 'firebase/auth';
import { app } from './firebase.config';
// import app from "@/firebase/firebase.config"

// console.log(app);
const auth  = getAuth(app)

export default auth