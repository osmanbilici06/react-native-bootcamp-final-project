import React from "react";
import { View, StyleSheet, Dimensions, Image, Text, title } from "react-native";
import Swiper from "react-native-swiper";
import MapView, { Marker } from "react-native-maps";

import DetayStyle from "./DetayStyle";

const ConcertDetailScreen = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TtWe-uVjb9DRxSaDANrwmcTytj1Hb6mlVg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTGWX1Haf6tYEpWNI4HQVNRYNDdvCA70lqcnFr2NEfdbuZG6jO4NUkHi35O30CoR7cB3c&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xM5e_kkiQ4rs-ZVM1nQWSf8YbjOZj5ZpjRDBOvSYgCFq3wHjxdn68U4UFTP8auL7DJg&usqp=CAU",
  ];

  return (
    <View style={DetayStyle.container}>
      <View style={DetayStyle.swiperContainer}>
        <Swiper showsButtons={false} height={200} width={Dimensions.get("window").width}>
          {images.map((image, index) => (
            <View key={index} style={DetayStyle.swiperSlide}>
              <Image source={{ uri: image }} style={DetayStyle.image}  resizeMode="cover" />
            </View>
          ))}
        </Swiper>
      </View>
      <Text><Text style={DetayStyle.text}>Açıklama: </Text> İsveç'in dünyaca ünlü melankolik sesi Jay-Jay Johanson, 2 konser için yeniden ülkemizde!

Neslinin en etkili sanatçılarından ve en iyi seslerinden biri, bir öncü, bir efsane olarak selamlanan İsveçli Jay-Jay Johanson; 2 konser için yeniden ülkemize geliyor. Büyüleyici ve melankolik sesi ile dikkat çeken Jay-Jay Johanson, Epifoni organizasyonu ile düzenlenecek konserlerde 20 Ekim 2023 Cuma gecesi 
Ankara'da Milyon Performance Hall'da, 21 Ekim 2023 Cumartesi gecesi ise İstanbul'da Dorock XL Fitaş Sahnesi'nde sahne alacak.</Text>

      <MapView
        style={DetayStyle.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Konser"
          description="Ankara"
        />
      </MapView>
    </View>
  );
};

export default ConcertDetailScreen;
