import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { Header } from 'Components/UI/Header/Header'
import { Cart } from 'Components/Pages/Cart/index'
import { Footer } from 'Components/UI/Footer/Footer'
import { Layout } from 'Components/UI/Layout/Layout'
import { Home } from 'Components/Pages/Home/index'
import { Navigation } from 'Components/UI/Navigation/index'
import { About } from './Components/Pages/About/About'

const App = () => {
  return (
    <BrowserRouter>
      <Header>
        <Navigation />
      </Header>

      <Layout>
        <Switch>
          <Route path='/cart' component={Cart} />
          <Route path='/about' component={About} />
          <Route path='/' component={Home} />
        </Switch>
      </Layout>

      <Footer />
    </BrowserRouter>
  )
}
export default App
