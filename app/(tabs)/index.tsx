import { View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import Style from '@/components/style/global';

export default function HomeScreen() {
  return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ThemedText style={Style.textContainer} >Try editing me! 🎉</ThemedText>
      </View>
  );
}

