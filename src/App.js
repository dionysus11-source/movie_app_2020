import React from 'react';
import PropTypes from 'prop-types'


function Food({ name , picture, rating }){
  return (
    <div>
     <h2>I like {name}</h2>
     <h4>{rating}/5.0</h4>
     <img src={picture} alt={name} />
     </div>
     );
}

const foodLike = [
  {id : 1,
    name : 'Kimchi',
image :'https://m.jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg',
rating : 5.0},
{id : 2,
  name:'Samgyoepsal',
image : 'https://lh3.googleusercontent.com/proxy/VUvgYtXlK1kuQNT_uiGqhuQZ4NXc96B-QELYk2ebgfxSMjjJJYEtkZvo2RkvexABHl7jzPHQtHwsMbBaC9dig0d5C5L_ZSv0nYKfQaPsgs9PCZh7f8B2FBbFUbZRJmupoMRBSUmrXw' ,
rating : 4.9},
{id : 3,
  name:'Kimbap',
image : 'https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg',
rating : 3.0 }
];


function App() {
  //console.log(foodLike.map(renderFood));
  return (
  <div>
    <h1>안녕!!</h1>
    {foodLike.map(dish=>(
    <Food key = {dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)
    )}
  </div>
  );
}
Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
};

export default App;
