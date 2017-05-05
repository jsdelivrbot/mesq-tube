import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import HeaderLogo from './components/header_logo';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Footer from './components/footer';

const API_KEY = 'YOUR_YOUTUBE_API_KEY_HERE';

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        
        this.videoSearch('surf');
    }

    videoSearch(term){

        YTSearch({key: API_KEY, term: term}, (videos) => {
            
            console.log(videos);
            this.setState(
                {
                    videos: videos,
                    selectedVideo: videos[0]
                }
            );
        });

    }

    render(){
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <HeaderLogo />
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} 
                />
                <Footer />
            </div>
        );
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));