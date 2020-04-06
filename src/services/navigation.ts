import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../client/pages/Home/index';
import Game from '../client/pages/Game';
import Victory from '../client/pages/Victory';

export default createAppContainer(
  createStackNavigator({
    Home,
    Game,
    Victory,
  })
);
