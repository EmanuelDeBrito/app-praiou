import { useAppTheme } from "@/theme/useAppTheme";
import { useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { Box, BoxProps } from "./Box";
import { Text } from "./Text";

type Props = {
  label: string;
} & Pick<TextInputProps, "placeholder" | "value" | "onChangeText">;

export const SearchInput = ({
  label,
  placeholder,
  value,
  onChangeText,
}: Props) => {
  const { opacity, colors, textVariants } = useAppTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Box gap="s6">
      <Text variant="label">{label}</Text>
      <Box
        {...boxStyle}
        style={{ borderColor: isFocused ? colors.text : opacity.placeholder }}
      >
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={opacity.placeholder}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            flexShrink: 1,
            width: "100%",
            height: "100%",
            ...textVariants.placeholder,
          }}
        />
      </Box>
    </Box>
  );
};

const boxStyle: BoxProps = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: "s10",
  paddingVertical: "s16",
  paddingHorizontal: "s10",
  borderWidth: 1.2,
  borderRadius: "b5",
};
