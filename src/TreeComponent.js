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
            return !this.props.nodeData.length ? null : (
            <div style={{ textAlign: 'left' }}>
                <Tree key={this.props.key} open={this.props.open} 
                    content={
                        <div style={{ ...this.props.styles.node }}>
                            <span key={this.props.key} value={this.props.key} className="treeNode"
                                style={( this.props.isActive && this.props.id == this.props.isActive.id) ? this.props.styles.selected : { color: 'black'} }
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
                                    <div style={{ ...this.props.styles.node }}>
                                        <span key={currentNode.id} 
                                            style={( this.props.isActive && currentNode.id == this.props.isActive.id) ? this.props.styles.selected : null }
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
                                styles={this.props.styles}></TreeComponent>
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