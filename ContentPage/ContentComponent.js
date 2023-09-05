import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContentStyle from "./ContentStyle";
import { type, events } from "../dummy/data";
import Icon from "react-native-vector-icons/FontAwesome";

const ContentComponent = (props) => {
  const [filterText, setFilterText] = useState("");
  const navigation = useNavigation();
  const currentDate = new Date();

  const formattedEventList = useMemo(() => {
    return events.map((event) => {
      const [day, month, year] = event.date.split(".");
      const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
      return {
        ...event,
        date: formattedDate,
      };
    });
  }, [events]);

  const showList = useMemo(() => {
    const lowerFilterText = filterText.toLowerCase();
    return formattedEventList.filter((event) => {
      const eventText = Object.keys(event)
        .filter((key) => key !== "image")
        .map((key) => (typeof event[key] === "string" ? event[key] : ""))
        .join(" ")
        .toLowerCase();
      return eventText.includes(lowerFilterText) && new Date(event.date) > currentDate;
    });
  }, [filterText, formattedEventList, currentDate]);

  const goToEventDetailScreen = (navigateName, item) => {
    navigation.navigate(navigateName, item);
  };
  const goToPastScreen = (navigateName, ...item) => {
    navigation.navigate(navigateName, ...item);
  };

  const onFilterChange = (text) => {
    setFilterText(text);
  };

  return (
    <ScrollView>
      <SafeAreaView style={ContentStyle.container}>
        <TextInput
          name="filterText"
          style={ContentStyle.Input}
          value={filterText}
          onChangeText={onFilterChange}
          placeholder="Ara.."
        />
        <TouchableOpacity
          style={ContentStyle.textButton}
          onPress={() => {
            goToPastScreen("goToPastScreen");
          }}
        >
          <Text style={ContentStyle.textButton}>
            Kaçırdıklarınız <Icon name="arrow-right" size={15} color="red" />
          </Text>
        </TouchableOpacity>
        {showList.map((item, index) => (
          <View key={index} style={ContentStyle.styleContainer}>
            <Image source={{ uri: item.image }} style={ContentStyle.img} />
            <View style={ContentStyle.textStyle}>
              <Text style={ContentStyle.textStyle}>Sanatçı: {item.title}</Text>
              <Text style={ContentStyle.textStyle}>Sahne Tarihi: {item.date}</Text>
              <View style={ContentStyle.componentButton}>
                {item.type === type.CONCERT && (
                  <TouchableOpacity
                    style={ContentStyle.button}
                    onPress={() => {
                      goToEventDetailScreen("ConcertDetailScreen", item);
                    }}
                  >
                    <Text style={ContentStyle.buttonText}>Detay</Text>
                  </TouchableOpacity>
                )}
                {item.type === type.EVENT && (
                  <TouchableOpacity
                    style={ContentStyle.button}
                    onPress={() =>
                      goToEventDetailScreen("EventDetayScreen", item)
                    }
                  >
                    <Text style={ContentStyle.buttonText}>Detay</Text>
                  </TouchableOpacity>
                )}
                {item.type === type.THEATER && (
                  <TouchableOpacity
                    style={ContentStyle.button}
                    onPress={() =>
                      goToEventDetailScreen("TheaterDetailScreen", item)
                    }
                  >
                    <Text style={ContentStyle.buttonText}>Detay</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

export default ContentComponent;
