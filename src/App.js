import React, {useState} from "react";
import Header from "./components/Header";
import AppNavgiation from "./components/AppNavigation";
import Footer from "./components/Footer";

const App = () => {
  const [currentPage, setCurrentPage] = useState('About me');

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <div className="main-content-wrapper">
        <AppNavgiation 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
