const receive_1 = prompt("Ваш бюджет на месяц?");
const receive_2 = prompt("Название вашего магазина?");

let mainList = {
    budget: receive_1,
    shopGoods: [prompt("Какой тип товаров будем продавать?"), prompt("Какой тип товаров будем продавать?"), prompt("Какой тип товаров будем продавать?")],
    employers:{},
    open: function(){

    }
};
alert (mainList.budget / 30);
