import React from "react";
import {View, Text, ImageBackground} from 'react-native';
import { styles } from "./home.style";
import { routes } from  '../../router/routes';
import { ButtonFactory} from "../../components ";
import { MobileLayout } from '../../layout'
import { carte } from '../../../assets/carte_base.png'


const HomePage = ({ navigation }) => {
    //On doit ajouter MapBox mais je sais pas comment faire
    const buttonFactory = new ButtonFactory();

    return (

            <MobileLayout navigation={navigation}>
            <View style={styles.homePageContainer}>
                <ImageBackground source={require ('../../../assets/carte_base.png')}  style={styles.image}>

                    </ImageBackground>
            </View>

                <View style={{
                    position: 'absolute',
                    bottom: 130,
                    right: 10,
                    zIndex: 2
                }}>
                    {buttonFactory.createSubmitButton(
                        "Je sais pas pour le moment",
                        () => {
                            navigation.navigate(routes.register);
                        }
                    )}
                </View>

                <View style={{
                    position: 'absolute',
                    bottom: 70,
                    right: 10,
                    zIndex: 2
                }}>
                    {buttonFactory.createSubmitButton(
                        "Je sais pas pour le moment",
                        () => {
                            navigation.navigate(routes.register);
                        }
                    )}
                </View>
            </MobileLayout>

        )
}

export default HomePage

