import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const MakeProfile = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('StudentProfile')} style={styles.btn}>
                        <Text style={styles.btnText}><Icon name="plus" size={20} /> Make Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CompanyLogin')} style={styles.btn}>
                        <Text style={styles.btnText}><Icon name="plus" size={20} /> Companies List</Text>
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
        textAlign: 'center',
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

export default MakeProfile;