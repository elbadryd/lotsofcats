import React, { useState, useEffect } from "react";
import SideNav from "./components/sidenav";
import Main from "./components/main";
import startercats from "./util/startercats";

const App = () => {
  const [currentCat, setCurrentCat] = useState({})
    const [catList, setCatList] = useState(startercats);

    const updateCatList = (list) => {
      window.localStorage.setItem('catList', JSON.stringify(catList));
      setCatList(list);
    };

    // const updateCatProperty = (key, value) => {
    //   const newCatList = catList;
    //   newCatList[id][key] = value;
    //   updateCatList(newCatList);
    // }

    const incrementCatViewCount = (cat) => {
      cat.views+=1
      setCurrentCat(cat);
    }

    // useEffect(() => incriementCatViewCount(currentCat), [currentCat, incriementCatViewCount])
    useEffect(() => updateCatList(catList), [catList, updateCatList, currentCat]);

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
          <Main currentCat={currentCat} />
        </div>
      </div>
    </div>
  );
};

export default App;
