import React from "react";
import {View, Image, Text, ImageBackground, Button, Pressable} from 'react-native';
import { styles } from "./home.style";
import { routes } from  '../../router/routes';

import {ButtonFactory, LegendeModal, ListePisteModal} from "../../components";
import { MobileLayout } from '../../layout'
import { carte } from '../../../assets/carte_base.png'
import { useToggle } from '../../hooks/useToggle';

const HomePage = ({ navigation }) => {
    //On doit ajouter MapBox mais je sais pas comment faire
    const buttonFactory = new ButtonFactory();

    const [showLegendeModal, setShowLegendeModal] = useToggle();
    const [showListePisteModal, setShowListePisteModal] = useToggle();


    const [search, setSearch] = React.useState('');
    return (

            <MobileLayout navigation={navigation}>
            <View style={styles.homePageContainer}>
                <ImageBackground source={require ('../../../assets/faux_carte.jpeg')}  style={styles.image}>

                    </ImageBackground>

            </View>

                {(
                    <Pressable style={styles.stylePressable} onPress={() => navigation.navigate(routes.profile)}>

                        <Image  style={styles.styleprofile} source={require('../../../assets/profile-user.png')}/>

                    </Pressable>

                )}

                {showLegendeModal && (
                    <LegendeModal
                        onClose={() => setShowLegendeModal(false)}/>)
                }

                {showListePisteModal && (
                    <ListePisteModal
                        onClose={() => setShowListePisteModal(false)}/>)
                }



                { !showLegendeModal && !showListePisteModal &&( <View style={{
                    position: 'absolute',
                    bottom: 60,
                    right: 10,
                    zIndex: 2
                }}>
                    {buttonFactory.createSubmitButton(
                        "Legende",
                        () => setShowLegendeModal(true)
                    )}
                </View>
                )}
                { !showListePisteModal && !showLegendeModal &&(<View style={{
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    zIndex: 2
                }}>
                    {buttonFactory.createSubmitButton(
                        "Liste des pistes",
                        () => { setShowListePisteModal(true)
                        }
                    )}
                </View>
                )}

            </MobileLayout>

        )
}

export default HomePage

