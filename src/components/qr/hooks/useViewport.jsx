import {useEffect, useState} from "react";
import Device from "../../../common/device.js";

const useViewport = () => {
    const [viewport, setViewport] = useState(Device.viewPortDimensions());
    useEffect(() => {
        const handleResize = () => {
            const newViewPort = Device.viewPortDimensions();
            setViewport(newViewPort);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return viewport;
}

export default useViewport;
