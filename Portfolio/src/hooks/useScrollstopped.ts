import { useEffect, useState } from "react"

// NOT USED, KEEP IF NEEDED

export const useScrollstopped = () => {
    const [scrollstop, setscrollstop] = useState(false)
    let timer : number
    const checkscroll = () => {
        if (timer !== null) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            setscrollstop(true)
        }, 500)
    }

    useEffect(()=> {
        window.addEventListener('scroll',checkscroll)

        return () => {
            window.removeEventListener('scroll',checkscroll)
        }
    }, [])

    return scrollstop
}