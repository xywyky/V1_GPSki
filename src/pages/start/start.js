import React from "react";
import { View, Text, Image } from 'react-native';
import { styles } from "./start.style";
import  logo  from '../../../assets/img.png'
import {routes} from "../../router";
import { ButtonFactory} from "../../components";

const StartPage = ({ navigation }) => {

    const buttonFactory = new ButtonFactory();
    return (

            <View style={styles.homePageContainer}>

                <Image style={styles.logo} source={logo} />
                <View style={styles.topContentContainer}>

                <Text style={styles.descriptionText}>
                    Don't get lost on the ski slopes
                </Text>
                </View>

                <View style={{
                    position: 'absolute',
                    bottom: 80,
                    right: 30,
                    zIndex: 2
                }}>
                    {buttonFactory.createTextButton("Next ",
                        () => navigation.navigate(routes.login)
                    )}
                </View>
            </View>

    )
}

export default StartPage

