import React from 'react'
import { Link } from 'react-router-dom'
import StudentCard from '../components/StudentCard'

export default function Students() {

  return (
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
  )
}
