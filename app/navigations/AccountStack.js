import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import Account from "../screens/Account";

const Stack = createStackNavigator();

export default function RestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="restaurants"
                component={Account}
                options={{
                    title:"Account"
                }}
            /> 
        </Stack.Navigator>
    );
}