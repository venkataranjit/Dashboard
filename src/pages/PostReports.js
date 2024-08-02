import React, { useState } from "react";

const PostReports = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    winery: "",
    wine: "",
    averageRating: "",
    reviews: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if formData has id to determine if it's update or add operation
    const idExists = data.some((item) => item.id === formData.id);

    if (idExists) {
      const updatedData = data.map((item) =>
        item.id === formData.id ? { ...formData } : item
      );
      setData(updatedData);
    } else {
      const newReport = {
        ...formData,
        id: data.length + 1, // Replace with actual ID logic if needed
      };
      setData([...data, newReport]);
    }

    // Clear form fields after submission
    setFormData({
      id: "",
      winery: "",
      wine: "",
      averageRating: "",
      reviews: "",
    });
  };

  const handleDelete = (id) => {
    // Display alert before deleting
    if (window.confirm("Are you sure you want to delete this report?")) {
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
      alert(`Report with ID ${id} deleted successfully.`);
    }
  };

  const handleEdit = (id) => {
    // Find the report with the given ID and populate the form fields for editing
    const reportToEdit = data.find((item) => item.id === id);
    if (reportToEdit) {
      setFormData({
        id: reportToEdit.id,
        winery: reportToEdit.winery,
        wine: reportToEdit.wine,
        averageRating: reportToEdit.averageRating,
        reviews: reportToEdit.reviews,
      });
    }
  };

  return (
    <>
      <main
        role="main"
        className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
        style={{ minHeight: "525px" }}
      >
        <h2>Post Reports</h2>

        {/* Form for posting/updating data */}
        <form onSubmit={handleSubmit} style={{ marginBottom: "75px" }}>
          <div className="row">
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="winery">Winery:</label>
                <input
                  type="text"
                  className="form-control"
                  id="winery"
                  name="winery"
                  value={formData.winery}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="wine">Wine:</label>
                <input
                  type="text"
                  className="form-control"
                  id="wine"
                  name="wine"
                  value={formData.wine}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="averageRating">Average Rating:</label>
                <input
                  type="text"
                  className="form-control"
                  id="averageRating"
                  name="averageRating"
                  value={formData.averageRating}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="reviews">Reviews:</label>
                <input
                  type="text"
                  className="form-control"
                  id="reviews"
                  name="reviews"
                  value={formData.reviews}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary float-right">
            Submit
          </button>
        </form>

        {/* Table to display reports */}
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Winery</th>
                <th>Wine</th>
                <th>Average Rating</th>
                <th>Reviews</th>
                <th style={{ width: "120px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.winery}</td>
                  <td>{item.wine}</td>
                  <td>{item.averageRating}</td>
                  <td>{item.reviews}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-primary mr-2"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default PostReports;
