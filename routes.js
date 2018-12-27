import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import Favorites from './screens/Favorites';
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import User from './screens/User';
import Options from './screens/Options';

import colors from './utils/colors';

const getTabBarIcon = icon => ({ tintColor }) => (
	<MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
)

const getDrawerIcon = icon => ({ tintColor }) => (
	<MaterialIcons name={icon} size={22} style={{ color: tintColor }} />
)

const ContactsScreens = StackNavigator({
	Contacts: {
		screen: Contacts,
	},
	Profile: {
		screen: Profile,
	},
}, {
	initialRouteName: 'Contacts',
	navigationOptions: {
		tabBarIcon: getDrawerIcon('list'),
	}
})

const FavoritesScreens = StackNavigator({
	Favorites: {
		screen: Favorites,
	},
	Profile: {
		screen: Profile,
	},
},{
	initialRouteName: 'Favorites',
	navigationOptions: {
		tabBarIcon: getDrawerIcon('star'),
	},
})

const UserScreens = StackNavigator({
	User: {
		screen: User,
	},
	Options: {
		screen: Options,
	}
}, {
	initialRouteName: 'User',
	// mode: 'modal',
	navigationOptions: {
		tabBarIcon: getDrawerIcon('person'),
	},
})

TabNavigator({
	Contacts: {
		screen: ContactsScreens,
	},
	Favorites: {
		screen: FavoritesScreens,
	},
	User: {
		screen: UserScreens,
	},
}, {
	initialRouteName: 'Contacts',
	tabBarPosition: 'bottom',
	tabBarOptions: {
		style: {
			backgroundColor: colors.greyLight,
		},
		showLabel: false,
		showIcon: true,
		activeTintColor: colors.blue,
		inactiveTintColor: colors.greyDark,
		renderIndicator: () => null,
	}
})

export default DrawerNavigator({
	Contacts: {
		screen: ContactsScreens,
	},
	FavoritesScreens: {
		screen: FavoritesScreens,
	},
	User: {
		screen: UserScreens,
	}
}, {
	initialRouteName: 'Contacts',
})