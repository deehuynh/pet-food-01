

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
    <div className="header__top-bar">
      {props.children}
    </div>
  )
}

function Logo () {
  return (
    <span className="header__logo">
      <img src='' />
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
  return (
    <div className="header__tab">
      <div className="header__link"></div>
    </div>
  )
}

function Link (props) {
  return (
    <a className="header__link" href="" ></a>
  )
}