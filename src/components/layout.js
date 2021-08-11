//Importing the components
import Header from "./header"
import Content from './content'

//Importing the sass file
import '../styles/layout.scss'

export default function Layout () {
  return (
    <div className='layout'>
      <Header />
      <Content />
    </div>
  );
}