import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { StyleSheet, View } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                marginLeft: 30,
                flexDirection: "column",
              }}
            >
              <Text style={styles.title2}>SafePay</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 35 }}>
              <Avatar.Image
                source={require("../assets/profile.jpeg")}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Florent Francis</Title>
                <Caption style={styles.caption}>0235050505</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={"#00B0FF"} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={"#00B0FF"} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bookmark-outline" color={"#00B0FF"} size={size} />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate("BookmarkScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="cog-outline" color={"#00B0FF"} size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate("SettingScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="account-check-outline"
                  color={"#00B0FF"}
                  size={size}
                />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate("SettingScreen");
              }}
            />
          </Drawer.Section>

          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },

  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  title2: {
    fontSize: 25,
    marginTop: 15,
    fontWeight: "bold",
    color: "#00B0FF",
  },
});
