import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './AppStack';
import AuthStack from './AuthStack';


function Routes() {
    let user = null;
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