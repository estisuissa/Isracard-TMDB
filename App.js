import React from 'react';
import { I18nManager, View, StyleSheet, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { Provider } from "react-redux";
import store from "./redux/store";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home'
import Movies from './screens/Movies';
import MovieDetails from './screens/MovieDetails';
import Favorites from './screens/Favorites';

const Stack = createStackNavigator();

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 140, height: 30 }}
      source={require('./assets/logo.png')}
    />
  );
}


function App() {
  const screenOptions = {
    headerTintColor: '#01b4e4',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: props => <LogoTitle {...props} /> }} />
        <Stack.Screen name="Movies" component={Movies} options={{ title: 'Popolar Movies' }} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} options={{ title: 'Details' }} />
        <Stack.Screen name="Favorites" component={Favorites} />
      </Stack.Navigator>
    </View>
  );
}
export default () => {
  return (
    <Provider store={store}>

      <NavigationContainer >
        <App />
      </NavigationContainer>
    </Provider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,

  }
});