import { ProfileAvatar } from "@/components/Profile-Avatar";
import { Thumbnail } from "@/components/Thumbnail";

type Props = {
  userAvatar: number;
  userName: string;
  userEmail: string;
};

export const ProfileUserInfo = ({ userAvatar, userName, userEmail }: Props) => {
  return (
    <>
      <Thumbnail />
      <ProfileAvatar avatar={userAvatar} name={userName} email={userEmail} />
    </>
  );
};
