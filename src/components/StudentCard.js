import React from 'react'

export default function StudentCard() {
  return (
    <div className="card shadow-lg border-0 student-card">
        <div className="card-body text-center p-4">
            <div className="position-relative d-inline-block mb-3">
                <img src="https://business.appstate.edu/sites/default/files/styles/asu_news_full/public/asu_news/student-profile-javon-nathaniel.jpg?itok=-KyYkUKf" alt="Student Photo" 
                className="rounded-circle border border-4 border-white shadow-sm student-card-profile" />
                <span className="position-absolute bottom-0 end-0 bg-success border border-2 border-white rounded-circle"></span>
            </div>
            
            <h4 className="fw-bold text-dark mb-1">Alex Morgan</h4>
            <p className="text-muted small mb-3">Student ID: #STU-2026-089</p>
            
            <hr className="text-muted opacity-25" />
            
            <div className="row text-start g-3">
                <div className="col-12">
                    <small className="text-uppercase text-muted d-block">Course</small>
                    <span className="fw-bold text-dark">Computer Science</span>
                </div>
                <div className="col-12">
                    <small className="text-uppercase text-muted d-block">Join Date</small>
                    <span className="fw-bold text-dark">Sept 01, 2024</span>
                </div>
            </div>
        </div>
          
          <div className="bg-light py-3 px-4 border-top">
            a
          </div>
    </div>
  )
}
