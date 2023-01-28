import { Text, TextInput, View } from 'react-native'

import { ButtonFactory} from "../../components ";
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
                    <Text style={{
                        ...styles.colorizedText2,
                    }}>

                    </Text>

                    {error && (
                        <Text style={{ color: "red" }}>Invalid credentials</Text>
                    )}

                    <TextInput
                        onChangeText={setEmail}
                        style={styles.loginInputBox}
                        value={email}
                        placeholder="Adresse e-mail"
                    />
                </View>

                <View style={styles.loginInputContainer}>

                    <TextInput
                        style={styles.loginInputBox}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Mot de passe"
                        secureTextEntry
                    />
                </View>
                <View style={styles.loginInputContainer}>

                    <TextInput
                        style={styles.loginInputBox}
                        onChangeText={setPassword_2}
                        value={password_2}
                        placeholder="Valider votre Mot de passe"
                        secureTextEntry
                    />
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    {buttonFactory.createSubmitButton(
                        "Creer un compte",
                        () => {
                            navigation.navigate(routes.information);
                        }
                    )}
                </View>
            </View>
        </View>
    )
}
export default RegisterPage
