import { useState } from "react";

const EditCatModal = ({ editMode, setEditMode, cat, setCurrentCat, catList }) => {
  const [newCat, setNewCat] = useState(cat);

  const owners = catList.map((cat) => cat.owner);
  // prevents owners fromshowing up twice in list
  const uniqueOwners = [];
  owners.forEach((owner) => {
    if (uniqueOwners.indexOf(owner) < 0) {
      uniqueOwners.push(owner)
    }
  });

  return (
    <div
      className="modal"
      style={{
        display: editMode ? "block" : "none",
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Edit Cat</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setEditMode(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <label>Thumbnail URL</label>
            <input
              type="text"
              className="form-control"
              value={newCat.thumbnailURL}
              onChange={(e) => {
                setNewCat({ ...cat, thumbnailURL: e.target.value });
              }}
            />
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={newCat.name}
              onChange={(e) => {
                setNewCat({ ...cat, name: e.target.value });
              }}
            />
            <label>Birthdate</label>
            <input
              type="date"
              className="form-control"
              value={newCat.birthdate}
              onChange={(e) => {
                console.log(e.target.value);
                setNewCat({ ...cat, birthdate: e.target.value });
              }}
            />
            <label>Owner</label>
            <select
              className="form-control"
              onChange={(e) => {
                setNewCat({ ...cat, owner: e.target.value });
              }}
              value={uniqueOwners.find((owner) => owner === newCat.owner)}
            >
              {uniqueOwners.map((owner) => (
                <option key={owner}>{owner}</option>
              ))}
            </select>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-default m-2"
              onClick={() => setEditMode(false)}
            >
              Close
            </button>

            <button
              className="btn btn-primary m-2"
              onClick={() => {
                setEditMode(false);
                setCurrentCat(newCat);
              }}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCatModal;
