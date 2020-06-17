/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { Card, Input, CheckBox } from 'react-native-elements';
import * as Keychain from 'react-native-keychain';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import { createBottomTabNavigator } from 'react-navigation-tabs';

Icon.loadFont();

function selectFile(setImageUrl) {
    var options = {
        title: 'Select Image',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };

    ImagePicker.showImagePicker(options, res => {
        if (res.didCancel) {
            console.log('User cancelled image picker');
        } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
        } else {
            let source = res;
            setImageUrl(source.uri);
        }
    });
};

function LoginTab(props) {
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


function RegisterTab(props) {
    const [imageUrl, setImageUrl] = useState('./images/logo.png');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [remember, setRemember] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Retrieve the credentials
                const credentials = await Keychain.getGenericPassword();
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
        <ScrollView>
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
                <Input
                    placeholder="First Name"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(firstName) => setFirstName(firstName)}
                    value={firstName}
                    inputContainerStyle={styles.formInput}
                />
                <Input
                    placeholder="Last Name"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(lastName) => setLastName(lastName)}
                    value={lastName}
                    inputContainerStyle={styles.formInput}
                />
                <Input
                    placeholder="Email"
                    leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                    onChangeText={(email) => setEmail(email)}
                    value={email}
                    inputContainerStyle={styles.formInput}
                />
                <View>
                    <Image
                        source={{ uri: imageUrl }}
                        loadingIndicatorSource={require('./images/logo.png')}
                        style={styles.image}
                    />
                    <Button
                        onPress={() => selectFile(setImageUrl)}
                        title="Select Image For Your Profile"
                        color="#512DA8"
                    />
                </View>
                <CheckBox title="Remember Me"
                    center
                    checked={remember}
                    onPress={() => setRemember(!remember)}
                    inputContainerStyle={styles.formCheckbox}
                />
                <View style={styles.formButton}>
                    <Button
                        onPress={() => handleLogin()}
                        title="Register"
                        color="#512DA8"
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 20,
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    image: {
        margin: 10,
        width: 80,
        height: 60
    },
    formInput: {
        margin: 20
    },
    formCheckbox: {
        margin: 20,
        backgroundColor: null
    },
    formButton: {
        margin: 60
    }
});

const Login = createBottomTabNavigator({
    Login: LoginTab,
    Register: RegisterTab
}, {
    tabBarOptions: {
        activeBackgroundColor: '#9575CD',
        inactiveBackgroundColor: '#D1C4E9',
        activeTintColor: '#ffffff',
        inactiveTintColor: 'gray'
    }
});

export default Login;
