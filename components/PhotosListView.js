import React, { useState, useEffect } from 'react';
import {
    FlatList,
    StyleSheet,
    View,
    ActivityIndicator,
    SafeAreaView
} from 'react-native';
import { getPhotosList } from '../api/index';
import { PhotoView } from './PhotoView';

export const PhotosListView = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dataSource, setDataSource] = useState([]);

    useEffect(async () => {
        const data = await getPhotosList();
        setDataSource(data);
        setIsLoading(false);
    }, []);

    const { container, safeAreaStyle, rowStyles, flatListStyles } = styles;

    return (
        <View style={container}>
            {isLoading ? (
                <ActivityIndicator size="large" animating />
            ) : (
                    <SafeAreaView style={safeAreaStyle}>
                        <FlatList
                            data={dataSource}
                            numColumns={3}
                            horizontal={false}
                            renderItem={PhotoView}
                            keyExtractor={(item) => item.id}
                            columnWrapperStyle={rowStyles}
                            contentContainerStyle={flatListStyles}
                        />
                    </SafeAreaView>
                )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#000',
    },
    safeAreaStyle: {
        width: '95%',
        height: '100%',
        alignSelf: 'center'
    },
    rowStyles: {
        justifyContent: 'space-between'
    },
    flatListStyles: {
        flexDirection: 'column',
        width: '100%',
        height: 'auto',
    }
});
