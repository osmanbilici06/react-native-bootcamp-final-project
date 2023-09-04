// Content.js
import React from 'react';
import ContentComponent from './ContentComponent';
import styles from './ContentStyle';
import contentImg from './ContentImg/indir.jpeg';

const Content = () => {
  const data = [
    { 
      type:'event',
      title: 'Taladro', 
      description: '30.08.2023', 
      city:'Aksaray',
      kategory:'Konser',
      image: 'contentImg', 
      imageStyles: styles.Image_Container,
    },
    { 
      type:'concert',
      title: 'semicenk', 
      description: '30.08.2023', 
      city:'Ankara',
      kategory:'Konser',
      image: contentImg, 
      imageStyles: styles.Image_Container,
    },
    { 
      type:'concert',
      title: 'Ceza', 
      description: '30.08.2024', 
      city:'İstanbul',
      kategory:'Tiyatro',
      image: contentImg, 
      imageStyles: styles.Image_Container,
    },
  ];

  return <ContentComponent data={data} />;
};

export default Content;
