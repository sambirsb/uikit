'use client'
import { type FC } from 'react'
import s from './Alert.module.scss'
import { classnames } from '../../utils'
import { useAlertStore, type PopupType } from './AlertStore'
import { icons } from '../../config/consts'
import Text from '../../ui/Text'


const AlertProvider: FC = () => {
	const popups = useAlertStore((state) => state.popups)

	return (
		<div className={s.container}>
			{popups.map((item) => (
				<Alert key={`${item.timeout}`} popup={item} />
			))}
		</div>
	)
}

const Alert: FC<{ popup: PopupType }> = ({ popup }) => {
	const closePopup = useAlertStore((state) => state.closePopup)

	return (
		<div className={classnames(s.main, s[popup.type], popup.isOpen ? s.opened : s.hidden)}>
			<div className={s.texts}>
				{icons[popup.type]}
				<Text size='14' weight='500'>
					{popup.text}
				</Text>
			</div>
			<button onClick={() => closePopup(popup.timeout)}>{icons['x']}</button>
		</div>
	)
}

export default AlertProvider
