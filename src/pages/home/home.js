import React from "react";
import { View, Text} from 'react-native';
import { styles } from "./home.style";
import { routes } from  '../../router/routes';
import { MobileLayout } from '../../layout'


const HomePage = ({ navigation }) => {
    //On doit ajouter MapBox mais je sais pas comment faire
        return (

            <MobileLayout navigation={navigation}>
            <View style={styles.homePageContainer}>
                <Text style={styles.descriptionText}>
                    We are millions of members exploring and
                    sharing great outdoor trails of orleans
                </Text>
            </View>

            </MobileLayout>

        )
}

export default HomePage

