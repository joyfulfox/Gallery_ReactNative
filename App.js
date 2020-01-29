import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { PhotosListView } from './components/PhotosListView';
import { Picture } from './components/Picture';

export default function App() {
	return (
		<Router>
			<Scene key="root">
				<Scene key="PhotosListView" component={PhotosListView} title="PhotosListView" initial={true} />
				<Scene key="picture" component={Picture} title="Picture" />
			</Scene>
		</Router>
	);
}