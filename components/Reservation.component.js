/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, Switch, Button, Modal } from 'react-native';
import { Card } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';


export function Reservation(props) {
    const onSubmit = (value) => {
        console.log(JSON.stringify(this.state));
        toggleModal();
    }
    const [guests, setGuests] = useState(1);
    const [smoking, setSmoking] = useState(false);
    const [date, setDate] = useState('');
    const [showModal, setShowModal] = useState(false);

    const resetForm = () => {
        setGuests(1);
        setSmoking(false);
        setDate('');
        setShowModal(false);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <ScrollView>
            <View style={styles.formRow}>
                <Text style={styles.formLabel}>Number of Guests</Text>
                <Picker
                    style={styles.formItem}
                    selectedValue={guests}
                    onValueChange={(itemValue, itemIndex) => setGuests(itemValue)}>
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                </Picker>
            </View>

            <View style={styles.formRow}>
                <Text style={styles.formLabel}>Smoking? </Text>
                <Switch
                    style={styles.formItem}
                    value={smoking}
                    trackColor='#512DA8'
                    onValueChange={(value) => setSmoking(value)} />
            </View>

            <View style={styles.formRow}>
                <Text style={styles.formLabel}>Date </Text>
                <DatePicker
                    style={{ flex: 2, marginRight: 20 }}
                    date={date}
                    format=''
                    mode="datetime"
                    placeholder="select date and Time"
                    minDate="2017-01-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys. 
                    }}
                    onDateChange={(value) => { setDate(value) }}
                />
            </View>

            <View style={styles.formRow}>
                <Button title="Confirm Reservation"
                    onPress={() => onSubmit()}
                    color="#512DA8"
                    accessibilityLabel="Learn more about this purple button" />
            </View>

            <Modal animationType={"slide"} transparent={false}
                visible={showModal}
            // onDismiss={() => toggleModal()}
            // onRequestClose={() => toggleModal()}
            >
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>Your Reservation</Text>
                    <Text style={styles.modalText}>Number of Guests: {guests}</Text>
                    <Text style={styles.modalText}>Smoking?: {smoking ? 'Yes' : 'No'}</Text>
                    <Text style={styles.modalText}>Date and Time: {date}</Text>
                    <Button
                        onPress={() => { resetForm(); }}
                        color="#512DA8"
                        title="Close"
                    />
                </View>
            </Modal>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 8
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#512DA8',
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
})
