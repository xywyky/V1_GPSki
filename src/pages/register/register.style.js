import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    loginPageContainer: {
        paddingHorizontal: "5%",
        paddingVertical: "5%",
        height: "100%",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    loginTitle: {
        fontSize: 34,
    },
    loginInputContainer: {
        width: "100%",
        marginTop: 20,
        justifyContent: "space-evenly"
    },
    loginInputLabel: {
        fontSize: 16,
        marginBottom: 4,
    },
    loginInputBox: {
        width: '85%',
        padding: '10%',
        fontSize: 16,

    },
    colorizedText: {
        fontWeight: "bold",
        paddingTop: 10,
        fontSize: 16,
        color: "#181D2D",

    },
    colorizedText2: {
        paddingTop: 10,
        fontSize: 16,
        color: "#AAAAAA",
    },
    topContentContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    buttonContainer: {
        width: "40%",
        marginRight: 10,
        flex: 1,
        justifyContent: 'flex-end',

    },
    line: {
        alignItems: 'center',
        width: "100%",
        marginTop: -35,
    },
    ContainerTextInput: {
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    ContainerTextInput2: {

        paddingBottom: 40,
        flexDirection: 'row',
    },
    line_V: {
        marginLeft: 10,
    },
    MDP: {
        marginTop: 10,
        textDecorationLine: 'underline',
    },
    pro:{
        width: 1,
        height: 1,
    },

    textStyle: {
        paddingTop: 10,
    },
    stylePressable: {
        height: 50,
        width: 50,
        backgroundColor: "#61E5F8",
        borderRadius: 30,
        right: 10,
        top: 60,
        justifyContent: 'center',
        alignItems: 'center',
        position : 'absolute',
    },
});
