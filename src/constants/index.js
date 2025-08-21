const allowed_formats = ["jpg", "jpeg", "png", "gif", "webp"];

const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
const mobileNoRegex = /(\+)?(91)?( )?[789]\d{9}/g;
const pincodeRegex = /^\d{6}$/;
const imageUrlRegex =
    /^https:\/\/res\.cloudinary\.com\/[a-z0-9-]+\/image\/upload\/[a-zA-Z0-9/_-]+\.(jpg|jpeg|png|webp|gif)$/i;

const currency = "INR";

export {
    allowed_formats,
    emailRegex,
    pincodeRegex,
    mobileNoRegex,
    imageUrlRegex,
    currency,
};
