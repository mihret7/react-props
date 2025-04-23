import FoodItem from './components/FoodItem/FoodItem.jsx';
import menu from './assets/js/data.js'

import './App.css'

function App() {

  return (
    <>
      <div className="all-container">


        {/* <!-- header start  --> */}
        <header className="title">
          <h1>Evangadi Menu</h1>
          <div></div>
        </header>
        {/* <!-- header end  --> */}

        {/* <!-- all food items container start --> */}


        <div className="foods-container">


          {menu.map((item) => {
            return (
            <FoodItem
              key={item.id} fooditem = {item}
            />
            )}
          )}



        </div>
        {/* <!-- all food items container start --> */}

        
      </div>
    </>
  );
}

export default App
