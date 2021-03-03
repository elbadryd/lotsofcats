import React from "react";
const SideNav = ({ setCurrentCat, catList, incrementCatViewCount }) => {
  return (
    // <div>
    catList.map((cat) => (
      <div
        className="catitem"
        key={cat.ID}
        onClick={() => {
          setCurrentCat(cat);
          incrementCatViewCount(cat);
        }}
      >
        {cat.name}
      </div>
    ))
    // </div>
  );
};

export default SideNav;
