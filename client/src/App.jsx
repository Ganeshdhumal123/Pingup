import React from 'react'
import { Route , Routes} from 'react-router-dom'
import Feed from './pages/Feed'
import Messages from './pages/Messages'
import Chatbox from './pages/ChatBox'

export const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}> 
        <Route index element={<Feed/>}/>
        <Route path='messages' element={<Messages/>}/>
        <Route path='messages/:userid' element={<Chatbox/>}/>
        <Route path='connections' element={<Connections/>}/>
        <Route path='profile' element={<Profile/>}/>
         <Route path='profile/:profileId' element={<Profile/>}/>
        <Route path='create-post' element={<CreatePost/>}/>

      </Route>
    </Routes>

    </>
  )
}
