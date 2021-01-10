import React, {Component} from 'react';

import './Style.css';

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

class SearchComponent extends Component{

    state = {
        details: [ {
            id: 1,
            "PlanetName": "Tatooine",
            "population": "200000",
            "climate": "arid",
            "terrain": "desert"
        },
        {
            id: 2,
            "PlanetName": "Alderaan",
            "population": "2000000000",
            "climate": "temperate",
            "terrain": "grasslands, mountains"
        },
        {
            id: 3,
            "PlanetName": "Yavin IV",
            "population": "1000", 
            "climate": "temperate, tropical",
            "terrain": "jungle, rainforests"
        },
        {
            id: 4,
            "PlanetName": "Hoth",
            "population": "unknown",
            "climate": "frozen",
            "terrain": "tundra, ice caves, mountain ranges"
        },
        {
            id: 5,
            "PlanetName": "Dagobah",
            "population": "unknown",
            "climate": "murky",
            "terrain": "swamp, jungles"
        },
        {
            id: 6,
            "PlanetName": "Bespin",
            "population": "6000000",
            "climate": "temperate", 
            "terrain": "gas giant"
        },
        {
            id: 7,
            "population": "30000000",
            "PlanetName": "Endor",  
            "climate": "temperate",  
            "terrain": "forests, mountains, lakes"
        },
        {
            id: 8,
            "PlanetName": "Naboo",
            "population": "4500000000",
            "climate": "temperate", 
            "terrain": "grassy hills, swamps, forests, mountains"
        },
        {
            id: 9,
            "PlanetName": "Coruscant",
            "population": "1000000000000",
            "climate": "temperate",
            "terrain": "cityscape, mountains"
        },
        {
            id: 10,
            "PlanetName": "Kamino",
            "population": "1000000000",
            "climate": "temperate",
            "terrain": "ocean"   
        }
        ],
        searchString: '',
        //apiCall: false --this value is set to true because api is not working. When Api starts working, we can set to false again
        apiCall: true
    }

    timer = null;
    
    searchStringhandler = (e) => {
        clearTimeout(this.timer);
        this.setState({searchString: e.target.value});
        this.timer = setTimeout(this.apiCallMade, WAIT_INTERVAL)
    }

    logout = () => {
        this.props.history.push('/');
    }

    keyDownHandler = (e) => {
        console.log('In Key Down Handler');
        console.log(e.keyCode);
        if (e.keyCode === ENTER_KEY) {
            clearTimeout(this.timer)
            this.apiCallMade();
        }
    }

    apiCallMade = () => {
        let details;
        let id = 0;
        if (!this.state.apiCall) {
            console.log('Making Api call')
            fetch('http://swapi.dev/api/planets/')
            .then(response => response.json())
            .then(data => {
                details = data.results.reduce( (arr, element) => {
                    id += 1;
                    const ob = {id: id,
                                PlanetName: element.name, 
                                population: element.population,
                                climate: element.climate,
                                terrain: element.terrain
                                }
                    arr.push(ob)
                    return arr;
                    }, []);
                this.setState({details: details, apiCall: true});
            });    
        }
        else {
            console.log('Api call is already made');
        }
    }

    render(){
        const {username} = this.props.match.params;
        const list = this.state.details.filter(el => {
            if (this.state.searchString !== '' && el.PlanetName.toLowerCase().includes(this.state.searchString.toLowerCase()))
                return true
            else
                return false
        }).map(el => {
            const px = el.population.toString().length + 15 + "px";
            return <li key={el.id}>
                        <span style={{ fontSize : px }}>
                            {el.PlanetName}
                            <br />climate: {el.climate}
                            <br />terrain: {el.terrain}
                        </span>
                        <p></p>
                        <p></p>
                    </li>
        });

        return(
            <div className="box">
                <div className="container">
                    <h2>Welcome, {username} </h2>
                    <input type="text"
                        value={this.state.searchString}
                        onChange={this.searchStringhandler}
                        onKeyDown={this.keyDownHandler}
                        placeholder="Search Planets .." />
                    <br />
                    {list}
                    <br />
                    <button className="logoutbtn" onClick={this.logout}>Logout</button>
                </div>
            </div>
        )
    }
} 

export default SearchComponent;
