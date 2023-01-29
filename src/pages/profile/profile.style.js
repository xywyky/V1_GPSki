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
    }
});
