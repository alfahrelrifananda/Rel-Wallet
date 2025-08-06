import { Text, View } from "react-native";
import { Button } from 'react-native-paper';
import styles from "@/assets/style/styles";

export default function Settings() {
    return (
        <View style={styles.view}>
            <Text>
                This is settings screen
            </Text>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
        </View>
    )
}



