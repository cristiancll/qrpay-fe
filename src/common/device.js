function canVibrate() {
    return 'vibrate' in navigator;
}

const Device = {
    vibrate: (time) => {
        if (canVibrate()) {
            navigator.vibrate(time);
        }
    },
    isMediaSupported: () => {
        return typeof navigator !== 'undefined' && navigator.mediaDevices && navigator.mediaDevices?.getUserMedia
    },
    viewPortDimensions: () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const isPortrait = w < h;
        return {
            width: isPortrait ? h : w,
            height: isPortrait ? w : h
        }
    }
}

export default Device;
