import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LandingScreen } from './features/landing/screens'

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingScreen />,
    },
])

export function Router() {
    return <RouterProvider router={router} />
}