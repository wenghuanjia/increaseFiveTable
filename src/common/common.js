/**
 * 存储Storage
 * @param {string} name 健名
 * @param {string,object} content 健值
 * @param { Boolean } session True为临时存储，False为永久存储
 */
export const setStore = (name, content, session) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    if (session) {
        window.sessionStorage.setItem(name, content);
    } else {
        window.localStorage.setItem(name, content);
    }
}

/**
 * 获取Storage
 * @param {string} name 健名
 */
export const getStore = (name, session) => {
    if (!name) return;
    if (session) {
        return window.sessionStorage.getItem(name);
    } else {
        return window.localStorage.getItem(name);
    }
}

/**
 * 删除Storage
 * @param {string} name 健名
 */
export const removeStore = (name, session) => {
    if (!name) return;
    if (session) {
        window.sessionStorage.removeItem(name);
    } else {
        window.localStorage.removeItem(name);
    }
}
