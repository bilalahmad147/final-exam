import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { firebase } from '../Config/Config'


const AdminDashboard = ({ navigation }) => {

    const [students, setStudents] = useState([])
    const [companies, setCompanies] = useState([])

    const getStudentsList = () => {
        firebase.database().ref('students').once('value').then(snapshot => {
            const dataRef = Object.values(snapshot.val())
            setStudents(dataRef)
        });
    }

    const getCompaniesList = () => {
        firebase.database().ref('companies').once('value').then(snapshot => {
            const dataRef = Object.values(snapshot.val())
            setCompanies(dataRef)
        });
    }


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}><Icon name="tasks" size={100} /></Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>Admin DashBoard</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={getCompaniesList} style={styles.btn}>
                        <Text style={styles.btnText}><Icon name="plus" size={20} /> Companies List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={getStudentsList} style={styles.btn}>
                        <Text style={styles.btnText}><Icon name="plus" size={20} /> Students List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.btn}>
                        <Text style={styles.btnText}> Home Screen</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 6 }}>
                <Text style={styles.text}>Companies List</Text>
                    <View>
                        {
                            companies.map((ind, key) => {
                                return <View style={styles.view1} key={key}>
                                    <Text style={styles.text1}>Company Name: {ind.userName}</Text>
                                    <Text style={styles.text1}>Job Title: {ind.jobPost}</Text>
                                    <Text style={styles.text1}>CityName: {ind.userCityName}</Text>
                                    <Text style={styles.text1}>PhoneNumber: {ind.userPhoneNum}</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.icon}><Icon name="trash" size={20} /></Text>
                                    </TouchableOpacity>
                                </View>
                            })
                        }
                    </View>
                    <Text style={styles.text}>Students List</Text>
                    <View>
                        {
                            students.map((ind, key) => {
                                return <View style={styles.view1} key={key}>
                                    <Text style={styles.text1}>Name: {ind.userName}</Text>
                                    <Text style={styles.text1}>Age : {ind.userAge}</Text>
                                    <Text style={styles.text1}>Department: {ind.userDepart}</Text>
                                    <Text style={styles.text1}>Education: {ind.userEdu}</Text>
                                    <Text style={styles.text1}>Cgpa: {ind.userCgpa}</Text>
                                    <Text style={styles.text1}>CityName: {ind.userCityName}</Text>
                                    <Text style={styles.text1}>PhoneNumber: {ind.userPhoneNum}</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.icon}><Icon name="trash" size={20} /></Text>
                                    </TouchableOpacity>
                                </View>
                            })
                        }
                    </View>
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
    icon: {
        color: "#DF6589FF",
        fontSize: 20,
        textAlign: 'center',
    }
    ,
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

export default AdminDashboard;