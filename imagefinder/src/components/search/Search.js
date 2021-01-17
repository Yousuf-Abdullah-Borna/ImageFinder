import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import React, { Component } from 'react';
import ImageResults from '../image-results/ImageResults';
const styles = {
    margin: "40px",
    width: "600px",
    position: "relative",
    top: "60px",
    left:"570px"
    
  };

  const selectStyles = {
    margin: "40px",
    width: "300px",
    position: "absolute",
    top: "170px",
    left:"6px",
    
  };


  const switchStyles = {
    margin: "40px",
    position: "absolute",
    top: "150px",
    left:"516px",
    
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
            amount:0,
            apiUrl:'https://pixabay.com/api/',
            apiKey:'19829433-45b01ae66ae4acaf0f2e7a034',
            image:[],
            trueValue:false


        }
    }

    toggleChecked = (event) =>{

      this.setState((prevstate)=>{
        return{
        trueValue: (prevstate.trueValue) ? false:true
        }
    }, ()=>{

axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=${this.state.trueValue}`)
.then( res => this.setState({ image:res.data.hits}))
.catch( err => console.log(err))
    })

     
    }

    onTextChange = (event)=>{


        this.setState({
            searchText: event.target.value
        }, ()=>{

    axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=${this.state.trueValue}`)
    .then( res => this.setState({ image:res.data.hits}))
    .catch( err => console.log(err))
        })
    }


    onAmountChange = (event)=>{


        this.setState({
            amount: event.target.value
        }, ()=>{

            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=${this.state.trueValue}`)
            .then( res => this.setState({ image:res.data.hits}))
            .catch( err => console.log(err))
                })
    }

render(){

   console.log(this.state.image)
   console.log(this.state.trueValue)


    return (
        <div>

            
   
    <TextField style={styles}  
    value={this.state.searchText} 
    id="filled-basic"   
    label="Enter Photo name" 
    variant="outlined" 
    onChange={this.onTextChange}/>

 
<InputLabel  style={LabelStyles} >Images Amount</InputLabel>


   <Select
       displayEmpty
        
       style ={selectStyles}
       value={this.state.amount}
    onChange={this.onAmountChange}

      >
        <MenuItem value={0}>
          <em>None</em>
        </MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={60}>60</MenuItem>
        <MenuItem value={120}>120</MenuItem>
      </Select>

        <br/>

        {this.state.image.length > 0 ? (<ImageResults images ={this.state.image}/>) : null }
         
      <div style={switchStyles}>
      
      <InputLabel>Parental Control</InputLabel>
        <Switch checked={this.state.trueValue} onChange={this.toggleChecked} size='medium'/>
        </div>


        </div>
    )


}
    
}

export default Search