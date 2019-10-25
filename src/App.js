import React,{Component} from 'react';
import './App.css';
import CardList from './component/card-list/cardList';
import Search from './component/search-box/searchBox';

class App extends Component{
constructor(){
  super();

  this.state = {
    monsters:[],
    searchField:''
  }
}

 async componentDidMount(){
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const jdata = await data.json();
  this.setState({monsters:jdata});
}

handleFilter = (e)=>{
  this.setState({searchField:e.target.value})
};

  render(){
    const {monsters,searchField} = this.state;

    const filteredMonster = monsters.filter(monster=>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
      <div className="App">
        <h1 className='h1'>Monsters Rolodex </h1>
        <Search
         filter={this.handleFilter}
         placeholder='Search Monster'
        />
        <CardList monsters = {filteredMonster}/>
      </div>
    )
  }
}


export default App;
