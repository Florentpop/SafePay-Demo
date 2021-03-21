import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import ProfileScreen from "./ProfileScreen";
import GetStarted from "./GetStartedScreen";
import Select from "./OptionScreen";
import LogInScreen from "./LogInScreen";
import SignUpScreen from "./SignUpScreen";
import Details from "./TransactionDetailScreen";
import SummaryScreen from "./SummaryScreen";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
//const GetStarted = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#00B0FF",

        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: "Updates",
        tabBarColor: "#00B0FF",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#00B0FF",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    {/*
    <Tab.Screen
      name="Explore"
      component={ExploreStackScreen}
      options={{
        tabBarLabel: "Explore",
        tabBarColor: "#00B0FF",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
    */}
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        //backgroundColor: "#00A571",
        shadowColor: "#fff",
        elevation: 0,
      },
      headerTintColor: "#00B0FF",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontWeight: "200",
        fontSize: 25,
      },
    }}
  >
  <HomeStack.Screen
  name="LogInScreen"
  options={{ headerShown: false }}
  component={LogInScreen}
/>
<HomeStack.Screen
  name="SignUpScreen"
  options={{ headerShown: false }}
  component={SignUpScreen}
/>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "SafePay Escrow",

        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={40}
            color="#000000"
            backgroundColor="#fff"
            marginLeft={10}
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),

        headerRight: () => (
          <Icon.Button
            name="person-circle-outline"
            size={40}
            color="#000000"
            backgroundColor="#fff"
            marginRight={10}
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          ></Icon.Button>
        ),
      }}
    />

    <HomeStack.Screen
      name="GetStarted"
      options={{ headerShown: false }}
      component={GetStarted}
    />
    <HomeStack.Screen name="Select" component={Select} />

    <HomeStack.Screen name="Details" component={Details} />

    <HomeStack.Screen name="Summary" component={SummaryScreen} />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1f65ff",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={28}
            backgroundColor="#1f65ff"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#694fad",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={28}
            backgroundColor="#694fad"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </ProfileStack.Navigator>
);

{
  /*const ExploreStackScreen = ({ navigation }) => (
  <ExploreStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#d02860",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    {/* <ExploreStack.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={28}
            backgroundColor="#d02860"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    /> *
  </ExploreStack.Navigator>
);*/
}
