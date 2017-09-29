import React, { Component } from 'react'
import { connect } from 'react-redux'

export class HomePage extends Component {
	render() {
		return (
			<div>
				<h1 className="text-center"> Welcome to App! </h1>
			</div>
		)
	}
}

export default connect()(HomePage)
