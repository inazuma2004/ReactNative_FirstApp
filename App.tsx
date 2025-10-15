import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f6f7fb" />


      <View style={styles.header}>
        <Image
          source={require('./assets/emsi.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.schoolName}>
          Student Card App{'\n'}EMSI CENTRE
        </Text>
      </View>


      <View style={styles.info}>
        <Text style={styles.label}>
          Nom : <Text style={styles.value}>TENSAOUI</Text>
        </Text>
        <Text style={styles.label}>
          Prénom : <Text style={styles.value}>ALI</Text>
        </Text>
        <Text style={styles.label}>
          Année universitaire : <Text style={styles.value}>2025 / 2026</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
  },
  schoolName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0891b2',
    letterSpacing: 1,
    textAlign: 'center',
  },
  info: {
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: '500',
  },
  value: {
    fontSize: 17,
    color: '#2563eb',
    fontWeight: 'bold',
  },
});