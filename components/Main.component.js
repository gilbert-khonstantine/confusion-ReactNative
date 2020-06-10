/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import Menu from './Menu.component';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetail.component';
import Home from './Home.component';
import ContactUs from './ContactUs.component';
import AboutUs from './AboutUs.component';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

const MenuNavigator = createStackNavigator({
    Menu: {
        screen: Menu, navigationOptions: () => ({
            headerStyle: {
                backgroundColor: '#512DA8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff',
            },
        }),
    },
    Dishdetail: {
        screen: DishDetail, navigationOptions: () => ({
            headerStyle: {
                backgroundColor: '#512DA8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff',
            },
        }),
    },
}
);

const MenuNav = createAppContainer(MenuNavigator);

const HomeNavigator = createStackNavigator({
    Home: {
        screen: Home, navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#512DA8',
            },
            headerTitleStyle: {
                color: '#fff',
            },
            headerTintColor: '#fff',
        }),
    },
});


const HomeNav = createAppContainer(HomeNavigator);

const ContactNavigator = createStackNavigator({
    "Contact Us": {
        screen: ContactUs,
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#512DA8',
            },
            headerTitleStyle: {
                color: '#fff',
            },
            headerTintColor: '#fff',
        }),
    }
});

const ContactNav = createAppContainer(ContactNavigator);

const AboutNavigator = createStackNavigator({
    "About Us": {
        screen: AboutUs,
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#512DA8',
            },
            headerTitleStyle: {
                color: '#fff',
            },
            headerTintColor: '#fff',
        }),
    }
});


const AboutNav = createAppContainer(AboutNavigator);

const MainNavigator = createDrawerNavigator({
    Home:
    {
        screen: HomeNav,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
        },
    },
    AboutUs:
    {
        screen: AboutNav,
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us',
        },
    },
    Menu:
    {
        screen: MenuNav,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
        },
    },
    ContactUs:
    {
        screen: ContactNav,
        navigationOptions: {
            title: 'Contact Us',
            drawerLabel: 'Contact Us',
        },
    },
}, {
    drawerBackgroundColor: '#D1C4E9',
});

const MainNav = createAppContainer(MainNavigator);

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null,
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <MainNav />
            </View>
        );
    }
}

export default Main;