import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from 'react-navigation';
import {
    ChatsNavigator,
    GroupsNavigator,
    ContactsNavigator
} from './ScreenStack.js';

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let IconComponent= Ionicons;
    let iconName;
    if(routeName === "Chat") {
        iconName = "ios-home";
    } else if(routeName == "Group") {
        iconName = "ios-contact";
    } else if(routeName == "Contact") {
        iconName = "ios-search";
    }
    
    return (
        <IconComponent name={iconName} size={25} color={tintColor}/>
    );
}

const BottomTabNavigator = createBottomTabNavigator(
    {
        Chat: ChatsNavigator,
        Group: GroupsNavigator,
        Contact: ContactsNavigator
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                getTabBarIcon(navigation, focused, tintColor)
            }
        }),
        tabBarOptions: {
            activeTintColor: "black",
            inactiveTintColor: "gray"
        }
    }
);
export default BottomTabNavigator;