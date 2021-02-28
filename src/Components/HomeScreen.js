import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';


const HomeScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}><Icon name="university" size={100} /></Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>Recruitment System</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('StudentLogin')} style={styles.btn}>
                        <Text style={styles.btnText}><Icon name="plus" size={20} /> Student Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AdminLogin')} style={styles.btn}>
                        <Text style={styles.btnText}><Icon name="plus" size={20} /> Admin Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Job')} style={styles.btn}>
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
        color: "#3C1053FF",
        paddingTop: 30,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
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