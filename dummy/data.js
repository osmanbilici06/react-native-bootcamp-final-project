// Sabitler oluşturma
export const place = {
  AKSARAY: "Aksaray",
  ANKARA: "Ankara",
  ISTANBUL: "İstanbul",
};

export const city = {
  EVENT: "event",
  CONCERT: "concert",
  // Diğer tipleri buraya ekleyebilirsiniz.
};

export const type = {
  CONCERT: "Konser",
  THEATER: "Tiyatro",
  EVENT: "Etkinlik"
  // Diğer tipleri buraya ekleyebilirsiniz.
};

// Verilerinizi güncelleme
export const events = [
  {
    type: type.CONCERT,
    title: "Taladro",
    description: "30.08.2023",
    city: place.AKSARAY,
    category: city.EVENT,
    image: "https://paradiseproduction.com.tr/wp-content/uploads/2021/08/ceza.png"
  },
  {
    type: type.CONCERT,
    title: "semicenk",
    description: "30.08.2023",
    city: place.ANKARA,
    category: city.EVENT,
    image: "https://paradiseproduction.com.tr/wp-content/uploads/2021/08/ceza.png"
    
  },
  {
    type: type.THEATER,
    title: "Jay Jay Jhanson",
    description: "30.08.2024",
    city: place.ISTANBUL,
    category: city.THEATER,
    image: "https://agenda.elcorreo.com/media/eventos/0/0/4/6/6/466467_1.jpg"

  },
];

export default {
    city,
    events,
    place,
    type,
    
}