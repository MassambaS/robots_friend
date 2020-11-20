import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import Search from '../components/Search';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      robots: []
    };
  }


  onSearchChange = (e) => {
    this.setState({searchField: e.target.value})
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }

  render(){

    const {robots, searchField} = this.state;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Robots friends</h1>
          <Search searchField={searchField} searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>

        </div>
          
       
      )
    
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
