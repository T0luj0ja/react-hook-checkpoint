import {useState,useEffect} from 'react';
import AddMovie from "./Components/AddMovie";
import "./App.css";
import MovieList from './Components/MovieList.js';
import Filtring from './Components/Filtring.js';

const info = [
  { title:'Me before you', img:'https://th.bing.com/th/id/R.a5f25cccf7e328077efe0ace3cd1fbc9?rik=MWt8Xr0Lukia5g&pid=ImgRaw&r=0', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", rating:9.4 },
  { title:'You', img:'https://th.bing.com/th/id/R.6873f81abcd6892e20b0cae15f722e42?rik=s1b2tYuzUHCTWw&riu=http%3a%2f%2fwww.impawards.com%2ftv%2fposters%2fyou_ver2.jpg&ehk=vAfDt8ZJgqpXqb5S4oXg%2f9JVUWN7ul09vVQJb4H9Mdw%3d&risl=&pid=ImgRaw&r=0', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", rating:9.3 },
  { title:'See', img:'https://th.bing.com/th/id/R.a4ca6d511c37aee6a440ddf20978e90a?rik=jka5xUOxVW2tcQ&riu=http%3a%2f%2fwww.impawards.com%2ftv%2fposters%2fsee_ver3.jpg&ehk=nMUXuDnCbdyduAlzJMP%2bIVpPBGwYyjQFusLG5ucHr6Y%3d&risl=&pid=ImgRaw&r=0', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." , rating:8.5 },
  { title:'The fault in our stars', img:'https://th.bing.com/th/id/R.7c77fc237d2e86a437212191253890ef?rik=UOzf%2fGmd5Xxozw&riu=http%3a%2f%2fblueprintreview.co.uk%2fwp-content%2fuploads%2f2014%2f10%2ffault-in-our-stars-movie-poster-full-copy.jpg&ehk=0Ivmum%2bGI3PGUSiVMs9d2zhsSvcOF4GJ1C2UG2Hg310%3d&risl=&pid=ImgRaw&r=0', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", rating:9.4 },
  { title:'Her', img:'https://th.bing.com/th/id/R.649b34161ea857bf784a65307938fd9f?rik=h3y86MXsQfnl4Q&riu=http%3a%2f%2fwww.newdvdreleasedates.com%2fimages%2fposters%2flarge%2fher-2013-10.jpg&ehk=DfMNk5QxfLn7%2fvMO5%2fJcPW%2b6DBIawmcrkdxTqllTs18%3d&risl=&pid=ImgRaw&r=0', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ", rating:8.3 },
  { title:'Red', img:'https://th.bing.com/th/id/OIP.v3v_Vb5d5CIJVaNLh9UKlgHaKz?pid=ImgDet&rs=1', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", rating:6.9 },
];

function App(){
  
  const [list,setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie){
    if( movie.title && movie.img && movie.description  ) {
      setList([...list, movie]);
    }
  }


  function filter(key, rate){
    setKeyword(key);
    setRate(rate);
    console.log(rate+"  "+key);
    setFiltredList(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate) ) } ));
  }

  useEffect(()=>{ filter(keyword,rate); },[list]);


  return(
    <div className="App">
        <Filtring filter={filter}/>
        <MovieList list={filtredList} />
        <AddMovie adding={adding} />
    </div>
      );
}

export default App;
