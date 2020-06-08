import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Text, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity } from "react-native";
import axios from 'axios';
import { popularMoviesUrl, imageBaseUrl } from '../utils/strings'
const screenWidth = Math.round(Dimensions.get('window').width);
const widthItem = (screenWidth / 3) - 10;


const Movies = ({ navigation }) => {
    const [popolarMovies, setPopolarMovies] = useState([]);

    useEffect(() => {
        axios.get(popularMoviesUrl)
            .then(({ data: { results } }) => {
                setPopolarMovies(results);
            })
            .catch(err => {
                setError(err.message);
            })
    }, []);


    const renderListItem = (item) => {
        const { title, poster_path } = item;
        const poster_url = `${imageBaseUrl}/${poster_path}`;

        return (
            <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', { item })}>
                <View style={styles.item}>
                    <Image
                        source={{ uri: poster_url }}
                        style={{ width: widthItem, height: 150 }}
                    />
                    <Text numberOfLines={1} style={styles.title} >{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    if (popolarMovies.length == 0) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#01b4e4"></ActivityIndicator>
            </View>)
    }
    return (
        <FlatList
            data={popolarMovies}
            numColumns={3}
            keyExtractor={({ id }) => `'${id}'`}
            renderItem={({ item }) => renderListItem(item)} />
    )

}

export default Movies;

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center'
    },
    item: {
        margin: 5,
        backgroundColor: '#01b4e4'
    },
    title: {
        color: '#FFF',
        padding: 5,
        width: widthItem,
        textAlign: 'center'
    }
});
