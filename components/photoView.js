import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export const PhotoView = ({ item }) => {
    const { itemContainer, itemTouchableOpacity, itemImg, itemDescription, itemAuthor } = styles;
    const image = { uri: item.urls.thumb };
    const goToPicture = () => {
        Actions.picture({ item })
    }

    return (
        <View style={itemContainer}>
            <TouchableOpacity onPress={goToPicture} style={itemTouchableOpacity}>
                <Image source={image} style={itemImg} />
            </TouchableOpacity>
            <Text style={itemDescription}>{item.alt_description}</Text>
            <Text style={itemAuthor}>{item.user.username}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        width: 120,
        height: 250,
        paddingTop: 10,
        alignItems: 'center',
    },
    itemTouchableOpacity: {
        width: 120,
        height: 120,
        alignItems: 'center'
    },
    itemImg: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    itemDescription: {
        width: '100%',
        color: '#666',
        marginTop: 5,
    },
    itemAuthor: {
        width: '100%',
        textAlign: 'center',
        color: 'red'
    },
})