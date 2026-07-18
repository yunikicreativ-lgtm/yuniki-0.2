import { Link, Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.title}>404</Text>
        <Text style={styles.text}>Screen not found.</Text>
        <Link href="/" style={styles.link}>Return home</Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#05070A',
  },
  title: {
    color: '#E6EDF3',
    fontSize: 48,
    fontWeight: '700',
    fontFamily: 'SpaceMono',
  },
  text: {
    color: '#8B97A5',
    fontSize: 14,
    marginTop: 8,
  },
  link: {
    color: '#00E5C7',
    fontSize: 14,
    marginTop: 16,
  },
});
