import React from "react";
import { useForm } from "react-hook-form";
import './forms.scss';

const FormHandeling = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log('form data', data);
    }

    return (
        <div id="userForm" style={{width:'400px', height:'480px', margin: 'auto'}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>First Name</label>
                    <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="enter your first name" />
                    {errors.firstName && <span>This field is required</span>}
                </div>
                <div>
                    <label>Last Name</label>
                    <input {...register('lastName', { required: true, maxLength: 20 })}  placeholder="enter your first name"/>
                    {errors.lastName && <span>This field is required</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}  
                    placeholder="enter your email" />
                    {errors.email && <span>please enter valid email id</span>}
                    
                </div>
                <div> <label>Gender</label>
                    <select {...register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <input type="submit" />
            </form>
        </div>
    );
}

export default FormHandeling;