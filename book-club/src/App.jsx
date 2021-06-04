import React, {useState, useEffect} from 'react'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import {GlobalStyle} from './styles'

const App = () => {
  const [books, setBooks] = useState([])

  //its a hook to create side effects in a component
  //schedules events to happen after its been updating to 
  //the DOM.
  //console.log("this message is going to load everytime the component renders")
  
  useEffect(() => {
    const fetchData = async () => {

      try {
      const res = await fetch("https://book-club-json.herokuapp.com/books")
      //console.log("what we got back:", res)
      const books = await res.json()
      // console.log("our json-ified res", books)
      setBooks(books)
      } catch (errors) {
        console.log(errors)
        //console.log("error message")
      }
    }
    fetchData()
  }, [])

  //console.log("the books array in our state", books)
  //if we dont have an empty array dependency, it will get
  //stuck in an infinite loop


  return (

      <>
        <GlobalStyle/>
        <Header/>
        <BooksContainer books={books} />
      </>

  )
}


export default App;
