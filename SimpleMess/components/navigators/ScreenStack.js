import { createStackNavigator } from 'react-navigation';
import Chats from './../screens/Chats.js';
import Groups from './../screens/Groups.js';
import Contacts from './../screens/Contacts.js';
import Settings from './../screens/Settings.js';

export const ChatsNavigator = createStackNavigator({
    Chat: {screen: Chats}
});

export const GroupsNavigator = createStackNavigator({
    Group: {screen: Groups}
});

export const ContactsNavigator = createStackNavigator({
    Contact: {screen: Contacts}
});

export const SettingsNavigator = createStackNavigator({
    Setting: {screen: Settings}
});