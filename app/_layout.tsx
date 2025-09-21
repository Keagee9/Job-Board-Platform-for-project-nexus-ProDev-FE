
import React, { useEffect, useState } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { AppProvider } from '../context/AppContext';

const InitialLayout = () => {
    const { user, initialized } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if (!initialized) return;

        const inTabsGroup = segments[0] === '(tabs)';

        if (user && !inTabsGroup) {
            router.replace('/(tabs)/');
        } else if (!user) {
            router.replace('/sign-up');
        }
    }, [user, initialized]);

    return <Slot />
}

const RootLayout = () => {
    return (
        <AuthProvider>
            <AppProvider>
                <InitialLayout />
            </AppProvider>
        </AuthProvider>
    )
}

export default RootLayout;
