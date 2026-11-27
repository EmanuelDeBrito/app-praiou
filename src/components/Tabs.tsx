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
  return (
    <Box flexDirection={"row"} alignItems={"center"}>
      <Pressable
        style={[
          { flex: 1 },
          tabSelected === firstTabLabel ? { opacity: 1 } : { opacity: 0.3 },
        ]}
        onPress={() => onPress(firstTabLabel)}
      >
        <Box>
          <Text variant="placeholder" paddingVertical="s20" textAlign="center">
            {firstTabLabel}
          </Text>
          <Box width={"100%"} height={2.5} backgroundColor="text" />
        </Box>
      </Pressable>
      <Pressable
        style={[
          { flex: 1 },
          tabSelected === secondTabLabel ? { opacity: 1 } : { opacity: 0.3 },
        ]}
        onPress={() => onPress(secondTabLabel)}
      >
        <Box>
          <Text variant="placeholder" paddingVertical="s20" textAlign="center">
            {secondTabLabel}
          </Text>
          <Box width={"100%"} height={2.5} backgroundColor="text" />
        </Box>
      </Pressable>
    </Box>
  );
};
