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
    
    flexDirection: "row",
    justifyContent:'space-around'

  },
  map: {
    flex: 1,
    justifyContent: "end",
    alignItems: "end",
    width: Dimensions.get("window").width,
    width:'100%',
    height:300
  },
  text: {
    fontWeight: "bold",
    fontSize: 17,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor:'#EAEBED',
    height:'100%',
    width:'100%'
  },
  button: {
    margin: 2,
    padding: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  twitterButton: {
    backgroundColor: '#1da1f2',
  },
  googleButton: {
    backgroundColor: '#DB4437',
  },
  linkedinButton: {
    backgroundColor: '#0077B5',
  },
  youtubeButton: {
    backgroundColor: '#FF0000',
  },
  
});

export default DetayStyle;
