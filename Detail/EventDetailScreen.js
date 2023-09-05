import React from "react";
import { View, StyleSheet, Dimensions, Image, Text, title } from "react-native";
import Swiper from "react-native-swiper";
import MapView, { Marker } from "react-native-maps";
import DetailStyle from "./DetailStyle";

const EventDetailScreen = (props) => {
  const { params: item } = props.route;
  return (
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
  );
};

export default EventDetailScreen;
