import { useState, type FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export const Button: FC<Props> = ({ children }) => {

    const [count] = useState(1)

    return <button>
        {count}
        {children}
    </button>
}
