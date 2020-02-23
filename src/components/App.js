import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

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
  componentDidMount() {}
  componentWillUnmount() {
    console.log('will unmount');
  }
  fetchContest = contestId => {
    pushState({ currContestId: contestId }, `/contest/${contestId}`);
    api.fetchContest(contestId).then(contest => {
      this.setState({
        pageHeader: contest.contestName,
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }
      });
    });
  };
  currentContent = () => {
    if (this.state.currentContestId) {
      return <Contest {...this.state.contests[this.state.currentContestId]} />;
    }
    return (
      <ContestList
        onContestClick={this.fetchContest}
        contests={this.state.contests}
      />
    );
  };
  render() {
    return (
      <>
        <Header message={this.state.pageHeader} />
        {this.currentContent()}
      </>
    );
  }
}

export default App;
