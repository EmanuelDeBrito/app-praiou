import { Box } from "@/components/Box";
import { ProfileAvatar } from "@/components/Profile-Avatar";
import { Thumbnail } from "@/components/Thumbnail";
import { useUser } from "@/hooks/useUser";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();

  const { user } = useUser(1);

  if (!user) {
    return null;
  }

  return (
    <Box style={{ paddingTop: top }}>
      <Thumbnail />
      <ProfileAvatar avatar={user.avatar} name={user.name} email={user.email} />
    </Box>
  );
};

export default ProfileScreen;
