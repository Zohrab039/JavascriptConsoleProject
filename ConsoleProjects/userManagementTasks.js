let citiesOfAzerbaijan=["Bakı","Sumqayıt","Gəncə","Şəki","Şamaxı","Xaçmaz","Qəbələ","Qusar",
"Ağdam","Ağdaş","Ağcabədi","Ağstafa","Astara","Babək","Balakən",
"Beyləqan","Biləsuvar","Cəbrayıl","Cəlilabad","Culfa","Daşkəsən",
"Füzuli","Göyçay","Göygöl","Hacıqabul","İmişli","İsmayıllı","Kəlbəcər",
"Kürdəmir","Laçın","Lənkəran","Lerik","Masallı","Neftçala","Oğuz",
"Ordubad","Qax","Qazax","Qobustan","Quba","Qubadlı","Qusar",
"Saatlı","Sabirabad","Salyan","Şabran","Şahbuz","Şəki","Şəmkir",
"Şirvan","Siyəzən","Tərtər","Tovuz","Ucar","Xaçmaz","Xankəndi",
"Xızı","Xocalı","Xocavənd","Yardımlı","Yevlax","Zaqatala","Zəngilan","Zərdab"];

let index=1

function deleteCity(index){
    citiesOfAzerbaijan.splice(index,1);
    console.log(citiesOfAzerbaijan);
}

function showDeletedCity(index){
    let deletedCity = citiesOfAzerbaijan.splice(index,1);
    console.log(deletedCity);
}

showDeletedCity(1);

deleteCity(1);