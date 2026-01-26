import './App.css'
import { Banner } from './components/Banner'
import { FormEvents } from './components/FormEvents'
import { Theme } from './components/Theme'
import { CardEvent } from './components/CardEvent'

import { useState } from 'react'

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

  const [events, setEvents] = useState([
    {
      folder: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      theme: themes[0],
      date: new Date(),
      title: 'Women in Front'
    }
  ])

  function handleEventCreated(event) {
    // events.push(event)
    // console.log('All events! => ', events)
    setEvents([...events, event])
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>

      <Banner />

      <FormEvents themes={themes} whenSubmitted={handleEventCreated} />

      {themes.map(function (item) {
        return (
          <section key={item.id}>
            <Theme key={item.id} theme={item} />

            {events.map(function (item, index) {
              return <CardEvent event={item} key={index} />
            })}
          </section>
        )
      })}

    </main>
  )
}

export default App
