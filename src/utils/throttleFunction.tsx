type ThrottledFunction<T extends unknown[]> = (...args: T) => void;

function throttleFunc<T extends unknown[], R>(
    callback: (...args: T) => R,
    delay: number
): ThrottledFunction<T> {
    let timeoutId: NodeJS.Timeout | null = null;
    let lastExecutionTime = 0;

    return function throttledFunction(...args: T) {
        const currentTime = Date.now();
        const timeSinceLastExecution = currentTime - lastExecutionTime;

        if (timeSinceLastExecution >= delay) {
            callback(...args);
            lastExecutionTime = currentTime;
        } else {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            timeoutId = setTimeout(() => {
                callback(...args);
                lastExecutionTime = Date.now();
            }, delay - timeSinceLastExecution);
        }
    };
}

export { throttleFunc };
