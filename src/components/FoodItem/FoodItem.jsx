import  { Component } from 'react'
import './FoodItem.css'


class FoodItem extends Component {
  render() {

    let {img, title, price, desc, link} = this.props.fooditem
    return (
      <>
        <div className="single-food">
          
          <div className="img">
            <img src={img} />
          </div>


          <div className="title-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>


          <div className="food-desc">
            {desc}
          </div>

          {link && <div className="link"> <a> {link } </a> </div>}


        </div>
      </>
    );
  }
}

export default FoodItem;