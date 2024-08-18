import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const screenWidth = Dimensions.get('window').width; // Get screen width

export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.title} type="title">View our shops</ThemedText>
      
      <ExternalLink href="https://enchantingbutterfly.com/">
        <ThemedView style={[styles.card, styles.cardBlue]}>
          <ThemedText style={styles.cardText}>Official Enchanting Butterfly Website</ThemedText>
        </ThemedView>
      </ExternalLink>

      <ExternalLink href="https://www.grailed.com/enchantingbutterfly">
        <ThemedView style={[styles.card, styles.cardLightBlue]}>
          <ThemedText style={styles.cardText}>Shop Enchanting Butterfly on Grailed</ThemedText>
        </ThemedView>
      </ExternalLink>

      <ExternalLink href="https://www.depop.com/st4rdelic/">
        <ThemedView style={[styles.card, styles.cardIndigo]}>
          <ThemedText style={styles.cardText}>Shop Stardelic on Depop</ThemedText>
        </ThemedView>
      </ExternalLink>

      <ExternalLink href="https://st4rdelic.com/">
        <ThemedView style={[styles.card, styles.cardDarkIndigo]}>
          <ThemedText style={styles.cardText}>Official Stardelic Website</ThemedText>
        </ThemedView>
      </ExternalLink>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    padding: 16,
  },
  title: {
    color: '#003366',
    fontSize: 24,
    marginBottom: 16,
  },
  card: {
    width: screenWidth * 0.9,
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  cardBlue: {
    backgroundColor: '#004c99', 
  },
  cardLightBlue: {
    backgroundColor: '#0073e6',
  },
  cardIndigo: {
    backgroundColor: '#4B0082',
  },
  cardDarkIndigo: {
    backgroundColor: '#2c003c',
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
