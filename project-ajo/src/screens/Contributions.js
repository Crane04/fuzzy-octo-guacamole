import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Container from "../components/Container";
import BackBtn from "../components/BackBtn";
import Text from "../components/Text";
import PaymentCard from "../components/PaymentCard";
import FundSection from "../components/FundWallet";

const FundWallet = () => {
  return (
    <Container bg="#F7F6FF">
      <ScrollView style={styles.container}>
        <BackBtn title={"Queen Ladies Club"} />
        <Text style={{ fontSize: 14, color: "#5D5D5D" }}>
          Fund your wallet to make automatic contribution.
        </Text>
        <PaymentCard />
        <FundSection />
        {/* Section Title */}
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/or-image.png")}
            style={{ width: "50%", height: 22, alignItems: "center" }}
          />
        </View>
        {/* Paystack Card */}
        <View style={styles.paystackCard}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/paystack.png")}
              style={{ width: 40, height: 40, marginRight: 10 }}
            />
            <View>
              <Text style={styles.cardTitle}>Via Paystack</Text>
              <Text style={styles.cardDescription}>
                {`Make your payment via Paystack \n where you can use your card`}
              </Text>
            </View>
          </View>

          <TextInput
            style={styles.input}
            placeholder="100 - 1000000"
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.proceedButton}>
            <Text style={styles.buttonText}>Proceed to payment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F8F9FD",
  },

  orText: {
    textAlign: "center",
    color: "#6C757D",
    marginVertical: 8,
    fontSize: 14,
  },
  paystackCard: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    elevation: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#000",
    marginBottom: 16,
    marginTop: 40,
  },
  proceedButton: {
    backgroundColor: "#7F38FF",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  cardDescription: {
    fontSize: 14,
    color: "#5D5D5D",
  },
  cardTitle: {
    color: "#0B0515",
    fontFamily: "OpenSans_600SemiBold",
  },
  buttonText: {
    color: "#fff",
  },
});

export default FundWallet;
