// çanta sınırı
const capacity = 36;

// havuç tipleri
const carrotTypes = [
    { kg: 5, price: 100 },
    { kg: 7, price: 150 },
    { kg: 3, price: 70 }
]

let getMaxValue = (carrotTypes, capacity) => {

    let maxValue = 0;
    let result = 0;

    carrotTypes.map(carrot => {
        maxValue = carrot.price / carrot.kg;

        if (maxValue > result) {
            result = maxValue;
        }
    })

    return capacity * maxValue;
}

console.log(getMaxValue(carrotTypes, capacity));
