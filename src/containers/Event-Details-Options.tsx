import { Box } from "@/components/Box";
import { EventOptionItem } from "@/components/Event-Option-Item";
import { useAppTheme } from "@/theme/useAppTheme";
import { ScrollView } from "react-native";

export const EventDetailsOptions = () => {
  const { spacing } = useAppTheme();

  return (
    <Box paddingHorizontal="s16" paddingBottom="s20">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: "row",
          alignItems: "center",
          gap: spacing.s20,
        }}
      >
        <EventOptionItem
          label="Chat"
          iconName="chatbubble-outline"
          onPress={() => {}}
        />
        <EventOptionItem
          label="Participantes"
          iconName="people-outline"
          onPress={() => {}}
        />
        <EventOptionItem
          label="Localização"
          iconName="location-outline"
          onPress={() => {}}
        />
        <EventOptionItem
          label="Cancelar"
          iconName="close-outline"
          iconColor="background"
          exit
          onPress={() => {}}
        />
      </ScrollView>
    </Box>
  );
};
