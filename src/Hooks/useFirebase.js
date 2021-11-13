import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import initializeAuthentication from '../Components/Authentication/Firebase/firebase.init';
import { useHistory } from 'react-router-dom';

//firebase initialization here 
initializeAuthentication();

const useFirebase = () => {
    // STATES HERE 
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    // auth here 
    const auth = getAuth();

    const history = useHistory();

    // google auth provider 
    const googleProvider = new GoogleAuthProvider();

    // new user registration with eamila and pass here 
    const registerUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password, name)
            .then(result => {
                setUser(result.user)
                updateUserName(name)
                setError('');
                history.push('/');
            })
            .catch(error => setError(error.message))
    }

    // signin user with email and pass here 
    const loginUser = (email, password, location, histroy) => {
        const url = location?.state?.from || '/';
        console.log(url)
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                histroy.replace(url);
                setError('');
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }

    // signin with google here 
    const googleSignIn = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('')
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }

    // getting loggedin user information here
    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false);
            }
            else {
                setUser({})
            }
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