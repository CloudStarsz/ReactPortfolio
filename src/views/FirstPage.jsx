import Button from '../components/Button.jsx'

function FirstPage() {
  return (
    <div className='home'>
      <div className='presentation'>
        <p className='presentation-intro'>Olá, sou o</p>
        <p className='presentation-name'>Raoni Moraes</p>
        <div className='presentation-roles'>
          <p className='role'>Fullstack Developer</p>
          <p className='role'>Desenvolvedor Web</p>
          <p className='role'>Desenvolvedor Mobile</p>
        </div>
        <Button texto='Conhecer meu trabalho' id='visit_my_work-btn' />
      </div>
    </div>
  );
}

export default FirstPage;
