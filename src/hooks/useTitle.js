import { useEffect } from 'react'

const useTitle = (title) => {
    useEffect(() => {
        const prevTitle = document.title
        document.title = title

        // Cleanup: restore previous title when component unmounts
        return () => {
            document.title = prevTitle
        }
    }, [title])
}

export default useTitle
