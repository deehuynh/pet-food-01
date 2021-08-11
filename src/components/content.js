import FoodIMG from '../images/food-box.png'
import Pet1 from '../images/pet-1.png'
import Pet2 from '../images/pet-2.png'

export default function Content () {
  return (
    <section className="content">
      <OurStory />
      <Ingredient />
      <FRow />
    </section>
  )
}

function FRow () {
  return (
    <div className="content__frow">
      <Col addclass='content__col--frow1'>
        <div className="content__title content__title--frow">The perfect start to life</div>
        <div className="content__text content__text--frow">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </div>
        <span className="content__button">Learn more</span>
      </Col>

      <Col addclass='content__col--frow2'>
        <img src={Pet2} alt="Pet" />
      </Col>
    </div>
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
        <span>Read more</span>
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

function Button (props) {
  return (
    <span className="content__btn content__btn-our-story">{props.name}</span>
  )
}