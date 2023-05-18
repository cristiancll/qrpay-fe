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
    },
    isValidUUID: (uuid) => {
        const regex = new RegExp('^[a-f0-9]{8}(-[a-f0-9]{4}){4}[a-f0-9]{8}$');
        return regex.test(uuid);
    },

    formatPrice: (price) => {
        const nf = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        });
        return nf.format(price/100);
    }
}

export default Utils;
