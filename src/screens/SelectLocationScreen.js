import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";

const SelectLocationScreen = ({ navigation }) => {
  const [zone, setZone] = useState("Barassie");
  const [area, setArea] = useState("");

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/illustration.png")} style={styles.image} />
      <Text style={styles.title}>Select Your Location</Text>
      <Text style={styles.subText}>Switch on your location to stay in tune with what’s happening in your area</Text>

      <Text style={styles.label}>Your Zone</Text>
      <View style={styles.pickerWrapper}>
        <Picker selectedValue={zone} onValueChange={setZone} style={styles.picker}>
          <Picker.Item label="Barassie" value="Barassie" />
          <Picker.Item label="Zone 2" value="zone2" />
        </Picker>
      </View>

      <Text style={styles.label}>Your Area</Text>
      <TextInput
        placeholder="Type of your area"
        style={styles.input}
        value={area}
        onChangeText={setArea}
      />

      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, backgroundColor: "#fff" },
  image: { width: 150, height: 150, alignSelf: "center", marginTop: 40 },
  title: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginVertical: 20 },
  subText: { fontSize: 14, color: "#777", textAlign: "center", marginBottom: 30 },
  label: { fontSize: 16, marginBottom: 10 },
  pickerWrapper: {
    borderWidth: 1, borderColor: "#ccc", borderRadius: 8, marginBottom: 20
  },
  picker: { height: 50, width: "100%" },
  input: {
    borderWidth: 1, borderColor: "#ccc", borderRadius: 8,
    padding: 12, marginBottom: 30
  },
  submitButton: {
    backgroundColor: "#28a745", padding: 15,
    borderRadius: 8, alignItems: "center"
  },
  submitText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});

export default SelectLocationScreen;
