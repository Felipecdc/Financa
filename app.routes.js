import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from '../Pages/Home/index'; 
import New from "../Pages/New";
import Profile from "../Pages/Profile";
import CustomDrawer from "../Components/CustomDrawer";

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <AppDrawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props}/>}
        screenOptions={{
            headerShown: false,

            headerStyle:{
                backgroundColor: '#fff',
                paddingTop: 20
            },
            drawerActiveBackgroundColor: '#3b3dbf',
            drawerActiveTintColor: '#fff',
            drawerInactiveBackgroundColor: '#f0f2ff',
            drawerInactiveTintColor: '#121212'
        }}
        >
            <AppDrawer.Screen
            name="Home"
            component={Home}
            />
            <AppDrawer.Screen
            name="New"
            component={New}
            />
            <AppDrawer.Screen
            name="Perfil"
            component={Profile}
            />
        </AppDrawer.Navigator>
    )
}

export default AppRoutes;