const beerprice = 15.678;
const breadprice = 123.965;
const meatprice = 90.2345;
const sum = breadprice + beerprice + meatprice;

console.log(Math.max(breadprice, beerprice, meatprice ));
console.log(Math.min(breadprice, beerprice, meatprice));
console.log(sum);
console.log(Math.floor(breadprice));
console.log(Math.floor(beerprice));
console.log(Math.floor(meatprice));
console.log(Math.floor(sum));
console.log(Math.round((sum)/100)*100);
console.log (!(Math.floor(sum)%2));
console.log(500-sum);
console.log(+(sum/3).toFixed(2));
console.log (Math.round(Math.random() * (99 - 1) + 1))
console.log(sum-(Math.round(Math.random() * (99 - 1) + 1)))
console.log(Math.round((sum/2)-(sum-(Math.round(Math.random() * (99 - 1) + 1)))))

document.writeln(
    `
        <i>
            <b>Максимальна ціна:</b> ${Math.max(breadprice, beerprice, meatprice )}<br>
            <b>Мінімальна ціна:</b> ${Math.min(breadprice, beerprice, meatprice)}<br>
            <b>Вартість всіх товарів:</b> ${sum}<br>
            <b>Вартість всіх товарів (спершу округленна):</b> ${Math.floor(sum)}<br>
            <b>Вартість всіх товарів (округленна до сотень):</b> ${Math.round((sum)/100)*100}<br>
            <b>Чи є сума парним числом:</b> ${!(Math.floor(sum)%2)}<br>
            <b>Сума решти, при оплаті 500грн:</b> ${500-sum}<br>
            <b>Середнє значення цін:</b> ${+(sum/3).toFixed(2)}</br>
            <b>Випадкова знижка:</b> ${Math.round(Math.random() * (99 - 1) + 1)}<br>
            <b>Сума до оплати, після знижки:</b> ${sum-(Math.round(Math.random() * (99 - 1) + 1))}<br>
            <b>Чистий прибуток, після знижки:</b> ${Math.round((sum/2)-(sum-(Math.round(Math.random() * (99 - 1) + 1))))}<br>
        </i>
    `)