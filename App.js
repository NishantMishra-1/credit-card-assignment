import { StyleSheet, View, SafeAreaView } from "react-native";
import CardDetails from "./Components/CardDetails";
import Topbar from "./Components/UI/Header/Topbar";
export default function App() {
  return (
    <View>
      <Topbar />
      <View style={styles.container}>
        <CardDetails />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "25%",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#ffff",
  },
});
