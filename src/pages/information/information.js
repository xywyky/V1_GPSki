import React from 'react'
import {View, Text, ImageBackground, TextInput} from 'react-native';

import { routes } from  '../../router/routes';
import {styles} from "./information.style";
import { ButtonFactory } from '../../components/button/button.factory';
import {useInformation} from "./information.logic";


const InformationPage = ({ navigation }) => {

    const buttonFactory = new ButtonFactory();

    const {
        prenom,
        nom,
        niveau,
        error,
        setError,
        setNom,
        setPrenom,
        setNiveau,
    } = useInformation();

    return (

        <View style={styles.container}>
            <Text style={styles.title}> Information Page</Text>

            <TextInput
                onChangeText={setNom}
                style={styles.InputBox}
                value={nom}
                placeholder="Nom"
            />

            <TextInput
                onChangeText={setPrenom}
                style={styles.InputBox}
                value={prenom}
                placeholder="Prenom"
            />


            {buttonFactory.createTextButton(
                 "Retour",
                () => navigation.navigate(routes.home),
                "white",
                "black"

                )
            }

            {buttonFactory.createTextButton(
                "novice",
                () => navigation.navigate(routes.home),
                "green"
            )
            }
            {buttonFactory.createTextButton(
                "amateur",
                () => navigation.navigate(routes.home),
                "blue"
            )
            }
            {buttonFactory.createTextButton(
                "confirmé",
                () => navigation.navigate(routes.home),
                "red"
            )
            }

            {buttonFactory.createTextButton(
                "expert",
                () => navigation.navigate(routes.home),
                "black"
            )
            }


        </View>
    )

}
export default InformationPage
