import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { slides } from './src/default_data/introSliderData';
import Main from './src/Main';
import { introSlider } from './src/components/layouts/introSlider';

export default class App extends React.Component {
  state = {
    showRealApp: false,
  };

  onDone = () => {
    this.setState({ showRealApp: true });
  };
  render() {
    if (this.state.showRealApp) {
      return <Main />;
    }
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={info => introSlider(info)}
        onDone={this.onDone}
      />
    );
  }
}
