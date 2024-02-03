import type { FC, ReactNode } from 'react'
import s from './Dialog.module.scss'
import { icons } from '../../config/consts'
import { classnames } from '../../config/utils'

export interface Props {
	children: ReactNode
	onClose?: Function
	autoLayout?: boolean
}

const Dialog: FC<Props> = ({ children, onClose, autoLayout = false }) => {
	return <div className={classnames(s.main, autoLayout && s.layouted)}>
		{onClose && <button className={s.closer}>
			{icons['x']}
		</button>}
		{children}
	</div>
}

export default Dialog
