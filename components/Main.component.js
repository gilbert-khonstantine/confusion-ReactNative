/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import Menu from './Menu.component';
import DishDetail from './DishDetail.component';
import Home from './Home.component';
import ContactUs from './ContactUs.component';
import AboutUs from './AboutUs.component';
import Favorites from './Favorites.component';
import { Reservation } from './Reservation.component';
import { connect } from 'react-redux';
import { View, ScrollView, Image, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import {
  fetchComments,
  fetchDishes,
  fetchLeaders,
  fetchPromos,
} from '../redux/actions/ActionCreators';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from './Login.component';
Icon.loadFont();

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainNav />
      </View>
    );
  }
}

const LoginNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <Icon
          name="menu"
          color="white"
          size={24}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
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

const LoginNav = createAppContainer(LoginNavigator);

const MenuNavigator = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <Icon
          name="menu"
          color="white"
          size={24}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
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
    screen: DishDetail,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#512DA8',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
    }),
  },
});

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require('./images/logo.png')}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MenuNav = createAppContainer(MenuNavigator);


const FavoritesNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <Icon
          name="menu"
          color="white"
          size={24}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
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

const FavoritesNav = createAppContainer(FavoritesNavigator);


const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <Icon
          name="menu"
          color="white"
          size={24}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
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
  'Contact Us': {
    screen: ContactUs,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <Icon
          name="menu"
          color="white"
          size={24}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
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

const ContactNav = createAppContainer(ContactNavigator);

const AboutNavigator = createStackNavigator({
  'About Us': {
    screen: AboutUs,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <Icon
          name="menu"
          color="white"
          size={24}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
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

const AboutNav = createAppContainer(AboutNavigator);

const ReservationNavigator = createStackNavigator({
  'Reservation': {
    screen: Reservation,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <Icon
          name="menu"
          color="white"
          size={24}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
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

const ReservationNav = createAppContainer(ReservationNavigator);

const MainNavigator = createDrawerNavigator(
  {
    Login: {
      screen: LoginNav,
      navigationOptions: {
        title: 'Login',
        drawerLabel: 'Login',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon name="account-box" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Home: {
      screen: HomeNav,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon name="home" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    AboutUs: {
      screen: AboutNav,
      navigationOptions: {
        title: 'About Us',
        drawerLabel: 'About Us',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon name="info" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Menu: {
      screen: MenuNav,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon name="list" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Favorites: {
      screen: FavoritesNav,
      navigationOptions: {
        title: 'My Favorites',
        drawerLabel: 'My Favorites',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon name="favorite" type="font-awesome" size={22} color={tintColor} />
        ),
      },
    },
    ContactUs: {
      screen: ContactNav,
      navigationOptions: {
        title: 'Contact Us',
        drawerLabel: 'Contact Us',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon name="phone" type="font-awesome" size={22} color={tintColor} />
        ),
      },
    },
    Reservation: {
      screen: ReservationNav,
      navigationOptions: {
        title: 'Reservation',
        drawerLabel: 'Reservation',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon name="restaurant" type="font-awesome" size={22} color={tintColor} />
        ),
      },
    },
  },
  {
    drawerBackgroundColor: '#D1C4E9',
    contentComponent: CustomDrawerContentComponent,
  },
);

const MainNav = createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
