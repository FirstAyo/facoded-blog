import { useState } from 'react';

function InputBox({ name, type, id, value, placeholder, icon }) {

    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div>

            <input
                name={name}
                type="text"
                placeholder={placeholder}
                defaultValue={value}
                id={id}
                className="input-box"
            />

            <i className={"fi " + icon + " input-icon"}></i>

        </div>
    )
}

export default InputBox
