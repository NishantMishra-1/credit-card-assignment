import Header from "@mindinventory/rn-top-navbar";
import { Text } from "react-native";

const Topbar = () => {
  return (
    <Header
      style={{ backgroundColor: "#009999", height: 50 }}
      statusBarBackground="#008080"
      barStyle="light-content"
    >
      <Header.Body style={{ backgroundColor: "#009999", width: "70%" }}>
        <Text style={{ color: "#fff" }}>Credit Card Details</Text>
      </Header.Body>
    </Header>
  );
};

export default Topbar;
