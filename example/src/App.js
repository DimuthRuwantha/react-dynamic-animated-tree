import React from 'react'

//import 'react-dynamic-animated-tree/dist/index.css'
import DynamicTree  from 'react-dynamic-animated-tree'

var data = [{
  "parentNode": null,
  "childNodes": [{
      "parentNode": null,
      "childNodes": [{
          "parentNode": null,
          "childNodes": [],
          "title": "Ward 1",
          "id": "111"
      }
      ],
      "title": "Section 1",
      "id": "11"
  },
  {
      "parentNode": null,
      "childNodes": [{
          "parentNode": null,
          "childNodes": [],
          "title": "Ward 1",
          "id": "121"
      }
      ],
      "title": "Section 2",
      "id": "12"
  }
  ],
  "title": "Department One",
  "id": "1"
}, {
  "parentNode": null,
  "childNodes": [{
      "parentNode": null,
      "childNodes": [{
          "parentNode": null,
          "childNodes": [],
          "title": "Ward 1",
          "id": "211"
      }
      ],
      "title": "Section 3",
      "id": "21"
  }
  ],
  "title": "Department Two",
  "id": "2",
}
]

const App = () => {
  return <DynamicTree key="1" data={[...data]} />
}

export default App
