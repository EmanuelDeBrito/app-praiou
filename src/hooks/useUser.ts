import { users } from "@/data/users";

export const useUser = (userId: number) => {
  const user = users.find((user) => user.id === userId);

  return { user };
};
