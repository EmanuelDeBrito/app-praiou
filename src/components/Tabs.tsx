import { Dispatch, SetStateAction } from "react";
import { Pressable } from "react-native";
import { Box } from "./Box";
import { Text } from "./Text";

type Props = {
  tabSelected: string;
  firstTabLabel: string;
  secondTabLabel: string;
  onPress: Dispatch<SetStateAction<string>>;
};

export const Tabs = ({
  tabSelected,
  firstTabLabel,
  secondTabLabel,
  onPress,
}: Props) => {
  const tabs = [firstTabLabel, secondTabLabel];

  return (
    <Box flexDirection={"row"} alignItems={"center"}>
      {tabs.map((label, key) => {
        const tabIsSelected = tabSelected === label;

        return (
          <Pressable
            key={key}
            style={[{ flex: 1, opacity: tabIsSelected ? 1 : 0.3 }]}
            onPress={() => onPress(label)}
          >
            <Box>
              <Text
                variant="placeholder"
                paddingVertical="s20"
                textAlign="center"
                numberOfLines={1}
              >
                {label}
              </Text>
              <Box width={"100%"} height={2.5} backgroundColor="text" />
            </Box>
          </Pressable>
        );
      })}
    </Box>
  );
};
