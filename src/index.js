import React from 'react'
import PropTypes from 'prop-types';

import  TreeComponent  from './TreeComponent'

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
  }
}
DynamicTree.PropTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  data: PropTypes.array
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
    return ( 
      <div>
    <TreeComponent key="dynamicTree" id={this.props.id} nodeData={this.props.data} content={this.props.title} open
      treeNodeClick={this.handleTreeNodeClick} isActive={this.state.selected} styles={styles} />
  </div>
     );
  }
}
 
export default DynamicTree;
