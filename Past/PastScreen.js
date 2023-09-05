import React, { useMemo } from "react";
import { View, Text, Image } from "react-native";
import PastStyle from "./PastStyle";
import data from "../dummy/data";

function Card({ event }) {
  return (
    <View style={PastStyle.card}>
      <Image source={{ uri: event.image }} style={PastStyle.coverImage} />
      <View style={PastStyle.infoContainer}>
        <Text style={PastStyle.title}>{event.title}</Text>
        <Text>Tarih: {event.date}</Text>
        <Text>Tipi: {event.type}</Text>
        <Text>Konumu: {event.place.name}</Text>
      </View>
    </View>
  );
}

function PastScreen() {
  const currentDate = new Date();

  const formattedEventList = useMemo(() => {
    return data.events.map((event) => {
      const [day, month, year] = event.date.split(".");
      const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
        2,
        "0"
      )}`;
      return {
        ...event,
        date: formattedDate,
      };
    });
  }, [data.events]);

  const showList = useMemo(() => {
    return formattedEventList.filter(
      (event) => new Date(event.date) < currentDate
    );
  }, [formattedEventList, currentDate]);


  
  return (
    <View>
      {showList.map((event, index) => (
        <Card key={index} event={event} />
      ))}
    </View>
  );
}

export default PastScreen;
