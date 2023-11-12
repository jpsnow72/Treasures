import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";
import { Icon, SpeedDial } from "@rneui/themed";
import { useFonts, Inter_300Light } from "@expo-google-fonts/inter";

import colors from "../config/colors";
import Screen from "../components/Screen";

function HomeScreen({ navigation }) {
	const [open, setOpen] = useState(false);
	let [fontsLoaded, fontError] = useFonts({
		Inter_300Light,
	});
	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Icon
				reverse
				name="menu"
				type="material-community"
				color={colors.medium}
			/>
			<Text
				style={{
					marginLeft: 20,
					color: colors.light,
					fontSize: 42,
					fontFamily: "Inter_300Light",
				}}>
				Welcome, Justin!
			</Text>

			<SpeedDial
				isOpen={open}
				icon={{ name: "edit", color: "#fff" }}
				openIcon={{ name: "close", color: "#fff" }}
				onOpen={() => setOpen(!open)}
				onClose={() => setOpen(!open)}>
				<SpeedDial.Action
					icon={{ name: "add", color: "#fff" }}
					title="Add"
					onPress={() => console.log("Add Something")}
				/>
				<SpeedDial.Action
					icon={{ name: "delete", color: "#fff" }}
					title="Delete"
					onPress={() => console.log("Delete Something")}
				/>
			</SpeedDial>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.darkest,
	},
});

export default HomeScreen;
