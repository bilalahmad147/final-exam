import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { firebase } from '../Config/Config'

const Job = ({ navigation }) => {

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [cityName, setCityName] = useState('')
    const [phoneNum, setPhoneNum] = useState('')

    const sendCompanyDetail = () => {

        if (phoneNum.length < 11) {
            alert("incorrect number")
            return
        }

        const key = firebase.database().ref('companies').push().key;
        const company = {
            id: key,
            userName: name,
            jobPost: job,
            userCityName: cityName,
            userPhoneNum: phoneNum
        }

        firebase.database().ref('companies/' + key).set(company)

        setName('')
        setCityName('')
        setPhoneNum('')
        setJob('')

    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 2 }}>
                    <Text style={styles.text}><Icon name="info" size={100} /></Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>Company Details</Text>
                </View>
                <View style={{ flex: 6 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Company Name.."
                        value={name}
                        onChangeText={(text) => setName(text)}
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Job Title.."
                        value={job}
                        onChangeText={(text) => setJob(text)}
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
                    <TouchableOpacity onPress={sendCompanyDetail} style={styles.btn}>
                        <Text style={styles.btnText}>Post a Job <Icon name="share" size={20} /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('StudentsDetail') }} style={styles.btn}>
                        <Text style={styles.btnText}>Students List <Icon name="share" size={20} /></Text>
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

export default Job;