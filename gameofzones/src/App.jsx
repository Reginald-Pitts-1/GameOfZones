// Import the different pages for your website
import Home from './pages/home/Home'
import About from './pages/about/About'
import Constitution from './pages/constitution/Constitution'
import Contact from './pages/contact/Contact'
import Settings from './pages/settings/Settings'
import notFound from './pages/notFound/notFound'

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Constitution />
      <Contact />
      <Settings />
      <notFound />
    </div>
  )
}

export default App