import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from '../actions/filters';

const ExpenseListFilters = (props)=>(
    <div>
        <input type="text" value={props.filters.text} 
            onChange={(e)=>{
                dispatch(setTextFilter(e.target))    
            }} 
        />
    </div>
)

const mapStateToProps = (state) =>{
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)