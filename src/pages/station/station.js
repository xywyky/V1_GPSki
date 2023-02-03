import {Button, Image, ImageBackground, TextInput, View} from "react-native";
import React from "react";
import {Text} from "react-native";
import {styles} from "./station.style";
import {getStation} from "./station.logic.js";
import meteo from "../../../assets/station/meteo.png";



const StationPage = ({ navigation }) => {
    const {
        nom,
        adresse,
        site,
        difficultes,
        carte,
        frequentation,
        problemes,
        horaires,
        enneigement
    } = getStation();
return (
    <View style={styles.loginPageContainer}>
        <View style={styles.topContentContainer}>
            <View style={styles.loginInputContainer}>

                <TextInput style={{...styles.colorizedText,...styles.loginTitle}}
                           value={nom}/>

                <TextInput style={{...styles.colorizedText,...styles.loginTitle}}
                           value={adresse}/>

            </View>
            <View style={styles.profileContainerField}>

                <TextInput style={{...styles.profileTextField}}
                           value={site}
                />
                <TextInput style={{...styles.profileTextField}}
                           value={horaires}
                />

            </View>

            <View style={styles.profileContainerField}>
                <TextInput style={{...styles.profileTextField}}
                           value={problemes}
                />
            </View>

            <View style={styles.profileContainerField}>
                <TextInput style={{...styles.profileTextField}}
                           value={difficultes}
                />
            </View>

            <View style={styles.profileContainerField}>
                <TextInput style={{...styles.profileTextField}}
                           value={enneigement}
                />
                <Image style={styles.stationMeteo} source={meteo} />
            </View>

            <View style={styles.profileContainerField}>
                <TextInput style={{...styles.profileTextField}}
                           value={carte}
                />
            </View>
        </View>
    </View>


)
}

export default StationPage
