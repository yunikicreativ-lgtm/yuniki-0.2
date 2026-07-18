import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { Shield, Power, Activity, Users, Heart, Eye, AlertTriangle } from 'lucide-react-native';
import { theme } from '../../components/Theme';
import { Screen, Header, Card, Stat, PrimaryButton, Pill } from '../../components/ui';

export default function ProtectScreen() {
  const [active, setActive] = useState(false);
  const [bpm, setBpm] = useState(72);
  const spin = useState(new Animated.Value(0))[0];

  useEffect(() => {
    if (!active) return;
    const loop = Animated.loop(
      Animated.timing(spin, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    );
    loop.start();
    return () => loop.stop();
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setBpm((b) => Math.min(110, Math.max(64, b + (Math.random() > 0.5 ? 2 : -2))));
    }, 1400);
    return () => clearInterval(id);
  }, [active]);

  const rotate = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Screen>
      <Header
        title="SENTINEL"
        subtitle="PERSONAL PROTECTION"
        right={
          <Pill
            label={active ? 'ACTIVE' : 'STANDBY'}
            color={active ? theme.colors.primary : theme.colors.textFaint}
            glow
          />
        }
      />

      <View style={styles.radarWrap}>
        <Animated.View
          style={[styles.radar, active && { transform: [{ rotate }] }]}
        >
          <View style={styles.radarRing} />
          <View style={styles.radarRing2} />
          <View style={styles.radarSweep} />
          <View style={styles.radarCore}>
            <Shield
              size={36}
              color={active ? theme.colors.primary : theme.colors.textFaint}
              strokeWidth={1.8}
            />
          </View>
        </Animated.View>
        <Text style={styles.radarLabel}>
          {active ? 'SCANNING ENVIRONMENT' : 'PROTECTION STANDBY'}
        </Text>
      </View>

      <Card style={styles.statsCard}>
        <View style={styles.statRow}>
          <View style={styles.statCell}>
            <Activity size={16} color={theme.colors.primary} strokeWidth={2} />
            <Stat label="AI ACCURACY" value="99.4%" accent={theme.colors.primary} />
          </View>
          <View style={styles.statCell}>
            <Users size={16} color={theme.colors.textDim} strokeWidth={2} />
            <Stat label="MESH NODES" value="12" />
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.statRow}>
          <View style={styles.statCell}>
            <Heart size={16} color={theme.colors.danger} strokeWidth={2} />
            <Stat label="HEART RATE" value={`${bpm} BPM`} accent={theme.colors.danger} />
          </View>
          <View style={styles.statCell}>
            <Eye size={16} color={theme.colors.textDim} strokeWidth={2} />
            <Stat label="GHOST MODE" value="READY" />
          </View>
        </View>
      </Card>

      <View style={styles.alertRow}>
        <AlertTriangle size={14} color={theme.colors.warning} strokeWidth={2} />
        <Text style={styles.alertText}>
          Tap volume key 5x to trigger Ghost Protocol
        </Text>
      </View>

      <View style={styles.actionWrap}>
        {active ? (
          <PrimaryButton
            label="DEACTIVATE SENTINEL"
            onPress={() => setActive(false)}
          />
        ) : (
          <PrimaryButton
            label="ACTIVATE PROTECTION"
            onPress={() => setActive(true)}
          />
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  radarWrap: {
    alignItems: 'center',
    marginVertical: theme.spacing(4),
  },
  radar: {
    width: 240,
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radarRing: {
    position: 'absolute',
    width: 240,
    height: 240,
    borderRadius: 120,
    borderWidth: 1,
    borderColor: theme.colors.borderStrong,
  },
  radarRing2: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  radarSweep: {
    position: 'absolute',
    width: 240,
    height: 240,
    borderRadius: 120,
    borderTopColor: theme.colors.primary,
    borderTopWidth: 2,
    borderRightColor: 'transparent',
    borderRightWidth: 0,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    opacity: 0.7,
  },
  radarCore: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: theme.colors.bgElevated,
    borderWidth: 1,
    borderColor: theme.colors.borderStrong,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radarLabel: {
    marginTop: theme.spacing(4),
    color: theme.colors.textDim,
    fontSize: 11,
    letterSpacing: 3,
    fontFamily: theme.font.mono,
  },
  statsCard: {
    gap: theme.spacing(3),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(3),
  minHeight: 180,
  justifyContent: 'center',
  padding: theme.spacing(4),
  gap: theme.spacing(3),
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCell: {
    flex: 1,
    gap: 8,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
  },
  alertRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: theme.spacing(3),
    paddingHorizontal: theme.spacing(1),
  },
  alertText: {
    color: theme.colors.textFaint,
    fontSize: 11,
    fontFamily: theme.font.mono,
  },
  actionWrap: {
    marginBottom: theme.spacing(4),
  },
});
