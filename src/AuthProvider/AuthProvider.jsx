import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';
import { getRole} from '../API/auth';
import axios from 'axios';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true)


    const [role, setRole] = useState(null)


    useEffect(() => {
        if (user) {
            setLoading(true)
            getRole(user.email)
            .then(data=> setRole(data))
                    
        }
        setLoading(false)
    }, [user])
    // firebaseConnected

    // newUserRegisterEmailAndPassword 

    const newUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // email and password login 
    const oldUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        localStorage.removeItem('access-token')
        return signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
       


    }

    // google user 
    const googleUser = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }

    const resetUser = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }



    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }





    // current user check 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged((auth), currentUser => {
            setUser(currentUser)

           if(currentUser){
            axios.post(`${import.meta.env.VITE_API_URL}/jwt`,{
                email: currentUser.email
            }).then(data => {
                // console.log(data.data.token);
                localStorage.setItem('access-token',data.data.token )
                setLoading(false)

            })
           }else{
            localStorage.removeItem('access-token')
            setLoading(false)

           }

         
        })
        return () => {
            return unSubscribe
        }
    }, [])

    const authInfo = {
        user,
        newUser,
        oldUser,
        loading,
        setLoading,
        updateUserProfile,
        logOut,
        resetUser,
        googleUser,
        role,
        setRole,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;