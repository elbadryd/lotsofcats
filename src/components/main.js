import { useState } from "react";
import EditCatModal from "./editCatModal";
const Main = ({ currentCat, setCurrentCat }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <div>
      <EditCatModal 
        editMode={editMode}
        setEditMode={setEditMode}
        cat={currentCat}
        setCurrentCat={setCurrentCat}
        />
      {Object.keys(currentCat).length ? (
        <div className="card">
          <img
            src={currentCat.thumbnailURL}
            className="card-img catthumb"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-text">Name: {currentCat.name}</h5>
            <p className="card-text">Birthdate: {currentCat.birthdate}</p>
            <p className="card-text">Owner: {currentCat.owner}</p>
            <p className="card-text">Views: {currentCat.views}</p>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#editCatModal"
              onClick={() => setEditMode(true)}
            >
              Go somewhere
            </button>
          </div>
        </div>
      ) : (
        "select a cat"
      )}
    </div>
  );
};
export default Main;
