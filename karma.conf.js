// Feature('Liking Restaurants');
// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
browsers: ['Chrome'],

Before((I) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', (I) => {
  I.seeElement('#query');
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', (I) => {
  I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');
  // … kita akan mengisi uji coba berikutnya …
});