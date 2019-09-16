import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';

/**
 * 
 * Search Input to look for weather forecast
 * 
 * @extends React.Component
 * 
 * @property {string} label - The label to show as placeholder for the input
 * 
 * @property {function} onClick - Function provided for the on click event
 * 
 * @property {function} onChange - Function provided for the on change event
 * 
 * @property {object} containerStyle - Style for the main container
 * 
 */
export default class SearchWeatherInput extends React.Component{

  onClick= ()=> {this.props.onClick()}

  onChange= e=> {this.props.onChange(e)}

  onKeyDown= (e)=>{
    if(e.key === "Enter")
      this.onClick()
  }

  render(){
    const { label, containerStyle }= this.props;

    return(
      <Paper style= {{...styles.container, ...containerStyle}}>
        <InputBase
          placeholder= {label}
          style= {styles.input}
          onChange= {this.onChange}
          inputProps= {{ 'aria-label': 'search' }}
          onKeyDown= {this.onKeyDown}
        />
        <IconButton onClick= {this.onClick}>
          <SearchIcon />
        </IconButton>
      </Paper>
    )
  }
}

const styles= {
  container: { 
    display: 'flex'
    , marginTop: '1em'
    , paddingLeft: '1em'
    , paddingRight: '0.3em'
  }
  , input: {
    flex: 1
  }
}

SearchWeatherInput.propTypes= {
  label: PropTypes.string
  , onClick: PropTypes.func
  , onChange: PropTypes.func
  , containerStyle: PropTypes.object
};

SearchWeatherInput.defaultProps = {
  label: ''
  , onClick: ()=>{}
  , onChange: ()=>{}
  , containerStyle: {}
};