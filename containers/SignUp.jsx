import {Button, Pressable, StyleSheet, Text, View} from "react-native";
import {TextInput} from "../components/units/index.";

const SignUpScreen = ({navigation}) => {
    const handleLocal = {
        signup: async () => {},
        routeToSignInScreen: () => navigation.replace("logged_out", {screen: "sign_in"}),
    }
    return (
        <View style={styles.container}>
            <Text>Sign Up screen</Text>
            <TextInput label="Name" placeholder="Ahren Pradhan"/>
            <TextInput label="Email" placeholder='ahrenpradhan@gmail.com'/>
            <TextInput label="Phone" placeholder='9560490133'/>
            <TextInput label="Password" secureTextEntry placeholder='********'/>
            <TextInput label="Confirm Password" secureTextEntry placeholder='********'/>
            <View style={styles.signupBtnWrapper}>
                <Button
                    title="Sign Up"
                    style={styles.signupBtn}
                    onPress={handleLocal.signup}
                />
            </View>
            <View style={styles.signinWrapper}>
                <Text>Already have an account. </Text>
                <Pressable onPress={handleLocal.routeToSignInScreen}>
                    <Text style={styles.signUpText}>Sign In</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    signupBtnWrapper: {
        width: "100%",
        padding: 10,
    },
    signupBtn: {
        width: "100%",
        height: 40,
    },
    signinWrapper: {
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpText: {
        color: "blue",
    },
});

export default SignUpScreen;
