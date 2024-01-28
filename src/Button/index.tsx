import { useState, type FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export const Button: FC<Props> = ({ children = 'Button' }) => {

    const [count, setCount] = useState(1)

    return <button onClick={() => setCount((p) => p+1)}>
        {count}
        {children}
    </button>
}
