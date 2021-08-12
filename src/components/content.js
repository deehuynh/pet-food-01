import FoodIMG from '../images/food-box.png'
import Pet1 from '../images/pet-1.png'
import Pet2 from '../images/pet-2.png'
import Pet3 from '../images/pet-3.png'
import SearchIcon from '../icons/search.svg'

export default function Content () {
  return (
    <section className="content">
      <OurStory />
      <Ingredient />
      <FRow />
      <SRow />
      <TRow />
    </section>
  )
}

function TRow () {
  return (
    <div className="content__trow">
      <Col addclass="content__col--trow1">
        <img src={FoodIMG} alt="Food" />
      </Col>
      <Col addclass="content__col--trow2">
        <ContentTitle addclass="content__title--trow">
          Find the right food for your dog
        </ContentTitle>

        <ContentText addclass="content__text--trow">
          Each formula has been created to deliver nutrition 
          tailored to your dog's health needs whatever their size, 
          breed, age, or lifestyle.
        </ContentText>

        <ContentButton addclass="content__button--trow">
          View All Products
        </ContentButton>
      </Col>
    </div>
  )
}

function SRow () {
  return (
    <div className="content__srow">
      <Col addclass="content__col--srow1">
        <ContentTitle addclass="content__title--srow">
          Learn more about dog breeds
        </ContentTitle>

        <div className="content__search-bar">
          <input type="text" placeholder="Search breeds" />
          <div className="content__search-bar-icon">
            <img src={SearchIcon} alt="Search" />
          </div>
        </div>

        <ContentButton addclass="content__button--srow">
          View all dog breeds
        </ContentButton>
      </Col>

      <Col addclass="content__col--srow2">
        <img src={Pet3} alt="pet" />
      </Col>

      <Col addclass="content__col--srow3">
        <ContentTitle addclass="content__title--srow">
          Thinking of getting a dog?
        </ContentTitle>

        <ContentText addclass="content__text--srow">
          There are many things you need to know before getting a dog.
        </ContentText>

        <ContentButton addclass="content__button--srow">
          Learn more
        </ContentButton>
      </Col>
    </div>
  )
}

function FRow () {
  return (
    <div className="content__frow">
      <Col addclass='content__col--frow1'>
        <ContentTitle addclass="content__title--frow">The perfect start to life</ContentTitle>
        <ContentText  addclass="content__text--frow">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ContentText>

        <ContentButton addclass="content__button--frow">Learn more</ContentButton>
      </Col>

      <Col addclass='content__col--frow2'>
        <img src={Pet2} alt="Pet" />
      </Col>
    </div>
  )
}

function ContentButton (props) {
  const addclass = props.addclass ? props.addclass : '';
  return (
    <span className={`content__button ` + addclass}>{props.children}</span>
  )
}

function ContentText (props) {
  const addclass = props.addclass ? props.addclass : '';
  return (
    <div className={`content__text ` + addclass}>
      {props.children}
    </div>
  )
}

function ContentTitle (props) {
  const addclass = props.addclass ? props.addclass : '';
  return (
    <div className={`content__title ` + addclass}>{props.children}</div>
  )
}

function Col (props) {
  const addclass = props.addclass ? props.addclass : '';
  return (
    <div className={`content__col` +` `+ addclass}>{props.children}</div>
  )
}

function Ingredient () {
  return (
    <div className="content__ingredient">
      <div className="content__ingredient-t content__ingredient-t--1">Our no. 1 ingredient:</div>
      <div className="content__ingredient-t content__ingredient-t--2">Real Chicken & Egg</div>
      <div className="content__ingredient-t content__ingredient-t--3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. 
      </div>
    </div>
  )
}

function OurStory () {
  let Title = () => {
    return (
      <div className="content__our-story-title">
        OUR <p>Story</p>
        <div className="content__our-story-pet">
          <img src={Pet1} alt="Pet" />
        </div>
      </div>
    )
  }

  let Text = () => {
    return (
      <div className="content__our-story-text">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit,
        sed do eiusmod tempor    incididunt ut labore et dolore magna aliqua.
        Quis ipsum su spendisse ultrices gravida. Risus commodo viverra maec  enas accumsan
        lacus vel facilisis.
        <a href="">Read more</a>
      </div>
    )
  }

  return (
    <div className="content__our-story">
      <Title />
      
      <Text />

      <div className="content__our-story-food">
        <img src={FoodIMG} alt="food" />
      </div>
    </div>
  )
}