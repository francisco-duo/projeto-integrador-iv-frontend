import { View, StyleSheet, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome6, Ionicons } from "@expo/vector-icons"

export default function Pacientes() {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#FFFFFF" // Defina a cor de fundo da barra de status
                barStyle="dark-content"   // Defina o estilo do texto na barra de status (escuro ou claro)
            />

            <View style={styles.menuTop}>
                <View style={styles.menuTopIcons}>
                    <View style={styles.iconBox}>
                        <FontAwesome6 name="image" size={24} color="#FF725E" />
                    </View>
                    <View style={styles.menuTopIcons}>
                        <View style={styles.iconBox}>
                            <FontAwesome6 name="door-open" size={24} color="#FF725E" />
                        </View>
                    </View>
                </View>

                <View style={styles.menuTopText}>
                    <Text style={styles.textMenu}>Pacientes</Text>
                    <Image
                        source={require('../assets/enfermeira.png')}
                        style={styles.imageMenu}
                    />
                </View>
            </View>

            <View style={styles.pacientes}>
                <View style={styles.pacienteContainer}>
                    <Text style={styles.pacienteNome}>Nome do paciente</Text>
                </View>
                <View style={styles.pacienteContainer}>
                    <Text style={styles.pacienteNome}>Nome do paciente</Text>
                </View>
                <View style={styles.pacienteContainer}>
                    <Text style={styles.pacienteNome}>Nome do paciente</Text>
                </View>
                <View style={styles.pacienteContainer}>
                    <Text style={styles.pacienteNome}>Nome do paciente</Text>
                </View>
                <View style={styles.pacienteContainer}>
                    <Text style={styles.pacienteNome}>Nome do paciente</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    menuTop: {
        backgroundColor: "#FF725E",
        color: "#fff",
        height: 200,
        width: "100%",
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        paddingTop: 45,
    },
    menuTopIcons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    iconBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 50,
        backgroundColor: "#fff",
        marginHorizontal: 10,
        borderRadius: 14
    },
    menuTopText: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingTop: 0,
        paddingLeft: 20,
    },
    textMenu: {
        fontSize: 24,
        color: "#fff"
    },
    imageMenu: {
        height: 150,
        width: 150
    },
    pacientes: {
        marginVertical: 25,
        height: "100%",
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    pacienteContainer: {
        paddingHorizontal: 10,
        height: 47,
        borderRadius: 8,
        borderColor: "#ff725e",
        borderWidth: 2,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    pacienteNome: {
        fontSize: 22,
        color: "#FF725E"
    },

});