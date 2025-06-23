import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Text from "../components/Text";

const FundWallet = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Fund your wallet</Text>

      {/* Bank Transfer Card */}
      <View style={styles.bankCard}>
        <View style={styles.cardHeader}>
          <View style={styles.bankIconContainer}>
            <Image
              source={require("../../assets/bank.png")}
              style={styles.bankIcon}
            />
          </View>
          <View>
            <Text style={styles.cardTitle}>Via Bank Transfer</Text>
            <Text style={styles.cardDescription}>
              Transfer money into your unique{"\n"}account number showing below
            </Text>
          </View>
        </View>

        <View style={styles.bankDetails}>
          <View style={styles.bankUnit}>
            <Text style={styles.detailLabel}>Account name:</Text>
            <Text style={styles.detailValue}>RIGANTECH/FUNMI</Text>
          </View>
          <View style={styles.bankUnit}>
            <Text style={styles.detailLabel}>Bank name:</Text>
            <Text style={styles.detailValue}>Wema Bank</Text>
          </View>
          <View style={styles.bankUnit}>
            <Text style={styles.detailLabel}>Account number:</Text>
            <Text style={[styles.detailValue, styles.accountNumber]}>
              9035161685
            </Text>
          </View>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.copyButton}>
            <Text style={styles.copyButtonText}>Copy number</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.shareButtonText}>Share details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontFamily: "OpenSans_600SemiBold",
    color: "#000",
    marginVertical: 10,
  },
  bankCard: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  bankIconContainer: {
    backgroundColor: "#7F38FF",
    borderRadius: 8,
    marginRight: 8,
    padding: 5,
  },
  bankIcon: {
    width: 40,
    height: 42,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: "OpenSans_600SemiBold",
    color: "#000",
  },
  cardDescription: {
    fontSize: 14,
    color: "#6C757D",
    marginTop: 4,
  },
  bankDetails: {
    marginBottom: 16,
  },
  bankUnit: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: "#5D5D5D",
  },
  detailValue: {
    fontSize: 16,
    color: "#7F38FF",
    fontFamily: "OpenSans_600SemiBold",
  },
  accountNumber: {
    fontSize: 20,
    color: "#000",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  copyButton: {
    flex: 1,
    backgroundColor: "#F5F0FF",
    borderRadius: 24,
    padding: 12,
    alignItems: "center",
    marginRight: 8,
  },
  shareButton: {
    flex: 1,
    backgroundColor: "#6C44FB",
    borderRadius: 24,
    padding: 12,
    alignItems: "center",
  },
  copyButtonText: {
    fontSize: 14,
    color: "#7F38FF",
    fontFamily: "OpenSans_600SemiBold",
  },
  shareButtonText: {
    fontSize: 14,
    color: "#FFF",
    fontFamily: "OpenSans_600SemiBold",
  },
});

export default FundWallet;
