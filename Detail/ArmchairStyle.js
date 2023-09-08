import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const Seat = ({ seatNumber, price, selected, onSelect }) => {
  const seatStyle = selected ? styles.selectedSeat : styles.availableSeat;
  return (
    <TouchableOpacity
      style={[styles.seat, seatStyle]}
      onPress={() => onSelect(seatNumber)}
    >
      <Text style={styles.seatText}>{seatNumber}</Text>
      <Text style={styles.seatText}>${price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  seat: {
    width: 50,
    height: 50,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  availableSeat: {
    backgroundColor: "lightgreen",
  },
  selectedSeat: {
    backgroundColor: "lightblue",
  },
  seatText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});



export default Seat;
