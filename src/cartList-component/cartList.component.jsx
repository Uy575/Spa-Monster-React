import { Component } from "react";
import Card from "../card-component/card.component";
import './cartList.style.css';

class CartList extends Component{

    render(){
 
       const {monster} = this.props;
       
      return(

        <div className="card-list">
        {monster.map((m)=>{

        return(
 
        <Card monster = {m}/>

        )
        
        })}

        </div>
          
          )
      


    }




}

export default CartList;