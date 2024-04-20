import {useDispatch} from "react-redux";
import {StatusBar} from "expo-status-bar";
import {Button, StyleSheet, Text, View} from "react-native";

import {logout} from "../appRedux/features/auth/authSlice";

const ExploreScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const handleLocal = {
        logout: async () => {
            await dispatch(logout());
            navigation.replace("logged_out");
            return null;
        },
    };
    return (
        <View style={styles.container}>
            <Text>We can finally start working on the app</Text>
            <Button title={"Logout"} onPress={handleLocal.logout}/>
            <StatusBar style="auto"/>
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
