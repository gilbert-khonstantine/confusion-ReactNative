/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './Loading.component';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
  return {
    leaders: state.leaders,
  };
};

function RenderLeader(props) {
  let leader = props.leader;
  return (
    <>
      <ListItem
        key={leader.id}
        title={leader.name + '\n'}
        subtitle={leader.description}
        hideChevron={true}
        leftAvatar={{ source: { uri: baseUrl + leader.image } }}
      />
    </>
  );
}

function History(props) {
  return (
    <Text style={{ margin: 10 }}>
      Started in 2010, Ristorante con Fusion quickly established itself as a
      culinary icon par excellence in Hong Kong. With its unique brand of
      world fusion cuisine that can be found nowhere else, it enjoys
      patronage from the A-list clientele in Hong Kong. Featuring four of
      the best three-star Michelin chefs in the world, you never know what
      will arrive on your plate the next time you visit us.
      {'\n\n'}
  The restaurant traces its humble beginnings to The Frying Pan, a
  successful chain started by our CEO, Mr. Peter Pan, that featured for
  the first time the world's best cuisines in a pan.
    </Text>
  )
}

function AboutUs(props) {
  if (props.leaders.isLoading) {
    return (<ScrollView>
      <History />
      <Card
        title='Corporate Leadership'>
        <Loading />
      </Card>
    </ScrollView>)
  }
  else if (props.leaders.errMess) {
    return (
      <ScrollView>
        <History />
        <Card
          title='Corporate Leadership'>
          <Text>{this.props.leaders.errMess}</Text>
        </Card>
      </ScrollView>
    );
  }
  else {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Card title={'Our History'}>
            <Text style={{ margin: 10 }}>
              Started in 2010, Ristorante con Fusion quickly established itself as a
              culinary icon par excellence in Hong Kong. With its unique brand of
              world fusion cuisine that can be found nowhere else, it enjoys
              patronage from the A-list clientele in Hong Kong. Featuring four of
              the best three-star Michelin chefs in the world, you never know what
              will arrive on your plate the next time you visit us.
          {'\n\n'}
          The restaurant traces its humble beginnings to The Frying Pan, a
          successful chain started by our CEO, Mr. Peter Pan, that featured for
          the first time the world's best cuisines in a pan.
        </Text>
          </Card>
        </Animatable.View>

        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Card title={'Corporate Leadership'}>
            {props.leaders.leaders.map(leader => {
              return <RenderLeader key={leader.id} leader={leader} />;
            })}
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}
export default connect(mapStateToProps)(AboutUs);
