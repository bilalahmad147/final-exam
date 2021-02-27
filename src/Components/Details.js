import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Details = () => {

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={styles.btnText}>Details Screen</Text>
            </View>
            <StatusBar style="auto" />
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
        backgroundColor: "red",
        padding: 9,
        margin: 5,
        borderRadius: 10,
    },
    btnText: {
        color: "black",
        fontSize: 20,
        textAlign: 'center',
    }
});

export default Details;