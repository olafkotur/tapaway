import React from 'react';
import styles from './styles';
import { View, StatusBar, TouchableOpacity, Image, TextInput, Dimensions, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import SafeAreaView from '../../components/SafeAreaView';
import Canvas from '../../components/Canvas';
import { IPlayerData, IGameInfo, IGuessData } from '../../../models';
import Text from '../../components/Text';
import { game, theme } from '../../../config';
import GuessButtons from '../../components/GuessButtons';
import { PatternService } from '../../../services/pattern';
import Loading from '../../components/Loading';
import delay from 'delay';
import { HelperService } from '../../../services/helper';
import { ChallengeService } from '../../../services/challenge';
import { drawings } from '../../../imports/bot';

interface IProps {
  navigation: any;
}

interface IState {
}

export default class Game extends React.Component<IProps> {  
  constructor(props: IProps) {
    super(props);
    this.playerData = this.props.navigation.getParam('playerData');
    this.gameInfo = ChallengeService.generateGameInfo();
    this.pattern = PatternService.calculateChallengeCanvas(Dimensions.get('window').height, Dimensions.get('window').width);
  }

  static navigationOptions = {
    header: null
  };

  playerData: IPlayerData;
  gameInfo: IGameInfo;
  pattern: number[][];

  state: IState = {
  };

  handleTilePressed = (col: number, row: number, symbol: number): void => {
    this.pattern[col][row] = symbol;
  };

  handleExit = (): void => {
    this.props.navigation.replace('Home');
  };

  render(): React.ReactElement {
    return (          
      <SafeAreaView style={ styles.container } >

        <StatusBar barStyle='light-content' />

        <Canvas
          pattern={ this.pattern }
          color={ theme.secondary }
          handleTilePressed={ this.handleTilePressed }
        />

        {/* Level information */}
        <View style={ styles.levelContainer } >
          <Text style={ styles.levelText } >level 1</Text>
        </View>

        {/* Bottom right information */}
        <View style={ styles.bottomRightContainer } >
          <View style={ styles.pointsContainer } >
            <Text style={ styles.text } >13</Text>
            <Image style={ styles.icon } source={ require('../../../../assets/icons/star.png') } />
          </View>

          <TouchableOpacity
            style={ styles.exitButton }
            onPress={ this.handleExit } >
            <Text style={ styles.text } >exit</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    );
  } 
}
