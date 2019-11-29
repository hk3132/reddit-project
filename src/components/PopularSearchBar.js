import React, { Component } from 'react'

class PopularSearch extends Component {
 state = {
   query: '',
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

 render() {
   return (
      <div className="popsearch">
       <input className="searchBarInput" placeholder= "Filter"/>
     </div>
   )
 }
}

export default PopularSearch