import { Theme } from "@/theme/theme";
import { createText } from "@shopify/restyle";

export const Text = createText<Theme>();
export type TextProps = React.ComponentProps<typeof Text>;
