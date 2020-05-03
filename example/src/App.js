import React, { useState } from 'react'
import DynamicTree  from 'react-dynamic-animated-tree'

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
    <p>selected Node: {JSON.stringify({node:node.title, id: node.id})}</p>
    <DynamicTree key="root" id="root" data={[...data]} title="Dynamic Tree" onClick={(node)=> setSelectedNode(node)} />
  </div>
  
  )
}

export default App
