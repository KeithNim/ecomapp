import React, { FormEvent, useState } from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import './sign-in.styles.scss';



const SignIn = () => {
    const [formState, setFormState]: [any, any] = useState({
        email: '',
        password: ''
    })


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setFormState({ email: '', password: '' });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        setFormState({ [name]: value });
    };


    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={formState.email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={formState.password}
                    handleChange={handleChange}
                    label='password'
                    required
                />
                <CustomButton type='submit'> Sign in </CustomButton>
            </form>
        </div>
    );
}

export default SignIn;