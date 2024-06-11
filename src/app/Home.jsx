import { StyleSheet, View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome6, Ionicons } from "@expo/vector-icons"

export default function Home() {
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
                    <Text style={styles.textMenu}>Olá, Usuário</Text>
                </View>
            </View>

            <View style={styles.navigationMenuIcons}>
                <View style={styles.iconContainer}>
                    <View style={styles.iconNavigationContainer}>
                        <Ionicons name="people" size={24} color="#FF725E" />
                    </View>
                    {/* <Text>Pacientes</Text> */}
                </View>
                <View style={styles.iconContainer}>
                    <View style={styles.iconNavigationContainer}>
                        <FontAwesome6 name="door-open" size={24} color="#FF725E" />
                    </View>
                    {/* <Text>Anamnese</Text> */}
                </View>
                <View style={styles.iconContainer}>
                    <View style={styles.iconNavigationContainer}>
                        <FontAwesome6 name="door-open" size={24} color="#FF725E" />
                    </View>
                    {/* <Text style={styles.textIcon}>Calendário</Text> */}
                </View>
            </View>

            <View style={styles.minhasEvolucoes}>
                <Text style={styles.minhasEvolucoesText}>Minhas Evoluções</Text>
                <FontAwesome6 name="arrow-right" size={22} color="#FF725E" />
            </View>

            <Image
                source={require('../assets/smartphone.png')}
                style={styles.imagem}
            />
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
        width: "100%",
        marginTop: 50,
        marginLeft: 20,
    },
    textMenu: {
        fontSize: 24,
        color: "#fff"
    },
    navigationMenuIcons: {
        marginVertical: 35,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    iconContainer: {

        width: 50,
        height: 50,
        borderRadius: 25, // Metade da largura/altura
        borderWidth: 2,
        borderColor: '#FF725E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconNavigationContainer: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    minhasEvolucoes: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 25, 
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#FF725E',
        padding: 10,
    },
    minhasEvolucoesText: {
        fontSize: 22,
        color: "#FF725E"
    },
    imagem: {
        height: 350,
        width: "100%"
    }

});