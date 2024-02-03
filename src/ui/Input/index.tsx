import type { FC, FocusEventHandler } from 'react'
import s from './Input.module.scss'
import type { ChangeEventHandler } from 'react'
import { classnames } from '../../config/utils'

export interface Props {
	value: string
	onChange: ChangeEventHandler<HTMLInputElement>
	label?: string
	wide?: boolean
	placeholder: string
	error?: string
	required?: boolean
	name: string
	onBlur?: FocusEventHandler<HTMLInputElement>
}

const Input: FC<Props> = ({ value, onChange, label, wide = false, placeholder, error, required, name, onBlur }) => {
	return <div className={classnames(s.main, wide && s.wide, error && s.error)}>
		{label && <label>{error ? error : label}{required && <span>{' *'}</span>}</label>}
		<input name={name} required={required} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} />
	</div>
}

export default Input
