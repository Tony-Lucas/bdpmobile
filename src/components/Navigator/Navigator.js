import React from "react"
import Resumo from "../Resumo/Resumo"
import Mercadoria from "../Mercadoria/Mercadoria"
import Nota from "../Nota/Nota"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path } from "react-native-svg"
import {Platform} from "react-native"
const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (

    <Tab.Navigator
      initialRouteName="Feed"
      
      tabBarOptions={{
        activeTintColor: '#546DE5',
        style:{height: Platform.OS === "ios" ? "12%" : "8%"},
        showLabel:false
      }}
      
    >
      <Tab.Screen
        name="Resumo"
        component={Resumo}
        options={{
          tabBarLabel: 'Resumo',
          tabBarIcon: ({ color, size }) => (
            <Svg
              width={32}
              height={32}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M7 16a1.5 1.5 0 001.5-1.5.77.77 0 000-.15l2.79-2.79h.46l1.61 1.61v.08a1.5 1.5 0 103 0v-.08L20 9.5A1.5 1.5 0 1018.5 8a.767.767 0 000 .15l-3.61 3.61h-.16L13 10a1.5 1.5 0 10-3 0l-3 3a1.5 1.5 0 100 3zm13.5 4h-17V3a1 1 0 00-2 0v18a1 1 0 001 1h18a1 1 0 000-2z"
                fill={color}
              />
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Mercadoria"
        component={Mercadoria}
        options={{
          tabBarLabel: 'Mercadorias',
          tabBarIcon: ({ color, size }) => (
            <Svg
              width={32}
              height={32}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Nota"
        component={Nota}
        options={{
          tabBarLabel: 'Venda',
          tabBarIcon: ({ color, size }) => (

            <Svg
              width={32}
              height={32}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M10 8h6a1 1 0 100-2h-6a1 1 0 000 2zm-2 4h8a1 1 0 000-2H8a1 1 0 000 2zm0 4h8a1 1 0 000-2H8a1 1 0 000 2zM20 2H4a1 1 0 00-1 1v18a1 1 0 001.6.8l2.07-1.55 2.06 1.55a1 1 0 001.2 0L12 20.25l2.07 1.55a1 1 0 001.2 0l2.06-1.55 2.07 1.55a1 1 0 001.45-.277A1 1 0 0021 21V3a1 1 0 00-1-1zm-1 17l-1.07-.8a1 1 0 00-1.2 0l-2.06 1.55-2.07-1.55a1 1 0 00-1.2 0l-2.07 1.55-2.06-1.55a1 1 0 00-1.2 0L5 19V4h14v15z"
                fill={color}
              />
            </Svg>
          ),
        }}
      />
    </Tab.Navigator>

  );
}