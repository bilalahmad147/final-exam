import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { firebase } from '../Config/Config'


const StudentLogin = ({ navigation }) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.navigate('MakeProfile', { user: user })
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })

        setEmail("");
        setPassword("");
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}><Icon name="ambulance" size={100} /></Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>Login To Proceed</Text>
                </View>
                <View style={{ flex: 3 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter User Email.."
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Password.."
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity onPress={() => onLoginPress()} style={styles.btn}>
                        <Text style={styles.btnText}><Icon name="plus" size={20} /> Login</Text>
                    </TouchableOpacity>
                    <View style={styles.footerView}>
                        <Text style={styles.footerText}>Don't have an account? <Text onPress={() => navigation.navigate('StudentSignup')} style={styles.footerLink}>Sign up</Text></Text>
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
    footerView: {
        flex: 1,
        alignItems: "center",
        margin: 20
    },
    footerText: {
        fontSize: 18,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 20,
    }
});

export default StudentLogin;