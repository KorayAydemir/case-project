import { setIsMobile } from "../redux/slices/isMobileSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function useHandleResize() {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                dispatch(setIsMobile(true));
            } else {
                dispatch(setIsMobile(false));
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [dispatch]);
}
