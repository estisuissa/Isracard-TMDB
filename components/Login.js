import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import * as Google from 'expo-google-app-auth';
import { androidClientId ,androidStandaloneAppClientId} from '../utils/strings';
import { setUser } from '../redux/actions/user'
import { useDispatch } from 'react-redux';

const Login = ({ navigation }) => {

    const dispatch = useDispatch()

    const loginWithFacebook = () => {
        console.log('TODO::loginWithFacebook');

    }

    async function signInWithGoogleAsync() {
        try {
            const result = await Google.logInAsync({
                androidClientId,
                androidStandaloneAppClientId,
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                return result;
            } else {
                return { message:'cancelled' };
            }
        } catch (e) {
            return { message:e.message };
        }
    }
    
    const loginWithGoogle = async () => {
        console.log('loginWithGoogle');
        const result =  await signInWithGoogleAsync();
        const { user, message } =result
        if (user) {
            dispatch(setUser(user));
        } else {
            alert(`SignIn with Google failed. Message: ${message}`)
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <FontAwesome.Button disabled name="facebook" backgroundColor="#3b5998" onPress={loginWithFacebook}>Login with Facebook</FontAwesome.Button>
            </View>
            <View style={styles.button}>
                <FontAwesome.Button name="google" backgroundColor="#DA4B3E" onPress={loginWithGoogle}>Or with Google</FontAwesome.Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        margin: 5,
    }
});
export default Login;