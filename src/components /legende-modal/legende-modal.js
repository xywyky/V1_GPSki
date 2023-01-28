import React, { useState } from 'react'
import {Image, Text, View,Button} from 'react-native';
import { styles } from './legende-modal.style';
import {routes} from "../../router";

const LegendeModal = ({onClose}) => {


    return (
        <View style={styles.modalContainer}>
            <View style={styles.closeContainer}>
            <Button color={"FFF"} title={"X"}  onPress={onClose}/>
            </View>
            <Text style={styles.legendeModalTitle}>Légende </Text>
            <Image style={styles.legendeImage} source={require ('../../../assets/legende.png')}></Image>



        </View>
    )
}

export default LegendeModal