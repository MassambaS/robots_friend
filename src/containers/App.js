import React, { Component } from 'react'; //, useState, useEffect (hooks)
import {connect} from 'react-redux';
import './App.css';
import CardList from '../components/CardList';
import Search from '../components/Search';
import Scroll from '../components/Scroll';
import Header from '../components/header';

import {requestRobots, setSearchField} from '../actions';


const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
})

const mapDispatcherToProps = (dispatch) => ({
  onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
})


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: []
    };
  }


  componentDidMount() {
    this.props.onRequestRobots();
  }

  render(){

    
    const {searchField, onSearchChange, robots, isPending} = this.props
    console.log(this.props)

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <Header/>
          <Search searchField={searchField} searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>

        </div>
          
       
      )
    
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(App);

// function App() { //utilisation des hooks plutôt qu'une classe

//   const [robots, setRobots] = useState([])
//   const [ searchField, setSearchField] = useState('')

//   useEffect(()=> {
//     fetch('https://jsonplaceholder.typicode.com/users')
//      .then(response => response.json())
//      .then(users => {setRobots(users)});

//   },[])



//   const onSearchChange = (e) => {
//     setSearchField(e.target.value)
//   }

//   const filteredRobots = robots.filter(robot => {
//     return robot.name.toLowerCase().includes(searchField.toLowerCase())
//   })

//   return !robots.length ?
//     <h1>Loading</h1> :
//     (
//       <div className='tc'>
//         <h1 className='f1'>Robots friends</h1>
//         <Search searchField={searchField} searchChange={onSearchChange} />
//         <Scroll>
//           <CardList robots={filteredRobots} />
//         </Scroll>
//       </div>       
//     )
// }

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



  // onSearchChange = (e) => {
  //   this.setState({searchField: e.target.value})
  // }



