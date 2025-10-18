
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Platform, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/IconSymbol";
import { GlassView } from "expo-glass-effect";
import { useTheme } from "@react-navigation/native";
import { colors } from "@/styles/commonStyles";

export default function ProfileScreen() {
  const theme = useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]} edges={['top']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={[
          styles.contentContainer,
          Platform.OS !== 'ios' && styles.contentContainerWithTabBar
        ]}
      >
        <GlassView style={[
          styles.profileHeader,
          Platform.OS !== 'ios' && { backgroundColor: 'rgba(100, 181, 246, 0.1)' }
        ]} glassEffectStyle="regular">
          <IconSymbol name="person.circle.fill" size={80} color={colors.accent} />
          <Text style={[styles.name, { color: colors.text }]}>Staff Member</Text>
          <Text style={[styles.email, { color: colors.grey }]}>staff@tasbetpark.edu.za</Text>
          <Text style={[styles.role, { color: colors.accent }]}>Safety Committee Member</Text>
        </GlassView>

        <GlassView style={[
          styles.section,
          Platform.OS !== 'ios' && { backgroundColor: 'rgba(100, 181, 246, 0.1)' }
        ]} glassEffectStyle="regular">
          <View style={styles.sectionHeader}>
            <IconSymbol name="bell.fill" size={24} color={colors.accent} />
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Notification Settings</Text>
          </View>
          
          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={[styles.settingLabel, { color: colors.text }]}>Evacuation Alerts</Text>
              <Text style={[styles.settingDescription, { color: colors.grey }]}>
                Receive emergency evacuation notifications
              </Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#767577', true: colors.accent }}
              thumbColor={notificationsEnabled ? '#FFFFFF' : '#f4f3f4'}
            />
          </View>

          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={[styles.settingLabel, { color: colors.text }]}>Sound Alerts</Text>
              <Text style={[styles.settingDescription, { color: colors.grey }]}>
                Play sound for emergency notifications
              </Text>
            </View>
            <Switch
              value={soundEnabled}
              onValueChange={setSoundEnabled}
              trackColor={{ false: '#767577', true: colors.accent }}
              thumbColor={soundEnabled ? '#FFFFFF' : '#f4f3f4'}
              disabled={!notificationsEnabled}
            />
          </View>

          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={[styles.settingLabel, { color: colors.text }]}>Vibration</Text>
              <Text style={[styles.settingDescription, { color: colors.grey }]}>
                Vibrate for emergency notifications
              </Text>
            </View>
            <Switch
              value={vibrationEnabled}
              onValueChange={setVibrationEnabled}
              trackColor={{ false: '#767577', true: colors.accent }}
              thumbColor={vibrationEnabled ? '#FFFFFF' : '#f4f3f4'}
              disabled={!notificationsEnabled}
            />
          </View>
        </GlassView>

        <GlassView style={[
          styles.section,
          Platform.OS !== 'ios' && { backgroundColor: 'rgba(100, 181, 246, 0.1)' }
        ]} glassEffectStyle="regular">
          <View style={styles.sectionHeader}>
            <IconSymbol name="person.fill" size={24} color={colors.accent} />
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Contact Information</Text>
          </View>
          
          <View style={styles.infoRow}>
            <IconSymbol name="phone.fill" size={20} color={colors.grey} />
            <Text style={[styles.infoText, { color: colors.text }]}>+27 12 345 6789</Text>
          </View>
          <View style={styles.infoRow}>
            <IconSymbol name="building.2.fill" size={20} color={colors.grey} />
            <Text style={[styles.infoText, { color: colors.text }]}>Laerskool Tasbetpark Primary</Text>
          </View>
          <View style={styles.infoRow}>
            <IconSymbol name="location.fill" size={20} color={colors.grey} />
            <Text style={[styles.infoText, { color: colors.text }]}>Pretoria, South Africa</Text>
          </View>
        </GlassView>

        <GlassView style={[
          styles.infoCard,
          Platform.OS !== 'ios' && { backgroundColor: 'rgba(100, 181, 246, 0.1)' }
        ]} glassEffectStyle="regular">
          <IconSymbol name="info.circle.fill" size={24} color={colors.accent} />
          <Text style={[styles.infoCardText, { color: colors.text }]}>
            As a safety committee member, you will receive all evacuation notifications immediately. 
            Keep your contact information up to date.
          </Text>
        </GlassView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  contentContainerWithTabBar: {
    paddingBottom: 100,
  },
  profileHeader: {
    alignItems: 'center',
    borderRadius: 12,
    padding: 32,
    marginBottom: 16,
    gap: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
  },
  role: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },
  section: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(100, 181, 246, 0.2)',
  },
  settingInfo: {
    flex: 1,
    marginRight: 16,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    lineHeight: 18,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(100, 181, 246, 0.2)',
  },
  infoText: {
    fontSize: 16,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  infoCardText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
});
