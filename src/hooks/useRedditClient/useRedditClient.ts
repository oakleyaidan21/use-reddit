import { useState } from 'react'

export const useRedditClient = () => {
    const [temporary] = useState('temporary')

    return [temporary]
}
