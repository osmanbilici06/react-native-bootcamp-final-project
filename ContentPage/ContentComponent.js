import React, { useState, useMemo } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContentStyle from "./ContentStyle";
import { type, events } from "../dummy/data";

const ContentComponent = (props) => {
  const [filterText, setFilterText] = useState("");
  const navigation = useNavigation();

  const filteredEventList = useMemo(() => {
    return events?.filter((event) => {
      if (event && typeof event === "object") {
        const eventKeys = Object.keys(event).filter((key) => key !== "image"); // "image" anahtarını filtrele
  
        // Anahtarları kullanarak eventText'i oluşturun
        const eventText = eventKeys
          .map((key) => (typeof event[key] === 'string' ? event[key] : ''))
          .join(' ')
          .toLowerCase();
  
        const filterTextLower = filterText?.toLowerCase();
  
        return eventText.includes(filterTextLower);
      }
      return false;
    });
  }, [filterText]);
  
  

  const goToDetailScreen = (item) => {
    navigation.navigate("DetayScreen", { item });
  };

  const goToConcertDetailScreen = (item) => {
    navigation.navigate("ConcertDetailScreen", { item });
  };

  const goToConcertSecondScreen = (item) => {
    navigation.navigate("ConcertSecondScreen", { item });
  };

  const onFilterChange = (text) => {
    setFilterText(text);
  };

  const showList = useMemo(() => {
    return filterText === "" ? events : filteredEventList;
  }, [filterText, filteredEventList]);

  return (
    <View style={ContentStyle.container}>
      <TextInput
        name="filterText"
        style={{ backgroundColor: "red", width: "100%", height: 56 }}
        value={filterText}
        onChangeText={onFilterChange} 
      />
      {showList?.map((item, index) => (
        <View key={index} style={ContentStyle.styleContainer}>
          <Image source={{ uri: item.image }} style={ContentStyle.img} />
          <View style={ContentStyle.textStyle}>
            <Text style={ContentStyle.textStyle}>Sanatçı: {item.title}</Text>
            <Text style={ContentStyle.textStyle}>
              Sahne Tarihi: {item.description}
            </Text>
            <View style={ContentStyle.componentButton}>
              {item.type === type.CONCERT && (
                <TouchableOpacity
                  style={ContentStyle.button}
                  onPress={() => goToConcertDetailScreen(item)}
                >
                  <Text style={ContentStyle.buttonText}>Detay 1</Text>
                </TouchableOpacity>
              )}
              {item.type === type.EVENT && (
                <TouchableOpacity
                  style={ContentStyle.button}
                  onPress={() => goToDetailScreen(item)}
                >
                  <Text style={ContentStyle.buttonText}>Detay 1</Text>
                </TouchableOpacity>
              )}
              {item.type === type.THEATER && (
                <TouchableOpacity
                  style={ContentStyle.button}
                  onPress={() => goToConcertSecondScreen(item)}
                >
                  <Text style={ContentStyle.buttonText}>Detay 1</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ContentComponent;
