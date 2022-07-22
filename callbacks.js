const enterValue = () => {
    let value = prompt("Enter a value");
    return parseInt(value);
};

const increaseBy10 = (enterValue) => {
    let newValue = enterValue() + 10;
    alert(newValue);
};

increaseBy10(enterValue)