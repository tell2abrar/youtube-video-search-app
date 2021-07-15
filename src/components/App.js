import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';


class App extends React.Component {


        state = {videos:[],selectedVideo:null};

    onTermSearch = async (term)=>{
        console.log("from onTermSearch callback");
        console.log(term);
        try {
            const responce = await Youtube.get('/search',{params:{q:term}});
            console.log("********Responce from youtube api********");
            console.log(responce);
            this.setState({videos:responce.data.items,selectedVideo:responce.data.items[0]});
        }catch(e){
            console.log(e);
        }
    }

    onVideoSelect = (video) =>{
        console.log("On video select");
        console.log(video);
        this.setState({selectedVideo:video});
    }
    


    render(){
        return (
            <div className='ui container'>
                <SearchBar onTermSearch={this.onTermSearch}/>
                <p>videoes found: {this.state.videos.length}</p>
                <div className="container">
                    <VideoDetail video = {this.state.selectedVideo}/>
                    <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                </div>
            </div>
            
        );
    }

}

export default App;