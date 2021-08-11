import LogoIMG from '../images/logo.png'

export default function Header () {
  return (
    <header className='header'>
      <Container>
        <TopBar>
          <Logo />
          <Nav />
        </TopBar>
      </Container>
    </header>
  );
}

function Container (props) {
  return (
    <div className="header__container">
      {props.children}
    </div>
  )
}

function TopBar (props) {
  return (
    <div className="header__top-bar header__top-bar--padding">
      {props.children}
    </div>
  )
}

function Logo () {
  return (
    <span className="header__logo">
      <img src={LogoIMG} alt='Brand' />
    </span>
  )
}

function Nav () {
  return (
    <nav className="header__nav">
      <Tab />
    </nav>
  )
}

function Tab (props) {
  let data = [];
  tab.forEach((item, index)=>{
    data.push(<Link key={index} name={item.name} />);
  });

  return (
    <div className="header__tab header__tab--padding">
      {data}
    </div>
  )
}

function Link (props) {
  return (
    <a className="header__link" href="" >{props.name}</a>
  )
}

const tab = [
  {name: 'shop for dog'},
  {name: 'shop for cat'},
  {name: 'our story'},
  {name: 'contact us'}
];