import { Linking, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { StatusBar } from "expo-status-bar";
import Button from "../components/Button";
import Icon from "react-native-vector-icons/FontAwesome";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const statesArr = ["West Bengal", "Manipur"];

  const citiesArr = {
    "West Bengal": [
      "Kolkata",
      "Darjeeling",
      "New Jalpaiguri",
      "Mursidabad",
      "Bardwan",
      "Birbhum",
      "Malda",
      "North 24 Parganas",
      "South 24 Parganas",
      "East Midnapur",
      "West Midnapur",
      "Bankura",
      "Hawrah",
      "North Dinajpur",
      "South Dinajpur",
      "Nadia",
    ],
    Manipur: ["Imphal", "Churachandpur", "Thoubal", "Bishnupur"],
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F2F9FF" }}>
      <StatusBar backgroundColor="#F2F9FF" style="dark" />
      <Text
        style={{
          marginTop: 130,
          fontSize: 30,
          marginLeft: 18,
          fontWeight: "bold",
        }}
      >
        Registration Here
      </Text>

      {/* Other input fields */}

      <View style={{ marginLeft: 17, marginTop: 20, flexDirection: "row" }}>
        <Text style={{ marginRight: 150 }}>State</Text>
        <Text>City</Text>
      </View>

      {/* State Picker */}
      <View
        style={{
          width: 165,
          borderWidth: 0.4,
          borderColor: "#000",
          marginLeft: 10,
          marginTop: 7,
          borderRadius: 8,
        }}
      >
        <Picker
          style={{ width: 170 }}
          selectedValue={selectedState}
          onValueChange={(itemValue) => {
            setSelectedState(itemValue);
            setSelectedCity(""); // Clear city when state changes
          }}
        >
          <Picker.Item label="Select State" value="" />
          {statesArr.map((state, index) => (
            <Picker.Item key={index} label={state} value={state} />
          ))}
        </Picker>
      </View>

      {/* City Picker */}
      <View
        style={{
          width: 165,
          borderWidth: 0.4,
          borderColor: "#000",
          marginLeft: 10,
          marginTop: 7,
          borderRadius: 8,
        }}
      >
        <Picker
          style={{ width: 170 }}
          selectedValue={selectedCity}
          onValueChange={(itemValue) => setSelectedCity(itemValue)}
          enabled={!!selectedState} // Disable if no state is selected
        >
          <Picker.Item label="Select City" value="" />
          {selectedState &&
            citiesArr[selectedState]?.map((city, index) => (
              <Picker.Item key={index} label={city} value={city} />
            ))}
        </Picker>
      </View>

      {/* Other components like buttons */}
    </View>
  );
};

export default Login;
