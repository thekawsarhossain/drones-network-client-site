import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import initializeAuthentication from '../Components/Authentication/Firebase/firebase.init';

//firebase initialization here 
initializeAuthentication();

const useFirebase = () => {
    // STATES HERE 
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    console.log(admin)

    // auth here 
    const auth = getAuth();

    // google auth provider 
    const googleProvider = new GoogleAuthProvider();

    // new user registration with eamila and pass here 
    const registerUser = (email, password, name, history, location) => {
        const url = location?.state?.from || '/dashboard';
        createUserWithEmailAndPassword(auth, email, password, name)
            .then(result => {
                setUser(result.user)
                updateUserName(name)
                setError('');
                history.replace(url);
                saveUser(email, name, 'POST')
            })
            .catch(error => setError(error.message))
    }

    // signin user with email and pass here 
    const loginUser = (email, password, history, location) => {
        const url = location?.state?.from || '/dashboard';
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                history.replace(url);
                setError('');
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }

    // signin with google here 
    const googleSignIn = (history, location) => {
        setLoading(true)
        const url = location?.state?.from || '/dashboard';
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('')
                history.replace(url);
                saveUser(result.user.email, result.user.displayName, 'PUT');
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }

    // getting loggedin user information here
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setLoading(false);
        })
    }, [auth])

    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then((result) => {
            setError('');
        }).catch((error) => {
            setError(error.message)
        });
    }

    // save user 
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://safe-tundra-13022.herokuapp.com/users', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
    }

    // user admin data loading 
    useEffect(() => {
        fetch(`https://safe-tundra-13022.herokuapp.com/user/${user.email}`)
            .then(response => response.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    // logout user here 
    const logoutUser = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => setError(error.message));
    }

    // returning necessary function here 
    return {
        user,
        admin,
        error,
        setError,
        loading,
        registerUser,
        googleSignIn,
        loginUser,
        logoutUser,
    }
}

export default useFirebase;