import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function CategoryButton({ title }) {
	return (
		<TouchableOpacity style={styles.container}>
			<View>
				<View style={styles.topSection}></View>

				<View style={styles.bottomSection}>
					<Text>{title}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.red,
		width: 150,
		height: 250,
		borderRadius: 6,
		margin: 10,
	},
	topSection: {
		flex: 1,
		width: "100%",
		height: "50%",
	},
	bottomSection: {
		height: "50%",
		backgroundColor: "rgba(0, 0, 0, 0.5)", // Darker transparent background
	},
});

export default CategoryButton;
