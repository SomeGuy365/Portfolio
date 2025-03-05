import { useEffect, useState } from "react";

const getdimensions = () => {
    const {innerWidth: width, innerHeight: height} = window
    return {
        width,
        height
    }
};

export const useWindowDimesions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getdimensions())

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getdimensions())
        }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize',handleResize)

    }, [])

    return windowDimensions
}