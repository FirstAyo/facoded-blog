

import React from 'react'
import InputBox from '../components/input.component'

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

            </form>
        </section>
    )
}

export default UserAuthForm