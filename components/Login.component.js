/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Card, Input, CheckBox } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import * as Keychain from 'react-native-keychain';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Retrieve the credentials
                const credentials = await Keychain.getGenericPassword();
                console.log("CALLED");
                console.log(credentials);
                if (credentials) {
                    setUsername(credentials.username);
                    setPassword(credentials.password);
                    console.log(
                        'Credentials successfully loaded for user ' + credentials.username
                    );
                } else {
                    console.log('No credentials stored');
                }
            } catch (error) {
                console.log("Keychain couldn't be accessed!", error);
            }
            console.log(username);
            console.log(password);
        };
        fetchData();
    })



    const handleLogin = async () => {
        if (remember) {
            Keychain.setGenericPassword(username, password);
            console.log("suc");
        }
        else {
            Keychain.resetGenericPassword();
            setUsername('');
            setPassword('');
        }
    };

    return (
        <View style={styles.container}>
            <Input
                placeholder="Username"
                leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                onChangeText={(username) => setUsername(username)}
                value={username}
                inputContainerStyle={styles.formInput}
            />
            <Input
                placeholder="Password"
                leftIcon={{ type: 'font-awesome', name: 'key' }}
                onChangeText={(password) => setPassword(password)}
                value={password}
                inputContainerStyle={styles.formInput}
            />
            <CheckBox title="Remember Me"
                center
                checked={remember}
                onPress={() => setRemember(!remember)}
                inputContainerStyle={styles.formCheckbox}
            />
            <View style={styles.formButton}>
                <Button
                    onPress={() => handleLogin()}
                    title="Login"
                    color="#512DA8"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 20,
    },
    formInput: {
        margin: 40
    },
    formCheckbox: {
        margin: 40,
        backgroundColor: null
    },
    formButton: {
        margin: 60
    }
});

export default Login;