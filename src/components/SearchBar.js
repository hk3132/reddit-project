import React, { Component } from 'react'

class SearchBar extends Component {
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
      <div className="search">
       <input className="searchBarInput" placeholder= "🔍 Search Reddit" label="🔎"/>
     </div>
   )
 }
}

export default SearchBar