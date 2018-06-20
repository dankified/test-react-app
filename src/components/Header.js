import React, {Component} from 'react';
import Menu from './Menu';

export default class Header extends Component {
	render() {
		return (
			<div id="header">
				<p>Header</p>
				<Menu />
			</div>
		)
	}
}