import React, { Component } from 'react';
import Tree from 'react-animated-tree'

const styles = {
    leaf: {
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

class DynamicTree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nodeData: [],
            showIcon: "hidden"
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
                <Tree key={this.props.id} open={this.props.open} content={
                                <div style={{ ...styles.leaf }}>
                                    <span key={this.props.id} value={this.props.id} className="treeNode" 
                                        onClick={this.props.treeNodeClick ? 
                                            () => this.props.treeNodeClick({ id: this.props.id, title: this.props.content, childNodes: this.props.nodeData }): null} >
                                                {this.props.content}
                                    </span>
                                </div>
                            }>
                    {this.props.nodeData.map((currentNode, index) => (
                        !currentNode.childNodes.length > 0 ?
                            <Tree key={currentNode.id} content={
                                <div style={{ ...styles.leaf }}>
                                    <span key={currentNode.id} 
                                        value={currentNode.id} className="treeNode" 
                                        onClick={this.props.treeNodeClick ? () => this.props.treeNodeClick(currentNode) : null }>{currentNode.title}</span>
                                </div>
                            } ></Tree> :
                            <DynamicTree nodeData={currentNode.childNodes}
                                key={currentNode.id}
                                id={currentNode.id}
                                content={currentNode.title}
                                treeNodeClick={this.props.treeNodeClick}
                                open={false}></DynamicTree>
                    )
                    )}
                </Tree>
            </div>
        );
    }
}
 
export default DynamicTree;