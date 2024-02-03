import type { FC, MouseEventHandler, ReactNode } from 'react'
import s from './Button.module.scss'
import { type IconsVariants, icons } from '../../config/consts'
import { classnames } from '../../config/utils'

type SizesType = 'large' | 'medium' | 'small'
type ButtonVariantsType = 'primary' | 'secondary' | 'primary-icon' | 'icon-primary' | 'icon-secondary' | 'secondary-icon'
export interface Props {
    size: SizesType
    variant: ButtonVariantsType
    icon?: IconsVariants
    children: ReactNode
    wide?: boolean
    disabled?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
    type?: 'button' | 'submit' | 'reset'
    isLoading?: boolean
}

const variants: Record<ButtonVariantsType, string> = {
	primary: s.primary,
	secondary: s.secondary,
	'icon-primary': s.primary,
	'primary-icon': classnames(s.primary, s.reverse),
	'icon-secondary': s.secondary,
	'secondary-icon': classnames(s.secondary, s.reverse)
}

const Button: FC<Props> = ({ size, variant, children, wide = false, disabled, isLoading, onClick, type = 'button', icon }) => {
	return (
		<button onClick={!isLoading && onClick} type={type} disabled={isLoading || disabled} className={classnames(s.main, s[size], variants[variant], wide && s.wide)} data-testid='button'>
			{variant.includes('icon') && !isLoading && icons[icon]}
			{isLoading && icons['loading']}
			{children}
		</button>
	)
}

export default Button
