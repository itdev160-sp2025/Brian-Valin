//Welcome message
var user = 'Brian';
var salutation = 'Welcome, ';
var greeting = salutation + user + "! Let's Go!";
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//Get Table
let table = document.getElementById('Aetherdrift Product');
let rows = table.rows;
let firstRowCells = rows[1].cells;
for(let i = 0; i < rows.length; i++)
{
    let cells = rows[i].cells;
    for(let j = 0; j < cells.length; j++)
    {
        console.log(cells[j].innerText);
    }
}


//Play Booster
var playPrice = 125,
    studentDiscount = 0.10,
    studentPlayPrice = playPrice - (playPrice * studentDiscount),
    playPriceEl = document.getElementById('PBB'),
    studentPlayPriceEl = document.getElementById('PBB-s');

table.rows[1].cells[1].innerText = "$ " + playPrice.toFixed(2)
table.rows[1].cells[2].innerText = "$ " + studentPlayPrice.toFixed(2)

//Collector Booster
var collectorPrice = 255,
    studentDiscount = 0.10,
    studentCollectorPrice = collectorPrice - (collectorPrice * studentDiscount),
    collectorPriceEl = document.getElementById('CBB'),
    studentCollectorPriceEl = document.getElementById('CBB-s');

table.rows[2].cells[1].innerText = "$ " + collectorPrice.toFixed(2)
table.rows[2].cells[2].innerText = "$ " + studentCollectorPrice.toFixed(2)

//Bundle
var bundlePrice = 45,
    studentDiscount = 0.10,
    studentBundlePrice = bundlePrice - (bundlePrice * studentDiscount),
    bundlePriceEl = document.getElementById('bundle'),
    studentBundlePriceEl = document.getElementById('bundle-s');

table.rows[3].cells[1].innerText = "$ " + bundlePrice.toFixed(2)
table.rows[3].cells[2].innerText = "$ " + studentBundlePrice.toFixed(2)