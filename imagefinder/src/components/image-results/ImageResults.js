
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const GridStyle = {

    width: "800px",
    height: "750px",
    position: "absolute",
    top: "290px",
    left:"500px"
}

class ImageResults extends Component{




    render(){

    return (
            <div style={GridStyle}>
                <GridList cellHeight={120} cellWidth={110} cols={5}>
        {this.props.images.map((tile) => (
          <GridListTile key={tile.id} cols={tile.cols || 1}>
            <img src={tile.largeImageURL} alt={tile.type} />
            <GridListTileBar title={tile.tags}/>
          </GridListTile>
        ))}
      </GridList>
            </div>

    )
}


}

ImageResults.propTypes={

    images: PropTypes.array.isRequired
}


export default ImageResults