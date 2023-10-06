import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const SongList = ({ songs }) => {
  return (
    <ScrollView style={styles.container}>
      {songs.map((song, index) => (
        <View key={index} style={styles.song}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  song: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 14,
  },
});

export default SongList;
