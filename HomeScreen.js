import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import AlbumCard from './AlbumCard';
import SongList from './SongList';
import albumsByGenre from './data';

const HomeScreen = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <ScrollView horizontal={true}>
      {Object.keys(albumsByGenre).map((genre) => (
        <View key={genre}>
          {albumsByGenre[genre].map((album) => (
            <TouchableOpacity
              key={album.id}
              onPress={() => setSelectedAlbum(album)}
            >
              <AlbumCard
                imagen={album.imagen}
                titulo={album.titulo}
                cantante={album.cantante}
              />
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
    
    {selectedAlbum && (
      <SongList songs={selectedAlbum.songs} />
    )}
  );
};

export default HomeScreen;
