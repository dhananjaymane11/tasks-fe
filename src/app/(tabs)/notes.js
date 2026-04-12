import { View, Text, StyleSheet } from 'react-native';

export default function Notes() {
  return (
    <View style={styles.container}>
      <Text>Tab [Notes]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
