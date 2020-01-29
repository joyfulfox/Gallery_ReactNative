import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Home } from './components/home';
import { Picture } from './components/picture';

export default function App() {
	return (
		<Router>
			<Scene key="root">
				<Scene key="home" component={Home} title="Home" initial={true} />
				<Scene key="picture" component={Picture} title="Picture" />
			</Scene>
		</Router>
	);
}