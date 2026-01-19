import './App.css'
import { Banner } from './components/Banner'
import { FormEvents } from './components/FormEvents'
import { Theme } from './components/Theme'
import { CardEvent } from './components/CardEvent'

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

  const events = [
    {
      folder: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      theme: themes[0],
      date: new Date(),
      title: 'Women in Front'
    }
  ]

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>

      <Banner />

      <FormEvents />

      {themes.map(function (item) {
        return (
          <section>
            <Theme key={item.id} theme={item} />
            <CardEvent key={events[0]} event={events[0]} />
          </section>
        )
      })}

    </main>
  )
}

export default App
