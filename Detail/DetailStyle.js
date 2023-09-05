import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const DetayStyle = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  
  },
  swiperContainer: {
    height: 200,
  },
  swiperSlide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: Dimensions.get("window").width,
    width: "100%",
    aspectRatio: 2,
    alignSelf: "flex-start",
  },
  seatList: {
    backgroundColor: '#BABCBD',
    flexDirection: "row",
    justifyContent:'space-around'

  },
  map: {
    flex: 1,
    justifyContent: "end",
    alignItems: "end",
    width: Dimensions.get("window").width,
  },
  text: {
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default DetayStyle;
