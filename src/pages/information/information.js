import React from 'react'
import {View, Text, ImageBackground, TextInput, Image} from 'react-native';

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
            <Image style={{

                width: 100,
                height: 100,
                marginTop: 20,
            }} source={require('../../../assets/img.png')}/>

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

            <View style={styles.back}>

                <Text style={styles.title2}> Select your level </Text>
                <View style={styles.containerLigne}>
                    <View style={styles.containerColonne}>
                        <Image style={styles.image} source={require('../../../assets/beginner.png')}/>
                        <Text style={styles.textb} > Beginner </Text>

                    </View>
                    <View style={styles.containerColonne}>
                            <Image style={styles.image} source={require('../../../assets/intermedier.png')}/>
                        <Text style={styles.textb} > Intermediate </Text>
                    </View>
                </View>
                <View style={styles.containerColonne2}>
                    <Image style={styles.image} source={require('../../../assets/expert.png')}/>
                    <Text style={styles.textb}> Expert </Text>

                </View>
            </View>


            {buttonFactory.createTextButton(
                "Valider",
                () => navigation.navigate(routes.home),
                "white",
                "black"

            )
            }
        </View>
    )

}
export default InformationPage
