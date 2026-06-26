import React from 'react'
import { Route , Routes} from 'react-router-dom'
import Feed from './pages/Feed'
import Messages from './pages/Messages'
import Chatbox from './pages/ChatBox'
import Login from './pages/Login'
import Connections from './pages/Connections'
import Discovers from './pages/Discover'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import {useUser} from '@clerk/clerk-react'
import  Layout  from './pages/Layout'
import {Toaster} from 'react-hot-toast'
export const App = () => {
  const { user } = useUser()
  return (
    <>
    <Toaster/>
    <Routes>
      <Route path='/' element={ !user ? <Login/> : <Layout/>}> 
        <Route index element={<Feed/>}/>
        <Route path='messages' element={<Messages/>}/>
        <Route path='messages/:userid' element={<Chatbox/>}/>
        <Route path='discover' element={<Discovers/>}/>
        <Route path='connections' element={<Connections/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='profile/:profileId' element={<Profile/>}/>
        <Route path='create-post' element={<CreatePost/>}/>

      </Route>
    </Routes>

    </>
  );
}
export default App;