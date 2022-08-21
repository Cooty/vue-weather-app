const cache = {
    makeKey(key) {
        return `_wa_${key}`;
    },
    saveToCache(key, data, type = "session") {
        try {
            const storage = type === "session" ? sessionStorage : localStorage;
            storage.setItem(this.makeKey(key), JSON.stringify(data));
        } catch (e) {
            console.warn(e);
        }
    },
    getFromCache(key, type = "session") {
        try {
            const storage = type === "session" ? sessionStorage : localStorage;
            const item = storage.getItem(this.makeKey(key));
            if (item) {
                return JSON.parse(item);
            } else {
                return false;
            }
        } catch (e) {
            console.warn(e);
            return false;
        }
    },
};

Object.freeze(cache);

export default cache;
