
const Check = {
    Input: {
        sanitize: (e) => {
            const {type, value} = e.target;
            switch (type) {
                case 'number':
                case 'tel':
                    return value.replace(/[^\d]/g, "");
                default:
                    return value;
            }
        },
    }

}

export default Check;
