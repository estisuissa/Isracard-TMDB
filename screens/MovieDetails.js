import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, Dimensions } from "react-native";
import { imageBaseUrl } from '../utils/strings'
import FavoriteToggle from '../components/FavoriteToggle';

const screenWidth = Dimensions.get('window').width;

const MovieDetails = ({ route }) => {
    const movie = route.params.item;
    const { title, poster_path, overview, backdrop_path, vote_average, release_date } = movie;
    const poster = `${imageBaseUrl}${poster_path}`;
    const backdrop = `${imageBaseUrl}${backdrop_path}`;
    const released_year = new Date(release_date).getFullYear()

    return (
        <View>
            <ImageBackground source={{ uri: backdrop }} style={styles.backdrop} imageStyle={{ opacity: 0.3 }} >
                <View style={styles.overlay}>
                    <Image style={styles.posterImage} source={{ uri: poster }}></Image>
                    <View style={styles.details}>
                        <Text style={styles.vote} >{vote_average}</Text>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.date}>{release_date} </Text>

                    </View>
                    <FavoriteToggle style={styles.favorite} movie={movie}></FavoriteToggle>
                </View>

            </ImageBackground>
            <View style={styles.overview}>
                <Text style={styles.overviewTitle}>Overview</Text>
                <Text style={styles.overviewContent}>{overview}</Text>
            </View>

        </View>
    )
}

export default MovieDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        padding: 25
    },
    posterImage: {
        width: 100,
        height: 150,
        borderRadius: 10
    },
    backdrop: {
        height: screenWidth / 1.8,
        backgroundColor: 'rgba(52, 57, 74, 0.84)'
    },
    details: {
        flex: 1,
        paddingLeft: 20
    },
    title: {
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 20,
        color: '#fff'
    },
    date: {
        color: '#fff'
    },
    vote: {
        padding: 10,
        width: 40,
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
        backgroundColor: '#01b4e4',
        borderRadius: 10,
        borderBottomLeftRadius: 0
    },
    favorite: {
        position: 'absolute'
    },
    overview: {
        margin: 5
    },
    overviewTitle: {
        fontSize: 20,
        margin: 5,
        color: '#01b4e4',
    },
    overviewContent: {
        fontSize: 16,
        margin: 5

    }
});