import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
const BackBtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.backBtn}
      onPress={() => {
        if (navigation.canGoBack()) {
          navigation.goBack();
        }
      }}
    >
      <MaterialIcons name="keyboard-backspace" color={"#fff"} size={24} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    backgroundColor: "#7F38FF",
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 100
  },
});

export default BackBtn;
