
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Platform, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/IconSymbol";
import { GlassView } from "expo-glass-effect";
import { useTheme } from "@react-navigation/native";
import { colors } from "@/styles/commonStyles";

interface EvacuationNotification {
  id: string;
  title: string;
  reason: string;
  affectedAreas: string[];
  instructions: string[];
  timestamp: string;
  severity: 'high' | 'medium' | 'low';
  status: 'active' | 'resolved';
}

export default function EvacuationScreen() {
  const theme = useTheme();
  
  // Placeholder data for evacuation notifications
  const [notifications] = useState<EvacuationNotification[]>([
    {
      id: '1',
      title: 'Fire Drill - Scheduled',
      reason: 'Scheduled fire drill exercise',
      affectedAreas: ['Main Building', 'Science Block', 'Administration'],
      instructions: [
        'Exit the building immediately using the nearest safe exit',
        'Proceed to Assembly Point A (Main Sports Field)',
        'Teachers must take attendance registers',
        'Do not use elevators',
        'Remain calm and walk in single file'
      ],
      timestamp: '2024-01-15 10:00 AM',
      severity: 'medium',
      status: 'active'
    }
  ]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return '#FF3B30';
      case 'medium':
        return '#FF9500';
      case 'low':
        return '#34C759';
      default:
        return colors.accent;
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'exclamationmark.triangle.fill';
      case 'medium':
        return 'exclamationmark.circle.fill';
      case 'low':
        return 'info.circle.fill';
      default:
        return 'bell.fill';
    }
  };

  return (
    <SafeAreaView 
      style={[styles.safeArea, { backgroundColor: colors.background }]} 
      edges={['top']}
    >
      <View style={styles.header}>
        <IconSymbol 
          name="bell.badge.fill" 
          size={32} 
          color={colors.accent} 
        />
        <Text style={styles.headerTitle}>Evacuation Notifications</Text>
        <Text style={styles.headerSubtitle}>Laerskool Tasbetpark Primary</Text>
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={[
          styles.contentContainer,
          Platform.OS !== 'ios' && styles.contentContainerWithTabBar
        ]}
      >
        {notifications.length === 0 ? (
          <GlassView 
            style={[
              styles.emptyState,
              Platform.OS !== 'ios' && { backgroundColor: 'rgba(100, 181, 246, 0.1)' }
            ]} 
            glassEffectStyle="regular"
          >
            <IconSymbol 
              name="checkmark.circle.fill" 
              size={64} 
              color={colors.accent} 
            />
            <Text style={styles.emptyStateTitle}>All Clear</Text>
            <Text style={styles.emptyStateText}>
              No active evacuation notifications at this time.
            </Text>
          </GlassView>
        ) : (
          notifications.map((notification) => (
            <GlassView
              key={notification.id}
              style={[
                styles.notificationCard,
                Platform.OS !== 'ios' && { backgroundColor: 'rgba(100, 181, 246, 0.1)' }
              ]}
              glassEffectStyle="regular"
            >
              <View style={styles.notificationHeader}>
                <View style={styles.notificationTitleRow}>
                  <IconSymbol
                    name={getSeverityIcon(notification.severity)}
                    size={24}
                    color={getSeverityColor(notification.severity)}
                  />
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                </View>
                <View style={[
                  styles.statusBadge,
                  { backgroundColor: notification.status === 'active' ? '#FF3B30' : '#34C759' }
                ]}>
                  <Text style={styles.statusText}>
                    {notification.status.toUpperCase()}
                  </Text>
                </View>
              </View>

              <Text style={styles.timestamp}>{notification.timestamp}</Text>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Reason:</Text>
                <Text style={styles.sectionText}>{notification.reason}</Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Affected Areas:</Text>
                {notification.affectedAreas.map((area, index) => (
                  <View key={index} style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.sectionText}>{area}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Instructions:</Text>
                {notification.instructions.map((instruction, index) => (
                  <View key={index} style={styles.listItem}>
                    <Text style={styles.numberBullet}>{index + 1}.</Text>
                    <Text style={styles.sectionText}>{instruction}</Text>
                  </View>
                ))}
              </View>
            </GlassView>
          ))
        )}

        <GlassView
          style={[
            styles.infoCard,
            Platform.OS !== 'ios' && { backgroundColor: 'rgba(100, 181, 246, 0.1)' }
          ]}
          glassEffectStyle="regular"
        >
          <IconSymbol name="info.circle.fill" size={24} color={colors.accent} />
          <Text style={styles.infoText}>
            In case of an emergency, follow the instructions provided and proceed to your designated assembly point.
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
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(100, 181, 246, 0.2)',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.accent,
    marginTop: 4,
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
  emptyState: {
    alignItems: 'center',
    borderRadius: 12,
    padding: 40,
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 16,
    color: colors.grey,
    textAlign: 'center',
    lineHeight: 24,
  },
  notificationCard: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  notificationTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  notificationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  timestamp: {
    fontSize: 14,
    color: colors.grey,
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.accent,
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 6,
    paddingLeft: 8,
  },
  bullet: {
    fontSize: 15,
    color: colors.accent,
    marginRight: 8,
    fontWeight: 'bold',
  },
  numberBullet: {
    fontSize: 15,
    color: colors.accent,
    marginRight: 8,
    fontWeight: 'bold',
    minWidth: 20,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
});
