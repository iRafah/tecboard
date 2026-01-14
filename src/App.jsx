import './App.css'
import { Banner } from './components/Banner'
import { FormEvents } from './components/FormEvents'
import { Theme } from './components/Theme'

// In react, each component is a function.

// Properties (props) are used to pass data between components.
// props.children

function App() {

  const themes = [
    {
      id: 1,
      name: 'front-end'
    },
    {
      id: 2,
      name: 'back-end'
    },
    {
      id: 3,
      name: 'cloud'
    },
    {
      id: 4,
      name: 'inteligência artificial'
    },
    {
      id: 5,
      name: 'devops'
    },
    {
      id: 6,
      name: 'data science'
    }
  ]

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>

      <Banner />

      <FormEvents />

      <section>
        <Theme theme={themes[0]} />
        <Theme theme={themes[1]} />
        <Theme theme={themes[2]} />
        <Theme theme={themes[3]} />
        <Theme theme={themes[4]} />
        <Theme theme={themes[5]} />
      </section>
    </main>
  )
}

export default App
