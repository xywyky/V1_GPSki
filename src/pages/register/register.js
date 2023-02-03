import {Image, Pressable, Text, TextInput, View} from 'react-native'

import { ButtonFactory} from "../../components";
import React from 'react'
import { routes } from '../../router/routes';
import { styles } from './register.style';
import { useRegister } from './register.logic';


const RegisterPage = ({ navigation }) => {
    const {
        email,
        password,
        error,
        setError,
        setEmail,
        setPassword,
        setPassword_2,
        password_2
    } = useRegister();
    const buttonFactory = new ButtonFactory();
    return (
        <View style={styles.loginPageContainer}>
            <View style={styles.topContentContainer}>



                <View style={styles.loginInputContainer}>

                    <Text style={{
                        ...styles.colorizedText,
                        ...styles.loginTitle
                    }}>
                        S'inscrire
                    </Text>

                    <Text style={{...styles.colorizedText2,
                        ...styles.textStyle}}
                    >
                        Se connecter avec Apple
                    </Text>
                    <Text style={{...styles.colorizedText2,
                        ...styles.textStyle}}
                    >
                        OU
                    </Text>

                    <Text style={{...styles.colorizedText2,
                        ...styles.textStyle}}
                    >
                        Créez un compte ici
                    </Text>
                </View>

                <View style={styles.loginInputContainer}>
                    <View style={styles.ContainerTextInput}>

                        <Image source={require('../../../assets/Profile.png')}/>
                        <Image style={styles.line_V} source={require('../../../assets/Line_deco_v.png')}/>
                        <TextInput
                            onChangeText={setEmail}
                            style={styles.loginInputBox}
                            value={email}
                            placeholder="Prénom"
                        />
                    </View>
                    <Image style={styles.line} source={require('../../../assets/Line_deco.png')}/>
                    <View style={styles.ContainerTextInput}>

                        <Image source={require('../../../assets/Profile.png')}/>
                        <Image style={styles.line_V} source={require('../../../assets/Line_deco_v.png')}/>
                        <TextInput
                            onChangeText={setEmail}
                            style={styles.loginInputBox}
                            value={email}
                            placeholder="Nom"
                        />
                    </View>
                    <Image style={styles.line} source={require('../../../assets/Line_deco.png')}/>

                    <View style={styles.ContainerTextInput}>

                        <Image source={require('../../../assets/Profile.png')}/>
                        <Image style={styles.line_V} source={require('../../../assets/Line_deco_v.png')}/>
                        <TextInput
                            onChangeText={setEmail}
                            style={styles.loginInputBox}
                            value={email}
                            placeholder="Choisir un pseudo"
                        />
                    </View>
                    <Image style={styles.line} source={require('../../../assets/Line_deco.png')}/>

                    <View style={styles.ContainerTextInput}>

                        <Image source={require('../../../assets/tel.png')}/>
                        <Image style={styles.line_V} source={require('../../../assets/Line_deco_v.png')}/>
                        <TextInput
                            onChangeText={setEmail}
                            style={styles.loginInputBox}
                            value={email}
                            placeholder="Numéro de téléphone"
                        />
                    </View>
                    <Image style={styles.line} source={require('../../../assets/Line_deco.png')}/>

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

                    <View style={styles.ContainerTextInput}>

                        <Image source={require('../../../assets/mdp.png')}/>
                        <Image style={styles.line_V} source={require('../../../assets/Line_deco_v.png')}/>

                        <TextInput
                            style={styles.loginInputBox}
                            onChangeText={setPassword}
                            value={password}
                            placeholder="Répéter votre mot de passe"
                            secureTextEntry
                        />

                        <Image source={require('../../../assets/oeil.png')}/>
                    </View>

                    <Image style={styles.line} source={require('../../../assets/Line_deco.png')}/>
                </View>
                <Text style={styles.textStyle}
                >
                    J'ai bien pris connaissance des CGU de l'application
                </Text>
            </View>

            <View style={styles.container}>
                <View style={styles.buttonContainer}>

                    <Pressable  style={styles.stylePressable} onPress={() => navigation.navigate(routes.information)}>

                        <Image source={require('../../../assets/Arrow-Right.png')}/>

                    </Pressable>
                </View>
            </View>

            <View style={styles.ContainerTextInput2}>
                <Text style={{
                    ...styles.colorizedText2,
                    ...styles.textStyle
                }}>
                   Already a member?
                </Text>
                <Text style={{
                    ...styles.colorizedText,
                }}
                      onPress={() => navigation.navigate(routes.login)}
                > Sign in</Text>
            </View>

        </View>
    )
}
export default RegisterPage
