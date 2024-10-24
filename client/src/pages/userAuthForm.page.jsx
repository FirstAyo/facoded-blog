

import React from 'react'

function UserAuthForm({ type }) {
  return (
    <section>

        <form action="">

            <h1 className=''>
                {type == 'sign-in' ? "Welcome back" : "Join us today"}
            </h1>
            
        </form>
    </section>
  )
}

export default UserAuthForm