import {useDispatch} from "react-redux";
import {Button,Pressable, StyleSheet, Text, View} from "react-native";

import {login} from "../appRedux/features/auth/authSlice";
import {TextInput} from "../components/units/index.";

const SignInScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const handleLocal = {
        login: async () => {
            await dispatch(login());
            navigation.replace("logged_in");
            return null;
        },
        routeToSignUpScreen: () =>
            navigation.replace("logged_out", {screen: "sign_up"}),
    };
    return (
        <View style={styles.container}>
            <Text>Sign In</Text>
            <TextInput label="Email or Phone" placeholder='abc@def.com'/>
            <TextInput label="Password" secureTextEntry placeholder='********'/>
            <View style={styles.signinBtnWrapper}>
                <Button style={styles.signinBtn} title="Sign in" onPress={handleLocal.login}/>
            </View>
            <View style={styles.signUpWrapper}>
                <Text>Dont have an account. </Text>
                <Pressable onPress={handleLocal.routeToSignUpScreen} >
                    <Text style={styles.signUpText}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    signinBtnWrapper: {
        width: "100%",
        padding: 10,
    },
    signinBtn: {
        width: "100%",
        height: 40,
    },
    signUpWrapper: {
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpText: {
        color: "blue",
    }
});

export default SignInScreen;
