import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
const styles = {
    margin: "40px",
    width: "600px",
    position: "relative",
    top: "60px",
    
  };

  const selectStyles = {
    margin: "40px",
    width: "300px",
    position: "absolute",
    top: "170px",
    left:"6px",
    
  };

  const LabelStyles = {
    margin: "40px",
    width: "300px",
    position: "absolute",
    top: "145px",
    left:"6px",
    
    
  };

  


class Search extends Component {


    constructor(props){
        super(props)
           
        this.state = {
            searchText:'',
            amount:15,
            apiUrl:'https://pixabay.com/api/',
            apiKey:'19829433-45b01ae66ae4acaf0f2e7a034',
            image:[]


        }
    }


    onTextChange = (event)=>{


        this.setState({
            searchText: event.target.value
        })
    }


    onAmountChange = (event)=>{


        this.setState({
            amount: event.target.value
        })
    }

render(){

    return (
        <div>

            
   
    <TextField style={styles}  
    value={this.state.searchText} 
    id="filled-basic"   
    label="Enter Photo name" 
    variant="outlined" 
    onChange={this.onTextChange}/>

 
<InputLabel  style={LabelStyles} >Age</InputLabel>


   <Select
       displayEmpty
        
       style ={selectStyles}
       value={this.state.amount}
    onChange={this.onAmountChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>


   

   



        </div>
    )


}
    
}

export default Search