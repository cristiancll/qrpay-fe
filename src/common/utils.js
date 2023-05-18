import dayjs from 'dayjs';

function formatInteger(value) {
    // Convert the integer part to a string
    let integerStr = value.toString();

    // Format with thousands separator
    let formatted = "";
    for (let i = integerStr.length - 1, j = 0; i >= 0; i--, j++) {
        formatted = integerStr[i] + formatted;
        if (j > 0 && j % 3 === 0 && i !== 0) {
            formatted = "." + formatted;
        }
    }

    return formatted;
}

function formatDecimal(value) {
    // Convert the decimal part to a string
    let decimalStr = value.toString();

    // Pad with leading zeros if necessary
    if (decimalStr.length === 1) {
        decimalStr = "0" + decimalStr;
    }

    return decimalStr;
}

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
        // Extract the integer and decimal parts
        const integerPart = Math.floor(price / 100);
        const decimalPart = price % 100;

        // Format the integer part with thousands separator
        const formattedIntegerPart = formatInteger(integerPart);

        // Format the decimal part
        const formattedDecimalPart = formatDecimal(decimalPart);

        // Join the integer and decimal parts with the comma separator
        const formattedAmount = `${formattedIntegerPart},${formattedDecimalPart}`;

        // Add the BRL symbol
        return `R$ ${formattedAmount}`;
    }
}

export default Utils;
