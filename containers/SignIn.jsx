import { useDispatch } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import { login } from "../appRedux/features/auth/authSlice";

const SignInScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLocal = {
    login: async () => {
      await dispatch(login());
      navigation.replace("logged_in");
    },
    routeToSignUpScreen: () =>
      navigation.replace("logged_out", { screen: "sign_up" }),
  };
  return (
    <View style={styles.container}>
      <Text>Sign In screen</Text>
      <Button title="Sign Up" onPress={handleLocal.routeToSignUpScreen} />

      <Button title="Log in" onPress={handleLocal.login} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignInScreen;
