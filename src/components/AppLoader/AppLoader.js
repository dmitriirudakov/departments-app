import React from 'react';
import { BeatLoader } from 'halogen';
import './AppLoader.css';

const AppLoader = (props) => {
	return <BeatLoader color="#449d44"
		className={"app-loader" + (props.stretch ? " stretch": '')} />
}

export default AppLoader;