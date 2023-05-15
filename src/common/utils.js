import dayjs from 'dayjs';

const Utils = {
    protoTimestampToDateTime: (timestamp) => {
        const date = timestamp.toDate();
        return dayjs(date).format("HH:mm:ss DD/MM/YYYY");
    },
    protoTimestampToDate: (timestamp) => {
        const date = timestamp.toDate();
        return dayjs(date).format('YYYY-MM-DD');
    },
    protoTimestampToTime: (timestamp) => {
        const date = timestamp.toDate();
        return dayjs(date).format('HH:mm:ss');
    },
    sanitizeProto: (proto) => {
        const obj = proto.toObject()
        if (obj['createdAt']) {
            obj['createdAt'] = Utils.protoTimestampToDateTime(proto.getCreatedAt());
        }
        if (obj['updatedAt']) {
            obj['updatedAt'] = Utils.protoTimestampToDateTime(proto.getUpdatedAt());
        }
        return obj;
    }
}

export default Utils;
