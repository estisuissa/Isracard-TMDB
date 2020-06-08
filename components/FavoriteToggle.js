import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/actions/favorites'

const FavoriteToggle = ({ movie }) => {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites.favorites);
    const isFavorite = !!favorites.find(f => movie.id === f.id);

    const handleClick = () => {
        if (!isFavorite) {
            dispatch(addFavorite(movie))
        } else {
            dispatch(removeFavorite(movie.id))
        }
    }
    return (
        <MaterialIcons name={isFavorite ? 'favorite' : 'favorite-border'} size={24} color='white' onPress={() => handleClick()} />
    )

}
export default FavoriteToggle;
