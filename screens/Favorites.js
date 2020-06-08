import React from "react";
import { ScrollView, View, Text, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { useSelector } from 'react-redux'
import { imageBaseUrl } from '../utils/strings'

const screenWidth = Math.round(Dimensions.get('window').width);
const widthItem = (screenWidth / 3) - 10;


const Favorites = ({ navigation }) => {

    const favorites = useSelector(state => state.favorites.favorites);
    const renderListItem = (item) => {
        const { title, poster_path } = item;
        const poster_url = `${imageBaseUrl}/${poster_path}`;

        return (
            <TouchableOpacity onPress={() => navigation.navigate('MovieInfo', { item })}>
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

    return (
        <ScrollView>
            <FlatList
                data={favorites}
                numColumns={3}
                keyExtractor={({ id }) => `'${id}'`}
                renderItem={({ item }) => renderListItem(item)} />
        </ScrollView>

    )

}

export default Favorites;

const styles = StyleSheet.create({
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
