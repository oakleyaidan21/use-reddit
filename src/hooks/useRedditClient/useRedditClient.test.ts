import { useRedditClient } from "./useRedditClient"
import { renderHook } from '@testing-library/react-hooks'

describe('useRedditClient', () => {
    it("should return temp", () => {
        const { result } = renderHook(() => useRedditClient())
        expect(result.current).toStrictEqual(["temporary"])
    })
 })