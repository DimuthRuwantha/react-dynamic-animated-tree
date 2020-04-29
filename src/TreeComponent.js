import React, { Component } from 'react';
import Tree from 'react-animated-tree'

const styles = {
    leaf: {
        cursor: 'pointer',
        display: 'inline'
    },
    node: {
        cursor: 'pointer',
        display: 'inline'
    },
    icon: {
        width: '1em',
        height: '1em',
        marginLeft: 5,
        cursor: 'cursor',
    },
    selected: {
        background: 'grey'
    }
}

class TreeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nodeData: [],
            showIcon: "hidden",
            isActive: ""
        };
        this.handleSelected = this.handleSelected.bind(this)
    }

    handleSelected = e => {
        console.log("clicked", e.target)
        e.target.style.background = "grey"
    }
   
    render() {

        return !this.props.nodeData.length ? null : (
            <div style={{ textAlign: 'left' }}>
                <Tree key={this.props.key} open={this.props.open} content={
                                <div style={{ ...styles.node }}>
                                    <span key={this.props.key} value={this.props.key} className="treeNode"
                                        style={( this.props.isActive && this.props.id == this.props.isActive.id) ? { color: 'blue'} : { color: 'black'} }
                                        onClick={ this.props.treeNodeClick ?
                                            () => this.props.treeNodeClick({ 
                                                id: this.props.id,
                                                title: this.props.content, 
                                                parentNode: this.props.parentNode,
                                                childNodes: this.props.nodeData 
                                        }) : null} >{this.props.content}</span>
                                </div>
                            }>
                    {this.props.nodeData.map((currentNode, index) => (
                        !currentNode.childNodes.length > 0 ?
                            <Tree key={currentNode.id} content={
                                <div style={{ ...styles.node }}>
                                    <span key={currentNode.id} 
                                        style={( this.props.isActive && currentNode.id == this.props.isActive.id) ? { color: 'blue'} : { color: 'black'} }
                                        value={currentNode.id} className="treeNode" 
                                        onClick={this.props.treeNodeClick ? () => this.props.treeNodeClick(currentNode) : null }>{currentNode.title}</span>
                                </div>
                            } ></Tree> :
                            <TreeComponent nodeData={currentNode.childNodes}
                                isActive={this.props.isActive}
                                key={currentNode.id}
                                id={currentNode.id}
                                parentNode={currentNode.parentNode}
                                content={currentNode.title}
                                treeNodeClick={this.props.treeNodeClick}
                                open={false}></TreeComponent>
                    )
                    )}
                </Tree>
            </div>
        );
    }
}
 
export default TreeComponent;