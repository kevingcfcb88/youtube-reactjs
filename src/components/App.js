import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component{
  state = {videos:[]};

  onSearch = async term => {
    const response = await youtube.get('/search',{
      params:{
        q: `${term}`
      }
    });
    this.setState({videos: response.data.items });
    
  }

  render(){
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearch}/>
        <label>I have {this.state.videos.length} videos</label>
      </div>      
    );
  }
}

export default App;