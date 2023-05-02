import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  { useSelector } from 'react-redux';

import AppStack from './AppStack';
import AuthStack from './AuthStack';

function Routes() {
    const user = useSelector(state => state.userState.currentUser);

    if (!user){
        return (
            <NavigationContainer>
                <AuthStack/>
            </NavigationContainer>
        )
    }

    return (
        <NavigationContainer>
            <AppStack/>
        </NavigationContainer>
    )
   
}

export default Routes