import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

// Import ảnh nền
const backgroundImage = require("../../assets/images/MaskGroup.png");

const OTPVerificationScreen = ({ navigation }) => {
  const [otp, setOtp] = useState("");

  // Xử lý nhập OTP, chỉ nhận 4 số
  const handleOtpChange = (text) => {
    const cleanedText = text.replace(/[^0-9]/g, "").slice(0, 4);
    setOtp(cleanedText);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage} blurRadius={5}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Nút quay lại */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>

        {/* Tiêu đề */}
        <Text style={styles.title}>Enter your 4-digit code</Text>

        {/* Ô nhập mã OTP */}
        <Text style={styles.label}>Code</Text>
        <TextInput
          style={styles.otpInput}
          keyboardType="number-pad"
          maxLength={4}
          value={otp}
          onChangeText={handleOtpChange}
          placeholder="- - - -"
          placeholderTextColor="#999"
          textAlign="center"
        />

        {/* Nút Resend Code */}
        <TouchableOpacity>
          <Text style={styles.resendText}>Resend Code</Text>
        </TouchableOpacity>

        {/* Nút tiếp tục */}
        <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("SelectLocation")}>
        <AntDesign name="arrowright" size={30} color="white" />
      </TouchableOpacity>

      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Màu nền mờ trên ảnh
  },
  backButton: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
    color: "#000",
  },
  label: {
    fontSize: 15,
    marginBottom: 10,
    color: "#000",
  },
  otpInput: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 10, // Giúp tạo dấu gạch ngang giữa các số
    textAlign: "center",
    borderBottomWidth: 2,
    borderColor: "#000",
    paddingVertical: 10,
    marginBottom: 20,
    color: "#000",
  },
  resendText: {
    color: "green",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  nextButton: {
    position: "absolute",
    right: 20,
    bottom: 40,
    backgroundColor: "#29a745",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OTPVerificationScreen;
