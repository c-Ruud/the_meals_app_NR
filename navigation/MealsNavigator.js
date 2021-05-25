import { createAppContainer, StackRouter } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/colors';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      //navigationOptions: { headerTitle: 'Meal Categories!!!' }, kan göra det här eller i komponenten
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    //mode: 'modal', animation som en modal
    //initialRouteName: 'Categories',  kan ställa in första sidan här
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      headerTitle: 'Default title',
    },
  }
);

export default createAppContainer(MealsNavigator);

/*const MealsNavigator = createStackNavigator({
        Categories:
        component={CategoriesScreen},
        options={{
          title: 'Meal Categories',
          headerStyle: {
            backgroundColor: Colors.primaryColor,
          },
        }}
      />
    </Stack.Navigator>
  );
}
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};
const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator); */
