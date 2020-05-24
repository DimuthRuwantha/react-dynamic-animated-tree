import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tree from 'react-animated-tree'


class TreeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nodeData: [],
            showIcon: "hidden",
            isActive: ""
        };
    }
   
    render() {
        console.log(this.props.style);
        
            return this.props.nodeData.length < 0 ? null : (<div style={{ textAlign: 'left' }}>
                <Tree key={this.props.id} open={this.props.open} 
                    content={
                        <div style={{ ...this.props.style.node }}>
                            <span key={this.props.id} value={this.props.content} className="treeNode"
                                style={( this.props.isActive && this.props.id == this.props.isActive.id) ? this.props.style.selected : this.props.style.node }
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
                            <Tree key={currentNode.id} 
                                content={
                                    <div style={{ ...this.props.style.node }}>
                                        <span key={currentNode.id} 
                                            style={( this.props.isActive && currentNode.id == this.props.isActive.id) ? this.props.style.selected : null }
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
                                open={false}
                                style={this.props.style}></TreeComponent>
                    )
                    )}
                </Tree>
            </div>
        );
    }
}

TreeComponent.propTypes = {
    content: PropTypes.string,
    id: PropTypes.string,
    nodeData: PropTypes.array
  }
 
export default TreeComponent;