import { useEffect, useState } from 'react'

// css
import '../components/css/Homepage.css'

// components
import Nav from '../components/Homepage/Nav'
import Post from '../components/Homepage/Post'

// axios
import axios from 'axios'

function Homepage() {
  const [data, setDate] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(res => {
        setDate(res.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='homepage'>
        <Nav/>
        <main>
          {data.map((data, index) => {
            return(
              <Post data={data} key={index}/>
            )
          })}
        </main>
    </div>
  )
}

export default Homepage