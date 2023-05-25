import * as yup from 'yup';

export const basicSchema2 = yup.object().shape({
    name: yup.string().min(2, "Must be at least 2 characters").required("Required"),
    email: yup.string().email("Enter a valid email").required("Required"),
    message: yup.string().min(50, "Must be at least 50 characters").required("Required")
})
