import * as yup from 'yup';

export const basicSchema = yup.object().shape({
    name: yup.string().min(2, "Must be at least 2 characters").required("Required"),
    phone: yup.string().matches(/^[0-9]\d{9}$/, "Invalid number").required("Required"),
    email: yup.string().email("Enter a valid email").required("Required"),
    address: yup.string().required("Required"),
    city: yup.string().min(4).required("Required")
})
