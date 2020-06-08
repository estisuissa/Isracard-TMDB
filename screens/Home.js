import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { useSelector } from 'react-redux'
import User from '../components/User'
import Login from '../components/Login'

const noUser = require('../assets/empty_user.png')

const Home = ({ navigation }) => {

  const user = useSelector(state => state.user.user);
  const userImage = user ? { uri: user.photoUrl } : noUser;
  const name = user ? user.name : 'Strenger';

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <User userName={name} userImage={userImage} loggedIn={!!user}></User>

      </View>
      {user &&
        <View style={styles.moviesButton}>
          <Button title='Popolar Movies' onPress={() => navigation.navigate('Movies')}></Button>
        </View>
      }
      {!user &&
        <View style={styles.footer}>
          <Login></Login>
        </View>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  user: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center"
  },

  moviesButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30
  }
});

export default Home;