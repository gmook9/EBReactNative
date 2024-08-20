import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LinearGradient } from 'expo-linear-gradient';

export default function TimelineScreen() {
  return (
    <ThemedView style={styles.container}>
      <LinearGradient
        colors={['#FF7E5F', '#FEB47B']} // Sunset gradient (Orange to Pink)
        style={styles.background}
      />
      <ThemedText type="title" style={styles.title}>Timeline</ThemedText>

      <View style={styles.timeline}>
        <View style={styles.timelineItem}>
          <View style={styles.timelineDot} />
          <View style={styles.timelineContent}>
            <ThemedText style={styles.timelineDate}>Dec 2019</ThemedText>
            <ThemedText style={styles.timelineEvent}>Started Enchanting Butterfly</ThemedText>
          </View>
        </View>
        <View style={styles.timelineItem}>
          <View style={styles.timelineDot} />
          <View style={styles.timelineContent}>
            <ThemedText style={styles.timelineDate}>Nov 2023</ThemedText>
            <ThemedText style={styles.timelineEvent}>Started Stardelic</ThemedText>
          </View>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  timeline: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderLeftWidth: 2,
    borderLeftColor: '#FFFFFF',
    paddingLeft: 20,
    marginTop: 10,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    left: -6,
  },
  timelineContent: {
    marginLeft: 20,
  },
  timelineDate: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  timelineEvent: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
