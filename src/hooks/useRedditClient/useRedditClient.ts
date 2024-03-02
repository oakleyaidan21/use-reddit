import { useState } from 'react'

const useRedditClient = () => {
    const [temporary, setTemporary] = useState('temporary')

    return [temporary, setTemporary]
}

export default useRedditClient
