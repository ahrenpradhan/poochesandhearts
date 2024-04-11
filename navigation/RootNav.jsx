import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignInScreen from "../containers/SignIn";
import SignUpScreen from "../containers/SignUp";
import ExploreScreen from "../containers/Explore";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LoggedOutNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="sign_in" component={SignInScreen} />
      <Stack.Screen name="sign_up" component={SignUpScreen} />
    </Stack.Navigator>
  );
};
const LoggedInNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.tabBarLabelStyle,
        headerTitleStyle: styles.headerTitle,
      }}
    >
      <Tab.Screen
        name="explore"
        component={ExploreScreen}
        options={{ title: "Explore" }}
      />
      <Tab.Screen
        name="match"
        component={ExploreScreen}
        options={{
          title: "Matches",
        }}
      />
      <Tab.Screen
        name="chat"
        component={ExploreScreen}
        options={{
          title: "Chat",
          headerTitle: "Messages",
        }}
      />
      <Tab.Screen
        name="profile"
        component={ExploreScreen}
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
const RootNav = () => {
  const logged_in = useSelector((state) => state.auth.logged_in);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={logged_in ? "logged_in" : "logged_out"}
      >
        {logged_in ? (
          <Stack.Screen name="logged_in" component={LoggedInNav} />
        ) : (
          <Stack.Screen name="logged_out" component={LoggedOutNav} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = {
  headerTitle: {
    textTransform: "uppercase",
  },
  tabBarLabelStyle: {
    textTransform: "uppercase",
  },
};

export default RootNav;
