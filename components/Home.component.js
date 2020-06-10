/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';

const RenderItem = (props) => {
    const item = props.item;
    if (item != null) {
        return (
            <Card
                featuredTitle={item.name}
                featuredSubtitle={item.designation}
                image={require('./images/uthappizza.png')}>
                <Text style={{ margin: 10 }}>{item.description}
                </Text>
            </Card>
        )
    }
    return (<Text></Text>);
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            leaders: LEADERS,
            comments: COMMENTS,
            promotions: PROMOTIONS,
        };
    }

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <ScrollView>
                <RenderItem item={this.state.dishes.filter((dish) => dish.featured)[0]} />
                <RenderItem item={this.state.promotions.filter((promo) => promo.featured)[0]} />
                <RenderItem item={this.state.leaders.filter((leader) => leader.featured)[0]} />
            </ScrollView>
        );
    }
}

export default Home;