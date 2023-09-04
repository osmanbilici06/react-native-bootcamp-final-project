import React from "react";
import { View, StyleSheet, Dimensions, Image, Text, title } from "react-native";
import Swiper from "react-native-swiper";
import MapView, { Marker } from "react-native-maps";

import DetayStyle from "./DetayStyle";

const ConcertDetailScreen = () => {
  const images = [
    "https://www.rudaw.net/s3/rudaw.net/ContentFiles/730426Image1.jpg?version=5110496",
    "https://s3.fr-par.scw.cloud/fra-susma24-tr/2022/07/mabelkarakol-wp.png",
    "https://cdn.alemfm.com/Documents/alem_fm/images/2016/02/01/9f72ad56-9bf9-49d6-99bf-484bd210f169.jpg",
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
      <Text><Text style={DetayStyle.text}>Açıklama: </Text> Bugüne kadar yayınladığı albümleriyle yeni jenerasyonun Türk pop/rock müziğinin 
        en önemli temsilcilerinden biri haline gelen şarkı yazarı, besteci ve müzisyen Mabel Matiz, sevenleriyle buluşuyor. 
        Kendi adını taşıyan ilk albümü yayınlanır yayınlanmaz çok geniş bir kitleye ulaşan Mabel Matiz, dinleyicileri ve Türkiye’nin önde gelen müzik eleştirmenleri tarafından ülkemizin en fazla gelecek vadeden genç müzisyenleri arasında gösterilmiştir. 2011 yılında yapılan değerlendirmelerde ilk albümü, yılın en iyi ilk 10 albümü arasında gösterilmiş, albümde yer alan “Arafta”, “Söylese O Ben Söyleyemem”, “Kül Hece”, “Filler 
        ve Çimen” ve “Barışırsa Ruhum” adlı şarkılara çekilen video klipler büyük beğeni toplamıştır.</Text>

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