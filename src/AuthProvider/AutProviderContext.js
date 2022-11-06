import React from 'react';
import { createContext } from 'react';
export const AuthContext = createContext()
const AutProviderContext = ({ children }) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AutProviderContext;