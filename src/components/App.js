import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  state = { pageHeader: 'Naming Contests' };
  componentDidMount() {
    console.log('did mount');
  }
  componentWillUnmount() {
    console.log('will unmount');
  }
  render() {
    return (
      <div className='App'>
        <Header message={this.state.pageHeader} />
        <div>
          {this.props.contests.map((contest) => {
            return <ContestPreview {...contest} key={contest.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
