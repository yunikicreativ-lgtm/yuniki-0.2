import { Tabs } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { Shield, Radar, Map as MapIcon, Settings } from 'lucide-react-native';
import { theme } from '../../components/Theme';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 64,
          backgroundColor: theme.colors.bgElevated,
          borderTopWidth: 1,
          borderTopColor: theme.colors.border,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textFaint,
        tabBarLabelStyle: {
          fontSize: 9,
          letterSpacing: 1.5,
          fontFamily: theme.font.mono,
          marginTop: -4,
        },
        tabBarItemStyle: {
          paddingVertical: 6,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'PROTECT',
          tabBarIcon: ({ color, size }) => (
            <Shield color={color} size={size} strokeWidth={2} />
          ),
        }}
      />
      <Tabs.Screen
        name="radar"
        options={{
          title: 'RADAR',
          tabBarIcon: ({ color, size }) => (
            <Radar color={color} size={size} strokeWidth={2} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'MAP',
          tabBarIcon: ({ color, size }) => (
            <MapIcon color={color} size={size} strokeWidth={2} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'CONFIG',
          tabBarIcon: ({ color, size }) => (
            <Settings color={color} size={size} strokeWidth={2} />
          ),
        }}
      />
    </Tabs>
  );
}
