import "react-native-gesture-handler";

import { useState } from "react";

import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import colors from "./config/colors";

import HomeScreen from "./Screens/HomeScreen";
import ItemDetailsScreen from "./Screens/ItemDetailsScreen";
import CategoriesScreen from "./Screens/CategoriesScreen";

export default function App() {
	const Stack = createNativeStackNavigator();
	const Drawer = createDrawerNavigator();

	return (
		<NavigationContainer>
			<Drawer.Navigator
				screenOptions={{
					drawerActiveBackgroundColor: colors.mediumlight,
					drawerStyle: {
						backgroundColor: colors.mediumdark,
						color: colors.white,
					},
					drawerLabelStyle: {
						color: colors.white,
					},

					drawerActiveBackgroundColor: colors.purple,

					drawerType: "front",
				}}
				initialRouteName="Categories">
				<Drawer.Screen name="Home" component={HomeScreen} />
				<Drawer.Screen name="Details" component={ItemDetailsScreen} />
				<Drawer.Screen name="Categories" component={CategoriesScreen} />
			</Drawer.Navigator>
		</NavigationContainer>

		// <NavigationContainer>
		// 	<Stack.Navigator>
		// 		<Stack.Screen name="Home" component={HomeScreen} />
		// 		<Stack.Screen name="Details" component={ItemDetailsScreen} />
		// 	</Stack.Navigator>
		// </NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
