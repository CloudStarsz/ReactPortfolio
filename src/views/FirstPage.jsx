import Button from '../components/Button.jsx'
import Navigation from '../components/Navigation.jsx'

function FirstPage() {
  return (
  <>
    <header className="site-header">
        <div className="logo">Cloud IT Systems</div>
        <Navigation items={['Home', 'Resume', 'Contact', ]} />
        <Button texto='Fazer orçamento'/>
    </header>
    <main>
        <div className='presentation'>
            <p className='presentation-intro'>Olá, sou o</p>
            <p className='presentation-name'>Raoni Moraes</p>
            <div className='presentation-roles'>
                <p className='role'>Fullstack Developer</p>
                <p className='role'>Desenvolvedor Web</p>
                <p className='role'>Desenvolvedor Mobile</p>
            </div>
            <Button texto='Conhecer meu trabalho' id='visit_my_work-btn'/>
        </div>
    </main>
  </>
  );
}

export default FirstPage
