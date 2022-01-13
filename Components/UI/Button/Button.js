import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

const Button = (props) => {
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.buttonTouchanle}>
      <View style={styles.button}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  buttonTouchanle: {
    marginTop: 10,
    height: 50,
    width: width - 10,
    borderRadius: 5,
    backgroundColor: "green",
  },
  button: {
    padding: 10,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
    textTransform: "uppercase",
  },
});
export default Button;
