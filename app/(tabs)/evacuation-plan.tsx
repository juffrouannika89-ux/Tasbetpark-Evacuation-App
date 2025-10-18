
import React from "react";
import { View, Text, StyleSheet, ScrollView, Platform, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/IconSymbol";
import { GlassView } from "expo-glass-effect";
import { useTheme } from "@react-navigation/native";
import { colors } from "@/styles/commonStyles";

export default function EvacuationPlanScreen() {
  const theme = useTheme();

  const emergencySignals = [
    {
      code: 'CODE RED',
      beeps: '3 beeps',
      action: 'DO NOT EVACUATE',
      color: '#FF3B30',
      icon: 'xmark.circle.fill'
    },
    {
      code: 'CODE GREY 5',
      beeps: '2 beeps',
      action: 'EVACUATE',
      color: '#FF9500',
      icon: 'arrow.right.circle.fill'
    },
    {
      code: 'CODE NAVY',
      beeps: '1 long beep',
      action: 'EVACUATE',
      color: '#007AFF',
      icon: 'arrow.right.circle.fill'
    }
  ];

  const assemblyPoints = [
    {
      name: 'Assembly Point A',
      location: 'Main Sports Field',
      areas: ['Main Building', 'Administration Block'],
      icon: 'a.circle.fill'
    },
    {
      name: 'Assembly Point B',
      location: 'Secondary Sports Field',
      areas: ['Science Block', 'Library'],
      icon: 'b.circle.fill'
    },
    {
      name: 'Assembly Point C',
      location: 'Front Parking Area',
      areas: ['Art Block', 'Music Room'],
      icon: 'c.circle.fill'
    }
  ];

  const emergencyContacts = [
    { name: 'Emergency Services', number: '10111', icon: 'phone.fill' },
    { name: 'Fire Department', number: '10177', icon: 'flame.fill' },
    { name: 'School Principal', number: '012-345-6789', icon: 'person.fill' },
    { name: 'Safety Officer', number: '012-345-6790', icon: 'shield.fill' }
  ];

  return (
    <SafeAreaView 
      style={[styles.safeArea, { backgroundColor: colors.background }]} 
      edges={['top']}
    >
      <View style={styles.header}>
        <Image 
          source={require('@/assets/images/d462de4a-88e2-488f-a490-e90dd29d975a.jpeg')}
          style={styles.emblem}
          resizeMode="contain"
        />
        <IconSymbol 
          name="map.fill" 
          size={32} 
          color={colors.accent} 
        />
        <Text style={styles.headerTitle}>Evacuation Plan</Text>
        <Text style={styles.headerSubtitle}>Laerskool Tasbetpark Primary</Text>
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={[
          styles.contentContainer,
          Platform.OS !== 'ios' && styles.contentContainerWithTabBar
        ]}
      >
        <GlassView
          style={[
            styles.card,
            styles.emergencySignalsCard,
            Platform.OS !== 'ios' && { backgroundColor: 'rgba(255, 149, 0, 0.1)' }
          ]}
          glassEffectStyle="regular"
        >
          <View style={styles.cardHeader}>
            <IconSymbol name="bell.fill" size={24} color="#FF9500" />
            <Text style={styles.cardTitle}>Emergency Signals</Text>
          </View>
          
          <View style={styles.signalAuthority}>
            <IconSymbol name="megaphone.fill" size={20} color={colors.accent} />
            <Text style={styles.signalAuthorityText}>
              The Principal or his/her Deputy will give the order by intercom/loudhailer or using an airhorn:
            </Text>
          </View>

          <View style={styles.signalsList}>
            {emergencySignals.map((signal, index) => (
              <View key={index} style={[styles.signalItem, { borderLeftColor: signal.color }]}>
                <View style={styles.signalHeader}>
                  <IconSymbol name={signal.icon as any} size={24} color={signal.color} />
                  <View style={styles.signalCodeContainer}>
                    <Text style={[styles.signalCode, { color: signal.color }]}>
                      {signal.code}
                    </Text>
                    <Text style={styles.signalBeeps}>{signal.beeps}</Text>
                  </View>
                </View>
                <View style={styles.signalActionContainer}>
                  <Text style={[styles.signalAction, { color: signal.color }]}>
                    {signal.action}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </GlassView>

        <GlassView
          style={[
            styles.card,
            Platform.OS !== 'ios' && { backgroundColor: 'rgba(100, 181, 246, 0.1)' }
          ]}
          glassEffectStyle="regular"
        >
          <View style={styles.cardHeader}>
            <IconSymbol name="exclamationmark.triangle.fill" size={24} color="#FF9500" />
            <Text style={styles.cardTitle}>General Evacuation Procedures</Text>
          </View>
          <View style={styles.procedureList}>
            <View style={styles.procedureItem}>
              <Text style={styles.procedureNumber}>1.</Text>
              <Text style={styles.procedureText}>
                Remain calm and alert. Do not panic.
              </Text>
            </View>
            <View style={styles.procedureItem}>
              <Text style={styles.procedureNumber}>2.</Text>
              <Text style={styles.procedureText}>
                Follow instructions from teachers and safety officers.
              </Text>
            </View>
            <View style={styles.procedureItem}>
              <Text style={styles.procedureNumber}>3.</Text>
              <Text style={styles.procedureText}>
                Exit the building using the nearest safe exit route.
              </Text>
            </View>
            <View style={styles.procedureItem}>
              <Text style={styles.procedureNumber}>4.</Text>
              <Text style={styles.procedureText}>
                Do not use elevators during evacuation.
              </Text>
            </View>
            <View style={styles.procedureItem}>
              <Text style={styles.procedureNumber}>5.</Text>
              <Text style={styles.procedureText}>
                Walk quickly but do not run. Stay in single file.
              </Text>
            </View>
            <View style={styles.procedureItem}>
              <Text style={styles.procedureNumber}>6.</Text>
              <Text style={styles.procedureText}>
                Proceed directly to your designated assembly point.
              </Text>
            </View>
            <View style={styles.procedureItem}>
              <Text style={styles.procedureNumber}>7.</Text>
              <Text style={styles.procedureText}>
                Teachers must bring attendance registers and take roll call.
              </Text>
            </View>
            <View style={styles.procedureItem}>
              <Text style={styles.procedureNumber}>8.</Text>
              <Text style={styles.procedureText}>
                Do not re-enter the building until given the all-clear signal.
              </Text>
            </View>
          </View>
        </GlassView>

        <GlassView
          style={[
            styles.card,
            Platform.OS !== 'ios' && { backgroundColor: 'rgba(100, 181, 246, 0.1)' }
          ]}
          glassEffectStyle="regular"
        >
          <View style={styles.cardHeader}>
            <IconSymbol name="mappin.circle.fill" size={24} color={colors.accent} />
            <Text style={styles.cardTitle}>Assembly Points</Text>
          </View>
          {assemblyPoints.map((point, index) => (
            <View key={index} style={styles.assemblyPoint}>
              <IconSymbol name={point.icon as any} size={32} color={colors.accent} />
              <View style={styles.assemblyPointInfo}>
                <Text style={styles.assemblyPointName}>{point.name}</Text>
                <Text style={styles.assemblyPointLocation}>{point.location}</Text>
                <Text style={styles.assemblyPointAreas}>
                  For: {point.areas.join(', ')}
                </Text>
              </View>
            </View>
          ))}
        </GlassView>

        <GlassView
          style={[
            styles.card,
            Platform.OS !== 'ios' && { backgroundColor: 'rgba(100, 181, 246, 0.1)' }
          ]}
          glassEffectStyle="regular"
        >
          <View style={styles.cardHeader}>
            <IconSymbol name="phone.circle.fill" size={24} color="#34C759" />
            <Text style={styles.cardTitle}>Emergency Contacts</Text>
          </View>
          {emergencyContacts.map((contact, index) => (
            <View key={index} style={styles.contactItem}>
              <IconSymbol name={contact.icon as any} size={20} color={colors.accent} />
              <View style={styles.contactInfo}>
                <Text style={styles.contactName}>{contact.name}</Text>
                <Text style={styles.contactNumber}>{contact.number}</Text>
              </View>
            </View>
          ))}
        </GlassView>

        <GlassView
          style={[
            styles.card,
            Platform.OS !== 'ios' && { backgroundColor: 'rgba(100, 181, 246, 0.1)' }
          ]}
          glassEffectStyle="regular"
        >
          <View style={styles.cardHeader}>
            <IconSymbol name="person.2.fill" size={24} color={colors.accent} />
            <Text style={styles.cardTitle}>Special Considerations</Text>
          </View>
          <View style={styles.considerationList}>
            <View style={styles.considerationItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.considerationText}>
                Students with mobility issues will be assisted by designated staff members.
              </Text>
            </View>
            <View style={styles.considerationItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.considerationText}>
                Visitors must follow staff instructions and proceed to the nearest assembly point.
              </Text>
            </View>
            <View style={styles.considerationItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.considerationText}>
                In case of severe weather, alternative indoor assembly areas will be designated.
              </Text>
            </View>
            <View style={styles.considerationItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.considerationText}>
                Parents will be notified via SMS and the school app during emergencies.
              </Text>
            </View>
          </View>
        </GlassView>

        <GlassView
          style={[
            styles.warningCard,
            Platform.OS !== 'ios' && { backgroundColor: 'rgba(255, 59, 48, 0.1)' }
          ]}
          glassEffectStyle="regular"
        >
          <IconSymbol name="exclamationmark.triangle.fill" size={24} color="#FF3B30" />
          <Text style={styles.warningText}>
            Regular evacuation drills are conducted quarterly. Familiarize yourself with all exit routes and assembly points.
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
  emblem: {
    width: 80,
    height: 80,
    marginBottom: 12,
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
  card: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  emergencySignalsCard: {
    borderWidth: 2,
    borderColor: 'rgba(255, 149, 0, 0.3)',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  signalAuthority: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 20,
    padding: 12,
    backgroundColor: 'rgba(100, 181, 246, 0.1)',
    borderRadius: 8,
  },
  signalAuthorityText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
    fontWeight: '500',
  },
  signalsList: {
    gap: 16,
  },
  signalItem: {
    borderLeftWidth: 4,
    paddingLeft: 16,
    paddingVertical: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
  },
  signalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  signalCodeContainer: {
    flex: 1,
  },
  signalCode: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  signalBeeps: {
    fontSize: 14,
    color: colors.grey,
    fontStyle: 'italic',
  },
  signalActionContainer: {
    paddingLeft: 36,
  },
  signalAction: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  procedureList: {
    gap: 12,
  },
  procedureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  procedureNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.accent,
    marginRight: 12,
    minWidth: 24,
  },
  procedureText: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
  },
  assemblyPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(100, 181, 246, 0.2)',
  },
  assemblyPointInfo: {
    flex: 1,
  },
  assemblyPointName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  assemblyPointLocation: {
    fontSize: 16,
    color: colors.accent,
    marginBottom: 4,
  },
  assemblyPointAreas: {
    fontSize: 14,
    color: colors.grey,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(100, 181, 246, 0.2)',
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  contactNumber: {
    fontSize: 15,
    color: colors.accent,
  },
  considerationList: {
    gap: 12,
  },
  considerationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bullet: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.accent,
    marginRight: 12,
    minWidth: 16,
  },
  considerationText: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
  },
  warningCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  warningText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
});
