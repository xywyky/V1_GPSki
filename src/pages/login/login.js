import { Text, TextInput, View } from 'react-native'

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
                <View style={styles.buttonContainer}>
                    {buttonFactory.createSubmitButton(
                        "Register",
                        () => {
                            navigation.navigate(routes.register);
                        }
                    )}
                </View>
            </View>
        </View>
    )
}

export default LoginPage
