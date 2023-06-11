import { useEffect, useState } from "react";
import { useCallback } from "react";
export const useCursorTracker = () => {
    const [pos, setPos] = useState({ x: 0 });

    const handleMouseMove = useCallback((e: Event) => {
        console.log("move");
        e.preventDefault();
        if ("touches" in e) {
            const touchEvent = e as TouchEvent;
            if (!touchEvent.touches[0]) {
                return;
            }
            const { clientX } = touchEvent.touches[0];
            setPos({ x: clientX });
        } else {
            const { clientX } = e as MouseEvent;
            setPos({ x: clientX });
        }
    }, []);

    // TODO: Only throttle on mobile.
    // That is, if throttling is even needed
    // when you have empty array in useEffect.
    const throttledhandleMouseMove = throttle(handleMouseMove, 50);

    useEffect(() => {
        document.addEventListener("mousemove", throttledhandleMouseMove);
        document.addEventListener("touchmove", throttledhandleMouseMove, {
            passive: false,
        });

        return () => {
            document.removeEventListener("mousemove", throttledhandleMouseMove);
            document.removeEventListener("touchmove", throttledhandleMouseMove);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return { pos, handleMouseMove };
};

function throttle(callback: (e: Event) => void, delay: number) {
    let timeoutId: NodeJS.Timeout | null;
    let lastExecutionTime = 0;

    return function throttledFunction(e: Event) {
        const currentTime = Date.now();
        const elapsedTime = currentTime - lastExecutionTime;

        if (!lastExecutionTime || elapsedTime >= delay) {
            callback(e);
            lastExecutionTime = currentTime;
        } else {
            timeoutId && clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                callback(e);
                lastExecutionTime = Date.now();
            }, delay - elapsedTime);
        }
    };
}
