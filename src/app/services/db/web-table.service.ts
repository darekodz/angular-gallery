// tslint:disable:max-line-length

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Template, Tag, Format } from './../../interfaces';

export class WebTableService implements InMemoryDbService {
  createDb() {
    const templates: Template[] = [
      // web templates
      { id: 11, imgSrc: 'assets/_include/img/content/cars/sports/alen-jacob-589057-unsplash.jpg', tag: [11], format: 1 },
      { id: 12, imgSrc: 'assets/_include/img/content/cars/sports/ant-miner-722665-unsplash.jpg', tag: [11, 12], format: 1 },
      { id: 13, imgSrc: 'assets/_include/img/content/cars/sports/bobby-allen-1073696-unsplash.jpg', tag: [11, 12], format: 1 },
      { id: 14, imgSrc: 'assets/_include/img/content/cars/sports/cory-rogers-519598-unsplash.jpg', tag: [11], format: 1 },
      { id: 15, imgSrc: 'assets/_include/img/content/cars/sports/dara-esh-1090610-unsplash.jpg', tag: [11], format: 1 },
      { id: 16, imgSrc: 'assets/_include/img/content/cars/sports/eduardo-flores-759299-unsplash.jpg', tag: [11, 12], format: 1 },
      { id: 17, imgSrc: 'assets/_include/img/content/cars/sports/jace-abshire-1070396-unsplash.jpg', tag: [11], format: 1 },
      { id: 18, imgSrc: 'assets/_include/img/content/cars/sports/koushik-chowdavarapu-574442-unsplash.jpg', tag: [11], format: 1 },
      { id: 19, imgSrc: 'assets/_include/img/content/cars/sports/luis-perez-companc-314366-unsplash.jpg', tag: [11], format: 1 },
      { id: 20, imgSrc: 'assets/_include/img/content/cars/sports/marc-kleen-669763-unsplash.jpg', tag: [11], format: 1 },
      { id: 21, imgSrc: 'assets/_include/img/content/cars/sports/maxime-renard-610756-unsplash.jpg', tag: [11], format: 1 },
      { id: 22, imgSrc: 'assets/_include/img/content/cars/sports/remy_loz-642393-unsplash.jpg', tag: [11], format: 1 },
      { id: 23, imgSrc: 'assets/_include/img/content/cars/sports/sven-brandsma-386364-unsplash.jpg', tag: [11], format: 1 },
      { id: 24, imgSrc: 'assets/_include/img/work/thumbs/peelback.png', tag: [17], format: 1 },

      // mobile web
      { id: 25, imgSrc: 'assets/_include/img/work/thumbs/in-image.png', tag: [18], format: 2 },
      { id: 26, imgSrc: 'assets/_include/img/work/thumbs/expand_two_creatives_mobileweb.png', tag: [18, 21], format: 2 },
      { id: 27, imgSrc: 'assets/_include/img/work/thumbs/mobile_parallax_gallery.png', tag: [19, 20], format: 2 },
      { id: 28, imgSrc: 'assets/_include/img/work/thumbs/native_ad.png', tag: [18], format: 2 },
      { id: 29, imgSrc: 'assets/_include/img/work/thumbs/background_reveal.png', tag: [18], format: 2 },
      { id: 30, imgSrc: 'assets/_include/img/work/thumbs/parallax_rwd.png', tag: [18], format: 2 },
      { id: 31, imgSrc: 'assets/_include/img/work/thumbs/overslide_rwd.png', tag: [18, 25], format: 2 },
      { id: 32, imgSrc: 'assets/_include/img/work/thumbs/Adhesion_banner_Icon_New_230x169.png', tag: [22, 18], format: 2 },
      { id: 33, imgSrc: 'assets/_include/img/work/thumbs/Slideshow_230x169_New.png', tag: [18, 23], format: 2 },
      { id: 34, imgSrc: 'assets/_include/img/work/thumbs/interstitial_rwd.png', tag: [25, 18], format: 2 },
      { id: 35, imgSrc: 'assets/_include/img/work/thumbs/interstitial.png', tag: [25, 18], format: 2 },
      { id: 36, imgSrc: 'assets/_include/img/work/thumbs/spincube_mobileweb.png', tag: [26, 18], format: 2 },
      { id: 37, imgSrc: 'assets/_include/img/work/thumbs/flip_banner_mobileweb.png', tag: [21, 18], format: 2 },
      { id: 38, imgSrc: 'assets/_include/img/work/thumbs/expand_banner_mobileweb.png', tag: [21, 18], format: 2 },
      { id: 39, imgSrc: 'assets/_include/img/work/thumbs/reveal_banner_mobileweb.png', tag: [21, 18], format: 2 },
      { id: 40, imgSrc: 'assets/_include/img/work/thumbs/floor_ad_for_mobile.png', tag: [18, 24], format: 2 },
      { id: 41, imgSrc: 'assets/_include/img/work/thumbs/floor_ad_for_mobile.png', tag: [18, 24], format: 2 },
      { id: 42, imgSrc: 'assets/_include/img/work/thumbs/banner_slideshow_mobileweb.png', tag: [23, 18], format: 2 },
      { id: 43, imgSrc: 'assets/_include/img/work/thumbs/banner_html_mobileweb.png', tag: [18], format: 2 },
      { id: 44, imgSrc: 'assets/_include/img/work/thumbs/native_ad_format.png', tag: [19], format: 2 },
      { id: 45, imgSrc: 'assets/_include/img/work/thumbs/resize_banner_mobileapp.png', tag: [21, 19], format: 2 },
      { id: 46, imgSrc: 'assets/_include/img/work/thumbs/transparent_cover_mobileapp.png', tag: [26, 19], format: 2 },
      { id: 47, imgSrc: 'assets/_include/img/work/thumbs/swipe_mobileapp.png', tag: [26, 19], format: 2 },
      { id: 48, imgSrc: 'assets/_include/img/work/thumbs/html5_interstitial_mobileapp.png', tag: [25, 19], format: 2 },

      // video
      { id: 49, imgSrc: 'assets/_include/img/work/thumbs/video_parallax_format_mobile_230x169_gallery.png', tag: [29], format: 3 },
      { id: 50, imgSrc: 'assets/_include/img/work/thumbs/mobile_video_interstitital.png', tag: [29], format: 3 },
      { id: 51, imgSrc: 'assets/_include/img/work/thumbs/mobile_intervideo2_230x169.png', tag: [29], format: 3 },
      { id: 52, imgSrc: 'assets/_include/img/work/thumbs/mobile_intervideo1_230x169.png', tag: [29], format: 3 },
      { id: 53, imgSrc: 'assets/_include/img/work/thumbs/videoread-web.png', tag: [29], format: 3 },
      { id: 54, imgSrc: 'assets/_include/img/work/thumbs/video_floorad.png', tag: [28], format: 3 },
      { id: 55, imgSrc: 'assets/_include/img/work/thumbs/video_floorad.png', tag: [28], format: 3 },
      { id: 56, imgSrc: 'assets/_include/img/work/thumbs/icon_gallery_smart_video-background.png', tag: [28], format: 3 },
      { id: 57, imgSrc: 'assets/_include/img/work/thumbs/icon_gallery_smart_video-background.png', tag: [28], format: 3 },
      { id: 58, imgSrc: 'assets/_include/img/work/thumbs/smart-video-fold.png', tag: [28], format: 3 },
      { id: 59, imgSrc: 'assets/_include/img/work/thumbs/smart-video-fold.png', tag: [28], format: 3 },
      { id: 60, imgSrc: 'assets/_include/img/work/thumbs/icon_smart_video-interstitial.png', tag: [28], format: 3 },
      { id: 61, imgSrc: 'assets/_include/img/work/thumbs/icon_smart_video-interstitial.png', tag: [28], format: 3 },
      { id: 62, imgSrc: 'assets/_include/img/work/thumbs/smart-video-screening.png', tag: [28], format: 3 },
      { id: 63, imgSrc: 'assets/_include/img/work/thumbs/smart-video-screening.png', tag: [28], format: 3 },
      { id: 64, imgSrc: 'assets/_include/img/work/thumbs/Smart-Video-inline.png', tag: [28], format: 3 },
      { id: 65, imgSrc: 'assets/_include/img/work/thumbs/Smart-Video-inline.png', tag: [28], format: 3 },
      { id: 66, imgSrc: 'assets/_include/img/work/thumbs/Smart-video-Banner.png', tag: [28], format: 3 },
      { id: 67, imgSrc: 'assets/_include/img/work/thumbs/Smart-video-Banner.png', tag: [28], format: 3 },
      { id: 68, imgSrc: 'assets/_include/img/work/thumbs/smart-video-flow.png', tag: [28], format: 3 },
      { id: 69, imgSrc: 'assets/_include/img/work/thumbs/smart-video-read.png', tag: [28], format: 3 },
      { id: 70, imgSrc: 'assets/_include/img/work/thumbs/video_vast_linear.png', tag: [27], format: 3 },
      { id: 71, imgSrc: 'assets/_include/img/work/thumbs/overlay_video.png', tag: [27], format: 3 },
      { id: 72, imgSrc: 'assets/_include/img/work/thumbs/video_vast_linear.png', tag: [27], format: 3 },
      { id: 73, imgSrc: 'assets/_include/img/work/thumbs/travelling_video_mobileapp.png', tag: [29], format: 3 },
      { id: 74, imgSrc: 'assets/_include/img/work/thumbs/bouncing_video_mobileapp.png', tag: [29], format: 3 },
      { id: 75, imgSrc: 'assets/_include/img/work/thumbs/vignette_video_mobileweb.png', tag: [29], format: 3 },
      { id: 76, imgSrc: 'assets/_include/img/work/thumbs/vignette_video_mobileweb.png', tag: [29], format: 3 },
      { id: 77, imgSrc: 'assets/_include/img/work/thumbs/vignette_video_mobileweb.png', tag: [29], format: 3 },
      { id: 78, imgSrc: 'assets/_include/img/work/thumbs/vignette_video_mobileweb.png', tag: [29], format: 3 },

      // rtb
      { id: 79, imgSrc: 'assets/_include/img/work/thumbs/smart-video-flow.png', tag: [33, 30], format: 4 },
      { id: 80, imgSrc: 'assets/_include/img/work/thumbs/interstitial_rwd.png', tag: [31], format: 4 },
      { id: 81, imgSrc: 'assets/_include/img/work/thumbs/interstitial_rwd.png', tag: [30], format: 4 },
      { id: 82, imgSrc: 'assets/_include/img/work/thumbs/icon_smart_video-interstitial.png', tag: [30, 33], format: 4 },
      { id: 83, imgSrc: 'assets/_include/img/work/thumbs/mobile_intervideo1_230x169.png', tag: [31, 33], format: 4 },
      { id: 84, imgSrc: 'assets/_include/img/work/thumbs/video_parallax_format_mobile_230x169_gallery.png', tag: [31, 33], format: 4 },
      { id: 85, imgSrc: 'assets/_include/img/work/thumbs/mobile_parallax_gallery.png', tag: [32, 33], format: 4 },
      { id: 86, imgSrc: 'assets/_include/img/work/thumbs/mobile_video_interstitital.png', tag: [32, 33], format: 4 },
      { id: 87, imgSrc: 'assets/_include/img/work/thumbs/video-read-app.png', tag: [32, 33], format: 4 },
      { id: 88, imgSrc: 'assets/_include/img/work/thumbs/in-image.png', tag: [30, 31], format: 4 },
      { id: 89, imgSrc: 'assets/_include/img/work/thumbs/native_ad_format.png', tag: [32], format: 4 },
      { id: 90, imgSrc: 'assets/_include/img/work/thumbs/mobile_intervideo2_230x169.png', tag: [33, 31], format: 4 },
      { id: 91, imgSrc: 'assets/_include/img/work/thumbs/smart-video-read.png', tag: [33, 30], format: 4 },
      { id: 92, imgSrc: 'assets/_include/img/work/thumbs/Smart-Video-inline.png', tag: [30, 33], format: 4 },
      { id: 93, imgSrc: 'assets/_include/img/work/thumbs/Smart-Video-inline.png', tag: [30, 33], format: 4 },
      { id: 94, imgSrc: 'assets/_include/img/work/thumbs/videoread-web.png', tag: [33, 31], format: 4 },
      { id: 95, imgSrc: 'assets/_include/img/work/thumbs/rtb-native-ad.png', tag: [30, 31], format: 4 },
      { id: 96, imgSrc: 'assets/_include/img/work/thumbs/RTB_Skin_230x169.png', tag: [30], format: 4 },
      { id: 97, imgSrc: 'assets/_include/img/work/thumbs/RTB_Floor_Ad_230x169.png', tag: [30], format: 4 },
      { id: 98, imgSrc: 'assets/_include/img/work/thumbs/RTB_IAB_Billboard_230x169.png', tag: [30], format: 4 },
      { id: 99, imgSrc: 'assets/_include/img/work/thumbs/RTB_Banderole Ad_Autoclose_230x169.png', tag: [30], format: 4 },
      { id: 100, imgSrc: 'assets/_include/img/work/thumbs/RTB_Overslide_230x169.png', tag: [31, 30], format: 4 },
      { id: 101, imgSrc: 'assets/_include/img/work/thumbs/RTB_Parallax_230x169.png', tag: [30, 31], format: 4 },
      { id: 102, imgSrc: 'assets/_include/img/work/thumbs/RTB_Mobile_web_FloorAd_230x169.png', tag: [31], format: 4 },
      { id: 103, imgSrc: 'assets/_include/img/work/thumbs/RTB_Mobile_Web_Intertitial_230x169.png', tag: [31], format: 4 },
      { id: 104, imgSrc: 'assets/_include/img/work/thumbs/RTB_Mobile_App_Intertitial_230x169.png', tag: [32], format: 4 },
      { id: 105, imgSrc: 'assets/_include/img/work/thumbs/RTB_In-stream_Video_230x160.png', tag: [33], format: 4 }
    ];

    const tags: Tag[] = [
      // web tags
      { id: 11, name: 'Sports', url: 'sports', format: 1 },
      { id: 12, name: 'Exclusive', url: 'exclusive', format: 1 },
      { id: 13, name: '4x4', url: '4x4', format: 1 },
      { id: 14, name: 'Small', url: 'small', format: 1 },

      // mobile web
      { id: 18, name: 'Mobile Web', url: 'mobile-web', format: 2 },
      { id: 19, name: 'Mobile App', url: 'mobile-app', format: 2 },
      { id: 20, name: 'Mobile Banner', url: 'mobile-banner', format: 2 },
      { id: 21, name: 'Expand', url: 'expand-mobile', format: 2 },
      { id: 22, name: 'Rising Star', url: 'mobile-rising-star', format: 2 },
      { id: 23, name: 'Slideshow', url: 'slideshow', format: 2 },
      { id: 24, name: 'HTML5', url: 'html5', format: 2 },
      { id: 25, name: 'Interstitial', url: 'interstitial-mobile', format: 2 },
      { id: 26, name: 'More Interactive Formats', url: 'more-mobile', format: 2 },

      // video
      { id: 27, name: 'In-stream Web - VAST3 offer', url: 'instream-web', format: 3 },
      { id: 28, name: 'Out-stream Web - VAST3 offer', url: 'outstream-web', format: 3 },
      { id: 29, name: 'Out-stream Mobile', url: 'outstream-mobile', format: 3 },

      // rtb
      { id: 30, name: 'Web', url: 'web', format: 4 },
      { id: 31, name: 'Mobile Web', url: 'mobile-web', format: 4 },
      { id: 32, name: 'Mobile App', url: 'mobile-app', format: 4 },
      { id: 33, name: 'Video', url: 'video', format: 4 }
    ];

    const formats: Format[] = [
      { id: 1, name: 'Cars', url: 'cars', imgSrc: 'assets/_include/img/content/cars/sid-ramirez-739683-unsplash.jpg', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum non diam et porta. Sed aliquam aliquam facilisis. Nam sit amet diam porttitor, suscipit augue ut, aliquam ante. Vestibulum felis est, rhoncus sit amet convallis nec, mattis vel diam. Aliquam maximus viverra purus, et hendrerit erat hendrerit at. Praesent vel vehicula urna, non sagittis mauris. Mauris vestibulum lectus ac ligula euismod, vel venenatis velit ullamcorper.' },
      { id: 2, name: 'Women', url: 'women', imgSrc: 'assets/_include/img/content/women/suhyeon-choi-104926-unsplash.jpg', desc: 'Sed pellentesque tincidunt mi, cursus rhoncus elit rhoncus sit amet. Nunc vel sodales augue, vitae varius tortor. Nam feugiat luctus tellus. Maecenas quis dolor lacinia, elementum nisl sit amet, pretium ex. Aenean at mi ut mauris hendrerit consectetur. Vestibulum feugiat eros vel imperdiet venenatis. Suspendisse in ullamcorper libero, mollis rutrum augue.' },
      { id: 3, name: 'Sport', url: 'sport', imgSrc: 'assets/_include/img/content/sport/alexander-redl-185764-unsplash.jpg', desc: 'Donec tincidunt dui quis est consequat, vel ornare velit convallis. Morbi nulla tellus, rutrum vel lacinia sed, posuere eu justo. Proin enim arcu, sollicitudin et sapien non, gravida tempor metus. Fusce bibendum lectus at urna blandit, eu pellentesque dui facilisis. Nam maximus, massa id volutpat convallis, magna mauris efficitur sapien, eu cursus velit dui eu dui. Aliquam erat volutpat. Nullam accumsan mollis dolor nec interdum. Donec vel pellentesque odio.' },
      { id: 4, name: 'Mountains', url: 'mountains', imgSrc: 'assets/_include/img/content/mountains/simon-fitall-533515-unsplash.jpg', desc: 'Praesent aliquam pellentesque ante, sit amet blandit elit euismod id. Aenean eleifend dui ut lacus sollicitudin, sit amet rhoncus urna porta. Duis non nunc sed dolor consectetur auctor. Vivamus et arcu fringilla, tempor nulla a, semper quam. Integer elit neque, mollis at euismod at, posuere id lectus. Donec pulvinar ipsum et odio dapibus, rutrum fermentum dolor vehicula. Nullam vulputate lorem id massa eleifend iaculis quis in augue. Ut tempus diam mi, quis pharetra ex viverra id. Praesent cursus dolor nec elit finibus maximus. Vivamus lectus mauris, interdum et neque eu, gravida euismod ante. Praesent pulvinar quis nunc id fringilla.' }
    ];

    return { templates, tags, formats };
  }
}
