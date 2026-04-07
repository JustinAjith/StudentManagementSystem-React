import React from 'react'

export default function Courses() {
  return (
    <div>
      <div className="page-heading">
        <h3 className="page-title">
          <i className="fa fa-book page-title-icon bg-gradient-primary text-white me-2" aria-hidden="true"></i>
          Courses
        </h3>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="bg-white p-4 rounded-4 shadow-sm border">
            <h5 className="fw-bold border-bottom pb-3 mb-4">Add Course</h5>
            <form>
              <div className="form-floating mb-3">
                <input type="text" className="form-control bg-light" id="courseName" placeholder="Course Name" />
                <label for="courseName">Name</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control bg-light" id="courseFee" placeholder="Course Fee" />
                <label for="courseFee">Fee</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control bg-light" id="courseDuration" placeholder="Course Duration" />
                <label for="courseDuration">Duration (Month)</label>
              </div>

              <button type="submit" className="btn px-4 py-2 rounded-3 w-100 shadow-sm gradient-bg text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light text-uppercase fs-7 text-muted">
                <tr>
                  <th className="ps-4 py-3">Course</th>
                  <th className="py-3">Fee</th>
                  <th className="py-3">Duration</th>
                  <th className="pe-4 py-3 text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ps-4 py-3">
                    <div className="fw-bold text-dark">Jane Doe</div>
                  </td>
                  <td className="py-3">$1,250.00</td>
                  <td className="py-3">4 Months</td>
                  <td className="pe-4 py-3 text-end">$1,250.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
