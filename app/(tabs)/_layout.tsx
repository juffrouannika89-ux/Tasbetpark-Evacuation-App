
import React from 'react';
import { Platform } from 'react-native';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import { Stack } from 'expo-router';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';
import { colors } from '@/styles/commonStyles';

export default function TabLayout() {
  // Define the tabs configuration
  const tabs: TabBarItem[] = [
    {
      name: 'evacuation',
      route: '/(tabs)/evacuation',
      icon: 'bell.fill',
      label: 'Alerts',
    },
    {
      name: 'evacuation-plan',
      route: '/(tabs)/evacuation-plan',
      icon: 'map.fill',
      label: 'Plan',
    },
    {
      name: 'profile',
      route: '/(tabs)/profile',
      icon: 'person.fill',
      label: 'Profile',
    },
  ];

  // Use NativeTabs for iOS, custom FloatingTabBar for Android and Web
  if (Platform.OS === 'ios') {
    return (
      <NativeTabs>
        <NativeTabs.Trigger name="evacuation">
          <Icon sf="bell.fill" drawable="ic_notifications" />
          <Label>Alerts</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="evacuation-plan">
          <Icon sf="map.fill" drawable="ic_map" />
          <Label>Plan</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="profile">
          <Icon sf="person.fill" drawable="ic_profile" />
          <Label>Profile</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    );
  }

  // For Android and Web, use Stack navigation with custom floating tab bar
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        <Stack.Screen name="evacuation" />
        <Stack.Screen name="evacuation-plan" />
        <Stack.Screen name="profile" />
      </Stack>
      <FloatingTabBar tabs={tabs} />
    </>
  );
}
