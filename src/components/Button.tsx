import { Pressable } from "react-native";
import { Box } from "./Box";
import { Text } from "./Text";

type Props = {
  label: string;
  onPress: () => void;
};

export const Button = ({ label, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        height={50}
        backgroundColor="text"
        borderRadius="b10"
      >
        <Text variant="bold25">{label}</Text>
      </Box>
    </Pressable>
  );
};
