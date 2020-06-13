/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput, Switch, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating, Input } from 'react-native-elements';

Icon.loadFont();

export function CommentForm(props) {
    const [author, setAuthor] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(3);

    const onSubmit = (value) => {
        let formInput = {
            'author': author,
            'comment': comment,
            'rating': rating,
            'dishId': props.dishId,
        };
        props.postComment(formInput);
        resetForm();
        props.toggleModal();
    };


    const resetForm = () => {
        setAuthor('');
        setComment('');
    };

    return (
        <ScrollView>
            <View style={{ marginTop: 20 }}>
                <Rating
                    type='star'
                    ratingCount={5}
                    imageSize={60}
                    showRating
                    onFinishRating={(rating) => setRating(rating)}
                />
            </View>
            <View style={styles.formRow}>
                <Input
                    onChangeText={(text) => setAuthor(text)}
                    placeholder='Author'
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                />
            </View>

            <View style={styles.formRow}>
                <Input
                    placeholder='Comments'
                    onChangeText={(text) => setComment(text)}
                    leftIcon={
                        <Icon name='comment' size={24} />
                    }
                />
            </View>

            <View style={styles.button}>
                <Button title="Submit"
                    onPress={() => { onSubmit(); }}
                    color="#512DA8" />
            </View>

            <View style={styles.button}>
                <Button title="Cancel"
                    onPress={() => { resetForm(); props.toggleModal(); }}
                    color="#512DA8" />
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 15,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 8,
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
})

