/* eslint-disable prettier/prettier */
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

function Menu(props) {
    const renderMenuItem = ({ item, index }) => {
        return (
            <ListItem
                style={styles.title}
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                leftAvatar={{ source: require('./images/uthappizza.png') }}
            />
        );
    };

    return (
        <FlatList
            data={props.dishes}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

const styles = StyleSheet.create({
    title: {
        marginTop: 20
    }
});

export default Menu;