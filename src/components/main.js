const Main = ({ currentCat }) => (
  // <div>{currentCat.name}</div>
  <div>
    {Object.keys(currentCat).length ? (
      <div className="card">
        <img
          src={currentCat.thumbnailURL}
          className="card-img catthumb"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Name: {currentCat.name}</h5>
          <p className="card-text">Birthdate: {currentCat.birthdate}</p>
          <p className="card-text">Owner: {currentCat.owner}</p>
          <p className="card-text">Views: {currentCat.views}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    ) : (
      "select a cat"
    )}
  </div>
);
export default Main;