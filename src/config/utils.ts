export const logger = (...string: string[]) => {
    if (process.env.NODE_ENV === 'development') console.log(...string) // eslint-disable-line
}

export const classnames = (...classes) => classes.filter((classname) => !!classname).join(' ')

export const sleep = (ms: number) => {
	return new Promise(resolve => setTimeout(resolve, ms))
}

export const simpler = (obj:any) => JSON.parse(JSON.stringify(obj))


export const isSomeTrulable = (obj:object) => Object.values(obj).some((item) => !!item)

export const cutTimeFromDate = (date: Date):Date => {
	const year1 = date.getFullYear()
	const month1 = date.getMonth()
	const day1 = date.getDate()

	return new Date(year1, month1, day1)
}