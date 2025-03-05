import { useState, useEffect } from "react";

export const useScrollValue = () => {
    const [scrollposition,setScrollposition] = useState(0);
    const handscroll = () => {
        const position = window.pageYOffset;
        setScrollposition(position);
    };

    useEffect(()=> {
        window.addEventListener('scroll',handscroll)

        return () => {
            window.removeEventListener('scroll',handscroll)
        }
    }, [])

    return scrollposition
}