import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Details Screen!</Text>
      <Button
        title="Go back to Categories"
        onPress={() => {
          props.navigation.popToTop(); //till route screen
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
