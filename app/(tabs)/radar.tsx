import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { Radar, Crosshair, Waves } from 'lucide-react-native';
import { theme } from '../../components/Theme';
import { Screen, Header, Card, Pill } from '../../components/ui';

const BLIPS = [
  { id: 1, angle: 35, dist: 0.55, type: 'ally', label: 'NODE-7' },
  { id: 2, angle: 120, dist: 0.78, type: 'ally', label: 'NODE-3' },
  { id: 3, angle: 200, dist: 0.4, type: 'alert', label: 'UNKNOWN' },
  { id: 4, angle: 290, dist: 0.7, type: 'ally', label: 'NODE-11' },
  { id: 5, angle: 75, dist: 0.92, type: 'neutral', label: 'CIVILIAN' },
];

export default function RadarScreen() {
  const [sweep, setSweep] = useState(0);
  const rotate = useState(new Animated.Value(0))[0];

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    );
    loop.start();
    const id = setInterval(() => setSweep((s) => (s + 1) % 360), 200);
    return () => { loop.stop(); clearInterval(id); };
  }, []);

  const rotateDeg = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Screen>
      <Header
        title="RADAR"
        subtitle="LIVE THREAT SCAN"
        right={<Pill label="SCAN" color={theme.colors.primary} glow />}
      />

      <View style={styles.radarContainer}>
        <Animated.View style={[styles.radarBase, { transform: [{ rotate: rotateDeg }] }]}>
          <View style={styles.sweepLine} />
        </Animated.View>
        <View style={styles.rings}>
          {[1, 0.66, 0.33].map((s, i) => (
            <View
              key={i}
              style={[styles.ring, { width: 300 * s, height: 300 * s, borderRadius: 150 * s }]}
            />
          ))}
        </View>
        <View style={styles.crosshair}>
          <View style={styles.crosshairH} />
          <View style={styles.crosshairV} />
        </View>
        {BLIPS.map((b) => {
          const rad = (b.angle * Math.PI) / 180;
          const x = Math.cos(rad) * 150 * b.dist;
          const y = Math.sin(rad) * 150 * b.dist;
          const color =
            b.type === 'alert' ? theme.colors.danger :
            b.type === 'ally' ? theme.colors.primary :
            theme.colors.textDim;
          return (
            <View
              key={b.id}
              style={[styles.blip, { left: 150 + x - 5, top: 150 + y - 5, backgroundColor: color }]}
            />
          );
        })}
        <View style={styles.centerDot} />
      </View>

      <View style={styles.legendRow}>
        <LegendItem color={theme.colors.primary} label="MESH ALLY" />
        <LegendItem color={theme.colors.danger} label="THREAT" />
        <LegendItem color={theme.colors.textDim} label="NEUTRAL" />
      </View>

      <Card style={styles.logCard}>
        <View style={styles.logHeader}>
          <Waves size={14} color={theme.colors.primary} strokeWidth={2} />
          <Text style={styles.logTitle}>SIGNAL LOG</Text>
          <Text style={styles.logCount}>{BLIPS.length} CONTACTS</Text>
        </View>
        <View style={styles.logList}>
          {BLIPS.map((b) => (
            <View key={b.id} style={styles.logRow}>
              <View style={[styles.logDot, {
                backgroundColor: b.type === 'alert' ? theme.colors.danger :
                  b.type === 'ally' ? theme.colors.primary : theme.colors.textFaint
              }]} />
              <Text style={styles.logLabel}>{b.label}</Text>
              <Text style={styles.logMeta}>
                {b.type.toUpperCase()} · {Math.round(b.dist * 100)}m
              </Text>
            </View>
          ))}
        </View>
      </Card>
    </Screen>
  );
}

function LegendItem({ color, label }) {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.legendDot, { backgroundColor: color }]} />
      <Text style={styles.legendLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  radarContainer: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginVertical: theme.spacing(4),
    position: 'relative',
  },
  radarBase: {
    width: 300,
    height: 300,
    position: 'absolute',
  },
  sweepLine: {
    position: 'absolute',
    top: 0,
    left: 150,
    width: 150,
    height: 150,
    borderRightColor: theme.colors.primary,
    borderRightWidth: 2,
    borderTopColor: 'rgba(0, 229, 199, 0.15)',
    borderTopWidth: 0,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    opacity: 0.8,
  },
  rings: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  crosshair: {
    position: 'absolute',
    width: 300,
    height: 300,
  },
  crosshairH: {
    position: 'absolute',
    top: 150,
    width: 300,
    height: 1,
    backgroundColor: theme.colors.border,
  },
  crosshairV: {
    position: 'absolute',
    left: 150,
    width: 1,
    height: 300,
    backgroundColor: theme.colors.border,
  },
  blip: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    shadowColor: theme.colors.primary,
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },
  centerDot: {
    position: 'absolute',
    top: 147,
    left: 147,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.text,
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendLabel: {
    color: theme.colors.textDim,
    fontSize: 10,
    letterSpacing: 1.5,
    fontFamily: theme.font.mono,
  },
  logCard: {
    gap: theme.spacing(2),
  },
  logHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logTitle: {
    color: theme.colors.text,
    fontSize: 12,
    letterSpacing: 2,
    fontFamily: theme.font.mono,
    flex: 1,
  },
  logCount: {
    color: theme.colors.textFaint,
    fontSize: 10,
    fontFamily: theme.font.mono,
  },
  logList: {
    gap: 10,
  },
  logRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  logLabel: {
    color: theme.colors.text,
    fontSize: 13,
    fontFamily: theme.font.mono,
    flex: 1,
  },
  logMeta: {
    color: theme.colors.textFaint,
    fontSize: 10,
    fontFamily: theme.font.mono,
    letterSpacing: 1,
  },
});
