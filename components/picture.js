import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export const Picture = (props) => {
	const img = { uri: props.item.urls.full };
	const { container, itemStyle } = styles;
	return (
		<View style={container}>
			<Image source={img} resizeMode='contain' style={itemStyle} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	itemStyle: {
		width: '100%',
		height: '100%'
	}
})