import s from './Conts.module.scss'

export const CALENDAR_VARIANTS = [
	{
		name: 'Yesterday',
		getDate: () => {
			const today = new Date()

			return { start: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1), end: today }
		}
	},
	{
		name: 'This Week',
		getDate: () => {
			const today = new Date()

			return { start: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7), end: today }
		}
	},
	{
		name: 'Last Week',
		getDate: () => {
			const today = new Date()

			return { start: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 14), end: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7) }
		}
	},
	{
		name: 'This Month',
		getDate: () => {
			const today = new Date()

			return { start: new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()), end: today }
		}
	},
	{
		name: 'Last Month',
		getDate: () => {
			const today = new Date()

			return { start: new Date(today.getFullYear(), today.getMonth() - 2, today.getDate()), end: new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()) }
		}
	},
	{
		name: 'This Year',
		getDate: () => {
			const today = new Date()

			return { start: new Date(today.getFullYear() - 1, today.getMonth(), today.getDate()), end: today }
		}
	},
	{
		name: 'Last Year',
		getDate: () => {
			const today = new Date()

			return { start: new Date(today.getFullYear() - 2, today.getMonth(), today.getDate()), end: new Date(today.getFullYear() - 1, today.getMonth(), today.getDate()) }
		}
	},
	{
		name: 'All Time',
		getDate: () => {
			const today = new Date()

			return { start: new Date(2000, today.getMonth(), today.getDate()), end: today }
		}
	},
]

export const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]

export const WEEKDAYS = [
	'Mo',
	'Tu',
	'We',
	'Th',
	'Fr',
	'Sa',
	'Su'
]

export interface DateType {
	start: Date
	end: Date
}

export type ButtonVariants = 'primary' | 'icon_primary' | 'primary_icon' | 'icon_p' | 'transparent' | 'icon_transparent' | 'transparent_icon' | 'icon_t'
export type IconsVariants = keyof typeof icons

export const icons = {
	'add': <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
		<path fillRule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
	</svg>,
	'loading': <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={s.loading}>
		<circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="16" strokeDashoffset="3"/>
	</svg>,
	'x': <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" id="loadingCross">
		<line x1="1" y1="1" x2="15" y2="15" stroke="currentColor" strokeWidth="2" />
		<line x1="1" y1="15" x2="15" y2="1" stroke="currentColor" strokeWidth="2" />
	</svg>
}
