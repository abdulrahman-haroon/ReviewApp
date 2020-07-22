import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
//const HomeStack = createStackNavigator();
// const screens = {
//   Home: {
//     screen: Home,
//   },
//   ReviewDetails: {
//     screen: ReviewDetails,
//   },
// };
{
  /* <HomeStack.Navigator>
  <HomeStack.Screen name="Home" component={Home} />
  <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} />
</HomeStack.Navigator>;

export default createAppContainer(HomeStack); */
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
  );
}

export default createAppContainer({ MyStack });
