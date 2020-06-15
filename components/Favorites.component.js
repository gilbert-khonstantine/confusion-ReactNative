/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { Loading } from './Loading.component';
import { baseUrl } from '../shared/baseUrl';
import { removeFavorite } from '../redux/actions/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        favorites: state.favorites,
    }
}

const mapDispatchToProps = dispatch => ({
    removeFavorite: (dishId) => dispatch(removeFavorite(dishId))
})

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

function Favorites(props) {




    if (props.dishes.isLoading) {
        return (
            <Loading />
        );
    }
    else if (props.dishes.err) {
        return (
            <View>
                <Text>{props.dishes.err}</Text>
            </View>
        );
    }
    else {
        return (
            <ScrollView>
                {props.dishes.dishes.filter(dish => props.favorites.some(el => el === dish.id)).map(item => {
                    var swipeoutBtns = [
                        {
                            text: 'Delete',
                            type: 'delete',
                            onPress: () => props.removeFavorite(item.id)
                        }
                    ]
                    return (
                        <Swipeout right={swipeoutBtns} autoClose={true}>
                            <RenderFavItem favorite={item} key={item.id} />
                        </Swipeout>)
                })}
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

