import { Avatar } from "../components/Avatar";
import { Box } from "../components/Box";
import { Climate } from "../components/Climate";

export const Header = () => {
  return (
    <Box
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      height={65}
      paddingHorizontal="s16"
      paddingVertical="s12"
      backgroundColor="yellow1"
    >
      <Avatar image="" name="Wally West" />

      <Climate />
    </Box>
  );
};
