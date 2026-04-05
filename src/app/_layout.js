import { Stack } from 'expo-router';
import { getStoredToken } from '../api/store';

export default function RootLayout() {
  let token = getStoredToken();

  return (
    <Stack>
      <Stack.Protected guard={token}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={!token}>
        <Stack.Screen name="login/index" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}
