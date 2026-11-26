import { PropsWithChildren } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

type Props = {
  isOpen: SharedValue<boolean>;
  duration?: number;
  onPress: () => void;
};

export const BottomSheet = ({
  children,
  isOpen,
  duration = 700,
  onPress,
}: PropsWithChildren<Props>) => {
  // Altura do conteúdo
  const height = useSharedValue(0);

  // Variável que determinará a altura do componente de acordo com a situação da variável isOpen
  const progress = useDerivedValue(() =>
    withTiming(isOpen.value ? 0 : 1, { duration: duration }),
  );

  // Estilo animado do plano de fundo preto
  const backgroundAnimatedStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: isOpen.value
      ? 1
      : withDelay(duration, withTiming(-1, { duration: 0 })),
  }));

  // Estilo animado do conteúdo do bottom sheet
  const contentAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: progress.value * height.value }],
    zIndex: 2,
  }));

  return (
    <>
      <Animated.View style={[styles.background, backgroundAnimatedStyle]}>
        <Pressable style={{ flex: 1 }} onPress={onPress} />
      </Animated.View>

      <Animated.View
        style={[styles.content, contentAnimatedStyle]}
        onLayout={(event) => {
          height.value = event.nativeEvent.layout.height;
        }}
      >
        {children}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  content: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
