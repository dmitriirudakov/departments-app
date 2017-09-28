import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Layout } from './';

export class HomePage extends Component {
	render() {
		return (
			<Layout>
				<h1 className="text-center"> Welcome to App! </h1>
			</Layout>
		)
	}
}

export default connect()(HomePage)
