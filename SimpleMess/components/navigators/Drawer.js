import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { BottomTabNavigator } from './BottomTab.js';
import { SettingsNavigator } from './ScreenStack.js';

const DrawerNavigator = createDrawerNavigator({
    Profile: BottomTabNavigator,
    Settings: SettingsNavigator
});

const Drawer = createAppContainer(DrawerNavigator);

export default Drawer;