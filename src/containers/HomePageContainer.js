import React, { Component } from 'react'
import { connect } from 'react-redux'

import { LayoutContainer } from './';

export class HomePageContainer extends Component {
	render() {
		return (
			<LayoutContainer>
				<h1 className="text-center"> Welcome to App! </h1>
			</LayoutContainer>
		)
	}
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
