import React from 'react';
import Header from './Header';
import ContestList from './ContestList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: 'Naming Contests',
      contests: this.props.initialContests
    };
  }
  componentDidMount() {
  }
  componentWillUnmount() {
    console.log('will unmount');
  }
  render() {
    return (
      <>
        <Header message={this.state.pageHeader} />
        <ContestList contests={ this.state.contests } />
      </>
    );
  }
}

export default App;
