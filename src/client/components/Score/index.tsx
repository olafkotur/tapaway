import React from 'react';
import { View, Image }  from 'react-native';
import styles from './styles';
import Text from '../Text';

interface IProps {
  tap: number;
  games: number;
}

export default class Score extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.tapIcon = require('../../../../assets/icons/star.png');
    this.gamesIcon = require('../../../../assets/icons/controller.png');
  }

  tapIcon: any;
  gamesIcon: any;
  
  render(): JSX.Element {
    return (
      <View style={ styles.container } >

        <View style={ styles.scoreGroup } >
          <Text style={ styles.scoreText } >{ this.props.tap }</Text>
          <Image source={ this.tapIcon } style={ styles.icon } />
        </View>

        <View style={ styles.scoreGroup } >
          <Text style={ styles.scoreText } >{ this.props.games }</Text>
          <Image source={ this.gamesIcon } style={ styles.icon } />
        </View>

      </View>
    );
  } 
}
