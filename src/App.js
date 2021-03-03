import React, { useState, useEffect } from "react";
import SideNav from "./components/sidenav";
import Main from "./components/main";
import startercats from "./util/startercats";


const App = ({ initialCatList }) => {
  const [currentCat, setCurrentCat] = useState({})
  const [catList, setCatList] = useState(initialCatList || startercats);

    const saveCatListToLocalStorage = () => {
      console.log(currentCat, catList)
      // saves updates to local storage or returns original object
      // const newCatList = catList.map((cat) => {
      //   if (cat.ID === currentCat.ID){
      //     return currentCat
      //   }
      //   return cat;
      // })
      window.localStorage.setItem('catList', JSON.stringify(catList));
    };


    const incrementCatViewCount = (cat) => {
      cat.views+=1;
      // setCurrentCat(currentCat);
      // updateCatList()
      setCurrentCat(cat);
    }

    useEffect(() => {
      const newCatList = catList.map((cat) => {
        if (cat.ID === currentCat.ID){
          return currentCat
        }
        return cat;
      })
      console.log(newCatList)
      setCatList(newCatList)
    }, [currentCat])

    useEffect(() => saveCatListToLocalStorage, [catList, saveCatListToLocalStorage, currentCat]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <SideNav
            setCurrentCat={setCurrentCat}
            // updateCatProperty={updateCatProperty}
            catList={catList}
            incrementCatViewCount={incrementCatViewCount}
          />
        </div>
        <div className="col-8">
          <Main 
            currentCat={currentCat}
            setCurrentCat={setCurrentCat}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
