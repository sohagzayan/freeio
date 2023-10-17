import * as yup from "yup"



export const LoginSchema = yup
    .object({
        email: yup.string().required('Email is required').matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Invalid email address'
        ),
        password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
    })
    .required()


export const registerSchema = yup
    .object({
        name: yup.string().required('Name is required'),
        email: yup.string().required('Email is required').matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Invalid email address'
        ),
        password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters').matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
    })
    .required()