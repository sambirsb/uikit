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
	'add_white': <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16">
		<path d="M7.9009 8.49999H4.56757C4.4259 8.49999 4.30715 8.45205 4.21132 8.35619C4.11548 8.26031 4.06757 8.14151 4.06757 7.99979C4.06757 7.85805 4.11548 7.73933 4.21132 7.6436C4.30715 7.54788 4.4259 7.50002 4.56757 7.50002H7.9009V4.16669C7.9009 4.02502 7.94883 3.90627 8.0447 3.81044C8.14058 3.7146 8.25938 3.66669 8.4011 3.66669C8.54283 3.66669 8.66156 3.7146 8.75728 3.81044C8.853 3.90627 8.90087 4.02502 8.90087 4.16669V7.50002H12.2342C12.3759 7.50002 12.4946 7.54795 12.5905 7.64382C12.6863 7.7397 12.7342 7.8585 12.7342 8.00022C12.7342 8.14195 12.6863 8.26068 12.5905 8.3564C12.4946 8.45213 12.3759 8.49999 12.2342 8.49999H8.90087V11.8333C8.90087 11.975 8.85293 12.0937 8.75707 12.1896C8.66119 12.2854 8.54239 12.3333 8.40067 12.3333C8.25893 12.3333 8.1402 12.2854 8.04448 12.1896C7.94876 12.0937 7.9009 11.975 7.9009 11.8333V8.49999Z" />
	</svg>,
	'add_folder': <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path d="M2.87176 13C2.535 13 2.24996 12.8833 2.01663 12.65C1.78329 12.4166 1.66663 12.1316 1.66663 11.7948V4.20513C1.66663 3.86838 1.78329 3.58333 2.01663 3.35C2.24996 3.11667 2.535 3 2.87176 3H6.03328C6.19395 3 6.34844 3.0312 6.49673 3.0936C6.64502 3.15599 6.77386 3.24188 6.88326 3.35128L7.86531 4.33333H13.1281C13.4649 4.33333 13.7499 4.45 13.9833 4.68333C14.2166 4.91667 14.3333 5.20171 14.3333 5.53847V11.7948C14.3333 12.1316 14.2166 12.4166 13.9833 12.65C13.7499 12.8833 13.4649 13 13.1281 13H2.87176ZM2.87176 12H13.1281C13.188 12 13.2371 11.9808 13.2756 11.9423C13.314 11.9038 13.3333 11.8547 13.3333 11.7948V5.53847C13.3333 5.47863 13.314 5.42948 13.2756 5.39102C13.2371 5.35255 13.188 5.33332 13.1281 5.33332H7.45636L6.18071 4.05768C6.15934 4.03632 6.13691 4.02136 6.11341 4.0128C6.0899 4.00426 6.06532 3.99998 6.03968 3.99998H2.87176C2.81193 3.99998 2.76278 4.01922 2.72431 4.05768C2.68584 4.09615 2.66661 4.1453 2.66661 4.20513V11.7948C2.66661 11.8547 2.68584 11.9038 2.72431 11.9423C2.76278 11.9808 2.81193 12 2.87176 12ZM9.49996 9.16663V9.99998C9.49996 10.1419 9.54782 10.2607 9.64354 10.3564C9.73927 10.4521 9.85807 10.5 9.99994 10.5C10.1418 10.5 10.2606 10.4521 10.3563 10.3564C10.4521 10.2607 10.4999 10.1419 10.4999 9.99998V9.16663H11.3333C11.4752 9.16663 11.594 9.11877 11.6897 9.02305C11.7854 8.92733 11.8333 8.80853 11.8333 8.66665C11.8333 8.52477 11.7854 8.40597 11.6897 8.31025C11.594 8.21453 11.4752 8.16667 11.3333 8.16667H10.4999V7.33332C10.4999 7.19144 10.4521 7.07264 10.3563 6.97692C10.2606 6.8812 10.1418 6.83333 9.99994 6.83333C9.85807 6.83333 9.73927 6.8812 9.64354 6.97692C9.54782 7.07264 9.49996 7.19144 9.49996 7.33332V8.16667H8.66661C8.52473 8.16667 8.40593 8.21453 8.31021 8.31025C8.21449 8.40597 8.16663 8.52477 8.16663 8.66665C8.16663 8.80853 8.21449 8.92733 8.31021 9.02305C8.40593 9.11877 8.52473 9.16663 8.66661 9.16663H9.49996Z" fill="#6366F1" />
	</svg>,
	'loading': <svg className={s.loading} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path d="M8 16C6.801 16 5.648 15.741 4.572 15.23L5.429 13.423C6.235 13.806 7.1 14 8 14C11.309 14 14 11.309 14 8C14 4.691 11.309 2 8 2C4.691 2 2 4.691 2 8C2 8.901 2.194 9.766 2.578 10.572L0.772 11.431C0.26 10.354 0 9.2 0 8C0 3.589 3.589 0 8 0C12.411 0 16 3.589 16 8C16 12.411 12.411 16 8 16Z" fill="#94A3B8" />
	</svg>,
	'x': <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
		<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
	</svg>
}
