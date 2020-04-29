import React from 'react'
import styles from './styles.module.css'
import  TreeComponent  from './TreeComponent'

class DynamicTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      selected: null
     }
     this.handleTreeNodeClick = this.handleTreeNodeClick.bind(this)
  }

  handleTreeNodeClick = e => {
    this.setState({ selected: e})
}

  render() { 
    return ( 
      <div>
    <TreeComponent key="dynamicTree" id="1" nodeData={this.props.data} content="Dynamic Tree" open
      treeNodeClick={this.handleTreeNodeClick} isActive={this.state.selected} />
  </div>
     );
  }
}
 
export default DynamicTree;
