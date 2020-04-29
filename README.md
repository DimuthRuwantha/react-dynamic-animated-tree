# react-dynamic-animated-tree

> React animated tree with dynamically generated with the data

[![NPM](https://img.shields.io/npm/v/react-dynamic-animated-tree.svg)](https://www.npmjs.com/package/react-dynamic-animated-tree) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![Node.js CI](https://github.com/DimuthRuwantha/create-dynamic-animated-tree/workflows/Node.js%20CI/badge.svg)

## Install

```bash
npm install --save react-dynamic-animated-tree
```

Demo
https://codesandbox.io/s/react-dynamic-tree-git8z

## Usage

```jsx
import React, { Component } from 'react'

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

class Example extends Component {
  render() {
    return <DynamicTree key="1" data={[...data]} />
  }
}
```

## License

MIT © [DimuthRuwantha](https://github.com/DimuthRuwantha)
