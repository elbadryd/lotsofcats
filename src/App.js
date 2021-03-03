import React, { useState, useEffect } from "react";
import SideNav from "./components/sidenav";
import Main from "./components/main";
import startercats from "./util/startercats";


const App = ({ initialCatList }) => {
  const [currentCat, setCurrentCat] = useState({})
  const [catList, setCatList] = useState(initialCatList || startercats);


    const incrementCatViewCount = (cat) => {
      cat.views+=1;
      setCurrentCat(cat);
    }

    const deleteCat = ({ ID }) => {
      const newCatList = catList.filter((cat) => cat.ID !== ID);
      setCatList(newCatList)
      window.localStorage.setItem("catList", JSON.stringify(newCatList));
    }

    useEffect(() => {
      const newCatList = catList.map((cat) => {
        if (cat.ID === currentCat.ID){
          return currentCat
        }
        return cat;
      })
      setCatList(newCatList)
      window.localStorage.setItem("catList", JSON.stringify(newCatList));
    }, [currentCat])


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <SideNav
            setCurrentCat={setCurrentCat}
            catList={catList}
            incrementCatViewCount={incrementCatViewCount}
          />
        </div>
        <div className="col-8">
          <Main 
            currentCat={currentCat}
            setCurrentCat={setCurrentCat}
            deleteCat={deleteCat}
            catList={catList}
            // owners={catList.map((cat) => cat.owner)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
