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
            // setAllowed(false) // TODO: check if this is necessary
            return
        }
        const options = {
            preferredCamera: "environment",
            highlightScanRegion: true,
            highlightCodeOutline: true,
            overlay: overlay.current,
            maxScansPerSecond: 5,
        }
        // todo:
        // ao fechar e abrir a camera o zoom fica desconfigurado
        // investigar
        // testar resize, abre e fecha e ver se o overlay nao quebra
        // no mais ta tudo ok
        if (!scanner.current) {
            scanner.current = new QrScanner(ref.current, onDecode, options)
            scanner.current._getCameraStream = injectCameraConstraints(viewport)
            scanner.current.start()
                .catch((error) => {
                    console.log("ERROU")
                if (error instanceof CameraNotFound) {
                    setAllowed(false)
                }
            });
        }
    })

    useEffect(() => {
        console.log(scanner.current.$video.srcObject)
        // scanner.current._updateOverlay();
        // const updatedInjection = injectCameraConstraints(viewport)
        // console.log("VID: ",scanner.current.$video)
        // scanner.current.$video.width = viewport.width
        // scanner.current.$video.height = viewport.height
        // navigator.mediaDevices.getUserMedia(getConstraints(viewport)).then(stream => {
        //     scanner.current.$video.srcObject = stream
        // })
        // scanner.current._getCameraStream = updatedInjection
    }, [viewport]);


    useEffect(() => {
        console.log("IS SCANNED? ", isScanned)
        if (isScanned) {
            console.log("Pausing...")
            scanner.current.pause()
            // scanner.current.stop()
            // scanner.current.destroy()
        }
        return () => {
            setScanned(false)
        }
    }, [isScanned])

    return {ref, overlay, allowed, code: code.current, isScanned}
}

export default useQRScanner
