import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text>We can finally start working on the app</Text>
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

export default ExploreScreen;
