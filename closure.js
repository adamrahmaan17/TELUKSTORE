function tambahAwal( nilai ) {
    return function( pertama, kedua ) {
        return nilai + pertama + kedua;
    }
}

var tambahDua = tambahAwal(2);

tambahDua(3, 5); // 10