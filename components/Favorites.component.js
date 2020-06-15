/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { Loading } from './Loading.component';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        favorites: state.favorites,
    }
}

function RenderFavItem(props) {
    let item = props.favorite;
    return (
        < ListItem
            key={item.id}
            title={item.name + '\n'}
            subtitle={item.description}
            hideChevron={true}
            leftAvatar={{ source: { uri: baseUrl + item.image } }} />
    );
}

class Favorites extends Component {
    constructor(props) {
        super(props);
        console.log("FAVORITES");
        console.log(this.props);
        let favDetails = this.props.dishes.dishes.filter(dish => this.props.favorites.some(el => el === dish.id));
        console.log(favDetails);
    }
    render() {
        return (
            <View>
                {this.props.dishes.dishes.filter(dish => this.props.favorites.some(el => el === dish.id)).map(item => {
                    return (<RenderFavItem favorite={item} key={item.id} />)
                })}
            </View>
        );
    }
}

export default connect(mapStateToProps)(Favorites);

