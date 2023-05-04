import React from "react";
import useQRScanner from "./useQRScanner.jsx";
import useViewport from "./hooks/useViewport.jsx";
import NoCamera from "./NoCamera.jsx";
import "./overlay.css"

const QRCamera = ({onScan, onClose}) => {
    const viewport = useViewport();
    const scanner = useQRScanner(viewport);
    if (!scanner.allowed) return <NoCamera/>

    if (scanner.isScanned) {
        onScan(scanner.code?.data)
    }
    return (
        <>
            <video
                autoPlay={true}
                playsInline={true}
                muted={true}
                ref={scanner.ref}
                onClick={onClose}
            />
            <div ref={scanner.overlay} id="overlay-container"/>
        </>
    )
}

export default QRCamera;
