import React, { Component, Fragment } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Item from './Item';
import ItemList from './ItemList';
import ErrorDisplay from './ErrorDisplay';
import faker from 'faker';

import '../styles/App.css';

class App extends Component {
  state = {
    errorMessage: ""
  };

  renderContent () {
    if (this.state.errorMessage) {
      return (
        <ErrorDisplay/>
      );
    } else {
      return (
        <Fragment>
          <Header/>
          <div id="content" className="ui masthead vertical segment">
            <SearchBar/>
            <ItemList>
              <Item
                  image={{src: faker.image.animals(), name: faker.name.jobArea()}}
                  title={faker.lorem.word()}
                  author={faker.name.firstName()}
              />
            </ItemList>
          </div>
        </Fragment>
      );
    }
  }

  render () {
    return (
      <div class="ui placeholder segment">
        {this.renderContent()}
      </div>
    )
  }

  componentDidMount () {
    console.log('컴포넌트 마운트');
    this.setState({errorMessage: null});
  }
}

export default App;