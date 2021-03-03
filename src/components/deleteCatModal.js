const DeleteCatModal = ({ deleteMode, setDeleteMode, cat, confirmDelete, setCurrentCat }) => {
  return (
    <div
      className="modal"
      style={{
        display: deleteMode ? "block" : "none",
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Confirm Delete</h4>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={() => setDeleteMode(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Are You Sure You Want To Delete This Cute Kitty?
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-default m-2"
              onClick={() => setDeleteMode(false)}
            >
              Cancel
            </button>

            <button
              className="btn btn-danger m-2"
              onClick={() => {
                setDeleteMode(false);
                setCurrentCat({});
                confirmDelete(cat);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCatModal;
