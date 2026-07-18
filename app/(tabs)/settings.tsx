import { useState } from 'react';
import { View, Text, StyleSheet, Switch, Pressable } from 'react-native';
import { Shield, Fingerprint, Eye, Volume2, Bell, ChevronRight, CircleUser } from 'lucide-react-native';
import { theme } from '../../components/Theme';
import { Screen, Header, Card, Pill } from '../../components/ui';

export default function SettingsScreen() {
  const [ghost, setGhost] = useState(true);
  const [bio, setBio] = useState(true);
  const [alerts, setAlerts] = useState(true);
  const [silent, setSilent] = useState(false);

  return (
    <Screen>
      <Header
        title="CONFIG"
        subtitle="OPERATOR SETTINGS"
        right={<Pill label="X-882" color={theme.colors.primary} glow />}
      />

      <Card style={styles.profileCard}>
        <View style={styles.avatar}>
          <CircleUser size={36} color={theme.colors.primary} strokeWidth={1.8} />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>OPERATOR SENTINEL-X-882</Text>
          <Text style={styles.profileMeta}>CLEARANCE LEVEL 3 · VERIFIED</Text>
        </View>
      </Card>

      <Text style={styles.sectionLabel}>SECURITY</Text>
      <Card style={styles.sectionCard}>
        <ToggleRow
          icon={Eye}
          label="GHOST MODE"
          desc="Hide location from mesh"
          value={ghost}
          onToggle={setGhost}
        />
        <Divider />
        <ToggleRow
          icon={Fingerprint}
          label="BIOMETRIC LOCK"
          desc="Require scan to disarm"
          value={bio}
          onToggle={setBio}
        />
      </Card>

      <Text style={styles.sectionLabel}>ALERTS</Text>
      <Card style={styles.sectionCard}>
        <ToggleRow
          icon={Bell}
          label="THREAT ALERTS"
          desc="Push on zone breach"
          value={alerts}
          onToggle={setAlerts}
        />
        <Divider />
        <ToggleRow
          icon={Volume2}
          label="SILENT RUN"
          desc="Mute all audible cues"
          value={silent}
          onToggle={setSilent}
        />
      </Card>

      <Text style={styles.sectionLabel}>SYSTEM</Text>
      <Card style={styles.sectionCard}>
        <NavRow icon={Shield} label="CALIBRATE SENSORS" />
        <Divider />
        <NavRow icon={CircleUser} label="OPERATOR PROFILE" />
        <Divider />
        <NavRow icon={Bell} label="EMERGENCY CONTACTS" />
      </Card>

      <View style={styles.footer}>
        <Text style={styles.footerText}>SENTINEL v1.0.0 · BUILD 882</Text>
      </View>
    </Screen>
  );
}

function ToggleRow({ icon: Icon, label, desc, value, onToggle }) {
  return (
    <View style={styles.row}>
      <View style={[styles.rowIcon, { backgroundColor: theme.colors.surfaceAlt }]}>
        <Icon size={16} color={theme.colors.primary} strokeWidth={2} />
      </View>
      <View style={styles.rowText}>
        <Text style={styles.rowLabel}>{label}</Text>
        <Text style={styles.rowDesc}>{desc}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: theme.colors.borderStrong, true: theme.colors.primary }}
        thumbColor={value ? '#03110E' : theme.colors.textFaint}
      />
    </View>
  );
}

function NavRow({ icon: Icon, label }) {
  return (
    <Pressable style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}>
      <View style={[styles.rowIcon, { backgroundColor: theme.colors.surfaceAlt }]}>
        <Icon size={16} color={theme.colors.primary} strokeWidth={2} />
      </View>
      <Text style={styles.rowLabel}>{label}</Text>
      <ChevronRight size={16} color={theme.colors.textFaint} strokeWidth={2} />
    </Pressable>
  );
}

function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: theme.colors.surfaceAlt,
    borderWidth: 1,
    borderColor: theme.colors.borderStrong,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfo: {
    flex: 1,
    gap: 4,
  },
  profileName: {
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: theme.font.mono,
    letterSpacing: 1,
  },
  profileMeta: {
    color: theme.colors.textFaint,
    fontSize: 10,
    letterSpacing: 1.5,
    fontFamily: theme.font.mono,
  },
  sectionLabel: {
    color: theme.colors.textFaint,
    fontSize: 10,
    letterSpacing: 2,
    fontFamily: theme.font.mono,
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  sectionCard: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(3),
    paddingVertical: theme.spacing(2),
  },
  rowPressed: { opacity: 0.6 },
  rowIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowText: {
    flex: 1,
    gap: 2,
  },
  rowLabel: {
    color: theme.colors.text,
    fontSize: 13,
    letterSpacing: 1,
    fontFamily: theme.font.mono,
    flex: 1,
  },
  rowDesc: {
    color: theme.colors.textFaint,
    fontSize: 10,
    fontFamily: theme.font.mono,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: 2,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: theme.spacing(4),
  },
  footerText: {
    color: theme.colors.textFaint,
    fontSize: 10,
    letterSpacing: 2,
    fontFamily: theme.font.mono,
  },
});
