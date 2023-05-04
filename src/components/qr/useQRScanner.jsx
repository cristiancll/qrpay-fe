import QrScanner from "qr-scanner";
import {useEffect, useRef, useState} from "react";
import {CameraNotFound, injectCameraConstraints} from "./common.js";

const useQRScanner = (viewport) => {
    const [allowed, setAllowed] = useState(true)
    const [isScanned, setScanned] = useState(false)
    const ref = useRef()
    const overlay = useRef()
    const scanner = useRef()
    const code = useRef()

    const onDecode = (result) => {
        code.current = result
        setScanned(true)
    }

    useEffect(() => {
        if (!ref.current) {
            return
        }
        const options = {
            preferredCamera: "environment",
            highlightScanRegion: true,
            highlightCodeOutline: true,
            overlay: overlay.current,
            maxScansPerSecond: 5,
        }
        if (!scanner.current) {
            scanner.current = new QrScanner(ref.current, onDecode, options)
            scanner.current._getCameraStream = injectCameraConstraints(viewport)
            scanner.current.start()
                .catch((error) => {
                if (error instanceof CameraNotFound) {
                    setAllowed(false)
                }
            });
        }
    })



    useEffect(() => {
        if (isScanned) {
            scanner.current.pause()
        }
        return () => {
            setScanned(false)
        }
    }, [isScanned])

    return {ref, overlay, allowed, code: code.current, isScanned}
}

export default useQRScanner
