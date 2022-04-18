import react from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons"

// Screens
import ShowWeeklyExpenseScreen from '../screens/ShowWeeklyExpenseScreen';
import ShowAllTransactionScreen from '../screens/ShowAllTransactionScreen';

const ExpensesNavigator = () => {
  const TabNavigator = createBottomTabNavigator();
  
  return (
    <TabNavigator.Navigator >
      <TabNavigator.Screen 
        name={'Previous 7 days'} component={ShowWeeklyExpenseScreen} 
        options={{
          tabBarIcon: () => <Ionicons name={'wallet'} size={24} />
        }}
      />
      <TabNavigator.Screen 
        name={'All Transactions'} component={ShowAllTransactionScreen}
        options={{
          tabBarIcon: () => <Ionicons name={'albums'} size={24} />
        }}
      />
    </TabNavigator.Navigator>
  )
}

export default ExpensesNavigator;
