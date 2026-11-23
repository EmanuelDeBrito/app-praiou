import theme from "@/theme/theme";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceGroteskLight: require("../../assets/fonts/SpaceGrotesk-Light.ttf"),
    SpaceGroteskRegular: require("../../assets/fonts/SpaceGrotesk-Regular.ttf"),
    SpaceGroteskMedium: require("../../assets/fonts/SpaceGrotesk-Medium.ttf"),
    SpaceGroteskSemiBold: require("../../assets/fonts/SpaceGrotesk-SemiBold.ttf"),
    SpaceGroteskBold: require("../../assets/fonts/SpaceGrotesk-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(protected)" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" />
      </Stack>
      <StatusBar barStyle="dark-content" />
    </ThemeProvider>
  );
};

export default RootLayout;
