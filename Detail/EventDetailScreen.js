import React from "react";
import { View, StyleSheet, Dimensions, Image, Text, title, ScrollView } from "react-native";
import Swiper from "react-native-swiper";
import MapView, { Marker } from "react-native-maps";
import DetailStyle from "./DetailStyle";
import Seat from "./ArmchairStyle.js"; 

const EventDetailScreen = (props) => {
  const { params: item } = props.route;

 
  const seatData = [
   
    { seatNumber: "A1", price: 50 },
    { seatNumber: "A2", price: 150 },
    { seatNumber: "A3", price: 250 },
    { seatNumber: "A3", price: 250 },
    { seatNumber: "A3", price: 250 },
    
  ];

  const handleSeatSelect = (seatNumber) => {
    
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
     
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };
  return (
    <ScrollView>
        
    <View style={DetailStyle.container}>
      {item.images && (
        <View style={DetailStyle.swiperContainer}>
          <Swiper
            showsButtons={false}
            height={200}
            width={Dimensions.get("window").width}
          >
            {item.images.map((image, index) => (
              <View key={index} style={DetailStyle.swiperSlide}>
                <Image
                  source={{ uri: image }}
                  style={DetailStyle.image}
                  resizeMode="cover"
                />
              </View>
            ))}
          </Swiper>
        </View>
        
      )}
      
      <View style={DetailStyle.seatList}>
        {seatData.map((seat, index) => (
          <Seat
            key={index}
            seatNumber={seat.seatNumber}
            price={seat.price}
            selected={selectedSeats.includes(seat.seatNumber)}
            onSelect={handleSeatSelect}
          />
        ))}
      </View>
      <Text>
        <Text style={DetailStyle.text}>Açıklama: </Text> {item.description}
      </Text>

      <MapView style={DetailStyle.map} initialRegion={item.place.location}>
        <Marker
          coordinate={{
            latitude: item.place.location.latitude,
            longitude: item.place.location.longitude,
          }}
          title="Konser"
          description="Ankara"
        />
      </MapView>
      
    </View>
    </ScrollView>
  );
};

export default EventDetailScreen;
