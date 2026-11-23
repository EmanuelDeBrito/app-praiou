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
          height: 70,
          paddingTop: 6,
          backgroundColor: colors.yellow1,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          marginTop: 5,
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
            return (
              <Icon name={focused ? "home" : "home-outline"} color="text" />
            );
          },
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "Eventos",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name={focused ? "file-tray" : "file-tray-outline"}
                color="text"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="add-events"
        options={{
          title: "Criar Evento",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name={focused ? "add-circle" : "add-circle-outline"}
                color="text"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon name={focused ? "people" : "people-outline"} color="text" />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon name={focused ? "person" : "person-outline"} color="text" />
            );
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
