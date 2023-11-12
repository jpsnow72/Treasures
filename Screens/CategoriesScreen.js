import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CategoryButton from "../components/CategoryButton";
import { ScrollView } from "react-native-gesture-handler";

function CategoriesScreen(props) {
	return (
		<View style={styles.container}>
			<ScrollView horizontal={true}>
				<CategoryButton title="Category 1" />
				<CategoryButton title="Category 1" />
				<CategoryButton title="Category 1" />
				<CategoryButton title="Category 1" />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default CategoriesScreen;
