import { Text, View } from "react-native";
import { Button } from 'react-native-paper';

export default function Settings() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>
                This is settings screen
            </Text>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
        </View>
    )
}



