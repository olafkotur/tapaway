import React from 'react';
import { View, StatusBar, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import SafeAreaView from '../../components/SafeAreaView';
import styles from './styles';
import Canvas from '../../components/Canvas';
import { PatternService } from '../../../services/pattern';
import Text from '../../components/Text';
import Score from '../../components/Score';
import { logo } from '../../../patterns';
import { IPlayerData } from '../../../models';
import { StorageService } from '../../../services/storage';
import { HelperService } from '../../../services/helper';

interface IProps {
  navigation: any;
}

interface IState {
  playerData: IPlayerData;
}

export default class Home extends React.Component<IProps> {  
  constructor(props: IProps) {
    super(props);
    this.logoPattern = PatternService.translatePattern(logo);
  }

  static navigationOptions = {
    header: null
  };

  logoPattern: number[][];

  state: IState = {
    playerData: { tapPoints: 0, gamesPoints: 0 }
  };

  componentDidMount = async () => {
    const playerData: IPlayerData = await StorageService.retrieveSecurePlayerData();
    if (playerData) {
      this.setState({ playerData });
    }
  };

  handleStart = () => {
    this.props.navigation.replace('Game');
  };

  render(): JSX.Element {
    return (
      <SafeAreaView style={ styles.container } >

        <StatusBar barStyle='light-content' />

        <Canvas
          pattern={ this.logoPattern }
          color={ HelperService.getRandomColor() }
          size={ 5 } 
          margin={ 5 }
        />

        <View style={ styles.gameInfoContainer } >

          <Score
            tap={ this.state.playerData.tapPoints }
            games={ this.state.playerData.gamesPoints }
          />

          <TouchableOpacity
            style={ styles.startButton } 
            onPress={ this.handleStart } >
            <Text style={ styles.startText }>start</Text>
          </TouchableOpacity>

        </View>

      </SafeAreaView>
    );
  } 
}
