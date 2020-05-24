import React from 'react'
import PropTypes from 'prop-types';

import TreeComponent  from './TreeComponent'

const styles = {
  leaf: {
      cursor: 'pointer',
      display: 'inline'
  },
  node: {
      cursor: 'pointer',
      display: 'inline',
      color: 'black'
  },
  icon: {
      width: '1em',
      height: '1em',
      marginLeft: 5,
      cursor: 'cursor',
  },
  selected: {
      color: 'blue'
  },
  background: {
    background: 'red'
  }
}

class DynamicTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null}
     this.handleTreeNodeClick = this.handleTreeNodeClick.bind(this)
  }

  handleTreeNodeClick = e => {
    this.setState({ selected: e})
    if(this.props.onClick){
      this.props.onClick(e)
    }
}

  render() { 
    const { id, data, title, style } = this.props
    
    return ( 
      <div style={ style.background ? style.background : styles.background }>
    <TreeComponent key="dynamicTree" id={id} nodeData={data} content={title} open
      treeNodeClick={this.handleTreeNodeClick} isActive={this.state.selected} style={{ ...styles, ...style }} />
  </div>
     );
  }
}
 
DynamicTree.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  data: PropTypes.array
}

export default DynamicTree;
