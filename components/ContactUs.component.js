/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Linking, Button } from 'react-native';
import { Card } from 'react-native-elements';

export default function ContactUs(props) {
    return (
        <View>
            <Card
                title={"Contact Information"}>
                <Text style={{ margin: 10 }}>
                    Our Address{"\n\n"}

                    121, Clear Water Bay Road{"\n"}
                    Clear Water Bay, Kowloon{"\n"}
                    HONG KONG{"\n"}
                    Tel: +852 1234 5678{"\n"}
                    Fax: +852 8765 4321{"\n"}
                    Email:confusion@food.net{"\n"}
                </Text>
                <Button onPress={() => Linking.openURL('mailto:confusion@food.net')}
                    title="Email Us" color="#512DA8" />
            </Card>
        </View >
    )
}