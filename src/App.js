import { Component } from "react";
import './cartList-component/cartList.component';
import './searchBox-component/searchBox.component';
import "./App.css";
import CartList from "./cartList-component/cartList.component";
import SearchBox from "./searchBox-component/searchBox.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster:[],
      searchValue: '',
    };
  }

  async componentDidMount(){
     
  const responce = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await responce.json();
  this.setState(()=>{
         return { monster : data};
  },()=>{

  });    
 
}

onsearchchange = (event)=> {
  const searchValue = event.target.value.toLocaleLowerCase(); 
  this.setState(()=>{
    return {searchValue}
  
  });
}


  render(){

     const filterMonster =  this.state.monster.filter((F)=>{
        return F.name.toLocaleLowerCase().includes(this.state.searchValue)

      });
      
      const {onsearchchange} = this;
      
      return (  
 

        <div className="App">
       <h1 className="mainHeading">Monster Rolodex </h1>
      <SearchBox onSearchHandler = {onsearchchange} placeholder = {'search here'} className = 'searchBar'/>

      <CartList monster = {filterMonster}/>



    </div>

);
  }
}


export default App;
