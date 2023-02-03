import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({


    container: {
        height: "100%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
    },

    title: {
        top: "10%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "#61E5F8",
    },
    InputBox: {
        width: '100%',
        padding: '10%',
        fontSize: 16,

    },
    containerLigne: {
        flexDirection: 'row',
        top: 20,
        marginHorizontal: 60,



    },
    containerColonne:{
        backgroundColor: '#fff',
        borderRadius: 20,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,

    },

    textb: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#61E5F8",
        textAlign: "center",
    },
    back: {
        borderTopRightRadius: "50%",
        borderTopLeftRadius: "50%",
        height: "50%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: '#61E5F8',
    },
    title2: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#001833",
    },

    image:{
        width: 100,
        height: 100,
    },

    containerColonne2:{

        backgroundColor: '#fff',
        borderRadius: 20,
        width: 350,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,

    }




});