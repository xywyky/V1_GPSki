import {Button, ImageBackground, TextInput, View} from "react-native";
import React from "react";
import {Text} from "react-native";
import {styles} from "./station.style";
import {getStation} from "./station.logic.js";



const StationPage = ({ navigation }) => {
    const {
        nom,
        adresse,
    } = getStation();
return (
    <View style={styles.profileContainer}>
        <View style={styles.profileTitleContainer}>
            <Text style={{...styles.profileTitle}}>
                Compte
            </Text>
        </View>

        <View style={styles.profileContainerTitleField}>
            <Text style={{...styles.profileTitleTitleField}}>
                Informations de connexion
            </Text>
        </View>

        <View style={styles.profileContainerField}>
            <Text style={{...styles.profileTitleField}}>
                Nom
            </Text>
            <TextInput style={{...styles.profileTextField}}
                       value={nom}
            />
        </View>

    </View>


)
}

export default StationPage
