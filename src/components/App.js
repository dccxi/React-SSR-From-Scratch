import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

const setPopStateHandler = handler => {
  window.onpopstate = handler;
}

class App extends React.Component {
  static propTypes = {
    initialData: PropTypes.object.isRequired,
  };
  state = this.props.initialData;
  componentDidMount() {
    setPopStateHandler(e => {
      this.setState({
        currentContestId: (e.state || {}).currContestId
       })
    });
  }
  componentWillUnmount() {
    setPopStateHandler(null);
  }
  fetchContest = contestId => {
    pushState({ currContestId: contestId }, `/contest/${contestId}`);
    api.fetchContest(contestId).then(contest => {
      this.setState({
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }
      });
    });
  };
  fetchContestList = () => {
    pushState({ currContestId: null }, '/');
    api.fetchContestList().then(contests => {
      this.setState({
        currentContestId: null,
        contests
      });
    });
  };
  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }
  pageHeader() {
    if (this.state.currentContestId) {
      return this.currentContest().contestName;
    }
    return 'Naming Contests';
  }
  currentContent() {
    if (this.state.currentContestId) {
      return (
        <Contest
          contestListClick={this.fetchContestList}
          {...this.currentContest()}
        />
      );
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
        <Header message={ this.pageHeader() } />
        {this.currentContent()}
      </>
    );
  }
}

export default App;
