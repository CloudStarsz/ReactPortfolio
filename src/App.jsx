import './styles/App.scss'
import FirstPage from './views/FirstPage.jsx'
import Navigation from './components/Navigation.jsx'
import Button from './components/Button.jsx'
import MyProjects from './views/MyProjects.jsx'
import Scroll from './components/Scroll.jsx'


function App() {
  return (
    <div>
      <header className="site-header">
        <div className="logo">Cloud IT Systems</div>
        <Navigation items={['Home', 'Resume', 'Contact',]} />
        <Button texto='Fazer orçamento' />
      </header>
      <div className="snap-container">
        <section className="area area-1">
          <FirstPage />
        </section>
        <section className="area area-2">
          <MyProjects />
        </section>
        <section className="area area-3">
          <h1>Seção 3</h1>
        </section>
        <section className="area area-4">
          <h1>Seção 4</h1>
        </section>
      </div>
      <Scroll />
    </div>
  )
}

export default App