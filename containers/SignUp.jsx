import {Button, Pressable, StyleSheet, Text, View} from "react-native";
import {TextInput} from "../components/units/index";

import useUserApi from "../hooks/useUserApi";

const SignUpScreen = ({navigation}) => {
    const {signUp:api_signUp} = useUserApi();

    const handleSignUp  = async () => {
        const data = {
            name: 'Ahren Pradhan',
            email: 'ahrenpradhan@gmail.com',
            phone: '9560490133',
            password: '123456',
            confirmPassword: '123456'
        }
        const {result, error, status} = await api_signUp(data);
        if(status){
            console.log('Sign up successful')
            handleRouteToSignInScreen();
        }
        console.log(result, error)
    };
    const handleRouteToSignInScreen= () => navigation.replace("logged_out", {screen: "sign_in"})
    
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
                    onPress={handleSignUp}
                />
            </View>
            <View style={styles.signinWrapper}>
                <Text>Already have an account. </Text>
                <Pressable onPress={handleRouteToSignInScreen}>
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
