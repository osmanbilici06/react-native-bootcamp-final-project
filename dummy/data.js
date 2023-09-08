export const city = {
  AKSARAY: "Aksaray",
  ANKARA: "Ankara",
  ISTANBUL: "Istanbul",
  BURDUR: "Burdur",
};

export const place = {
  istanbul: {
    name: "İstanbul",
    city: city.ISTANBUL,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
   
  },
  Ankara: {
    name: "Ankara",
    city: city.ANKARA,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
   
  },
  AKSARAY: {
    name: "Aksaray",
    city: city.AKSARAY,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
   
  },
  VAN: {
    name: "Van",
    city: city.VAN,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
   
  },
  BURDUR: {
    name: "Burdur",
    city: city.BURDUR,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
   
  },
};

export const type = {
  CONCERT: "Konser",
  THEATER: "Tiyatro",
  PAST: "Etkinlik",
};

export const events = [
  {
    type: type.CONCERT,
    title: "Mabel Matiz",
    date: "23.09.2023",
    place: place.Ankara,
    description:
      "Mabel Matiz, 29 Eylül Cuma akşamı Ankara CerModern’de yoğun istek üzerine bir kez daha Ankaralı sevenleriyle buluşuyor! Bugüne kadar yayınladığı albümleriyle yeni jenerasyonun Türk pop/rock müziğinin en önemli temsilcilerinden biri haline gelen şarkı yazarı, besteci ve müzisyen Mabel Matiz, sevenleriyle buluşuyor.",
    image: "https://cdn.karar.com/news/1290711.jpg",
    images: [
      "https://www.rudaw.net/s3/rudaw.net/ContentFiles/730426Image1.jpg?version=5110496",
      "https://i.hbrcdn.com/haber/2023/07/12/mabel-matiz-yeni-albumu-ne-zaman-mabel-matiz-16109927_9350_amp.jpg",
      "https://i.ytimg.com/vi/siSlPpH9m-4/maxresdefault.jpg",
    ],
  },
  {
    type: type.CONCERT,
    title: "Ceza",
    date: "22.09.2023",
    place: place.Ankara,
    description: "Türk rap müziğinin sevilen isimlerinden biri olarak, YBY Woods/Kemerburgaz Kent Ormanı'nda hayranlarıyla buluşacak. Konseri bekleyenler, Ceza'ın son albümünde yer alan başarılı besteleriyle birlikte, unutulmaz şarkılarını da yinelemesi için sabırsızlanıyorlar. Konserin organizasyonu ise, özenle planlanan bir ekip tarafından gerçekleştirilmektedir.",
    category: city.ANKARA,
    image: "https://www.bifikir.com/images/content/ceza_jar0.jpg",
    images: [
      "https://www.bifikir.com/images/content/ceza_jar0.jpg",
      "https://www.istdergi.com/index.php/sites/default/files/styles/banner_image/public/2021-11/DSC00220__.jpg.webp?itok=AkeMxRCj",
      "https://i.ytimg.com/vi/ymXWFJO4ru0/maxresdefault.jpg"
    ],
  },
  {
    type: type.CONCERT,
    title: "Ceylan Koynat",
    date: "21.09.2023",
    place: place.AKSARAY,
    description: "Çocukluğundan itibaren müziğe büyük ilgi duyduğunu belirten Ceylan koynat, lise yıllarında Çağdaş Müzik Merkezi'nde Timur Selçuk'tan şan dersleri almıştır. 2012'de mezun olduğu Boğaziçi Üniversitesi Sosyoloji eğitiminin ardından 2017'ye kadar Baba Zula ile vokalist olarak çalışmıştır. 2017’de solo kariyerine başlayan Melike Şahin; bugüne kadar “Deli Kan”, “Tutuşmuş Beraber”, “Kara Orman”, “Sevmek Suçsa Suçluyum”, “Sakla Beni” ve “Geri Ver” gibi birçok teklisini yayımladı.",
    category: city.AKSARAY,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8A1TTvNbWc0iQDhRBYenQGAcAzWrys9l9Mg&usqp=CAU",
    images: [
      "https://cemre.com/wp-content/uploads/600x400-O4VG12R9DS.webp",
      "https://www.begonya.com/wp-content/uploads/2021/09/ceylan-koynat-kimdir.jpg",
      "https://www.fenoreporter.com/uploads/news/67747.jpg"
    ],
  },
  {
    type: type.CONCERT,
    title: "Derya Uluğ",
    date: "20.09.2023",
    place: place.AKSARAY,
    description: "Melankolik ve romantik duyguların kıyısında gezinen, yalın sözler ve vurucu melodileri yer yer akustik piyano ve vokal performanslarıyla ve kimi zaman da elektronik düzenlemelerle buluşturan müziğine Lirik Pop adını veren Derya lise yıllarında kendi şarkılarını yazmaya ve 2018 sonbaharında bu şarkıları dinleyiciyle paylaşmaya başladı. Mart 2020’de sözü ve müziği kendisine ait şarkılardan oluşan ilk solo albümü Kapalı Gözlerle'yi yayınladı. 2021’de Türkçe Pop’un kültleşmiş eserlerinden Tutsak’ı yeniden yorumlayarak daha geniş bir dinleyici kitlesine ulaştı.",
    category: city.AKSARAY,
    image: "https://i.ytimg.com/vi/yJVwNyVUOvc/maxresdefault.jpg",
    images: [
      "https://cdn.powergroup.com.tr/image/0x0/powerturk/u/Contents/d/e/derya-ulug-web-foto-1688474550.png",
      "https://imgrosetta.mynet.com.tr/file/15333970/15333970-1200x824.jpg",
      "https://muskarahabercom.teimg.com/crop/1280x720/muskarahaber-com/uploads/2022/12/1-kopyala-4.JPG"
    ],
  },
  {
    type: type.THEATER,
    title: "Şener Şen",
    date: "19.09.2023",
    place: place.istanbul,
    category: city.ISTANBUL,
    description: "Cumhuriyet tarihinde görülmüş en büyük işçi hareketi olan 15-16 Haziran 1970 olaylarının zengin bir ailenin mutfağına yansıması. Hizmet etmekten başka bir şey düşünemeyen köşk çalışanları da gözlerinin önünde gelişen olaylar karşısında kayıtsız kalamayacaktır. Toplumdaki değişimden her biri kendi payına düşeni alacaktır.",
    image: "https://i.sozcucdn.com/wp-content/uploads/2019/03/iecrop/sener-sen_16_9_1553265880.jpg?w=900&h=900&mode=crop&scale=both",
    images: [
      "https://s01.diziler.com/630x250/23-07/24/zenginmutfagi2.jpg?0.5992114781377158?250",
      "https://www.diken.com.tr/wp-content/uploads/2023/07/20230724-zengin-mutfagi.jpg",
      "https://cdnuploads.aa.com.tr/uploads/Contents/2023/07/24/thumbs_b_c_f2c84095bca29e32019f4110e987aec4.jpg?v=160239"
    ],
  },
  {
    type: type.THEATER,
    title: "Timur Acar",
    date: "18.09.2023",
    place: place.istanbul,
    description: "Moda sahnesi, yeni bir William Shakespeare oyunu ile seyirci karşısına çıkıyor. Dilimize daha önce “Hırçın Kız” olarak çevrilen ve sahnelenen “The Taming Of The Shrew” bu edisyonunda, çevirmen Emine Ayhan tarafından “Şirreti Evcilleştirmek” olarak çevrildi. moda sahnesi’nin yıllardır birlikte oynayan oyuncuları tarafından oynanan oyun, yönetmen Kemal Aydoğan’ın rejisi ile sahneleniyor.",
    category: city.ISTANBUL,
    image: "https://i.gazeteduvar.com.tr/storage/files/images/2023/01/27/whatsapp-image-2023-01-27-at-14-1i2N.jpg",
    images: [
      "https://www.gazetekadikoy.com.tr/Uploads/gazetekadikoy.com.tr/202301111101391-img.jpg",
      "https://tiyatrodergisi.com.tr/wp-content/uploads/2023/01/OK019892-1170x780.jpg",
      "https://i.gazeteduvar.com.tr/storage/files/images/2023/01/27/whatsapp-image-2023-01-27-at-14-A8KR.jpg"
    ],
  },
  {
    type: type.THEATER,
    title: "Timur Acar",
    date: "18.09.2023",
    place: place.istanbul,
    category: city.BURDUR,
    description: "Yaşadıklarıyla baş etmeye çalışan bir adamın hatıra defterinde yazanları konu alan Bir Delinin Hatıra Defteri,  Erdal Beşikçioğlu'nun muhteşem performansıyla izleyici ile buluşuyor. Bir delinin değil, adım adım deliliğe giden, yaşadığı gerçeklerle baş edemeyen bir adamın hatıra defteri...",
    category: city.BURDUR,
    image: "https://media-cdn.t24.com.tr/media/library/2021/06/1624887769141-ekran-resmi-2021-06-28-16.42",
    images: [
      "https://gaiadergi.com/wp-content/uploads/2018/05/Bir-Delinin-Hatira-Defteri-8.jpg",
      "https://cdn.otuzbeslik.com/img/etkinlik/bir-delinin-hatira-defteri-erdal-besikcioglu.event.skqtitqd1nsz.jpg",
      "https://i.ytimg.com/vi/Iz2KxmsBw1M/maxresdefault.jpg"
    ],
  },
  // Süresi geçmiş veriler aşagıda
  {
    type: type.CONCERT,
    title: "Murat Boz",
    date: "25.08.2023",
    place: place.Ankara,
    category: city.ANKARA,
    image: "https://paradiseproduction.com.tr/wp-content/uploads/2021/07/muratboz.jpg",
    
  },
  {
    type: type.CONCERT,
    title: "Tarkan",
    date: "26.08.2023",
    place: place.istanbul,
    category: city.CONCERT,
    image: "https://i.sozcucdn.com/wp-content/uploads/2023/02/15/tarkan.gulsen.sozcu__16_9_1661514101-1.jpeg?w=1200&h=900&mode=crop&scale=both",
    
  },
  {
    type: type.CONCERT,
    title: "Zara",
    date: "28.08.2023",
    place: place.VAN,
    category: city.CONCERT,
    image: "https://rayhaber.com/wp-content/uploads/2022/05/Sarkici-Zara-Kimdir-Zara-Kac-Yasinda-ve-Nereli-Gercek-Adi-Ne.jpg",
    
  },
  {
    type: type.CONCERT,
    title: "Hande Yener",
    date: "27.08.2023",
    place: place.BURDUR,
    category: city.CONCERT,
    image: "https://isbh.tmgrup.com.tr/sbh/2022/03/06/650x344/hande-yener-kocaelinin-izmit-ilcesinde-acilis-yapa-1646582426425.jpg",
    
  },
  
 
];

export default {
  city,
  events,
  place,
  type,
};
