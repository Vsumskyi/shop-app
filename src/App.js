import React from 'react'
import { Home } from 'Components/Pages/Home/Home'
import { Navigation } from 'Components/UI/Navigation/Navigation'

import {Switch, Route, BrowserRouter} from 'react-router-dom'
import 'antd/dist/antd.css'
import { Header } from './Components/UI/Header/Header'
import { Cart } from './Components/Pages/Cart/Cart'
import { Footer } from './Components/UI/Footer/Footer'
import { Layout } from './Components/UI/Layout/Layout'

const App = () => {
  return (
      <BrowserRouter>
        <Header>
          <Navigation />
        </Header>
        
      <Layout>
        <Switch>
          <Route path='/cart' component={Cart}/>
          <Route path='/' component={Home}/>
        </Switch>
      </Layout>

        <Footer />
      </BrowserRouter>
  )
}
export default App
