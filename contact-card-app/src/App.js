import React from 'react';
import './App.css';
import ContactCard from './ContactCard'
import Joke from './Joke'
import jokesData from './jokesData';

function App() {
  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline}/>)

  return (
    <div className="contacts">
      {jokeComponents}
      <ContactCard 
        name='Mr. Whiskers'
        imgUrl='http://placekitten.com/300/200'
        phone='(234) 888-4567'
        email='mrWhiskers@meow.com'
      />
      <ContactCard 
        name='Mrs. Fluffy'
        imgUrl='http://placekitten.com/g/300/150'
        phone='(909) 388-2267'
        email='fluffy@meow.com'
      />
      <ContactCard 
        name='Daisy Kittah'
        imgUrl='http://placekitten.com/g/300/200'
        phone='(786) 834-9067'
        email='daisykittah@meow.com'
      />
      <ContactCard 
        name='Zeus'
        imgUrl='http://placekitten.com/300/150'
        phone='(864) 348-1167'
        email='zeus@meow.com'
      />
    </div>
  );
}

export default App;


/*
or can do:

<ContactCard contact={{name:"kdjfksl", imgUrl:'kdfj.com', etc. }} />

passing an object as the property (typically from JSON file not hardcoded)

accessed by props.contact.name, etc.

*/

// higher-order functions/methods in JS
  // .map, .reduce, .filter, etc.
  // const nums = [1,2,3,4,5]
  // const doubled = nums.map(function(num) {
  //   return num * 2
  // }) // returns array with numbers doubled
  // console.log(doubled)

/* <Joke joke={{
  question: "Why did the chicken cross the road?", 
  punchline:"To get to the other side, of course"
  }} 
/> */