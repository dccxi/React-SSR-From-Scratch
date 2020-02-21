import React from 'react';
import Header from './Header';

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
        <Header message={ this.state.pageHeader } />
        <div> ... </div>
      </div>
    );
  }
}

export default App;
