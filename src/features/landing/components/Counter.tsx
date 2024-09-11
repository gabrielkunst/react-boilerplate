import { useState } from 'react'

export function Counter() {
    const [count, setCount] = useState(0)

    const handleIncrement = () => setCount((prevState) => prevState + 1)

    const handleDecrement = () =>
        setCount((prevState) => {
            if (prevState === 0) {
                return 0
            }

            return prevState - 1
        })

    return (
        <div className="space-y-4 text-center">
            <h1 className="text-2xl">Counter</h1>
            <p className="text-xl font-bold">{count}</p>
            <div className="space-x-6">
                <button
                    onClick={handleIncrement}
                    className="px-4 py-2 text-white bg-blue-500 rounded-md"
                >
                    Increment
                </button>
                <button
                    onClick={handleDecrement}
                    className="px-4 py-2 text-white bg-blue-500 rounded-md"
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}
