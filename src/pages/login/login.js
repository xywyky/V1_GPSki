import {Text, TextInput, View, Image, Alert} from 'react-native'

import { ButtonFactory} from "../../components";
import React from 'react'
import { routes } from '../../router/routes';
import { styles } from './login.style';
import { useLogin } from './login.logic';


const LoginPage = ({ navigation }) => {
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
                        Se connecter
                    </Text>
                    <Text style={{
                        ...styles.colorizedText2,
                    }}>
                        Bienvenue
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

                <View style={styles.loginInputContainer}>
                    <View style={styles.ContainerTextInput}>

                        <Image source={require('../../../assets/mdp.png')}/>
                        <Image style={styles.line_V} source={require('../../../assets/Line_deco_v.png')}/>

                        <TextInput
                            style={styles.loginInputBox}
                            onChangeText={setPassword}
                            value={password}
                            placeholder="Mot de passe"
                            secureTextEntry
                        />

                        <Image source={require('../../../assets/oeil.png')}/>
                    </View>

                    <Image style={styles.line} source={require('../../../assets/Line_deco.png')}/>
                </View>


                    <Text style={styles.MDP} onPress={() => alert('page mot de passe oublier')}>
                        Mot de passe oublié ?
                    </Text>

            </View>

            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    {buttonFactory.createSubmitButton(
                        "Sign In",
                        () => {
                            navigation.navigate(routes.home);
                        }
                    )}
                </View>


            </View>
            <View style={styles.ContainerTextInput2}>
                <Text style={{...styles.colorizedText2,
                    ...styles.textStyle}}
                >
                    Nouveau Membre ?
                </Text>
                <Text style={{
                    ...styles.colorizedText,
                }}
                      onPress={() => navigation.navigate(routes.register)}
                > S'inscrire</Text>
            </View>
        </View>
    )
}

export default LoginPage
