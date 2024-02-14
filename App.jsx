import React from 'react'
import './App.css'

const Headers = () => {
  return (
    <div className='header'>
      <div className='logocontainer'>
        <img className='logo' src="data:image/png;base64,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" alt="" />
      </div>
      <div className='listitem'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}


const Search = () => {
  return (
    <>
      <div className='search'>Search</div>
    </>
  )
}


const restData = [

  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "668681",
      "name": "McDonald's",
      "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
      "locality": "Shahibag",
      "areaName": "Reliance Mall",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "630",
      "deliveryTime": 23,
    }
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "359871",
      "name": "Al Baik Fast Food",
      "cloudinaryImageId": "g4muyjxvhmibz2s1z6c9",
      "locality": "Bhadra Road",
      "areaName": "Lal Darwaja",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Arabian",
        "Grill",
        "Pizzas",
        "Seafood",
        "Tandoor"
      ],
      "avgRating": 4.4,
      "parentId": "28934",
      "deliveryTime": 16,
    }
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "38003",
      "name": "Burgometry",
      "cloudinaryImageId": "99be6e835e950e9cd66b2ee5fd15539c",
      "locality": "Swastik Cross Road",
      "areaName": "Navrangpura",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Fast Food",
        "Snacks"
      ],
      "avgRating": 4.3,
      "parentId": "51610",
      "avgRatingString": "4.3",
      "deliveryTime": 52,
    }
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "200057",
      "name": "Hocco Eatery",
      "cloudinaryImageId": "celm3mr7ahzhmyuaflzm",
      "locality": "Vastrapur",
      "areaName": "Vastrapur",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Pizzas"
      ],
      "avgRating": 4.5,
      "deliveryTime": 32,
    }
  },

  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "38004",
      "name": "Burgometry",
      "cloudinaryImageId": "99be6e835e950e9cd66b2ee5fd15539c",
      "locality": "Swastik Cross Road",
      "areaName": "Navrangpura",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Fast Food",
        "Snacks"
      ],
      "avgRating": 4.3,
      "deliveryTime": 24,
    }
  },

  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "451645",
      "name": "Kgfc Restaurant",
      "cloudinaryImageId": "204f265dc9a6c0168f0bd2b901db6038",
      "locality": "LalDarwaja",
      "areaName": "Maninagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Fast Food",
        "Snacks"
      ],
      "avgRating": 4,
      "deliveryTime": 21,
    }
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "738134",
      "name": "Micro Cafe",
      "cloudinaryImageId": "cee34775de0d5b367f823feb434e44a5",
      "locality": "Bodakdev",
      "areaName": "Vastrapur",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Burgers",
        "Snacks"
      ],
      "avgRating": 4.8,
      "deliveryTime": 29,
    }
  }

]



const RestCard = (props) => {
  const { restodata } = props
  return (
    <div className='card-container'>
      <div className='rest-img'>
        <img className='card-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS1rUKwHsOLmCFAx3JHjcY7pFMl_td_86HGg&usqp=CAU" alt="biryani" />
        <h3>{restodata.info.name}</h3>
        <h4>{restodata.info.cuisines.join(',')}</h4>
        <h4>{restodata.info.deliveryTime} minutes</h4>
        <h4>{restodata.info.avgRating} star</h4>
      </div>
    </div>
  )
}


const AppLayout = () => {
  return (
    <div>
      <Headers />
      <Search />
      <div className='card-collection'>
        {
          restData.map((restaurant)=>(
            <RestCard key = {restaurant.info.id} restodata = {restaurant}/>
          ))
        }
     
      </div>
    </div>
  )
}

export default AppLayout






