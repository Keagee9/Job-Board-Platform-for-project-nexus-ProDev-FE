
import { useRouter } from 'expo-router';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import app from '../firebase/firebase';

interface AuthContextType {
    user: User | null;
    initialized: boolean;
}

const AuthContext = createContext<AuthContextType>({ user: null, initialized: false });

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [initialized, setInitialized] = useState(false);
    const auth = getAuth(app);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            if (!initialized) {
                setInitialized(true);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, initialized }}>
            {children}
        </AuthContext.Provider>
    );
};
