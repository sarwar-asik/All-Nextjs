### install 
         npm i react-firebase-hooks

        https://github.com/CSFrequency/react-firebase-hooks

        https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth#usecreateuserwithemailandpassword

#### create  src>pages>login.js
    ### src>pages>login.js >>>

    import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
    import auth from "@/firebase/firebase.auth";


        const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
        console.log(user)

        const onSubmit = (data) => {
            const { email, password } = data
            createUserWithEmailAndPassword(email,password)
        };

### Navbar.js :::

        import { useAuthState } from "react-firebase-hooks/auth";
        const [user, loading, error] = useAuthState(auth);
        console.log(user)