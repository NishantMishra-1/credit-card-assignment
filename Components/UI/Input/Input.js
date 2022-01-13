import { TextInput, StyleSheet } from "react-native";

const Input = ({ placeholder, onChangeText, value, type }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      value={value}
      keyboardType={type}
      onChangeText={onChangeText}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    height: 50,
    width: "47%",
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    fontSize: 17,
  },
});

export default Input;
