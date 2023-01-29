import React, { useState } from 'react'
import {Image, Text, View,Button, FlatList} from 'react-native';
import { styles } from './liste-piste-modal.style';
import { faker } from '@faker-js/faker';
import {routes} from "../../router";

const ListePisteModal = ({onClose}) => {



    const [name, setNames]  =
        useState([
            { id: 1,color: '🟩' ,name: faker.address.streetName() },
            { id: 2,color: "🟩" , name: faker.address.streetName() },
            { id: 3,color: "🟩" , name: faker.address.streetName() },
            { id: 4,color: "🟩" , name: faker.address.streetName() },
            { id: 5,color: "🟦" , name: faker.address.streetName() },
            { id: 6,color: "🟦" , name: faker.address.streetName() },
            { id: 7,color: "🟦" , name: faker.address.streetName() },
            { id: 8,color: "🟦" , name: faker.address.streetName() },
            { id: 9,color: "🟦" , name: faker.address.streetName() },
            { id: 10,color: "🟦" , name: faker.address.streetName() },
            { id: 12,color: "🟦" , name: faker.address.streetName() },
            { id: 13,color: "🟦" , name: faker.address.streetName() },
            { id: 14,color: "🟦" , name: faker.address.streetName() },
            { id: 15,color: "🟦" , name: faker.address.streetName() },
            { id: 16,color: "🟦" , name: faker.address.streetName() },
            { id: 17,color: "🟦" , name: faker.address.streetName() },
            { id: 18,color: "🟥" , name: faker.address.streetName() },
            { id: 19,color: "🟥" , name: faker.address.streetName() },
            { id: 21,color: "🟥" , name: faker.address.streetName() },
            { id: 22,color: "🟥" , name: faker.address.streetName() },
            { id: 23,color: "🟥" , name: faker.address.streetName() },
            { id: 24,color: "🟥" , name: faker.address.streetName() },
            { id: 25,color: "⬛️" , name: faker.address.streetName() },
            { id: 26,color: "⬛️" , name: faker.address.streetName() },
            { id: 27,color: "⬛️" , name: faker.address.streetName() },
            { id: 28,color: "⬛️" , name: faker.address.streetName() }]);



    return (
        <View style={styles.modalContainer}>
            <View style={styles.closeContainer}>
            <Button color={"FFF"} title={"X"}  onPress={onClose}/>
            </View>

            <Text style={styles.legendeModalTitle}>Liste des pistes </Text>
            <FlatList
                data={name}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Text>{item.color}  {item.name}</Text>
                )}
            />




        </View>
    )
}

export default ListePisteModal