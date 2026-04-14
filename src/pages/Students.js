import React from 'react'
import StudentCard from '../components/StudentCard'

export default function Students() {

  return (
    <div>
      <div className="page-heading">
        <h3 className="page-title">
          <i className="fa fa-graduation-cap page-title-icon bg-gradient-primary text-white me-2" aria-hidden="true"></i>
          Students
        </h3>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-2">
          <StudentCard />
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6">
          <StudentCard />
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6">
          <StudentCard />
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6">
          <StudentCard />
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6">
          <StudentCard />
        </div>
      </div>
    </div>
    
  )
}
