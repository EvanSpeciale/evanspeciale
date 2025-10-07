import { UIEvent, useEffect, useState } from "react"

interface MousePosition {
    x: number,
    y: number,
}

interface ScrollPosition {
    x: number,
    y: number,
}

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 } as MousePosition);
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 } as ScrollPosition)

    useEffect(() => {
        const updateMousePosition = (e: MouseEventInit) => {

            const newMousePosition: MousePosition = {
                x: e.clientX ? e.clientX + window.pageXOffset : window.pageXOffset,
                y: e.clientY ? e.clientY + window.pageYOffset : window.pageYOffset,
            }

            setMousePosition(newMousePosition);
        };

        window.addEventListener('mousemove', updateMousePosition);


        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return mousePosition;
};

export default useMousePosition;