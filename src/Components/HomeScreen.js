import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 1, padding: 30, marginTop: 30, alignItems: 'center' }}>
                    {/* <Image style={{ width: 300, height: 170 }} source={require('./imgs/HomeScreenImg.png')} /> */}
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('StudentLogin')} style={styles.btn}>
                        <Text style={styles.btnText}><Icon name="plus" size={20} /> Student Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AdminLogin')} style={styles.btn}>
                        <Text style={styles.btnText}><Icon name="plus" size={20} /> Admin Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CompanyLogin')} style={styles.btn}>
                        <Text style={styles.btnText}><Icon name="plus" size={20} /> Company Login</Text>
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

export default HomeScreen;