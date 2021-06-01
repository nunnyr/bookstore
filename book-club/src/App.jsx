import React, {useState, useEffect} from 'react'



const App = () => {
  const [books, setBooks] = useState([])

  //its a hook to create side effects in a component
  //schedules events to happen after its been updating to 
  //the DOM.

  console.log("this message is going to load everytime the component renders")
  useEffect(() => {
    const fetchData = () => {
      fetch("https://book-club-json.herokuapp.com/books")
      .then((res) => {
        console.log("what we got back:", res)
        //grab our json res and turn it into a js object
        return res.json()
      })
      .then((books) => {
        console.log("here is after", books)
        return setBooks(books)

      })

    }

    fetchData()

  }, [])
  //if we dont have an empty array dependency, it will get
  //stuck in an infinite loop




  return <div>hello world</div>
}


export default App;
