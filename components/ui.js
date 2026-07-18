import { View, Text, StyleSheet, Pressable } from 'react-native';
import { theme } from './Theme';

export function Screen({ children, style }) {
  return <View style={[s.screen, style]}>{children}</View>;
}

export function Header({ title, subtitle, right }) {
  return (
    <View style={s.header}>
      <View>
        <Text style={s.headerTitle}>{title}</Text>
        {subtitle ? <Text style={s.headerSubtitle}>{subtitle}</Text> : null}
      </View>
      {right}
    </View>
  );
}

export function Card({ children, style }) {
  return <View style={[s.card, style]}>{children}</View>;
}

export function Stat({ label, value, accent }) {
  return (
    <View style={s.stat}>
      <Text style={s.statLabel}>{label}</Text>
      <Text style={[s.statValue, { color: accent || theme.colors.text }]}>
        {value}
      </Text>
    </View>
  );
}

export function PrimaryButton({ label, onPress, disabled }) {
  return (
    <Pressable onPress={onPress} disabled={disabled} style={({ pressed }) => [
      s.primaryBtn,
      pressed && s.btnPressed,
      disabled && s.btnDisabled,
    ]}>
      <Text style={s.primaryBtnLabel}>{label}</Text>
    </Pressable>
  );
}

export function GhostButton({ label, onPress, color }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [s.ghostBtn, pressed && s.btnPressed]}>
      <Text style={[s.ghostBtnLabel, { color: color || theme.colors.primary }]}>
        {label}
      </Text>
    </Pressable>
  );
}

export function Pill({ label, color, glow }) {
  return (
    <View style={[s.pill, { borderColor: color || theme.colors.borderStrong }]}>
      {glow ? <View style={[s.pillDot, { backgroundColor: color || theme.colors.textDim }]} /> : null}
      <Text style={[s.pillLabel, { color: color || theme.colors.textDim }]}>
        {label}
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    paddingHorizontal: theme.spacing(3),
    paddingTop: theme.spacing(5),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },
  headerTitle: {
    color: theme.colors.text,
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 1,
    fontFamily: theme.font.mono,
  },
  headerSubtitle: {
    color: theme.colors.textDim,
    fontSize: 11,
    letterSpacing: 2,
    marginTop: 2,
    fontFamily: theme.font.mono,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing(4),
  },
  stat: {
    gap: 4,
  },
  statLabel: {
    color: theme.colors.textFaint,
    fontSize: 10,
    letterSpacing: 1.5,
    fontFamily: theme.font.mono,
  },
  statValue: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: theme.font.mono,
  },
  primaryBtn: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing(3),
    borderRadius: theme.radius.md,
    alignItems: 'center',
    shadowColor: theme.colors.primary,
    shadowOpacity: 0.4,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 0 },
    elevation: 6,
  },
  ghostBtn: {
    paddingVertical: theme.spacing(3),
    borderRadius: theme.radius.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  btnPressed: { opacity: 0.7 },
  btnDisabled: { opacity: 0.4 },
  primaryBtnLabel: {
    color: '#03110E',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
    fontFamily: theme.font.mono,
  },
  ghostBtnLabel: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
    fontFamily: theme.font.mono,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 999,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  pillDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  pillLabel: {
    fontSize: 10,
    letterSpacing: 1.5,
    fontFamily: theme.font.mono,
  },
});
