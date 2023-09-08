import React, { useState } from "react";
import {
  View,
  Dimensions,
  Image,
  Text,
  title,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Swiper from "react-native-swiper";
import MapView, { Marker } from "react-native-maps";
import DetailStyle from "./DetailStyle";
import Seat from "./ArmchairStyle.js"; 
import Icon from 'react-native-vector-icons/FontAwesome'
import data from "../dummy/data";

const ConcertDetailScreen = (props) => {
  const { params: item } = props.route;
  const [selectedSeats, setSelectedSeats] = useState([]); 



  const seatData = [
   
    { seatNumber: "A1", price: 50 },
    { seatNumber: "A2", price: 150 },
    { seatNumber: "A3", price: 250 },
    { seatNumber: "A3", price: 250 },
    { seatNumber: "A3", price: 250 },
    
  ];
  const handlePress = (platform) => {
  
    switch (platform) {
      case 'facebook':
       
        break;
      case 'twitter':
      
        break;
      case 'google':
        
        break;
      case 'linkedin':
       
        break;
      case 'youtube':
     
        break;
      default:
        break;
    }
  };

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
      <Text>
        <Text style={DetailStyle.text}>Açıklamas: </Text> {item.description}
      </Text>

    
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
      
      <View style={DetailStyle.buttonContainer}>
      <TouchableOpacity
        style={[DetailStyle.button, DetailStyle.facebookButton]}
        onPress={() => handlePress('facebook')}
      >
        <Icon name="facebook" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[DetailStyle.button, DetailStyle.twitterButton]}
        onPress={() => handlePress('twitter')}
      >
        <Icon name="twitter" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[DetailStyle.button, DetailStyle.googleButton]}
        onPress={() => handlePress('google')}
      >
        <Icon name="google" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[DetailStyle.button, DetailStyle.linkedinButton]}
        onPress={() => handlePress('linkedin')}
      >
        <Icon name="linkedin" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[DetailStyle.button, DetailStyle.youtubeButton]}
        onPress={() => handlePress('youtube')}
      >
        <Icon name="youtube" size={30} color="white" />
      </TouchableOpacity>
    </View>
     
    </View>
    
    
    </ScrollView>
  );
};

export default ConcertDetailScreen;
