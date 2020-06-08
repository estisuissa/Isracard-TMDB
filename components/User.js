import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const User = ({ navigation, userName, userImage, loggedIn }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Wellcome {userName}!</Text>
            <Image style={styles.image} source={userImage}></Image>
            {!loggedIn && <Text style={styles.loginText}>Please log in to continue to the awesomness</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        margin: 5
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 10
    },
    loginText: {
        margin: 20,
        width: 160,
        textAlign: 'center'
    }
});
export default User;