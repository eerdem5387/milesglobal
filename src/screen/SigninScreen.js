import React, { useState } from "react";
import { SafeAreaView, Text, Button, Image, TextInput, StyleSheet, View, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default SigninScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.background}>
            <Image
                style={{ width: 250, height: 250, }}
                source={require("../assest/money1.png")}
            />
            <View style={{ gap: 10 }}>
                <View style={styles.inputarea}>
                    <Image
                        source={require("../assest/mail.png")}
                        style={styles.icon}
                    />
                    <TextInput
                        style={styles.textinput}
                        placeholder='E-Mail Adress'
                    />
                </View>
                <View style={styles.inputarea}>
                    <Image
                        source={require("../assest/password.png")}
                        style={styles.icon}
                    />
                    <TextInput
                        style={styles.textinput}
                        placeholder='Password'
                        secureTextEntry={true}
                    />
                </View>
            </View>
            <TouchableHighlight style={styles.button} onPress={() => navigation.navigate("HomeScreen")}>
                <Text style={styles.buttontext}>Login</Text>
            </TouchableHighlight>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50
    },
    inputarea: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center"
    },
    icon: {
        width: 25,
        height: 25,
    },
    textinput: {
        width: 310,
        height: 50,
        padding: 10,
        backgroundColor: "lightgray",
        borderRadius: 10,
    },
    button: {
        width: 350,
        height: 50,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    buttontext: {
        color: "white",
    }
})