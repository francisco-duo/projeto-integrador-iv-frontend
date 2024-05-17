import { StyleSheet, View, Text } from "react-native";
import { FontAwesome6, Ionicons } from "@expo/vector-icons"

export default function Acesso() {
    return (
        <View style={styles.container}>
            <FontAwesome6 name="circle" size={22} color="#fff" />
            <View style={styles.buttonLogin}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </View>
            <View style={styles.buttonCadastro}>
                <Text style={styles.buttonText}>CADASTRE-SE</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF725E"
    },
    buttonLogin: {
        backgroundColor: "#fff",
        height: 50,
        width: 250,
        borderRadius: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    buttonCadastro: {
        backgroundColor: "#fff",
        height: 30,
        width: 170,
        borderRadius: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    buttonText: {
        color: "#FF725E",
        fontSize: 22
    },
});