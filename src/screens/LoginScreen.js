import { View, Text, Button, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
    return (
        <View>
            <Text>Pantalla de Login</Text>
            <Button
                title="Entrar"
                onPress={() => navigation.navigate("Dashboard")}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});
