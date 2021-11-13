import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

// creating new context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    // usefirebase all info here 
    const firebase = useFirebase();

    return (
        <AuthContext.Provider value={firebase}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;