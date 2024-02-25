'use client'
import type { FC, ReactNode } from 'react'
import s from './Text.module.scss'
import { classnames } from '../../utils'

export type TextWeightType = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
export type TextSizeType = '4' | '6' | '8' | '10' | '12' | '14' | '16' | '18' | '20' | '22' | '24' | '26' | '28' | '30' | '32' | '34' | '36' | '38' | '40' | '42' | '44' | '46' | '48' | '50' | '52' | '54' | '56' | '58' | '60' | '62' | '64'
export type TextAlignType = 'center' | 'left' | 'right'
export type TextLineHeightType = '100' | '120' | '140' | '160' | '180' | '200'
interface Props {
    children: ReactNode
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'
    weight?: TextWeightType
    size?: TextSizeType
    lineHeight?: TextLineHeightType
    align?: 'center' | 'left' | 'right'
    className?: string
}

const Text: FC<Props> = ({ tag = 'p', weight, size, lineHeight = '100', align = 'left', className, children }) => {

	switch (tag) {
	case 'h1': return <h1 className={classnames(s[`weight${weight}`], s[`size${size}`], s[`ln${lineHeight}`], s[`align-${align}`], className)}>{children}</h1>
	case 'h2': return <h2 className={classnames(s[`weight${weight}`], s[`size${size}`], s[`ln${lineHeight}`], s[`align-${align}`], className)}>{children}</h2>
	case 'h3': return <h3 className={classnames(s[`weight${weight}`], s[`size${size}`], s[`ln${lineHeight}`], s[`align-${align}`], className)}>{children}</h3>
	case 'h4': return <h4 className={classnames(s[`weight${weight}`], s[`size${size}`], s[`ln${lineHeight}`], s[`align-${align}`], className)}>{children}</h4>
	case 'h5': return <h5 className={classnames(s[`weight${weight}`], s[`size${size}`], s[`ln${lineHeight}`], s[`align-${align}`], className)}>{children}</h5>
	case 'h6':	return <h6 className={classnames(s[`weight${weight}`], s[`size${size}`], s[`ln${lineHeight}`], s[`align-${align}`], className)}>{children}</h6>
	case 'span': return <span className={classnames(s[`weight${weight}`], s[`size${size}`], s[`ln${lineHeight}`], s[`align-${align}`], className)}>{children}</span>
	case 'p': return <p className={classnames(s[`weight${weight}`], s[`size${size}`], s[`ln${lineHeight}`], s[`align-${align}`], className)}>{children}</p>
	}
}

export default Text