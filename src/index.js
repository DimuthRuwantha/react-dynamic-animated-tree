import React from 'react'
import styles from './styles.module.css'
import  DynamicTree  from './DynamicTree'

export const ExampleComponent = text => {
  //console.log(text)
  return <div className={styles.test}>
    <DynamicTree key="2" id="2" nodeData={text} content="Dynamic Tree" open />
  </div>
}
