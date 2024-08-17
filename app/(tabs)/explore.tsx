import { StyleSheet } from 'react-native';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} type="title">Enchanting Butterfly</ThemedText>
      <ExternalLink href="https://enchantingbutterfly.com/">
        <ThemedText style={styles.link} type="link">Visit Enchanting Butterfly</ThemedText>
      </ExternalLink>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6', // Lighter blue background
  },
  title: {
    color: '#003366', // Darker blue text for title
  },
  link: {
    color: '#004c99', // Medium blue text for link
  },
});
