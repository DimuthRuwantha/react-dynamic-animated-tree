import React from 'react'
import styles from './styles.module.css'
import  DynamicTree  from './DynamicTree'

export const ExampleComponent = ({text}) => {
  return <div>
    <DynamicTree key="dynamicTree" id="1" nodeData={text} content="Dynamic Tree" open />
  </div>
}
