import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from '../classes/landing'
import Login from '../classes/login'
import ForgotPassword from '../classes/forgotpassword'
import Signup from '../classes/signup'
import Home from '../classes/Home'
import DropFileInput from '../components/DropFileInput'
import Admin from '../classes/admin';
import Blank from '../classes/Blank'
import Addcomment from '../container/addComment'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/login/home" element={<Home/>}/>
          <Route path="/login/home/upload" element={<DropFileInput/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route path="/signup/login" element={<Login/>}/>
          <Route path="/signup/login/home" element={<Home/>}/>
          <Route path="/signup/login/upload" element={<DropFileInput/>}/>
          <Route path="/login/home/upload/document" element={<Blank/>}/>
          <Route path="/login/home/upload/document/addcomments" element={<Addcomment/>}/>
          <Route path="/login/home/upload/document/addcomments/matrix-report" element={<Blank />}/>
          <Route path="/login/home/upload/document/matrix-report" element={<Blank/>}/>
          <Route exact path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
    </Router>
  );
}

export default App;