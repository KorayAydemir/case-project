import { useEffect, useState } from "react";
import { useCallback } from "react";
import { throttleFunc } from "../utils/throttleFunction";

export const useCursorTracker = () => {
    const [pos, setPos] = useState({ x: 0 });

    const handleMouseMove = useCallback((e: Event) => {
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
    const throttledhandleMouseMove = throttleFunc(handleMouseMove, 20);

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
