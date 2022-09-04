export const timeoutCallback = (callback: ()=> void | Promise<void>, timeout: number): number => {
    return setTimeout(callback, timeout);
}

export const intervalCallback = (callback: ()=> void | Promise<void>, interval: number): number => {
    return setInterval(callback, interval);
}