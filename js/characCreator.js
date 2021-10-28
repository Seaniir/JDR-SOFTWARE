var summedNumber = new Array();
var tabSelect = $(".selectCarac");
console.log(tabSelect);

for (let i = 0; i < tabSelect.length; i++) {
    tabSelect[i].addEventListener("click", function(){
        checkAndErase(tabSelect[i]);
    })
}

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function replace(arr) {
    arr = arr.slice(); //copy the array
    arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1)
    return arr;
}

function getRolled(object) {
    var tab = [getRandomInt(1, 6), getRandomInt(1, 6), getRandomInt(1, 6), getRandomInt(1, 6)];
    tab = replace(tab);
    var sum = 0;
    for (let i = 0; i < tab.length; i++) {
        sum += tab[i];
    }
    object.innerHTML = sum;
    summedNumber.push(sum);
    $(".selectCarac")
    .append('<option class="'+sum+'" value="'+sum+'">'+sum+'</option>');
    object.disabled = true;
}

function checkAndErase(object)
{

}