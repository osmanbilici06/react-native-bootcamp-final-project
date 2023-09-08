import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  styleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "100%",
    gap: 10,
  },

  textStyle: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  Image_Container: {
    height: 120,
    width: 120,
    margin: 18,
    borderRadius: 100,
  },
  Image_text: {
    color: "white",
  },

  button: {
    top: 20,
    alignItems: "center",
    backgroundColor: "red",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    width: 60,
    height: 32,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  componentButton: {
    alignItems: "flex-end",
  },
  img:{
    height: 120,
    width: 120,
    margin:18,
    borderRadius:100,
  },
  Input:{
    backgroundColor: "#C9CCCD", 
    width: "100%", 
    height: 30,
    borderRadius:4
  },
  textButton:{
    alignSelf:'flex-start',
    fontWeight:'bold',
    color:'red',
    borderRadius:24
  }

});
