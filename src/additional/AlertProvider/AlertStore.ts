import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export type popupVariants = 'success' | 'error' | 'warning' | 'info'
export type AlertType = (type: popupVariants, text: string, closeTime?: number) => void
export interface PopupType {
    type: popupVariants
    text: string
    timeout: NodeJS.Timeout
    isOpen?: boolean
}

interface useAlertStoreType {
    popups: Array<PopupType>
    Alert: AlertType
    closePopup: (timeoutId: NodeJS.Timeout) => void
}

export const useAlertStore = create<useAlertStoreType>()(
	devtools(
		(set) => ({
			popups: [],
			Alert: (type, text, timeout = 3000) => {
				set((state) => {
					const timeoutId = setTimeout(() => {
						set((state) => ({
							popups: state.popups.map((item) => {
								if (item.timeout === timeoutId) {
									return {
										...item,
										isOpen: false
									}
								}

								return item
							})
						}))

						setTimeout(() => {
							set((state) => ({
								popups: state.popups.filter((item) => item.timeout !== timeoutId)
							}))
						}, 500)
					}, timeout)

					return {
						popups: [
							{
								type,
								text: text || 'Something went wrong!',
								timeout: timeoutId,
								isOpen: true
							},
							...state.popups
						]
					}
				})
			},
			closePopup: (timeoutId) => {
				set((state) => ({
					popups: state.popups.map((item) => {
						if (item.timeout === timeoutId) {
							return {
								...item,
								isOpen: false
							}
						}

						return item
					})
				}))

				setTimeout(() => {
					set((state) => ({
						popups: state.popups.filter((item) => item.timeout !== timeoutId)
					}))
				}, 500)
			}
		}),
		{ name: 'useAlert' }
	)
)

export const useAlert = () => useAlertStore((state) => state.Alert)
export const Alert: AlertType = (type, text, timeout) => useAlertStore.getState().Alert(type, text, timeout)