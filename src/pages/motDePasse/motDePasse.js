import {Text, TextInput, View, Image, Alert, Pressable} from 'react-native'

import { ButtonFactory} from "../../components";
import React from 'react'
import { routes } from '../../router/routes';
import { styles } from './motDePasse.style';
import { useLogin } from './motDePasse.logic';


const MotDePasse = ({ navigation }) => {
    const {
        email,
        password,
        error,
        setError,
        setEmail,
        setPassword,
    } = useLogin();
    const buttonFactory = new ButtonFactory();
    return (
        <View style={styles.loginPageContainer}>
            <View style={styles.topContentContainer}>



                <View style={styles.loginInputContainer}>

                    <Text style={{
                        ...styles.colorizedText,
                        ...styles.loginTitle
                    }}>
                        Mot de Passe oublié ?
                    </Text>
                    <Text style={{
                        ...styles.colorizedText2,
                    }}>
                        Entrez votre adresse e-mail
                    </Text>

                    {error && (
                        <Text style={{ color: "red" }}>Invalid credentials</Text>
                    )}

                    <View style={styles.ContainerTextInput}>

                        <Image source={require('../../../assets/Message.png')}/>
                        <Image style={styles.line_V} source={require('../../../assets/Line_deco_v.png')}/>
                        <TextInput
                            onChangeText={setEmail}
                            style={styles.loginInputBox}
                            value={email}
                            placeholder="Adresse e-mail"
                        />
                    </View>
                    <Image style={styles.line} source={require('../../../assets/Line_deco.png')}/>



                </View>


            </View>


            <View style={styles.container}>
                <View style={styles.buttonContainer}>

                    <Pressable  style={styles.stylePressable} onPress={() => alert("finir vérife")}>

                        <Image source={require('../../../assets/Arrow-Right.png')}/>

                    </Pressable>
                </View>
            </View>



        </View>


    )
}

export default MotDePasse
