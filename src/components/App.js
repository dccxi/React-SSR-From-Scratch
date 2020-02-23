import React from 'react';
import Header from './Header';
import ContestList from './ContestList';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

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
  fetchContest = (contestId) => {
    pushState({currContestId: contestId}, `/contest/${contestId}`)
  }
  render() {
    return (
      <>
        <Header message={this.state.pageHeader} />
        <ContestList
          onContestClick={this.fetchContest}
          contests={ this.state.contests } />
      </>
    );
  }
}

export default App;
