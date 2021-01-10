import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';

const styles = {
    margin: "40px",
    width: "600px",
    position: "relative",
    top: "30px",
    border: "1px solid #42d1f5"
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

render(){

    return (
        <div>

            <TextField 
            name="SearchText" 
            value={this.state.searchText}
            onChange={this.onTextChange}
            floatingLabelText ="Search For images"
            fullWidth={true}
            />

<TextField style={styles}  value={this.state.searchText}  id="filled-basic"   label="Enter Photo name" variant="outlined" />
        </div>
    )


}
    
}

export default Search