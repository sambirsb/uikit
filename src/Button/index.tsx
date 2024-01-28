import { useState, type FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export const Button: FC<Props> = ({ children = 'Button' }) => {

    const [count] = useState(1)

    return <button>
        {count}
        {children}
    </button>
}
