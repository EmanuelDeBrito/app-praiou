import { Redirect, Stack } from "expo-router";

const isLoggedIn: boolean = false;

const ProtectedLayout = () => {
  if (isLoggedIn) {
    return <Redirect href={"/sign-in"} />;
  }

  return (
    <Stack
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="beach/[id]" />
      <Stack.Screen name="events/[id]" />
      <Stack.Screen name="event-details/[id]" />
    </Stack>
  );
};

export default ProtectedLayout;
