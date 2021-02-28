import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { firebase } from '../Config/Config'


const MakeProfile = ({ navigation }) => {

    const [userData, setUserData] = useState([])

    const getUserData = () => {

        firebase.database().ref('companies').once('value').then(snapshot => {
            const dataRef = Object.values(snapshot.val())
            setUserData(dataRef)
        });

    }


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('StudentProfile')} style={styles.btn}>
                        <Text style={styles.btnText}><Icon name="plus" size={20} /> Make Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={getUserData} style={styles.btn}>
                        <Text style={styles.btnText}><Icon name="plus" size={20} /> Companies List</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 6 }}>
                    {
                        userData.map((ind, key) => {
                            return <View style={styles.view1} key={key}>
                                <Text style={styles.text1}>Company Name: {ind.userName}</Text>
                                <Text style={styles.text1}>CityName: {ind.userCityName}</Text>
                                <Text style={styles.text1}>PhoneNumber: {ind.userPhoneNum}</Text>
                            </View>
                        })
                    }
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
    },
    view1: {
        backgroundColor: '#3C1053FF',
        padding: 9,
        borderRadius: 10,
        margin: 10,
    },
    text1: {
        color: "#DF6589FF",
        fontSize: 20,
        textAlign: 'center',
    },
});

export default MakeProfile;