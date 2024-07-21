import { useState } from 'react'

import './App.css'
import CardWrapper from './components/CardWrapper'
import TextComponents from './components/TextComponents'
import TextComponents2 from './components/TextComponents2'

function App() {

  return (
    <>
      <div>

        <CardWrapper >
          <CardWrapper>
            <CardWrapper>

              <TextComponents />

            </CardWrapper>
          </CardWrapper>


        </CardWrapper>
        <CardWrapper>
          <TextComponents2 />
        </CardWrapper>


      </div>

    </>
  )
}

export default App
