/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import Menu from './Menu.component';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetail.component';
import Home from './Home.component';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: DishDetail },
},
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#512DA8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff',
            },
        },
    }
);

const MenuNav = createAppContainer(MenuNavigator);

const HomeNavigator = createStackNavigator({
    Home: { screen: Home },
}, {
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8',
        },
        headerTitleStyle: {
            color: '#fff',
        },
        headerTintColor: '#fff',
    }),
});


const HomeNav = createAppContainer(HomeNavigator);

const MainNavigator = createDrawerNavigator({
    Home:
    {
        screen: HomeNav,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
        },
    },
    Menu:
    {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
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