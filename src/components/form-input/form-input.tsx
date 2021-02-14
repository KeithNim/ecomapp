import React from 'react'
import './form-input.styles.scss'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label: string
}

const FormInput: React.FC<Props> = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps} />
            {label ? (
                <label
                    className={`${otherProps.value?.toString().length ? 'shrink' : ''
                        } form-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    )
}

export default FormInput