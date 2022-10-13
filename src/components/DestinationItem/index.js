// Write your code here

import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {name, imgUrl} = this.props

    return (
      <li>
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
      </li>
    )
  }
}

export default DestinationItem
