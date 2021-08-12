import Instagram from '../icons/instagram-brands.svg'
import Facebook from '../icons/facebook-f-brands.svg'
import Twitter from '../icons/twitter-brands.svg'
import Whatsapp from '../icons/whatsapp-brands.svg'


export default function Footer () {
  return (
    <footer className="footer">
      <div className="footer__container">
        <FooterNav />
        <Copyright>
          &copy; Company Name 2020. All rights reserved.
        </Copyright>

        <Media />
      </div>
    </footer>
  )
}

const tab = [
  {name: 'shop for dog'},
  {name: 'shop for cat'},
  {name: 'our story'},
  {name: 'contact us'}
];

function FooterNav (props) {
  let data = [];
  tab.forEach((item, index)=>{
    data.push(<a href="" key={index} >{item.name}</a>);
  });

  return (
    <div className="footer__nav">
      {data}
    </div>
  )
}

const SocialMedia = [
  {name: 'Instagram', icon: Instagram},
  {name: 'Facebook', icon: Facebook},
  {name: 'Twitter', icon: Twitter},
  {name: 'Whatsapp', icon: Whatsapp}
];

function Media () {
  const links = [];
  SocialMedia.forEach((item, index) => {
    links.push(
      <a key={index} className="footer__media-link" href="">
        <img src={item.icon} alt="social media" />
      </a>
    );
  });

  return (
    <div className="footer__media">
      {links}
    </div>
  )
}

function Copyright (props) {
  return (
    <div className="footer__copyright">
      {props.children}
    </div>
  )
}