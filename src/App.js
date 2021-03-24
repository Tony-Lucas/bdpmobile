import React from "react";
import { Text } from "react-native";
import Login from "./components/Login/Login"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigator from "./components/Navigator/Navigator";
import NovaMercadoria from "./components/Mercadoria/NovaMercadoria";
import NovaNota from "./components/Nota/NovaNota";
import FinalizaNota from "./components/Nota/FinalizaNota";

const Stack = createStackNavigator();

export default props => 

<NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Navigator" component={Navigator} />
        <Stack.Screen name="NovaMercadoria" component={NovaMercadoria} />
        <Stack.Screen name="NovaNota" component={NovaNota} />
        <Stack.Screen name="FinalizaNota" component={FinalizaNota} />
    </Stack.Navigator>
</NavigationContainer>