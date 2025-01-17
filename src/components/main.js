import { useState } from "react";
import EditCatModal from "./editCatModal";
import DeleteCatModal from "./deleteCatModal";

const Main = ({ currentCat, setCurrentCat, deleteCat, catList }) => {
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  return (
    <div>
      {/* used some trickery here to use regular bootstrap rather than react-strap or react-bootstrap */}
      {editMode && (
        <EditCatModal
          editMode={editMode}
          setEditMode={setEditMode}
          cat={currentCat}
          setCurrentCat={setCurrentCat}
          catList={catList}
        />
      )}
      {deleteMode && (
        <DeleteCatModal
          deleteMode={deleteMode}
          setDeleteMode={setDeleteMode}
          cat={currentCat}
          confirmDelete={deleteCat}
          setCurrentCat={setCurrentCat}
        />
      )}
      {Object.keys(currentCat).length ? (
        <div className="card bg-info">
          <div className="card-header d-flex justify-content-center">
            <h3>{currentCat.name.toUpperCase()}</h3>
          </div>
          <img
            src={currentCat.thumbnailURL}
            className="card-img catthumb"
            alt="cat thumbnail"
          />
          <div className="card-body">
            <p className="card-text">Birthdate: {currentCat.birthdate}</p>
            <p className="card-text">Owner: {currentCat.owner}</p>
            <p className="card-text">Views: {currentCat.views}</p>
          </div>
          <div className="card-footer d-flex flex-row-reverse">
            <button
              type="button"
              className="btn btn-primary m-2"
              data-toggle="modal"
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
