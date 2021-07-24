import React from 'react';
import SearchBar from './SearchBar';
import styles from './Search.scss';
import GifList from './GifList';
import request from 'superagent';

export default class Search extends React.Component {

    constructor(props) {
        super(props);

        /** hard coded gifs */
        // this.state = {
        //     gifs: [
        //         {
        //             id: 1,
        //             url: 'http://fakeimg.pl/300'
        //         },
        //         {
        //             id: 2,
        //             url: 'http://fakeimg.pl/300'
        //         },
        //         {
        //             id: 3,
        //             url: 'http://fakeimg.pl/300'
        //         },
        //     ]
        // }

        this.state = {
            gifs: []
        }

        this.handleTermChange = this.handleTermChange.bind(this);
    }

    handleTermChange(term) {
        term = term.replace(/\s/g, '+');

        const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&limit=5`;

        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data })
            console.log(res.body.data);
        });
    }

    render() {
        return (
            <div>
                <h1>Search</h1>
                <SearchBar onTermChange={term => this.handleTermChange(term) } />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}