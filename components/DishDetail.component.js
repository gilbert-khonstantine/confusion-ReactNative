/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react';
import { Text, View, ScrollView, Modal, Button, PanResponder, Alert } from 'react-native';
import { Card, Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite, postComment } from '../redux/actions/ActionCreators';
import { CommentForm } from './CommentForm.component';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    favorites: state.favorites,
  };
};
const mapDispatchToProps = dispatch => ({
  postFavorite: (dishId) => dispatch(postFavorite(dishId)),
  postComment: (comment) => dispatch(postComment(comment)),
});
Icon.loadFont();

function RenderDish(props) {
  const dish = props.dish;
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }
  const recognizeDrag = ({ moveX, moveY, dx, dy }) => {
    if (dx < -200)
      return 'Favorite';
    else if (dx > 200)
      return 'Comment';
    else
      return false;
  }

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (e, gestureState) => {
      return true;
    },
    onPanResponderEnd: (e, gestureState) => {
      console.log("pan responder end", gestureState);
      if (recognizeDrag(gestureState) === 'Favorite')
        Alert.alert(
          'Add Favorite',
          'Are you sure you wish to add ' + dish.name + ' to favorite?',
          [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'OK', onPress: () => { props.favorite ? console.log('Already favorite') : props.onPress() } },
          ],
          { cancelable: false }
        );
      else if (recognizeDrag(gestureState) === 'Comment')
        Alert.alert(
          'Add Comment',
          'Do you wish to add any comment?',
          [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'OK', onPress: () => { setShowModal(!showModal) } },
          ],
          { cancelable: false }
        );
      return true;
    }
  })


  if (dish != null) {
    return (
      <Animatable.View animation="fadeInDown" duration={2000} delay={1000}  {...panResponder.panHandlers}>
        <Card featuredTitle={dish.name} image={{ uri: baseUrl + dish.image }}>
          <Text style={{ margin: 10 }}>{dish.description}</Text>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
          }}>
            <Icon
              name={props.favorite ? 'favorite' : 'favorite-border'}
              type="font-awesome"
              color="#f50"
              size={24}
              onPress={() =>
                props.favorite ? console.log('Already favorite') : props.onPress()
              }
            />
            <Icon
              name={'edit'}
              type="font-awesome"
              color="#f50"
              size={24}
              onPress={() => {
                return setShowModal(!showModal)
              }
              }
            />
          </View>
          <Modal animationType={"slide"} transparent={false}
            visible={showModal}
          >
            <CommentForm toggleModal={toggleModal} dishId={props.dishId} postComment={props.postComment} />
          </Modal>
        </Card>
      </Animatable.View>
    );
  } else {
    return <View />;
  }
}

function renderCommentItem(props) {
  return (
    <View key={props.id} style={{ margin: 10 }}>
      <Text style={{ fontSize: 14 }}>{props.comment}</Text>
      <Rating imageSize={10} readonly startingValue={props.rating} style={{ paddingVertical: 10, paddingRight: 260 }} />
      <Text style={{ fontSize: 12 }}>
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
        return (renderCommentItem(comment));
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
    this.setState({ favourites: this.state.favourites.concat(dishId) });
    this.props.postFavorite(dishId);
  }

  render() {
    const dishId = this.props.navigation.getParam('dishId', '');
    return (
      <ScrollView>
        <RenderDish
          dishId={dishId}
          dish={this.props.dishes.dishes[+dishId]}
          favorite={this.props.favorites.some(el => el === dishId)}
          onPress={() => this.markFavouriteDish(dishId)}
          postComment={this.props.postComment}
        />
        <Animatable.View animation="fadeInUp" duration={2000} delay={1000}>
          <RenderComments
            comments={this.props.comments.comments.filter(
              comment => comment.dishId === dishId,
            )}
          />
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);
