import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Footer from "./components/Footer";
import Details from "./pages/details/Details";
import { useState,useEffect } from "react";
import { FidgetSpinner } from  'react-loader-spinner'
import NotFound from "./pages/notFound/NotFound";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  },[])
  const styling={
    position:'absolute',
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)"
  }
  
  return (
    <>
    {loading?<FidgetSpinner
  visible={loading}
  height="100"
  width="100"
  ariaLabel="dna-loading"
  wrapperStyle={styling}
  wrapperClass="dna-wrapper"
  ballColors={['#ff0000', '#1aca40', '#0000ff']}
  backgroundColor="#FFF"
/>
   :

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/T-Movies" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/details/:id/:type" element={<Details />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  }
    </>
  );
};

export default App;
