import { useState } from "react";
import EditCatModal from "./editCatModal";
import DeleteCatModal from "./deleteCatModal";

const Main = ({ currentCat, setCurrentCat, deleteCat, catList }) => {
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  return (
    <div>
      {editMode && (
      <EditCatModal
        editMode={editMode}
        setEditMode={setEditMode}
        cat={currentCat}
        setCurrentCat={setCurrentCat}
        catList={catList}
      />
      )}
      {deleteMode &&  ( 
      <DeleteCatModal
        deleteMode={deleteMode}
        setDeleteMode={setDeleteMode}
        cat={currentCat}
        confirmDelete={deleteCat}
        setCurrentCat={setCurrentCat}
      />
      )}
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
              className="btn btn-primary m-2"
              data-toggle="modal"
              data-target="#editCatModal"
              onClick={() => setEditMode(true)}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger m-2"
              data-toggle="modal"
              onClick={() => setDeleteMode(true)}
            >
              Delete
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
