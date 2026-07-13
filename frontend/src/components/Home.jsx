import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Hero from "./Hero/Hero";
import Restaurant from "./Restaurant";
import Loader from "./layout/Loader";
import Message from "./Message";
import CountRestaurant from "./CountRestaurant";

import {
  sortByRatings,
  sortByReviews,
  toggleVegOnly,
} from "../redux/slices/restaurantSlice";

import {
  getRestaurants,
  createRestaurant,
} from "../redux/actions/restaurantAction";


const Home = () => {

  const dispatch = useDispatch();
  const { keyword } = useParams();


  const {
    loading: restaurantsLoading,
    error: restaurantsError,
    restaurants,
    showVegOnly,
    creating,
    createError,
  } = useSelector((state)=>state.restaurants);
  console.log("RESTAURANT DATA:", restaurants);



  const { isAuthenticated, user } = useSelector(
    (state)=>state.user
  );


  const [showCreate,setShowCreate] = useState(false);



  const [newRestaurant,setNewRestaurant] = useState({

    name:"",
    address:"",
    isVeg:false,

    location:{
      type:"Point",
      coordinates:[]
    },

    imageUrl:""

  });



  const [coordsInput,setCoordsInput] = useState("");



  useEffect(()=>{

    dispatch(getRestaurants(keyword));

  },[dispatch,keyword]);




  const handleChange=(e)=>{

    const {name,value,checked}=e.target;


    if(name==="isVeg"){

      setNewRestaurant({
        ...newRestaurant,
        isVeg:checked
      });


    }else if(name==="coordinates"){


      setCoordsInput(value);


      const coords=value
      .split(",")
      .map(v=>parseFloat(v.trim()))
      .filter(v=>!isNaN(v));


      setNewRestaurant({

        ...newRestaurant,

        location:{
          ...newRestaurant.location,
          coordinates:coords
        }

      });


    }else{


      setNewRestaurant({

        ...newRestaurant,
        [name]:value

      });

    }

  };




  const submitCreate=async(e)=>{

    e.preventDefault();



    const payload={

      name:newRestaurant.name,

      address:newRestaurant.address,

      isVeg:newRestaurant.isVeg,


      location:newRestaurant.location,


      images:[
        {
          public_id:"default",
          url:newRestaurant.imageUrl
        }
      ]

    };



    const result=await dispatch(
      createRestaurant(payload)
    );



    if(createRestaurant.fulfilled.match(result)){


      setShowCreate(false);


      setNewRestaurant({

        name:"",
        address:"",
        isVeg:false,

        location:{
          type:"Point",
          coordinates:[]
        },

        imageUrl:""

      });


      dispatch(getRestaurants(keyword));

    }

  };





  return (

<>
  
<Hero />


<section
className="home-section"
id="restaurants"
>

<div className="container">


<CountRestaurant />



{
restaurantsLoading ?

<Loader />


:

restaurantsError ?


<Message variant="danger">
{restaurantsError}
</Message>


:


<>


<div className="sort">


<button
className="sort_veg p-3"
onClick={()=>dispatch(toggleVegOnly())}
>

{showVegOnly ? "Show All" : "🥗 Pure Veg"}

</button>



<button
className="sort_rev p-3"
onClick={()=>dispatch(sortByReviews())}
>

⭐ Top Reviews

</button>

<button
className="sort_rate p-3"
onClick={()=>dispatch(sortByRatings())}
>

🔥 Top Rated

</button>


</div>




<div className="restaurant-heading text-center mb-5">


<h2>
Popular Restaurants Near You
</h2>


<p>
Explore top rated restaurants, delicious food and exciting offers.
</p>


</div>





<div className="row mt-4">


{
restaurants && restaurants.length>0 ?


restaurants.map((restaurant)=>(


(!showVegOnly || restaurant.isVeg)

&&

<Restaurant
key={restaurant._id}
restaurant={restaurant}
/>


))


:

<Message variant="info">
No Restaurants Found
</Message>


}




{
isAuthenticated &&
user?.role==="admin" &&

<div className="col-lg-3 col-md-6 my-3">


<div
className="card shadow text-center p-5 add-card"
style={{cursor:"pointer"}}
onClick={()=>setShowCreate(true)}
>


<h1>+</h1>

<p>
Add Restaurant
</p>


</div>


</div>


}



</div>


</>

}



</div>


</section>






{
showCreate &&


<div className="create-modal">


<div className="create-content">


<h3>
Create Restaurant
</h3>



<form onSubmit={submitCreate}>


<input
type="text"
name="name"
placeholder="Restaurant Name"
value={newRestaurant.name}
onChange={handleChange}
required
/>



<input
type="text"
name="address"
placeholder="Address"
value={newRestaurant.address}
onChange={handleChange}
required
/>



<label>
Pure Veg
</label>


<input
type="checkbox"
name="isVeg"
checked={newRestaurant.isVeg}
onChange={handleChange}
/>




<input
type="text"
name="coordinates"
placeholder="18.5204,73.8567"
value={coordsInput}
onChange={handleChange}
required
/>




<input
type="text"
name="imageUrl"
placeholder="Image URL"
value={newRestaurant.imageUrl}
onChange={handleChange}
required
/>



<button
className="btn btn-warning"
disabled={creating}
>

{
creating
?
"Creating..."
:
"Create Restaurant"
}


</button>



<button
type="button"
className="btn btn-secondary ms-2"
onClick={()=>setShowCreate(false)}
>

Cancel

</button>


</form>



</div>


</div>


}



</>

);

};


export default Home;