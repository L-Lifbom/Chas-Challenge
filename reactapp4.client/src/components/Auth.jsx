import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isSignedIn, setSignedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isSignedIn, setSignedIn }}>
            {children}
        </AuthContext.Provider>
    );
};