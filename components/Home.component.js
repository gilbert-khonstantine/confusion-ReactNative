/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import {DISHES} from '../shared/dishes';
import {LEADERS} from '../shared/leaders';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};
const RenderItem = props => {
  const item = props.item;
  if (item != null) {
    return (
      <Card
        featuredTitle={item.name}
        featuredSubtitle={item.designation}
        image={{uri: baseUrl + item.image}}>
        <Text style={{margin: 10}}>{item.description}</Text>
      </Card>
    );
  }
  return <Text />;
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: this.props.dishes.dishes,
      leaders: this.props.leaders.leaders,
      comments: this.props.comments.comments,
      promotions: this.props.promotions.promos,
    };
  }

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <ScrollView>
        <RenderItem item={this.state.dishes.filter(dish => dish.featured)[0]} />
        <RenderItem
          item={this.state.promotions.filter(promo => promo.featured)[0]}
        />
        <RenderItem
          item={this.state.leaders.filter(leader => leader.featured)[0]}
        />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(Home);
