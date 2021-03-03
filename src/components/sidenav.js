import React from "react";
const SideNav = ({ setCurrentCat, catList, incrementCatViewCount }) => {
  return (
    // <div>
    catList.map((cat) => (
      <div
        className="catitem m-3"
        key={cat.ID}
        onClick={() => {
          setCurrentCat(cat);
          incrementCatViewCount(cat);
        }}
      >
        <div className="catitem__header row">
          <img class="catsmallthumb" src={cat.thumbnailURL} alt="cat-thumb" />
          <div className="m-2">{cat.name}</div>
        </div>
        <div className="m-2">{cat.birthdate}</div>
      </div>
    ))
    // </div>
  );
};

export default SideNav;
