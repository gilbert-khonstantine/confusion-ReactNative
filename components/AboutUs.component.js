/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';

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
        leftAvatar={{source: {uri: baseUrl + leader.image}}}
      />
    </>
  );
}

function AboutUs(props) {
  console.log(props.leaders);
  console.log(props.leaders.leaders);

  return (
    <ScrollView>
      <Card title={'Our History'}>
        <Text style={{margin: 10}}>
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
      <Card title={'Corporate Leadership'}>
        {props.leaders.leaders.map(leader => {
          return <RenderLeader key={leader.id} leader={leader} />;
        })}
      </Card>
    </ScrollView>
  );
}

export default connect(mapStateToProps)(AboutUs);
