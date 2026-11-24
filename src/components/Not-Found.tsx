import { Image } from "react-native";
import { Box } from "./Box";
import { Text } from "./Text";

type Props = {
  label: string;
};

export const NotFound = ({ label }: Props) => {
  return (
    <Box alignItems={"center"} justifyContent={"center"} gap="s18" mt="s16">
      <Image
        source={require("@/assets/images/nao-encontrado.png")}
        style={{
          width: 190,
          height: 220,
        }}
        resizeMode="cover"
      />
      <Text variant="notFound" opacity={0.5}>
        {label}
      </Text>
    </Box>
  );
};
