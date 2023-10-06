import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AlbumCard = ({ imagen, titulo, cantante }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imagen }} style={styles.image} />
      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.artist}>{cantante}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: 150,
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 14,
  },
});

export default AlbumCard;
