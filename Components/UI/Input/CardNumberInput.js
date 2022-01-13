import { TextInput, StyleSheet, Dimensions } from "react-native";

const CardNumberInput = ({ placeholder, onChangeText, value }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.cardNumber}
      value={value}
      keyboardType="numeric"
      onChangeText={onChangeText}
    />
  );
};

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  cardNumber: {
    height: 50,
    width: width - 10,
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    fontSize: 17,
  },
});
export default CardNumberInput;
