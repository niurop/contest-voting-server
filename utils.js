const getRect = (obj) => obj.getClientRects()[0];

const px = (v) => `${v}px`;

const map = (a, b, x, A, B) => A + ((B - A) * (x - a)) / (b - a);
