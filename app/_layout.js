// app/(tabs)/_layout.js (Arquivo que você enviou, com linhas removidas)
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#8b0000' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="revFrancesa"
        options={{
          title: 'Revolução',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="flag" color={color} />,
          headerShown: false,
        }}
        />
      <Tabs.Screen
        name="motorVapor"
        options={{
          title: 'Vapor',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={28} name="fire" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="motorCombustao"
        options={{
          title: 'Combustão',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={28} name="engine" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="motor2T"
        options={{
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="motor4T"
        options={{
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
      name="perfil"
      options={{
        title: 'Perfil',
        tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons size={28} name='account-circle' color={color}/>
      ),
        headerShown: false,
      }}
      />
    </Tabs>
  );
}