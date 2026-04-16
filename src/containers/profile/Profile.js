import { View, Text, StyleSheet, Button } from 'react-native';

export default function Profile({ onLogout }) {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title="Logout" onPress={onLogout} />
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
