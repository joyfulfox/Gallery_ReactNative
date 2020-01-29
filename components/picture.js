import React from 'react';
import {
	Image,
	View
} from 'react-native';

export const Picture = (props) => {

	const img = { uri: props.item.urls.full };
	return (
		<View style={{ justifyContent: 'center', alignItems: 'center' }}>
			<Image source={img} resizeMode='contain' style={{ width: '100%', height: '100%' }} />
		</View>
	);
};
