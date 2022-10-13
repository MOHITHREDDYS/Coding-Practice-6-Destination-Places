// Write your code here

import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsLists} = this.props
    this.state.destinationsPlacesList = destinationsLists
    const {searchInput, destinationsPlacesList} = this.state
    const searchResults = destinationsPlacesList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg_container">
        <div className="main_container">
          <h1>Destination Search</h1>
          <div className="search_container">
            <input
              type="search"
              onChange={this.changeSearchInput}
              value={searchInput}
              placeholder="Search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="image"
            />
          </div>
          <ul>
            {searchResults.map(eachPlace => (
              <DestinationItem
                key={eachPlace.id}
                name={eachPlace.name}
                imgUrl={eachPlace.imgUrl}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
