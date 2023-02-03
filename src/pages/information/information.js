import React from 'react'
import {View, Text, Image, Pressable} from 'react-native';
import { MobileLayout } from '../../layout'

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

        <MobileLayout navigation={navigation}>


        <View style={styles.container}>
            {/*
            le bouton profile est un pressable qui fonctionne bizarement
           */}

            <View style={styles.containerTop}>
            <Text style={{
                ...styles.textd,
                ...styles.textd_color1
            }}>Welcome !</Text>

                <Pressable style={styles.stylePressable} onPress={() => navigation.navigate(routes.profile)}>

                    <Image  style={styles.styleprofile} source={require('../../../assets/profile-user.png')}/>

                </Pressable>

            <Text style={{
                ...styles.textd,
                ...styles.textd_color2
            }}>Hugo</Text>
            </View>
            <View style={styles.back}>
                <Text style={styles.title2}> Select your level :</Text>

                <View style={styles.containerTop2}>
                    <View style={styles.containerLigne}>
                        <Pressable style={styles.containerColonne} onPress={() => alert("Beginner")}>

                            <Image style={styles.image} source={require('../../../assets/beginner.png')} />
                            <Text style={styles.textb} > Beginner </Text>
                        </Pressable>
                        <Pressable style={styles.containerColonne} onPress={() => alert("Intermediate")}>
                                <Image style={styles.image} source={require('../../../assets/intermedier.png')}/>
                            <Text style={styles.textb} > Intermediate </Text>
                        </Pressable>
                    </View>
                    <Pressable style={styles.containerColonne2} onPress={() => alert("Expert")}>
                        <Image style={styles.image2} source={require('../../../assets/expert.png')}/>
                        <Text style={styles.textb}> Expert </Text>

                    </Pressable>
                </View>
            </View>

        </View>

        </MobileLayout>
    )

}
export default InformationPage
