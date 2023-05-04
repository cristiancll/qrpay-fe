export class CameraNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = "CameraNotFound";
    }
}

export function getConstraints(viewport) {
    return {
        audio: false,
        video: {
            facingMode: "environment",
            width: {
                min: viewport.width,
                // ideal: viewport.width,
            },
            height: {
                min: viewport.height,
                // ideal: viewport.height,
            },
        }
    }
}

export function injectCameraConstraints(viewport) {
    return async function() {
        if (!navigator.mediaDevices) throw new CameraNotFound("Camera not found");

        try {
            const stream = await navigator.mediaDevices.getUserMedia(getConstraints(viewport))
            const facingMode = "environment";
            return { stream, facingMode };
        } catch (e) {}
        throw new CameraNotFound("Camera not found");
    }
}
