import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { courseSchema } from '../Validation/CourseSchema';
import { getAllCourses, createCourse, deleteCourse } from '../services/courseService';
import Button from '../components/Button';

const schema = courseSchema;

export default function Courses() {
  const {register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm({resolver: yupResolver(schema),});
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    fetchInitialCourses();
  }, []);

  const fetchInitialCourses = async () => {
    setLoading(true);
    setCourses([]);
    try {
      const result = await getAllCourses()
      setCourses(result.data)
    } catch(error) {

    } finally {
      setLoading(false)
    }
  }

  const courseFormOnSubmit = async (data) => {
    setButtonLoading(true);
    setIsEdit(false)
    try {
      const result = await createCourse(data)
      fetchInitialCourses()
    } catch(error) {

    } finally {
      setButtonLoading(false);
      reset()
      console.log('Work')
    }
  }

  const setEditData = (course) => {
    setIsEdit(true)
    reset(course)
  }

  const deleteCourseData = async (course) => {
    try {
      console.log(course)
      const result = await deleteCourse(course.id)
      fetchInitialCourses()
    } catch(error) {

    }
  }

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
            <h5 className="fw-bold border-bottom pb-3 mb-4">{isEdit ? 'Edit' : 'Add'} Course</h5>
            <form onSubmit={handleSubmit(courseFormOnSubmit)}>
              <div className="form-floating mb-3">
                <input type="text" className="form-control bg-light" id="courseName" {...register('name')} placeholder="Course Name" />
                <label htmlFor="courseName">Name</label>
                {errors.name && <p className="form-error">{errors.name.message}</p>}
              </div>

              <div className="form-floating mb-3">
                <input type="number" className="form-control bg-light" id="courseFee" {...register('fee')} placeholder="Course Fee" />
                <label htmlFor="courseFee">Fee</label>
                {errors.fee && <p className="form-error">{errors.fee.message}</p>}
              </div>

              <div className="form-floating mb-3">
                <input type="number" className="form-control bg-light" id="courseDuration" {...register('duration')} placeholder="Course Duration" />
                <label htmlFor="courseDuration">Duration (Month)</label>
                {errors.duration && <p className="form-error">{errors.duration.message}</p>}
              </div>

              {/* <button type="submit" className="btn px-4 py-2 rounded-3 w-100 shadow-sm gradient-bg text-white">
                Submit
              </button> */}
              <Button label={buttonLoading ? 'Loading...' : 'Submit'} isDisabled={buttonLoading ? true : false} />
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
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td className="ps-4 py-3">
                      <div className="fw-bold text-dark">{course.name}</div>
                    </td>
                    <td className="py-3">${course.fee}</td>
                    <td className="py-3">{course.duration} Months</td>
                    <td className="pe-4 py-3 text-end">
                      <i className="fa fa-trash-o me-2 fs-5 text-danger" role="button" aria-hidden="true" onClick={() => deleteCourseData(course)}></i>
                      <i className="fa fa-pencil fs-5 text-info" role="button" aria-hidden="true" onClick={() => setEditData(course)}></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
