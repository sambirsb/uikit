import type { FC } from 'react'
import c from './Switcher.module.scss'
import { classnames } from '../../config/utils'

export interface Props {
    isOn: boolean
    setIsOn: (checked: boolean) => any // eslint-disable-line @typescript-eslint/no-explicit-any
}

const DefaultSwitcher: FC<Props> = ({ isOn, setIsOn }) => {
	return <button className={classnames(c.main, `${isOn ? c.on : c.off}`)} onClick={() =>  setIsOn(!isOn)}>
		<div className={c.dot}/>
	</button>
}

export default DefaultSwitcher
