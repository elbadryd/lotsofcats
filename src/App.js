import React, { useState, useEffect } from "react";
import SideNav from "./components/sidenav";
import Main from "./components/main";
import Search from "./components/search";
import startercats from "./util/startercats";


const App = ({ initialCatList }) => {
  const [currentCat, setCurrentCat] = useState({});
  const [catList, setCatList] = useState(initialCatList || startercats);
  const [searchTerm, setSearchTerm] = useState('');


    const incrementCatViewCount = (cat) => {
      cat.views+=1;
      setCurrentCat(cat);
    }

    const deleteCat = ({ ID }) => {
      const newCatList = catList.filter((cat) => cat.ID !== ID);
      setCatList(newCatList);
      // updates local storage on delete
      window.localStorage.setItem("catList", JSON.stringify(newCatList));
    }

    useEffect(() => {
      // updates list with changes to cat in view prior to saving
      const newCatList = catList.map((cat) => {
        if (cat.ID === currentCat.ID){
          return currentCat
        }
        return cat;
      })
      setCatList(newCatList);
      window.localStorage.setItem("catList", JSON.stringify(newCatList));
    }, [currentCat])


  return (
    <div className="container-fluid">
      <div className="row m-4">
        <div className="col-4 bg-light">
          <Search
            setSearchTerm={setSearchTerm}
          />
          <SideNav
            setCurrentCat={setCurrentCat}
            // not updating state object on filter change to ensure that edits are properly saved even if search term is present
            catList={searchTerm ? catList.filter((cat) => cat.name.includes(searchTerm)) : catList}
            incrementCatViewCount={incrementCatViewCount}
          />
        </div>
        <div className="col-6 offset-1">
          <Main
            currentCat={currentCat}
            setCurrentCat={setCurrentCat}
            deleteCat={deleteCat}
            catList={catList}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
