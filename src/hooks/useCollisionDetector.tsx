import { useEffect, useRef } from "react";

export const useCollisionDetector = (
    basketRef: React.RefObject<HTMLDivElement>
) => {
    const applesRef = useRef<Element[] | null>(null);

    useEffect(() => {
        const checkCollision = () => {
            const basketRect = basketRef.current?.getBoundingClientRect();
            applesRef?.current?.forEach((apple) => {
                const appleRect = apple.getBoundingClientRect();

                if (appleRect && basketRect) {
                    if (isColliding(appleRect, basketRect)) {
                        apple.classList.add("hidden");
                    }
                }
            });
        };

        const animate = () => {
            checkCollision();
            requestAnimationFrame(animate);
        };

        const animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [basketRef]);

    useEffect(() => {
        applesRef.current = Array.from(
            document.getElementsByClassName("apple")
        );
    }, []);

    const isColliding = (appleRect: DOMRect, basketRect: DOMRect): boolean => {
        return !(
            appleRect.right < basketRect.left ||
            appleRect.left > basketRect.right ||
            appleRect.bottom < basketRect.top ||
            appleRect.top > basketRect.bottom
        );
    };
};
