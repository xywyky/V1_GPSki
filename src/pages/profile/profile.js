import {Button, ImageBackground, TextInput, View} from "react-native";
import React from "react";
import {Text} from "react-native";
import {styles} from "./profile.style";
import {getProfile} from "./profile.logic.js";
import {routes} from "../../router";
import {ButtonFactory} from "../../components";


const ProfilePage = ({ navigation }) => {
    const {
        login,
        email,
        password,
        prenom,
        nom,
        tel
    } = getProfile();
    const buttonFactory = new ButtonFactory();
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
                E-mail
            </Text>
            <TextInput style={{...styles.profileTextField}}
                       value={email}
            />
        </View>

        <View style={styles.profileContainerField}>
            <Text style={{...styles.profileTitleField}}>
                Nom d'utilisateur
            </Text>
            <TextInput style={{...styles.profileTextField}}
                       value={login}
            />
        </View>

        <View style={styles.profileContainerField}>
            <Text style={{...styles.profileTitleField}}>
                Mot de passe
            </Text>
            <TextInput style={{...styles.profileTextField}}
                       value={password}
                       secureTextEntry
            />
        </View>

        <View style={styles.profileContainerTitleField}>
            <Text style={{...styles.profileTitleTitleField}}>
                Informations générales
            </Text>
        </View>

        <View style={styles.profileContainerField}>
            <Text style={{...styles.profileTitleField}}>
                Prénom
            </Text>
            <TextInput style={{...styles.profileTextField}}
                       value={prenom}
            />
        </View>

        <View style={styles.profileContainerField}>
            <Text style={{...styles.profileTitleField}}>
                Nom
            </Text>
            <TextInput style={{...styles.profileTextField}}
                       value={nom}
            />
        </View>

        <View style={styles.profileContainerField}>
            <Text style={{...styles.profileTitleField}}>
                Numero de télehpone
            </Text>
            <TextInput style={{...styles.profileTextField}}
                       value={tel}
            />
        </View>
        <View style={styles.buttonContainer}>
            {buttonFactory.createSubmitButton(
                "Déconnexion",
                () => {
                    navigation.navigate(routes.login);
                }
            )}
        </View>
    </View>


)
}

export default ProfilePage
