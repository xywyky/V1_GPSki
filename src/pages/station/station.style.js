import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    profileContainer: {
        paddingVertical: "5%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#eaeaea",
    },

    profileTitleContainer: {
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderColor: "gray",
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    profileTitle: {
        fontSize: 34,
    },

    profileContainerTitleField: {
        marginTop: 30,
        paddingHorizontal: "5%",
    },
    profileTitleTitleField: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#6e6e6e",
    },

    profileContainerField: {
        marginTop: 8,
        backgroundColor: "#ffffff",
        borderColor: "gray",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingHorizontal: "5%",
    },
    profileTitleField: {
        fontSize: 16,
    },
    profileTextField: {
        fontSize: 14,
        color: "#6e6e6e",
    },

    buttonContainer: {
        width: "100%",
        flex: 1,
        justifyContent: 'flex-end'
    },

    stationMeteo: {
        resizeMode: "cover",
        height: 75,
        width: "100%" ,
    },

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
    },
    loginInputLabel: {
        fontSize: 16,
        marginBottom: 4,
    },
    loginInputBox: {
        width: '85%',
        paddingLeft: '10%',
        paddingRight: '10%',
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
    line: {
        alignItems: 'center',
        width: "100%",
        marginTop: 0,
    },
    ContainerTextInput: {
        paddingTop: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    ContainerTextInput2: {
        paddingBottom: 100,
        flexDirection: 'row',
    },

    line_V: {
        marginLeft: 10,
    },
    MDP: {
        marginTop: 10,
        textDecorationLine: 'underline',
    }
});
