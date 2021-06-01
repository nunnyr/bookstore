import React, {useState, useEffect} from 'react'



const App = () => {
  const [books, setBooks] = useState([])

  //its a hook to create side effects in a component
  //schedules events to happen after its been updating to 
  //the DOM.

  console.log("this message is going to load everytime the component renders")
  
  useEffect(() => {
    const fetchData = async () => {

      try {
      const res = await fetch("https://book-club-jason.herokuapp.com/books")
      console.log("what we got back:", res)

     
        const books = await res.json()
        console.log("our json-ified res", books)
        setBooks(books)
      } catch (erros) {
        console.log(errors)
      }
    }
    fetchData()
  }, [])

  console.log("the books array in our state", books)
  //if we dont have an empty array dependency, it will get
  //stuck in an infinite loop




  return <div>hello world</div>
}


export default App;
