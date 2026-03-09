import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ClassicTemplate } from './components/templates/ClassicTemplate'
import { PreviewPage } from './components/preview/PreviewPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PreviewPage></PreviewPage>
    </>
  )
}

export default App
