import React from 'react';
import {
	Avatar,
	ShellBar,
	ShellBarItem
} from "@ui5/webcomponents-react";
import { useHistory } from 'react-router';

import { Switch, Route, Redirect } from "react-router-dom";
import Home from './screens/Home';
import Detail from './screens/Detail';

import "@ui5/webcomponents-icons/dist/add.js";

const MyApp = () => {

	const history = useHistory();
	const handleLogoClick = () => {
	history.push("./");
	};

	return (
		<div>
			<ShellBar
				logo={<img src="https://th.bing.com/th/id/R.288a4683a631d76907661129ca745b61?rik=drbTgZxr%2fkVsVA&riu=http%3a%2f%2fbackgroundcheckall.com%2fwp-content%2fuploads%2f2017%2f12%2fmicrosoft-logo-transparent-background-10.png&ehk=%2fK7XyyiXbUBQjG5omMBI%2fSFcAo5FqN117HSesN4ZbA4%3d&risl=&pid=ImgRaw&r=0" 
							alt="microsoft logo" />}
				profile={<Avatar><img src="https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg" alt="profile" /></Avatar>}
				primaryTitle="My React App with UI5 Fiori Elements"
				onLogoClick={handleLogoClick}
			>
				<ShellBarItem icon="add" text="Add" />
			</ShellBar>
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/detail" component={Detail} />
				<Redirect from="/" to="/home" />
			</Switch>
		</div>
	)
}

export default MyApp;