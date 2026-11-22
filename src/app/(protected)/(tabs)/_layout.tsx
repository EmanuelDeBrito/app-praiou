import { Icon } from "@/components/Icon";
import { useAppTheme } from "@/theme/useAppTheme";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  const { colors } = useAppTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.text,
        tabBarStyle: {
          height: 65,
          paddingTop: 6,
          backgroundColor: colors.yellow1,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontFamily: "SpaceGroteskMedium",
          fontSize: 12,
          color: colors.text,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => {
            return <Icon name={"fotos"} color="text" />;
          },
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "Eventos",
          tabBarIcon: ({ focused }) => {
            return <Icon name={"fotos"} color="text" />;
          },
        }}
      />
      <Tabs.Screen
        name="add-events"
        options={{
          title: "Criar Evento",
          tabBarIcon: ({ focused }) => {
            return <Icon name={"fotos"} color="text" size={28} />;
          },
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          tabBarIcon: ({ focused }) => {
            return <Icon name={"fotos"} color="text" />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => {
            return <Icon name={"fotos"} color="text" />;
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
