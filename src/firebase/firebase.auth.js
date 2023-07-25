import {getAuth} from 'firebase/auth'
import app from '@/firebase/firebase.config.js';
// import { getAuth } from 'firebase/auth';

// import app from "@/firebase/firebase.config"

// console.log(app);
const auth  = getAuth(app)

export default auth