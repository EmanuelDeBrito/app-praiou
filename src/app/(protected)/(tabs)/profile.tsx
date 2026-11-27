import { Box } from "@/components/Box";
import { Thumbnail } from "@/components/Thumbnail";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <Box style={{ paddingTop: top }}>
      <Thumbnail firstColor="yellow2" secondColor="yellow3" />
    </Box>
  );
};

export default ProfileScreen;
