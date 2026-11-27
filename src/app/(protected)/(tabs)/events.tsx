import { Container } from "@/components/Container";
import { Tabs } from "@/components/Tabs";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const EventsScreen = () => {
  const { top } = useSafeAreaInsets();
  const [tabSelected, setTabSelected] = useState("Meus Eventos");

  return (
    <Container style={{ paddingTop: top, paddingHorizontal: 0 }}>
      <Tabs
        tabSelected={tabSelected}
        firstTabLabel="Meus Eventos"
        secondTabLabel="Minhas Inscrições"
        onPress={setTabSelected}
      />
    </Container>
  );
};

export default EventsScreen;
