import { Box } from "@/components/Box";
import { ProfileUserInfo } from "@/containers/Profile-User-Info";
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
      <ProfileUserInfo
        userAvatar={user.avatar}
        userName={user.name}
        userEmail={user.email}
      />
    </Box>
  );
};

export default ProfileScreen;
