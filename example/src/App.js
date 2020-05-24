import React, { useState } from 'react'
import DynamicTree from 'react-dynamic-animated-tree'

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
      color: 'green'
  },
  background: {
    background: 'rgb(220, 220, 220)'
  }
}

var data = [{
  "title": "Sri Lanka",
  "id": "1",
  "childNodes": [{
      "title": "Western Province",
      "id": "11",
      "childNodes": [{
        "title": "Colombo District",
        "id": "111",
        "childNodes": [], 
      }],
  },
  {
    "title": "Central Province",
    "id": "12",
    "childNodes": [{
      "parentNode": null,
      "childNodes": [],
      "title": "Kandy",
      "id": "121"
      }],
  }],
},
{
  "title": "India",
  "id": "2",
  "childNodes": [{
    "title": "Maharashtra",
    "id": "21",
    "childNodes": [{
      "title": "Pune",
      "id": "211",
      "childNodes": [],
    }],
  }],  
}]


const App = () => {
  const [node, setSelectedNode] = useState("");
  return (
  <div>
    <DynamicTree style={styles} key="root" id="root" data={[...data]} title="Dynamic Tree" onClick={(node)=> setSelectedNode(node)} />
    <p>selected Node:</p>
    <pre> {JSON.stringify(node, undefined, 2)}</pre>
  </div>
  
  )
}

export default App
