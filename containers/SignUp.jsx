import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SignUp screen</Text>
      <Button
        title="Sign In"
        onPress={() => navigation.replace("logged_out", { screen: "sign_in" })}
      />
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

export default SignUpScreen;
