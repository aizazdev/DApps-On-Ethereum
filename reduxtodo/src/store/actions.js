
export const increment = ()=> {
    return {type: "INCREMENT"};
}

export const decrement = ()=> {
    return {type: "DECREMENT"};
}

export const by_value = ()=> {
    return {type: "BY_VALUE", data: value}
}