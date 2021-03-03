import { useState, useEffect } from "react";

const EditCatModal = ({ editMode, setEditMode, cat, setCurrentCat }) => {
  const [newCat, setNewCat] = useState(cat);
  console.log(newCat, cat);
  useEffect(() => setNewCat(cat), [cat, setNewCat])
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
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title">Modal title</h4>
          </div>
          <div className="modal-body">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder={newCat.name}
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
                console.log(e.target.value)
                setNewCat({...cat, birthdate: e.target.value})
              }}
            />
            <label>Owner</label>
            <input
              type="text"
              className="form-control"
              placeholder={newCat.owner}
              onChange={(e) => {
                setNewCat({ ...cat, owner: e.target.value });
              }}
            />
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-default"
              onClick={() => setEditMode(false)}
            >
              Close
            </button>

            <button
              className="btn btn-primary"
              onClick={() => {
                setEditMode(false)
                setCurrentCat(newCat)
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
