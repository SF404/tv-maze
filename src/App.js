import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import { useEffect, useState } from 'react';
import { getAllShows } from './services/api';
import ShowView from './Pages/ShowView/ShowView';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const showsData = await getAllShows();
        setShows(showsData);
        console.log(showsData)
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home shows={shows} />} />
            <Route path='/show/:showId' element={<ShowView shows={shows} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
