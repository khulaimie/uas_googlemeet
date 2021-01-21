import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Sidebar from '../comp/Sidebar';
import Main from './Main';
import JoinCode from './JoinCode';

const sidebarDrawer = () => <Sidebar />
const Drawer = createDrawerNavigator();
export class DrawerNavigation extends React.Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Main" drawerContent={sidebarDrawer} >
        <Drawer.Screen name="Main" component={Main} />
      </Drawer.Navigator>
    );
  }
}

const Stack = createStackNavigator();
export class StackNavigation extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Drawer" screenOptions={() => ({headerShown: false})}>
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
        <Stack.Screen name="JoinCode" component={JoinCode} />
      </Stack.Navigator>
    )
  }
}

export default class Index extends Component {
  render() {
    return (
      <StackNavigation />
    );
  }
}