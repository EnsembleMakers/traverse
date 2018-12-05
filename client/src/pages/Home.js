import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ItemList from '../components/ItemList';
import Item from '../components/Item';
import faker from 'faker';

class Home extends Component {
  render() {
    return (
      <div>
          <SearchBar/>
          <ItemList>
            <Item
              image={{src: faker.image.animals(), name: faker.name.jobArea()}}
              title={faker.lorem.word()}
              author={faker.name.firstName()}
            />
          </ItemList>
      </div>
    )
  }
}

export default withRouter(Home);