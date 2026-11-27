import { useAppTheme } from "@/theme/useAppTheme";
import { Image } from "react-native";
import { Box } from "./Box";
import { Text } from "./Text";

type Props = {
  avatar: number;
  name: string;
  email: string;
};

export const ProfileAvatar = ({ avatar, name, email }: Props) => {
  const { borderRadii } = useAppTheme();

  return (
    <Box alignItems={"center"} gap="s14" style={{ marginTop: -80 }}>
      <Image
        style={{ width: 160, height: 160, borderRadius: borderRadii.rounded }}
        source={avatar}
        resizeMode="cover"
      />

      <Box alignItems={"center"} gap="s4">
        <Text variant="title25">{name}</Text>
        <Text variant="text16" opacity={0.4}>
          {email}
        </Text>
      </Box>
    </Box>
  );
};
