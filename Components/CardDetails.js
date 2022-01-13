import Payment from "payment";
import React, { useState } from "react";
import { LogBox } from "react-native";
import { View, StyleSheet, Alert } from "react-native";
import Button from "./UI/Button/Button";
import CardNumberInput from "./UI/Input/CardNumberInput";
import Input from "./UI/Input/Input";

const CardDetails = () => {
  LogBox.ignoreAllLogs();
  const [cardNumber, setCardNumber] = useState();
  const [date, setDate] = useState(new Date());
  const [securityCode, setSecurityCode] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const cardNumberHandler = (text) => {
    setCardNumber(text);
  };

  const dateChangeHandler = (text) => {
    setDate(text);
  };

  const securityChangeHandler = (text) => {
    setSecurityCode(text);
  };
  const firstNameHandler = (text) => {
    setFirstName(text);
  };
  const lastNameHandler = (text) => {
    setLastName(text);
  };

  const submitHandler = () => {
    if (date === null) return;
    const card = Payment.fns.validateCardNumber(cardNumber);
    const cardDate = Payment.fns.cardExpiryVal(date);
    const cardCvv = Payment.fns.validateCardCVC(securityCode);

    if (!card || !cardDate || !cardCvv) {
      Alert.alert("Invalid Details", "Please provide Valid Details!");
      return;
    }

    reset();
    Alert.alert("Success", "Payment Successful");
  };

  const reset = () => {
    setCardNumber();
    setDate();
    setSecurityCode("");
    setFirstName("");
    setLastName("");
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.number}>
        <CardNumberInput
          placeholder="Card number"
          value={cardNumber}
          onChangeText={cardNumberHandler}
        />
      </View>
      <View style={styles.validity}>
        <Input
          placeholder={"MM/YY"}
          value={date}
          onChangeText={dateChangeHandler}
        />
        <Input
          placeholder={"Security code"}
          value={securityCode}
          onChangeText={securityChangeHandler}
        />
      </View>
      <View style={styles.userDetails}>
        <Input
          placeholder={"First Name"}
          value={firstName}
          onChangeText={firstNameHandler}
        />
        <Input
          placeholder={"Last Name"}
          value={lastName}
          onChangeText={lastNameHandler}
        />
      </View>
      <View style={styles.button}>
        <Button title="submit payment" onPress={submitHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 100,
    backgroundColor: "#fff",
    position: "relative",
  },
  number: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  validity: {
    top: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userDetails: {
    top: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    top: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CardDetails;
