import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <LinearGradient
        colors={['#FF69B4', '#8A2BE2']} // Pink to Blue gradient
        style={styles.background}
      />
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
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    width: 150, 
    height: 150, 
    marginBottom: 20,
  },
});
