const cache = {
    makeKey(key) {
        return `_wa_${key}`
    },
    saveToCache(key, data) {
        try {
            sessionStorage.setItem(this.makeKey(key), JSON.stringify(data))
        } catch (e) {
            console.warn(e)
        }
    },
    getFromCache(key) {
        try {
            const item = sessionStorage.getItem(this.makeKey(key))
            if(item) {
                return JSON.parse(item)
            } else {
                return false
            }
        } catch (e) {
            console.warn(e)
            return false
        }
    }
};

Object.freeze(cache)

export default cache