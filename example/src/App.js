import React from 'react'

import { ExampleComponent } from 'react-dynamic-animated-tree'
import 'react-dynamic-animated-tree/dist/index.css'

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
          "id": "3fd17bad-4a77-4503-b1b2-659295e314dc"
      }
      ],
      "title": "Section 3",
      "id": "8214f3d4-e8cf-4753-957a-46cbceabb51a"
  }
  ],
  "title": "Department Two",
  "id": "2",
}
]

var name = "my name"
const App = () => {
  return <ExampleComponent text={data} />
}

export default App
