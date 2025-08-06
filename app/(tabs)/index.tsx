import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.view}>
      <Text> This is the index pages </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button:{
    backgroundColor: 'lightblue',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 15,
    borderRadius: 15,
  },
})
