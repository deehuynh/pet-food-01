import FoodIMG from '../images/food-box.png'
import Pet1 from '../images/pet-1.png'

export default function Content () {
  return (
    <section className="content">
      <OurStory />
    </section>
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