import { useLocation } from 'react-router-dom'

export function useLanguage () {
    const location = useLocation()
    const path = location.pathname
    const language = path.split('/')[1]

    return language
}