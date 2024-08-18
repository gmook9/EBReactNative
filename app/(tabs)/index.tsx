import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Image 
        source={require('../../assets/images/eb_butterfly.png')}
        style={styles.image} 
      />
      <ThemedText type="title">Enchanting Butterfly</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000FF',
  },
  image: {
    width: 150, 
    height: 150, 
    marginBottom: 20,
  },
});
