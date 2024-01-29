import type { FC, MouseEventHandler, ReactNode } from 'react'
import s from './Button.module.scss'
import { IconsVariants, icons } from '../../config/consts'
import { classnames } from '../../config/utils'

type SizesType = 'large' | 'medium' | 'small'
export type ButtonVariantsType = 'primary' | 'secondary' | 'primary-icon' | 'icon-primary' | 'icon-secondary' | 'secondary-icon'
interface Props {
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

const sizes: Record<SizesType, string> = {
    large: s.large,
    medium: s.medium,
    small: s.small
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
        <button onClick={!isLoading && onClick} type={type} disabled={isLoading || disabled} className={classnames(s.main, sizes[size], variants[variant], wide && s.wide)} data-testid='button'>
            {variant.includes('icon') && !isLoading && icons[icon]}
            {isLoading && (
                <svg className={s.loading} xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                    <path
                        d='M8 16C6.801 16 5.648 15.741 4.572 15.23L5.429 13.423C6.235 13.806 7.1 14 8 14C11.309 14 14 11.309 14 8C14 4.691 11.309 2 8 2C4.691 2 2 4.691 2 8C2 8.901 2.194 9.766 2.578 10.572L0.772 11.431C0.26 10.354 0 9.2 0 8C0 3.589 3.589 0 8 0C12.411 0 16 3.589 16 8C16 12.411 12.411 16 8 16Z'
                        fill='#94A3B8'
                    />
                </svg>
            )}
            {children}
        </button>
    )
}

export default Button
