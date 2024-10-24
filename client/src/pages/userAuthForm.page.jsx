

import React from 'react'
import InputBox from '../components/input.component'

function UserAuthForm({ type }) {
    return (
        <section>

            <form action="">

                <h1 className=''>
                    {type == 'sign-in' ? "Welcome back" : "Join us today"}
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

            </form>
        </section>
    )
}

export default UserAuthForm