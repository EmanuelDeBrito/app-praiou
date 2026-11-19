import { Redirect, Stack } from "expo-router";

const isLoggedIn: boolean = true;

const ProtectedLayout = () => {
  if (isLoggedIn) {
    return <Redirect href={"/sign-in"} />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default ProtectedLayout;
