import React from 'react'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import LogIn from './outlets/LogIn'
import SignUp from './outlets/SignUp'
import Home from './outlets/Home'
import Player from './outlets/Player'
import TVShows from './outlets/TVShows'
import FavList from './outlets/FavList'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/login" element={<LogIn/>}/>        
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/movies" element={<MoviePage />} />
        <Route exact path="/new" element={<Player />} />
        <Route exact path="/mylist" element={<FavList />} />
        <Route exact path="/" element={<Home/>}/>
      
      </Routes>
    </BrowserRouter>
  );
}
