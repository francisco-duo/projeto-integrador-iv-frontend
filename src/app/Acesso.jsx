import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome6, Ionicons } from "@expo/vector-icons"

export default function Acesso({ authFunction }) {
    return (
        <View style={styles.container}>
            <FontAwesome6 name="circle" size={22} color="#fff" />
            <TouchableOpacity
                style={styles.buttonLogin}
                onPress={authFunction}
            >
                <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCadastro}>
                <Text style={styles.buttonText}>CADASTRE-SE</Text>
            </TouchableOpacity>
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