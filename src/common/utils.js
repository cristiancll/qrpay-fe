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
    formatPhoneNumber: (phone) => {
        const cc = phone.slice(0, 2);
        const ddd = phone.slice(2, 4);
        const p1 = phone.slice(4, 8);
        const p2 = phone.slice(8);

        return `+${cc} (${ddd}) 9 ${p1} ${p2}`;
    },
    sanitizeProto: (proto) => {
        const obj = proto.toObject()
        if (obj['createdAt']) {
            obj['createdAt'] = Utils.protoTimestampToDateTime(proto.getCreatedAt());
        }
        if (obj['updatedAt']) {
            obj['updatedAt'] = Utils.protoTimestampToDateTime(proto.getUpdatedAt());
        }
        if (obj['phone']) {
            obj['phone'] = Utils.formatPhoneNumber(proto.getPhone());
        }
        return obj;
    }
}

export default Utils;
