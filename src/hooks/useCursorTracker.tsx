import { useEffect, useState } from "react";
import { useCallback } from "react";
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

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("touchmove", handleMouseMove, {
            passive: false,
        });

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.addEventListener("touchmove", handleMouseMove);
        };
    }, [handleMouseMove]);
    return { pos, handleMouseMove };
};
