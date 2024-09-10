import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import { useState } from 'react'

export function Counter() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <div className="flex space-x-4">
                    <a
                        href="https://vitejs.dev"
                        target="_blank"
                        className="font-medium text-[#646cff] hover:text-[#535bf2] no-underline"
                    >
                        <img
                            src={viteLogo}
                            className="w-16 h-16"
                            alt="Vite logo"
                        />
                    </a>
                    <a
                        href="https://react.dev"
                        target="_blank"
                        className="font-medium text-[#646cff] hover:text-[#535bf2] no-underline"
                    >
                        <img
                            src={reactLogo}
                            className="w-16 h-16"
                            alt="React logo"
                        />
                    </a>
                </div>
            </div>
            <h1 className="text-6xl leading-tight text-center">Vite + React</h1>
            <div className="flex flex-col items-center mt-2">
                <button
                    onClick={() => setCount((count) => count + 1)}
                    className="rounded-lg border border-transparent px-4 py-2 text-lg font-medium bg-[#1a1a1a] text-white cursor-pointer transition duration-200 hover:border-[#646cff] focus:outline-none focus-visible:outline-[4px] focus-visible:outline-auto focus-visible:outline-webkit-focus-ring-color"
                >
                    count is {count}
                </button>
                <p className="mt-4 text-lg">
                    Edit{' '}
                    <code className="font-mono text-[#646cff]">
                        src/App.tsx
                    </code>{' '}
                    and save to test HMR
                </p>
            </div>
            <p className="mt-2 text-lg text-center">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}
