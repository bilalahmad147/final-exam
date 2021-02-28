import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, ScrollView, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { firebase } from '../Config/Config'

const CompanyLogin = ({ navigation }) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [selectedValue, setSelectedValue] = useState("O+");
    const [cityName, setCityName] = useState('')
    const [phoneNum, setPhoneNum] = useState('')

    const sendDonorData = () => {

        if (Number(age) < 18 || phoneNum.length < 11) {
            alert("Under 18 or incorrect number")
            return
        }

        const key = firebase.database().ref('users').push().key;
        const users = {
            id: key,
            userName: name,
            userAge: age,
            userBloodGroup: selectedValue,
            userCityName: cityName,
            userPhoneNum: phoneNum
        }

        switch (selectedValue) {
            case 'O+':
                firebase.database().ref('users/O+/' + key).set(users)
                navigation.navigate('SubmitDetail')
                break;
            case 'A+':
                firebase.database().ref('users/A+/' + key).set(users)
                navigation.navigate('SubmitDetail')
                break;
            case 'B+':
                firebase.database().ref('users/B+/' + key).set(users)
                navigation.navigate('SubmitDetail')
                break;
            case 'AB+':
                firebase.database().ref('users/AB+/' + key).set(users)
                navigation.navigate('SubmitDetail')
                break;
            case 'O-':
                firebase.database().ref('users/O-/' + key).set(users)
                navigation.navigate('SubmitDetail')
                break;
            case 'A-':
                firebase.database().ref('users/A-/' + key).set(users)
                navigation.navigate('SubmitDetail')
                break;
            case 'B-':
                firebase.database().ref('users/B-/' + key).set(users)
                navigation.navigate('SubmitDetail')
                break;
            case 'AB-':
                firebase.database().ref('users/AB-/' + key).set(users)
                navigation.navigate('SubmitDetail')
                break;
            default:
                console.log('default');
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 2 }}>
                    <Text style={styles.text}><Icon name="info" size={100} /></Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>Enter Details</Text>
                </View>
                <View style={{ flex: 6 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Name.."
                        value={name}
                        onChangeText={(text) => setName(text)}
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Age.."
                        value={age}
                        onChangeText={(text) => setAge(text)}
                        autoCapitalize="none"
                    />
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: '100%' }}
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="O+" value="O+" />
                        <Picker.Item label="A+" value="A+" />
                        <Picker.Item label="B+" value="B+" />
                        <Picker.Item label="AB+" value="AB+" />
                        <Picker.Item label="O-" value="O-" />
                        <Picker.Item label="A-" value="A-" />
                        <Picker.Item label="B-" value="B-" />
                        <Picker.Item label="AB-" value="AB-" />
                    </Picker>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter CityName.."
                        value={cityName}
                        onChangeText={(text) => setCityName(text)}
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Phone Number like 03001122333"
                        value={phoneNum}
                        onChangeText={(text) => setPhoneNum(text)}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity onPress={sendDonorData} style={styles.btn}>
                        <Text style={styles.btnText}>Submit Detail <Icon name="share" size={20} /></Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="auto" />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        color: "red",
        paddingTop: 30,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: "red",
        padding: 9,
        margin: 5,
        borderRadius: 10,
    },
    btnText: {
        color: "white",
        fontSize: 20,
        textAlign: 'center',
    }
});

export default CompanyLogin;