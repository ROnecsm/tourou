const mainContentsTitle = (param) => {

    let el = document.querySelector(param.el);
    let speed = param.speed;
    let string = param.string.split("");
    string.forEach((char, index) => {
        setTimeout(() => {
            el.textContent += char;
        }, speed * index);
    });
};
mainContentsTitle({
    el: "#mainContentsTitle", //要素
    string: 'We can change world by our words.',
    speed: 50 //速度
});
