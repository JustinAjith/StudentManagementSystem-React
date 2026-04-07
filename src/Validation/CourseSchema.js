import * as yup from 'yup';

export const courseSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required'),
    fee: yup
        .string()
        .required('Fee is required'),
    duration: yup
        .string()
        .required('Duration is required')
})