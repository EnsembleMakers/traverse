import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Header from './Header';
import ErrorDisplay from './ErrorDisplay';
import SearchBar from './SearchBar';
import DisplayItem from './DisplayItem';
import Item from './Item';

import './index.css';

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
            <DisplayItem>
              <Item
                 image={{src: faker.image.animals(), name: faker.name.jobArea()}}
                 title={faker.lorem.word()}
                 author={faker.name.firstName()}
              />
            </DisplayItem>
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

ReactDOM.render(<App />, document.querySelector("#root"));