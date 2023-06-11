import { useEffect, useRef } from "react";

export const useCollisionDetector = (
    basketRef: React.RefObject<HTMLDivElement>
) => {
    const applesRef = useRef<HTMLElement[] | null>(null);

    useEffect(() => {
        const checkCollision = () => {
            const basketRect = basketRef.current?.getBoundingClientRect();
            applesRef?.current?.forEach((apple) => {
                if (apple.classList.contains("in_basket")) return;
                const appleRect = apple.getBoundingClientRect();

                if (appleRect && basketRect) {
                    if (isColliding(appleRect, basketRect)) {
                        apple.getAnimations().forEach((anim) => anim.finish());
                        apple.style.transform = "translate(0,0)";
                        apple.style.position = "unset";
                        const insideBasket =
                            document.getElementById("inside_basket");

                        if (insideBasket) {
                            insideBasket.appendChild(apple);
                        }
                        apple.classList.add("in_basket");
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
            document.getElementsByClassName(
                "apple"
            ) as HTMLCollectionOf<HTMLElement>
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
