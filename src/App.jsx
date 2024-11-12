// import React from 'react'

// const App = () => {
//   let user = "Rohini"

//   const changeUser = () => {
//     console.log(user)
//     user = "Zini"
//   }
//   return (
//     <div>
//       <h1> UserName is {user}</h1>
//       <button onClick={changeUser}> Change user</button>
//     </div>
//   )
// }

// export default App

// hooks - special type of functions, functional componenets

// provides - statemangement
// a=0
// a=1

// import  React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [a, setA] = useState(10)

//   const changeA = () => {
//     console.log("chal gaya")
//     setA(20)
//   }

//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={changeA}>Change A</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)
//   return (
//     <div>
//       <h2> Number is {num} </h2>
//       <button onClick={() => setNum(num+10)}>Increment</button>
//       <button onClick={() => setNum(num-10)}>Decrement</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   return (
//     <div> 
//       <h2 className='text-5xl bg-yellow-300 text-white'> Hello </h2>
//     </div>
//   )
// }

// export default App


//-----------FORM HANDLING--------------------

// import React, { useState } from 'react'

// const App = () => {

//   const [username, setUsername] = useState('')

//   const submitHandler = (e) => {
//     e.preventDefault()

//     console.log(username)

//     setUsername('') //after submitting the input will be khaali
//   }

  
//   return (
//     <div>
//       //Two-Way Binding
//       <form onSubmit={(e) => {
//         submitHandler(e)
//       }}>
//         <input
//         value={username} 
//         onChange={(e) => {
//           setUsername(e.target.value)
//         }}
//         className='px-4 py-3 text-xl m-5' 
//         type="text" 
//         placeholder='Enter your Name'/>
//         <button className='px-4 py-3 m-5 text-xl font-semibold bg-emerald-400 rounded'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App


//-----------FRAGMENTS----------

// import React from 'react'

// const App = () => {
//   return (
//     <>
//       <h1>Hello</h1>
//       <h2>Hiee</h2>
//     </>
//   )
// }

// export default App


//--------------COMPONENTS--------------

// import React from 'react'
// import Navbar from './components/Navbar';
// import Footer from './components/footer';



// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Navbar />
//       <Footer />
//       <Navbar/>
//     </>
//   )
// }

// export default App



//----------------PROPS AND PROPS Drilling-------------
//(MEANING- WE CAN PASS THE DATA IN OUR COMPONENETS)
// import React from 'react'
// import Card from './components/Card'

// const App = () => {

//   const users = [
//     {
//       "name": "Aarav Sharma",
//       "city": "Mumbai",
//       "age": 28,
//       "profession": "Software Engineer",
//       "profile_img": "https://example.com/profiles/aarav_sharma.jpg"
//     },
//     {
//       "name": "Meera Nair",
//       "city": "Bangalore",
//       "age": 25,
//       "profession": "Graphic Designer",
//       "profile_img": "https://example.com/profiles/meera_nair.jpg"
//     },
//     {
//       "name": "Rohit Chawla",
//       "city": "Delhi",
//       "age": 32,
//       "profession": "Data Analyst",
//       "profile_img": "https://example.com/profiles/rohit_chawla.jpg"
//     },
//     {
//       "name": "Ananya Gupta",
//       "city": "Pune",
//       "age": 24,
//       "profession": "Content Writer",
//       "profile_img": "https://example.com/profiles/ananya_gupta.jpg"
//     },
//     {
//       "name": "Karan Desai",
//       "city": "Hyderabad",
//       "age": 30,
//       "profession": "Marketing Specialist",
//       "profile_img": "https://example.com/profiles/karan_desai.jpg"
//     }
//   ]
  
// users.map(function(elem){
//   return "hey"
// })

//   return (
//     <div>
//       <div className='p-10'>
//         {users.map(function(elem,idx){
//           return <Card key={idx} username={elem.name} age={elem.age} prof={elem.profession}city={elem.city} photo={elem.profile_img}/>
//         })} 
//       </div>
//     </div>
//   )
// }

// export default App



//----------------INTEGRATING APIS (Axios)-------------
// Axios is a tool which used to help calling apis
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const App = () => {

//     const [data, setData] = useState([])

//     //PROMISES
//     const getData = async () => {
//         const response = await axios.get('https://picsum.photos/v2/list')

//         setData(response.data)

//         console.log(data)
//     }

//     useEffect(() => {
//         getData()
//     }, [])

//     return (
//         <div className='p-10'> 
            
//             <div className='p-5 mt-5 bg-gray-950'>
//                 {data.map(function(elem,idx){
//                     return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
//                     <img className='h-40' src={elem.download_url} alt="" />
//                     <h1>{elem.author}</h1>
//                     </div>
//                 })}
//                 </div>
//         </div>
//     )
// }

// export default App



//---------------REACT ROUTER DOM-----------------
// routing is not inbuilt in react so we use external libraries - react router dom
// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import About from './pages/About';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import Product from './pages/Product';
// import Header from './components/Header';

//React Router Dom helps our application to show line single page application(SPA)
//Page will not reload mant times when we switch to other pages


// const App = () => {
//     return (
//     <div>
//         <Header />
//         <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/about' element={<About />} />
//             <Route path='/home' element={<Home />} />
//             <Route path='/contact' element={<Contact />} />
//             <Route path='/product' element={<Product />} />
//         </Routes>
//     </div>
//     )
// }

// export default App




//----------CONTEXT API------------------

//we can pass any data statewise, 
//context api is an statemanagement tool which centralized(available for everyone) the data

import React, { useContext } from 'react'
import Section from './components/Section'
import { DataContext } from './context/UserContext'


const App = () => {

    const data = useContext(DataContext)
    console.log(data)


    return (
        <div>
            <h1>This is APP {data.username}</h1>
            <Section />
        </div>
    )
}

export default App