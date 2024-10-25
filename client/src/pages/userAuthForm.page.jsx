import React from 'react'
import InputBox from '../components/input.component';
import googleIcon from '../imgs/google.png';

function UserAuthForm({ type }) {
    return (
        <section className='h-cover flex items-center justify-center'>

            <form action="" className='w-[80%] max-w-[400px] mx-auto'>

                <h1 className='text-4xl font-gelasio capitalize text-center my-24'>
                    {type == 'sign-in' ? "Welcome back" : "Join me today"}
                </h1>

                {
                    type != "sign-in" ?
                        <InputBox
                            name="fullname"
                            text="text"
                            placeholder="Fullname"
                            icon="fi-rr-user"
                        />
                        : ""
                }

                <InputBox
                    name="email"
                    type="email"
                    placeholder="Email"
                    icon="fi-sr-envelope"
                />

                <InputBox
                    name="password"
                    type="password"
                    placeholder="password"
                    icon="fi-rr-key"
                />

                <button
                className='btn-dark center mt-14'
                type='submit'
                >
                    {type == 'sign-in' ? "Sign in" : "Sign up"}
                </button>

                <div className='flex items-center gap-2 uppercase opacity-20 font-semibold mx-auto'>
                    <hr className='w-[50%] border-black' />
                    <p>or</p>
                    <hr className='w-[50%] border-black' />
                </div>

                <button className='btn-dark flex items-center justify-center gap-4 w-[90%] mx-auto'>
                    <img src={ googleIcon } alt="" className='w-5' />
                    Connect With Google
                </button>

            </form>
        </section>
    )
}

export default UserAuthForm