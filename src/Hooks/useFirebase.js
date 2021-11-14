import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import initializeAuthentication from '../Components/Authentication/Firebase/firebase.init';
import { useHistory } from 'react-router';

//firebase initialization here 
initializeAuthentication();

const useFirebase = () => {
    // STATES HERE 
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    // auth here 
    const auth = getAuth();

    const history = useHistory();

    // google auth provider 
    const googleProvider = new GoogleAuthProvider();

    // user admin data loading 
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`)
            .then(response => response.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // new user registration with eamila and pass here 
    const registerUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password, name)
            .then(result => {
                setUser(result.user)
                updateUserName(name)
                setError('');
                saveUser(email, name, 'POST')
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
                saveUser(result.user.email, result.user.displayName, 'PUT');
                history.push('/');
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

    // save user 
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
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