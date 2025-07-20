import OrderButton from '../components/OrderButton.jsx'

function FirstPage() {
  return (
    <header className="aplication-header">
        <div className="logo">Cloud IT Systems</div>
        <nav className="navigation">
            <ul>
                <li className='nav-item'>Home</li>
                <li className='nav-item'>About</li>
                <li className='nav-item'>Contact</li>
            </ul>
        </nav>
        <div>
            <OrderButton/>
        </div>
    </header>
  );
}

export default FirstPage
