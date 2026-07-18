import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MapPin, Navigation, Shield } from 'lucide-react-native';
import { theme } from '../../components/Theme';
import { Screen, Header, Card, GhostButton, Pill } from '../../components/ui';

const ZONES = [
  { id: 1, x: 70, y: 60, r: 48, level: 'high' },
  { id: 2, x: 210, y: 150, r: 36, level: 'med' },
  { id: 3, x: 130, y: 220, r: 30, level: 'low' },
];

const NODES = [
  { id: 1, x: 50, y: 120 },
  { id: 2, x: 180, y: 80 },
  { id: 3, x: 250, y: 200 },
  { id: 4, x: 100, y: 250 },
];

export default function MapScreen() {
  return (
    <Screen>
      <Header
        title="SAFETY MAP"
        subtitle="LIVE THREAT ZONES"
        right={<Pill label="92% SAFE" color={theme.colors.success} glow />}
      />

      <View style={styles.mapWrap}>
        <View style={styles.mapGrid} />
        {ZONES.map((z) => (
          <View
            key={z.id}
            style={[
              styles.zone,
              {
                left: z.x - z.r,
                top: z.y - z.r,
                width: z.r * 2,
                height: z.r * 2,
                borderRadius: z.r,
                backgroundColor:
                  z.level === 'high' ? 'rgba(255, 92, 108, 0.22)' :
                  z.level === 'med' ? 'rgba(255, 184, 77, 0.18)' :
                  'rgba(63, 214, 138, 0.14)',
                borderColor:
                  z.level === 'high' ? 'rgba(255, 92, 108, 0.4)' :
                  z.level === 'med' ? 'rgba(255, 184, 77, 0.35)' :
                  'rgba(63, 214, 138, 0.3)',
              },
            ]}
          />
        ))}
        {NODES.map((n) => (
          <View key={n.id} style={[styles.node, { left: n.x - 4, top: n.y - 4 }]} />
        ))}
        <View style={styles.userPin}>
          <MapPin size={22} color={theme.colors.text} strokeWidth={2.4} />
          <View style={styles.userPulse} />
        </View>
      </View>

      <View style={styles.legendRow}>
        <LegendDot color={theme.colors.danger} label="HIGH RISK" />
        <LegendDot color={theme.colors.warning} label="CAUTION" />
        <LegendDot color={theme.colors.success} label="SAFE ZONE" />
        <LegendDot color={theme.colors.primary} label="MESH NODE" />
      </View>

      <Card style={styles.routeCard}>
        <View style={styles.routeHeader}>
          <Navigation size={16} color={theme.colors.primary} strokeWidth={2} />
          <Text style={styles.routeTitle}>ROUTE ANALYSIS</Text>
        </View>
        <Text style={styles.routeBody}>
          {`Current path is 92% safe. Suggested diversion in 200m to avoid unlit area near 3rd & Main.`}
        </Text>
        <View style={styles.routeMeta}>
          <View style={styles.metaCell}>
            <Text style={styles.metaLabel}>ETA</Text>
            <Text style={styles.metaValue}>14 MIN</Text>
          </View>
          <View style={styles.metaDivider} />
          <View style={styles.metaCell}>
            <Text style={styles.metaLabel}>DISTANCE</Text>
            <Text style={styles.metaValue}>1.8 KM</Text>
          </View>
          <View style={styles.metaDivider} />
          <View style={styles.metaCell}>
            <Text style={styles.metaLabel}>RISK</Text>
            <Text style={[styles.metaValue, { color: theme.colors.success }]}>LOW</Text>
          </View>
        </View>
      </Card>

      <View style={styles.actionWrap}>
        <GhostButton label="ACTIVATE ESCORT MODE" />
      </View>
    </Screen>
  );
}

function LegendDot({ color, label }) {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.legendDot, { backgroundColor: color }]} />
      <Text style={styles.legendLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mapWrap: {
    height: 300,
    backgroundColor: theme.colors.bgElevated,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: 'hidden',
    marginBottom: theme.spacing(3),
  },
  mapGrid: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  zone: {
    position: 'absolute',
    borderWidth: 1,
  },
  node: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    shadowColor: theme.colors.primary,
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },
  userPin: {
    position: 'absolute',
    left: 140,
    top: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userPulse: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.colors.text,
    opacity: 0.4,
  },
  legendRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendLabel: {
    color: theme.colors.textDim,
    fontSize: 9,
    letterSpacing: 1,
    fontFamily: theme.font.mono,
  },
  routeCard: {
    gap: theme.spacing(2),
  },
  routeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  routeTitle: {
    color: theme.colors.text,
    fontSize: 12,
    letterSpacing: 2,
    fontFamily: theme.font.mono,
  },
  routeBody: {
    color: theme.colors.textDim,
    fontSize: 13,
    lineHeight: 20,
    fontFamily: theme.font.mono,
  },
  routeMeta: {
    flexDirection: 'row',
    marginTop: theme.spacing(1),
  },
  metaCell: {
    flex: 1,
    gap: 4,
  },
  metaDivider: {
    width: 1,
    backgroundColor: theme.colors.border,
    marginHorizontal: theme.spacing(2),
  },
  metaLabel: {
    color: theme.colors.textFaint,
    fontSize: 9,
    letterSpacing: 1.5,
    fontFamily: theme.font.mono,
  },
  metaValue: {
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: theme.font.mono,
  },
  actionWrap: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
});
