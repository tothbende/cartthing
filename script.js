function calculate_price(cart) {
    let total_price = 0;
    const highest_price = Math.max(...cart.map(obj => obj.egysegar));
    const most_expensive_item = cart.filter(obj => obj.egysegar == highest_price).reduce((acc, obj) => obj.mennyiseg > acc.mennyiseg ? obj : acc)

    total_price += most_expensive_item.egysegar * most_expensive_item.mennyiseg * 0.9;
    cart.forEach(item => {total_price += item.egysegar * item.mennyiseg});
    total_price -= most_expensive_item.egysegar * most_expensive_item.mennyiseg;
    return total_price;
}


function additem(id) {
    const product = items.find(obj => obj.id == id);
    console.log(product);
}


let items = [];


getData(url, (data) => {
    console.log(data);
    items = data;
    data.forEach(obj => document.getElementById("items").innerHTML += `
        <li>
            <div class="itemphoto">
                <img src="${obj.thumbnail}" alt="${obj.title}" width="60" height="60">
            </div>
            <div class="itemname">
                <p>${obj.title}</p>
            </div>
            <div class="itemprice">
                <p>${obj.price}€</p>
            </div>
            <div class="itemadd">
                <button onclick="additem(${obj.id})">Add</button>
            </div>
        </li>
    `)
});


/*
let array_1 = [1, 2, 3, 4];
let array_2 = array_1; // Pointer copy
let array_3 = [...array_1]; // True copy

const object_1 = {
    property_1 : "hi",
    property_2 : "planet",
};
const object_2 = {
    ...object_1,
    property_3 : "!",
};

let string = "Hello world";
let character_array = [...string];

// Function arguments
const blin = (a, b, c, d) => a + b + c + d;
//console.log(blin(...array_1));
//console.log(Math.max(...array_1));

const bevasarlokosar = [
    {termek: "alma", egysegar: 35, mennyiseg: 8 },
    {termek: "tej", egysegar: 715, mennyiseg: 2},
    {termek:"vízforraló", egysegar: 15000, mennyiseg: 1},
    {termek:"elektomos fogkefe", egysegar: 15000, mennyiseg: 2}
]

const prices = bevasarlokosar.map(obj => obj.egysegar);
const highest_price = Math.max(...prices);
//console.log(highest_price);

const highest_price_2 = bevasarlokosar.reduce((acc, obj) => Math.max(acc, obj.egysegar), 0);
//console.log(highest_price_2);

const most_expensive_item = bevasarlokosar.filter(obj => obj.egysegar == highest_price).reduce((acc, obj) => obj.mennyiseg > acc.mennyiseg ? obj : acc)
//console.log(most_expensive_item);
*/