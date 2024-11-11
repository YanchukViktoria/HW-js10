/*
TODO : 1.1  btn.addEVentlistener(“click”, () => { alert(“Hello World!”); });
TODO : 1.2 вирізати код і елемент з минулої домашки
TODO : 1.3 повісити евентлісенер на документ  і при кліці будь куди додавати одиницю до каунтера
TODO : 1.4 function name(arr, callback) => {
TODO : 1.5 
*/

/* 1.1 */
let btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", () => {
    alert(`Hello World!`); 
    
});

/* 1.3 */

let desc = document.querySelector(".desc");

document.addEventListener("click", () => {
    desc.textContent++;
})

/* 1.4 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = [];

function applCallback(ar) {
    function modify(el) {
        newArr.push(el * el);
    }
    ar.forEach(el => {
        modify(el);
    });
}

applCallback(arr);
console.log(newArr);

/* 1.5 */

const discPrice = 0;

function countDisc(price, disc, call) {
    console.log(Math.round(price*(1 - disc / 100)));
};

countDisc(568, 5,discPrice);