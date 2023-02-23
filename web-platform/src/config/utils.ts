export const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const getRandNumber = (minimum: number, maximum: number) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

export const cutArray = (array: [] | object[], quantityPerPage: number) => new Array(Math.ceil(array.length / quantityPerPage)).fill(0).map(_ => array.splice(0, quantityPerPage))