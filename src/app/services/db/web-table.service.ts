// tslint:disable:max-line-length

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Template, Tag, Format } from './../../interfaces';

export class WebTableService implements InMemoryDbService {
  createDb() {
    const templates: Template[] = [
      // cars
      { id: 11, imgSrc: 'assets/img/content/cars/sports/alen-jacob-589057-unsplash.jpg', tag: [11], format: 1 },
      { id: 12, imgSrc: 'assets/img/content/cars/sports/ant-miner-722665-unsplash.jpg', tag: [11, 12], format: 1 },
      { id: 13, imgSrc: 'assets/img/content/cars/sports/bobby-allen-1073696-unsplash.jpg', tag: [11, 12], format: 1 },
      { id: 14, imgSrc: 'assets/img/content/cars/sports/cory-rogers-519598-unsplash.jpg', tag: [11], format: 1 },
      { id: 15, imgSrc: 'assets/img/content/cars/sports/dara-esh-1090610-unsplash.jpg', tag: [11], format: 1 },
      { id: 16, imgSrc: 'assets/img/content/cars/sports/eduardo-flores-759299-unsplash.jpg', tag: [11, 12], format: 1 },
      { id: 17, imgSrc: 'assets/img/content/cars/sports/jace-abshire-1070396-unsplash.jpg', tag: [11], format: 1 },
      { id: 18, imgSrc: 'assets/img/content/cars/sports/koushik-chowdavarapu-574442-unsplash.jpg', tag: [11], format: 1 },
      { id: 19, imgSrc: 'assets/img/content/cars/sports/luis-perez-companc-314366-unsplash.jpg', tag: [11], format: 1 },
      { id: 20, imgSrc: 'assets/img/content/cars/sports/marc-kleen-669763-unsplash.jpg', tag: [11], format: 1 },
      { id: 21, imgSrc: 'assets/img/content/cars/sports/maxime-renard-610756-unsplash.jpg', tag: [11], format: 1 },
      { id: 22, imgSrc: 'assets/img/content/cars/sports/remy_loz-642393-unsplash.jpg', tag: [11], format: 1 },
      { id: 23, imgSrc: 'assets/img/content/cars/sports/sven-brandsma-386364-unsplash.jpg', tag: [11], format: 1 },
      { id: 24, imgSrc: 'assets/img/content/cars/4x4/jonathan-gallegos-725068-unsplash.jpg', tag: [13], format: 1 },
      { id: 25, imgSrc: 'assets/img/content/cars/4x4/nikolas-noonan-563399-unsplash.jpg', tag: [13], format: 1 },
      { id: 26, imgSrc: 'assets/img/content/cars/4x4/peter-pryharski-432378-unsplash.jpg', tag: [13], format: 1 },
      { id: 27, imgSrc: 'assets/img/content/cars/4x4/ty-feague-491286-unsplash.jpg', tag: [13], format: 1 },
      { id: 28, imgSrc: 'assets/img/content/cars/small/anton-chernyavskiy-553692-unsplash.jpg', tag: [14], format: 1 },
      { id: 29, imgSrc: 'assets/img/content/cars/small/avantgarde-concept-1081945-unsplash.jpg', tag: [14], format: 1 },
      { id: 30, imgSrc: 'assets/img/content/cars/small/liam-simpson-674172-unsplash.jpg', tag: [14], format: 1 },
      { id: 31, imgSrc: 'assets/img/content/cars/small/rohit-tandon-65836-unsplash.jpg', tag: [14], format: 1 },

      // women
      { id: 32, imgSrc: 'assets/img/content/women/brunette/flaunter-com-1056942-unsplash.jpg', tag: [15], format: 2 },
      { id: 33, imgSrc: 'assets/img/content/women/brunette/suhyeon-choi-104926-unsplash.jpg', tag: [15], format: 2 },
      { id: 34, imgSrc: 'assets/img/content/women/brunette/tiffany-combs-711921-unsplash.jpg', tag: [15], format: 2 },
      { id: 35, imgSrc: 'assets/img/content/women/blond/marius-held-639949-unsplash.jpg', tag: [16], format: 2 },
      { id: 36, imgSrc: 'assets/img/content/women/blond/tim-gouw-79563-unsplash.jpg', tag: [16], format: 2 },
      { id: 37, imgSrc: 'assets/img/content/women/blond/yanapi-senaud-676719-unsplash.jpg', tag: [16], format: 2 },
      { id: 38, imgSrc: 'assets/img/content/women/red-hair/matheus-ferrero-350443-unsplash.jpg', tag: [17], format: 2 },
      { id: 39, imgSrc: 'assets/img/content/women/red-hair/rawpixel-1090748-unsplash.jpg', tag: [17], format: 2 },
      { id: 40, imgSrc: 'assets/img/content/women/red-hair/sam-manns-379040-unsplash.jpg', tag: [17], format: 2 },

      // sport
      { id: 41, imgSrc: 'assets/img/content/sport/football/alex-462576-unsplash.jpg', tag: [18], format: 3 },
      { id: 42, imgSrc: 'assets/img/content/sport/football/ben-hershey-603997-unsplash.jpg', tag: [18], format: 3 },
      { id: 43, imgSrc: 'assets/img/content/sport/football/izuddin-helmi-adnan-545468-unsplash.jpg', tag: [18], format: 3 },
      { id: 44, imgSrc: 'assets/img/content/sport/football/sandro-schuh-80814-unsplash.jpg', tag: [18], format: 3 },

      { id: 45, imgSrc: 'assets/img/content/sport/volleyball/colton-duke-596702-unsplash.jpg', tag: [19], format: 3 },
      { id: 46, imgSrc: 'assets/img/content/sport/volleyball/jacob-repko-438591-unsplash.jpg', tag: [19], format: 3 },
      { id: 47, imgSrc: 'assets/img/content/sport/volleyball/michele-feola-166138-unsplash.jpg', tag: [19], format: 3 },

      { id: 48, imgSrc: 'assets/img/content/sport/golf/ben-hershey-603994-unsplash.jpg', tag: [20], format: 3 },
      { id: 49, imgSrc: 'assets/img/content/sport/golf/court-prather-792765-unsplash.jpg', tag: [20], format: 3 },
      { id: 50, imgSrc: 'assets/img/content/sport/golf/michele-de-paola-752434-unsplash.jpg', tag: [20], format: 3 },
      { id: 51, imgSrc: 'assets/img/content/sport/golf/sydney-rae-716314-unsplash.jpg', tag: [20], format: 3 },

      // mountain
      { id: 52, imgSrc: 'assets/img/content/mountains/winter/massimiliano-morosinotto-1276483-unsplash.jpg', tag: [21], format: 4 },
      { id: 53, imgSrc: 'assets/img/content/mountains/winter/nathan-anderson-92509-unsplash.jpg', tag: [21], format: 4 },
      { id: 54, imgSrc: 'assets/img/content/mountains/winter/thomas-henke-190697-unsplash.jpg', tag: [21], format: 4 },
      { id: 55, imgSrc: 'assets/img/content/mountains/winter/william-bossen-120680-unsplash.jpg', tag: [21], format: 4 },

      { id: 56, imgSrc: 'assets/img/content/mountains/summer/courtney-kenady-1215240-unsplash.jpg', tag: [22], format: 4 },
      { id: 57, imgSrc: 'assets/img/content/mountains/summer/mackenzie-wiebe-346818-unsplash.jpg', tag: [22], format: 4 },
      { id: 58, imgSrc: 'assets/img/content/mountains/summer/patrick-hendry-357978-unsplash.jpg', tag: [22], format: 4 },
    ];

    const tags: Tag[] = [
      // car
      { id: 11, name: 'Sports', url: 'sports', format: 1 },
      { id: 12, name: 'Exclusive', url: 'exclusive', format: 1 },
      { id: 13, name: '4x4', url: '4x4', format: 1 },
      { id: 14, name: 'Small', url: 'small', format: 1 },

      // women
      { id: 15, name: 'Brunette', url: 'brunette', format: 2 },
      { id: 16, name: 'Blond', url: 'blond', format: 2 },
      { id: 17, name: 'Red Hair', url: 'red-hair', format: 2 },

      // sport
      { id: 18, name: 'Football', url: 'football', format: 3 },
      { id: 19, name: 'Volleyball', url: 'volleyball', format: 3 },
      { id: 20, name: 'Golf', url: 'golf', format: 3 },

      // mountains
      { id: 21, name: 'Winter', url: 'winter', format: 4 },
      { id: 22, name: 'Summer', url: 'summer', format: 4 },
    ];

    const formats: Format[] = [
      { id: 1, name: 'Cars', url: 'cars', imgSrc: 'assets/img/content/cars/sid-ramirez-739683-unsplash.jpg', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum non diam et porta. Sed aliquam aliquam facilisis. Nam sit amet diam porttitor, suscipit augue ut, aliquam ante. Vestibulum felis est, rhoncus sit amet convallis nec, mattis vel diam. Aliquam maximus viverra purus, et hendrerit erat hendrerit at. Praesent vel vehicula urna, non sagittis mauris. Mauris vestibulum lectus ac ligula euismod, vel venenatis velit ullamcorper.' },
      { id: 2, name: 'Women', url: 'women', imgSrc: 'assets/img/content/women/suhyeon-choi-104926-unsplash.jpg', desc: 'Sed pellentesque tincidunt mi, cursus rhoncus elit rhoncus sit amet. Nunc vel sodales augue, vitae varius tortor. Nam feugiat luctus tellus. Maecenas quis dolor lacinia, elementum nisl sit amet, pretium ex. Aenean at mi ut mauris hendrerit consectetur. Vestibulum feugiat eros vel imperdiet venenatis. Suspendisse in ullamcorper libero, mollis rutrum augue.' },
      { id: 3, name: 'Sport', url: 'sport', imgSrc: 'assets/img/content/sport/alexander-redl-185764-unsplash.jpg', desc: 'Donec tincidunt dui quis est consequat, vel ornare velit convallis. Morbi nulla tellus, rutrum vel lacinia sed, posuere eu justo. Proin enim arcu, sollicitudin et sapien non, gravida tempor metus. Fusce bibendum lectus at urna blandit, eu pellentesque dui facilisis. Nam maximus, massa id volutpat convallis, magna mauris efficitur sapien, eu cursus velit dui eu dui. Aliquam erat volutpat. Nullam accumsan mollis dolor nec interdum. Donec vel pellentesque odio.' },
      { id: 4, name: 'Mountains', url: 'mountains', imgSrc: 'assets/img/content/mountains/simon-fitall-533515-unsplash.jpg', desc: 'Praesent aliquam pellentesque ante, sit amet blandit elit euismod id. Aenean eleifend dui ut lacus sollicitudin, sit amet rhoncus urna porta. Duis non nunc sed dolor consectetur auctor. Vivamus et arcu fringilla, tempor nulla a, semper quam. Integer elit neque, mollis at euismod at, posuere id lectus. Donec pulvinar ipsum et odio dapibus, rutrum fermentum dolor vehicula. Nullam vulputate lorem id massa eleifend iaculis quis in augue. Ut tempus diam mi, quis pharetra ex viverra id. Praesent cursus dolor nec elit finibus maximus. Vivamus lectus mauris, interdum et neque eu, gravida euismod ante. Praesent pulvinar quis nunc id fringilla.' }
    ];

    return { templates, tags, formats };
  }
}
