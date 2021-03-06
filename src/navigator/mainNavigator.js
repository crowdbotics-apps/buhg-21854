import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings156674Navigator from '../features/Settings156674/navigator';
import Settings156657Navigator from '../features/Settings156657/navigator';
import Settings156640Navigator from '../features/Settings156640/navigator';
import Settings156623Navigator from '../features/Settings156623/navigator';
import Settings156606Navigator from '../features/Settings156606/navigator';
import Messaging4156589Navigator from '../features/Messaging4156589/navigator';
import Settings156574Navigator from '../features/Settings156574/navigator';
import Settings156540Navigator from '../features/Settings156540/navigator';
import Settings156523Navigator from '../features/Settings156523/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings156674: { screen: Settings156674Navigator },
Settings156657: { screen: Settings156657Navigator },
Settings156640: { screen: Settings156640Navigator },
Settings156623: { screen: Settings156623Navigator },
Settings156606: { screen: Settings156606Navigator },
Messaging4156589: { screen: Messaging4156589Navigator },
Settings156574: { screen: Settings156574Navigator },
Settings156540: { screen: Settings156540Navigator },
Settings156523: { screen: Settings156523Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
