//實踐debounce
export const debounce = (func, delay) => {
    let timer;

    return function() {
        const content = this;
        const args = arguments;

        clearTimeout(timer);
        timer = setTimeout(function() {
            func.apply(content, args);
        },delay);
    }
};


//實踐throttle
export const throttle = (func, threadTime) => {
    let timer;

    return function() {
        const content = this;
        const args = arguments;

        if(timer) {
            return;
        }

        timer = setTimeout(function() {
            clearTimeout(timer);
            timer = null;
            func.apply(content, args);
        }, threadTime);
    }
};