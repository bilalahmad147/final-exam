import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { firebase } from '../Config/Config'

const CompanyLogin = ({ navigation }) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [edu, setEdu] = useState('')
    const [depart, setDepar] = useState('')
    const [cgpa, setCgpa] = useState('')
    const [cityName, setCityName] = useState('')
    const [phoneNum, setPhoneNum] = useState('')

    const sendStudentData = () => {

        if (Number(age) < 16 || phoneNum.length < 11) {
            alert("Under 16 or incorrect number")
            return
        }

        const key = firebase.database().ref('students').push().key;
        const student = {
            id: key,
            userName: name,
            userAge: age,
            userEdu: edu,
            userDepart: depart,
            userCgpa: cgpa,
            userCityName: cityName,
            userPhoneNum: phoneNum
        }

        firebase.database().ref('students/' + key).set(student)
        navigation.navigate('SubmitDetail')

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
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Education like undergraduate or postgraduate.."
                        value={edu}
                        onChangeText={(text) => setEdu(text)}
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Department name.."
                        value={depart}
                        onChangeText={(text) => setDepar(text)}
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Cgpa till now.."
                        value={cgpa}
                        onChangeText={(text) => setCgpa(text)}
                        autoCapitalize="none"
                    />
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
                    <TouchableOpacity onPress={sendStudentData} style={styles.btn}>
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
        color: "#3C1053FF",
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
        backgroundColor: "#DF6589FF",
        padding: 9,
        margin: 5,
        borderRadius: 10,
    },
    btnText: {
        color: "#3C1053FF",
        fontSize: 20,
        textAlign: 'center',
    }
});

export default CompanyLogin;