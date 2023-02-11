import {Text, View,} from 'react-native'

import {ButtonFactory} from "../../components";
import React from 'react'
import { routes } from '../../router/routes';
import { styles } from './itinerary.style';
import { useItinerary } from './itinerary.logic';
import {MobileLayout} from "../../layout";


const ItineraryPage = ({ navigation }) => {

    return (
        <MobileLayout navigation={navigation}>

            <View style={styles.loginPageContainer}>
                <Text>test 2</Text>
            </View>
        </MobileLayout>
    )
}

export default ItineraryPage
