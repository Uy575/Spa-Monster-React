import { Component } from "react";
import './searchBox-css/searchbox.component.css';
class SearchBox extends Component{
 
    render(){
         

        return(

            <input type='search' 
            placeholder = {this.props.placeholder}
            className = {`search-box ${this.props.className}`}
            onChange={this.props.onSearchHandler}
        />

        );
 
            
          
        
    }
 

}

export default SearchBox;