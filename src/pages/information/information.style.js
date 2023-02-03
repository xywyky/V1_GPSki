import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({


    container: {
        height: "100%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-around",
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
        paddingTop: '10%',
        justifyContent: "space-evenly",
        alignItems: "center",
        marginLeft: '10%',
        marginRight: '10%',


    },

    containerTop: {

        marginTop: '15%',

    },

    textb: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#001833",
        textAlign: "center",
    },
    textd: {
        marginLeft: '10%',
        marginTop: '1%',
        alignItems: "baseline"

    },
    textd_color1: {
        color: "#AAAAAA",
        fontSize: 16,
    },
    textd_color2: {
        color: "#181D2D",
        fontWeight: "bold",
        fontSize: 20,
    },

    back: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: "80%",
        width: "100%",
        backgroundColor: '#61E5F8',
    },
    title2: {
        paddingLeft: 20,
        paddingTop: 20,
        fontSize: 30,
        fontWeight: "bold",
        color: "#001833",
    },

    image:{
        width: "80%",
        height: "80%",
        resizeMode: 'contain',
    },
    image2:{
        width: "85%",
        height: "85%",
        resizeMode: 'contain',

    },

    containerColonne:{
        backgroundColor: '#fff',
        borderRadius: 20,
        width: "55%",
        height: "65%",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,

    },

    containerColonne2:{

        backgroundColor: '#fff',
        borderRadius: "40%",
        width: "90%",
        height: "45%",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,

    },

    containerTop2: {
        paddingBottom: "15%",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: '10%',
    },
    stylePressable: {
        right: "8%",
        top: "35%",
        position : 'absolute',
    },
    styleprofile :{
        width: 40,
        height: 40,
    }




});
