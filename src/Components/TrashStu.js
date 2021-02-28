import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { firebase } from '../Config/Config'


const TrashStu = ({ id }) => {

    const delStu = () => {
        const stuRef = firebase.database().ref('students').child(id);
        stuRef.remove();
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity onPress={delStu}>
                    <Text style={styles.icon}>Delete <Icon name="trash" size={20} /></Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3C1053FF',
    },
    icon: {
        color: "#DF6589FF",
        fontSize: 20,
        textAlign: 'center',
    }
});

export default TrashStu;