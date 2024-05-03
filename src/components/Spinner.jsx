import Spinner from "react-bootstrap/Spinner";

function BasicSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "4rem", // Adjust the width to make it bigger
          height: "4rem", // Adjust the height to make it bigger
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default BasicSpinner;
