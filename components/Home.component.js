/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './Loading.component';

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
  if (props.isLoading) {
    return (
      <Loading />
    );
  }
  else if (props.err) {
    return (
      <View>
        <Text>{props.err}</Text>
      </View>
    );
  }
  else {
    if (item != null) {
      return (
        <Card
          featuredTitle={item.name}
          featuredSubtitle={item.designation}
          image={{ uri: baseUrl + item.image }}>
          <Text style={{ margin: 10 }}>{item.description}</Text>
        </Card>
      );
    }
    else {
      return (<View></View>);
    }
  }
}


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
        <RenderItem item={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} isLoading={this.props.dishes.isLoading} err={this.props.dishes.err} />
        <RenderItem item={this.props.promotions.promos.filter((promo) => promo.featured)[0]} isLoading={this.props.promotions.isLoading} err={this.props.promotions.err} />
        <RenderItem item={this.props.leaders.leaders.filter((leader) => leader.featured)[0]} isLoading={this.props.leaders.isLoading} err={this.props.leaders.errMess} />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(Home);
