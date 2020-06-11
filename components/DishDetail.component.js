/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, FlatList, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};
Icon.loadFont();

function RenderDish(props) {
  const dish = props.dish;

  if (dish != null) {
    return (
      <Card featuredTitle={dish.name} image={{uri: baseUrl + dish.image}}>
        <Text style={{margin: 10}}>{dish.description}</Text>
        <Icon
          raised
          reverse
          name={props.favorite ? 'favorite' : 'favorite-border'}
          type="font-awesome"
          color="#f50"
          size={24}
          onPress={() =>
            props.favorite ? console.log('Already favorite') : props.onPress()
          }
        />
      </Card>
    );
  } else {
    return <View />;
  }
}

function renderCommentItem(props) {
  return (
    <View key={props.id} style={{margin: 10}}>
      <Text style={{fontSize: 14}}>{props.comment}</Text>
      <Text style={{fontSize: 12}}>{props.rating} Stars</Text>
      <Text style={{fontSize: 12}}>
        {'-- ' + props.author + ', ' + props.date}{' '}
      </Text>
    </View>
  );
}

function RenderComments(props) {
  const comments = props.comments;
  return (
    <Card title="Comments">
      {comments.map(comment => {
        return renderCommentItem(comment);
      })}
    </Card>
  );
}

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: this.props.dishes.dishes,
      comments: this.props.comments.comments,
      favourites: [],
    };
  }

  static navigationOptions = {
    title: 'Dish Details',
  };

  markFavouriteDish(dishId) {
    this.setState({favourites: this.state.favourites.concat(dishId)});
  }

  render() {
    const dishId = this.props.navigation.getParam('dishId', '');
    return (
      <ScrollView>
        <RenderDish
          dish={this.state.dishes[+dishId]}
          favorite={this.state.favourites.some(el => el === dishId)}
          onPress={() => this.markFavouriteDish(dishId)}
        />
        <RenderComments
          comments={this.state.comments.filter(
            comment => comment.dishId === dishId,
          )}
        />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(DishDetail);
