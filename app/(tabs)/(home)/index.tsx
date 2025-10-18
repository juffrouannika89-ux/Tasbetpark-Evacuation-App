
import React, { useEffect } from "react";
import { Redirect } from "expo-router";

export default function HomeScreen() {
  console.log('HomeScreen: Redirecting to evacuation screen');
  
  return <Redirect href="/(tabs)/evacuation" />;
}
