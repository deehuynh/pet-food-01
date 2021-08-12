import { useMediaQuery } from 'react-responsive';

//Importing the components
import Header from "./header"
import Content from './content'
import Footer from './footer'

//Importing the sass file
import '../styles/layout.scss'

export default function Layout () {
  const isTabletOrMobile = useMediaQuery({maxWidth: 1024});

  if (isTabletOrMobile) {
    return (
      <div className="alert">
        No mobile responsive yet. Please acessing the website on desktop or laptop!
      </div>
    )
  }

  return (
    <div className='layout'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}