// tslint:disable:max-line-length

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Template, Tag, Format } from './../../interfaces';

export class WebTableService implements InMemoryDbService {
  createDb() {
    const templates: Template[] = [
      // web templates
      { id: 11, name: 'In-Image', href: 'http://gallery.smartadserver.com/in-image', imgSrc: 'assets/_include/img/work/thumbs/in-image.png', tag: [], format: 1 },
      { id: 12, name: 'In-Feed Native Ad', href: 'http://gallery.smartadserver.com/native-ad', imgSrc: 'assets/_include/img/work/thumbs/native_ad.png', tag: [16], format: 1 },
      { id: 13, name: 'Background reveal', href: 'http://gallery.smartadserver.com/background-reveal-web', imgSrc: 'assets/_include/img/work/thumbs/background_reveal.png', tag: [12], format: 1 },
      { id: 14, name: 'Parallax', href: 'http://gallery.smartadserver.com/parallax', imgSrc: 'assets/_include/img/work/thumbs/parallax_rwd.png', tag: [12], format: 1 },
      { id: 15, name: 'Overslide', href: 'http://gallery.smartadserver.com/overslide', imgSrc: 'assets/_include/img/work/thumbs/overslide_rwd.png', tag: [14], format: 1 },
      { id: 16, name: 'Interstitial', href: 'http://gallery.smartadserver.com/interstitial-web', imgSrc: 'assets/_include/img/work/thumbs/interstitial_rwd.png', tag: [14], format: 1 },
      { id: 17, name: 'Billboard', href: 'http://gallery.smartadserver.com/billboard-iab-web-ad-format', imgSrc: 'assets/_include/img/work/thumbs/billboard_risingstar_web.png', tag: [13], format: 1 },
      { id: 18, name: 'Slider', href: 'http://gallery.smartadserver.com/slider-iab-web-ad-format', imgSrc: 'assets/_include/img/work/thumbs/slider_risingstar_web.png', tag: [11], format: 1 },
      { id: 19, name: 'Sidekick', href: 'http://gallery.smartadserver.com/sidekick-iab-web-ad-format', imgSrc: 'assets/_include/img/work/thumbs/sidekick_risingstar_web.png', tag: [11], format: 1 },
      { id: 20, name: 'Filmstrip', href: 'http://gallery.smartadserver.com/filmstrip-iab-web-ad-format', imgSrc: 'assets/_include/img/work/thumbs/filmstrip_risingstar_web.png', tag: [11], format: 1 },
      { id: 21, name: 'Portrait', href: 'http://gallery.smartadserver.com/portrait-iab-web-ad-format', imgSrc: 'assets/_include/img/work/thumbs/portrait_risingstar_web.png', tag: [11], format: 1 },
      { id: 22, name: 'Banderole Ad + Auto Close', href: 'http://gallery.smartadserver.com/banderole-auto-close', imgSrc: 'assets/_include/img/work/thumbs/banderole_auto_close.png', tag: [15], format: 1 },
      { id: 23, name: 'Sponsored link', href: 'http://gallery.smartadserver.com/sponsored-link-web-ad-format', imgSrc: 'assets/_include/img/work/thumbs/sponsor_link.png', tag: [16], format: 1 },
      { id: 24, name: 'Peelback ad', href: 'http://gallery.smartadserver.com/peelback-web-ad-format', imgSrc: 'assets/_include/img/work/thumbs/peelback.png', tag: [17], format: 1 },

      // mobile web
      { id: 25, name: 'In-Image', href: 'http://gallery.smartadserver.com/mobile-in-image', imgSrc: 'assets/_include/img/work/thumbs/in-image.png', tag: [18], format: 2 },
      { id: 26, name: 'Expand (two creatives) for Mobile', href: 'http://gallery.smartadserver.com/expand-creative2-mobile-ad-format', imgSrc: 'assets/_include/img/work/thumbs/expand_two_creatives_mobileweb.png', tag: [18, 21], format: 2 },
      { id: 27, name: 'SDK Parallax Banner', href: 'http://gallery.smartadserver.com/parallax-banner', imgSrc: 'assets/_include/img/work/thumbs/mobile_parallax_gallery.png', tag: [19, 20], format: 2 },
      { id: 28, name: 'In-Feed Native Ad', href: 'http://gallery.smartadserver.com/mobile-native-ad', imgSrc: 'assets/_include/img/work/thumbs/native_ad.png', tag: [18], format: 2 },
      { id: 29, name: 'Background reveal', href: 'http://gallery.smartadserver.com/background-reveal-mobile', imgSrc: 'assets/_include/img/work/thumbs/background_reveal.png', tag: [18], format: 2 },
      { id: 30, name: 'Parallax', href: 'http://gallery.smartadserver.com/mobile-parallax', imgSrc: 'assets/_include/img/work/thumbs/parallax_rwd.png', tag: [18], format: 2 },
      { id: 31, name: 'Overslide', href: 'http://gallery.smartadserver.com/mobile-overslide', imgSrc: 'assets/_include/img/work/thumbs/overslide_rwd.png', tag: [18, 25], format: 2 },
      { id: 32, name: 'IAB Mobile Adhesion Banner', href: 'http://gallery.smartadserver.com/iab-mobile-adhesion-banner', imgSrc: 'assets/_include/img/work/thumbs/Adhesion_banner_Icon_New_230x169.png', tag: [22, 18], format: 2 },
      { id: 33, name: 'Mobile Slideshow', href: 'http://gallery.smartadserver.com/mobile-slideshow', imgSrc: 'assets/_include/img/work/thumbs/Slideshow_230x169_New.png', tag: [18, 23], format: 2 },
      { id: 34, name: 'Interstitial', href: 'http://gallery.smartadserver.com/interstitial-mobile', imgSrc: 'assets/_include/img/work/thumbs/interstitial_rwd.png', tag: [25, 18], format: 2 },
      { id: 35, name: 'Interstitial (portait / landscape)', href: 'http://gallery.smartadserver.com/interstitial-mobile-two-creatives', imgSrc: 'assets/_include/img/work/thumbs/interstitial.png', tag: [25, 18], format: 2 },
      { id: 36, name: 'Spin cube', href: 'http://gallery.smartadserver.com/spincube-mobile-ad-format', imgSrc: 'assets/_include/img/work/thumbs/spincube_mobileweb.png', tag: [26, 18], format: 2 },
      { id: 37, name: 'Flip Banner', href: 'http://gallery.smartadserver.com/flip-banner-mobile-ad-format', imgSrc: 'assets/_include/img/work/thumbs/flip_banner_mobileweb.png', tag: [21, 18], format: 2 },
      { id: 38, name: 'Expand banner', href: 'http://gallery.smartadserver.com/expand-banner-mobile-ad-format', imgSrc: 'assets/_include/img/work/thumbs/expand_banner_mobileweb.png', tag: [21, 18], format: 2 },
      { id: 39, name: 'Reveal', href: 'http://gallery.smartadserver.com/reveal-mobile-ad-format', imgSrc: 'assets/_include/img/work/thumbs/reveal_banner_mobileweb.png', tag: [21, 18], format: 2 },
      { id: 40, name: 'Floor ad for Mobile', href: 'http://gallery.smartadserver.com/floor-ad-for-mobile-one-creative', imgSrc: 'assets/_include/img/work/thumbs/floor_ad_for_mobile.png', tag: [18, 24], format: 2 },
      { id: 41, name: 'Floor ad (portait / landscape)', href: 'http://gallery.smartadserver.com/floor-ad-for-mobile', imgSrc: 'assets/_include/img/work/thumbs/floor_ad_for_mobile.png', tag: [18, 24], format: 2 },
      { id: 42, name: 'Banner + slideshow layer', href: 'http://gallery.smartadserver.com/banner-slideshow-mobile-ad-format', imgSrc: 'assets/_include/img/work/thumbs/banner_slideshow_mobileweb.png', tag: [23, 18], format: 2 },
      { id: 43, name: 'Banner + HTML5 layer', href: 'http://gallery.smartadserver.com/banner-html5-layer-mobile-ad-format', imgSrc: 'assets/_include/img/work/thumbs/banner_html_mobileweb.png', tag: [18], format: 2 },
      { id: 44, name: 'In-Feed Native Ad', href: 'http://gallery.smartadserver.com/native-ad-format', imgSrc: 'assets/_include/img/work/thumbs/native_ad_format.png', tag: [19], format: 2 },
      { id: 45, name: 'MRAID Resize Banner', href: 'http://gallery.smartadserver.com/mraid-resize-banner-mobile-ad-format', imgSrc: 'assets/_include/img/work/thumbs/resize_banner_mobileapp.png', tag: [21, 19], format: 2 },
      { id: 46, name: 'Transparent Cover', href: 'http://gallery.smartadserver.com/transparent-cover-mobile-ad-format', imgSrc: 'assets/_include/img/work/thumbs/transparent_cover_mobileapp.png', tag: [26, 19], format: 2 },
      { id: 47, name: 'Swipe', href: 'http://gallery.smartadserver.com/swipe-mobile-ad-format', imgSrc: 'assets/_include/img/work/thumbs/swipe_mobileapp.png', tag: [26, 19], format: 2 },
      { id: 48, name: 'HTML5 Interstitial', href: 'http://gallery.smartadserver.com/html5-interstitial-mobile-ad-format', imgSrc: 'assets/_include/img/work/thumbs/html5_interstitial_mobileapp.png', tag: [25, 19], format: 2 },

      // video
      { id: 49, name: 'Smart Video-Parallax for Mobile', href: 'http://gallery.smartadserver.com/smart-mobile-video-parallax-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/video_parallax_format_mobile_230x169_gallery.png', tag: [29], format: 3 },
      { id: 50, name: 'Smart Video-Interstitial SDK', href: 'http://gallery.smartadserver.com/video-interstitial-format', imgSrc: 'assets/_include/img/work/thumbs/mobile_video_interstitital.png', tag: [29], format: 3 },
      { id: 51, name: 'Smart Video-Interstitial for Mobile ', href: 'http://gallery.smartadserver.com/smart-mobile-video-interstitial-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/mobile_intervideo2_230x169.png', tag: [29], format: 3 },
      { id: 52, name: 'Smart Video-Go-To Vertical Interstitial', href: 'http://gallery.smartadserver.com/smart-video-go-to-vertical-interstitial', imgSrc: 'assets/_include/img/work/thumbs/mobile_intervideo1_230x169.png', tag: [29], format: 3 },
      { id: 53, name: 'Smart Video-Read for Mobile ', href: 'http://gallery.smartadserver.com/smart-mobile-video-read-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/videoread-web.png', tag: [29], format: 3 },
      { id: 54, name: 'Smart Video-Floorad (1)', href: 'http://gallery.smartadserver.com/smart-video-floorad-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/video_floorad.png', tag: [28], format: 3 },
      { id: 55, name: 'Smart Video-Floorad (2)', href: 'http://gallery.smartadserver.com/smart-video-floorad-2-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/video_floorad.png', tag: [28], format: 3 },
      { id: 56, name: 'Smart Video-Background (1)', href: 'http://gallery.smartadserver.com/smart-video-background-1-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/icon_gallery_smart_video-background.png', tag: [28], format: 3 },
      { id: 57, name: 'Smart Video-Background (2)', href: 'http://gallery.smartadserver.com/smart-video-background-2-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/icon_gallery_smart_video-background.png', tag: [28], format: 3 },
      { id: 58, name: 'Smart Video-Fold (1)', href: 'http://gallery.smartadserver.com/smart-video-fold-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/smart-video-fold.png', tag: [28], format: 3 },
      { id: 59, name: 'Smart Video-Fold (2)', href: 'http://gallery.smartadserver.com/smart-video-fold-2-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/smart-video-fold.png', tag: [28], format: 3 },
      { id: 60, name: 'Smart Video-Interstitial', href: 'http://gallery.smartadserver.com/smart-video-interstitial-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/icon_smart_video-interstitial.png', tag: [28], format: 3 },
      { id: 61, name: 'Smart Video-Interstitial (2)', href: 'http://gallery.smartadserver.com/smart-video-interstitial-2-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/icon_smart_video-interstitial.png', tag: [28], format: 3 },
      { id: 62, name: 'Smart Video-Screening (1) ', href: 'http://gallery.smartadserver.com/smart-video-screening-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/smart-video-screening.png', tag: [28], format: 3 },
      { id: 63, name: 'Smart Video-Screening (2) ', href: 'http://gallery.smartadserver.com/smart-video-screening-2-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/smart-video-screening.png', tag: [28], format: 3 },
      { id: 64, name: 'Smart Video-Inline (1) ', href: 'http://gallery.smartadserver.com/smart-video-inline1-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/Smart-Video-inline.png', tag: [28], format: 3 },
      { id: 65, name: 'Smart Video-Inline (2) ', href: 'http://gallery.smartadserver.com/smart-video-inline2-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/Smart-Video-inline.png', tag: [28], format: 3 },
      { id: 66, name: 'Smart Video-Banner (1) ', href: 'http://gallery.smartadserver.com/smart-video-banner1-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/Smart-video-Banner.png', tag: [28], format: 3 },
      { id: 67, name: 'Smart Video-Banner (2) ', href: 'http://gallery.smartadserver.com/smart-video-banner2-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/Smart-video-Banner.png', tag: [28], format: 3 },
      { id: 68, name: 'Smart Video-Flow', href: 'http://gallery.smartadserver.com/smart-video-flow-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/smart-video-flow.png', tag: [28], format: 3 },
      { id: 69, name: 'Smart Video-Read', href: 'http://gallery.smartadserver.com/smart-video-read-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/smart-video-read.png', tag: [28], format: 3 },
      { id: 70, name: 'Pre / Mid / Post roll', href: 'http://gallery.smartadserver.com/preroll-midroll-postroll-instream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/video_vast_linear.png', tag: [27], format: 3 },
      { id: 71, name: 'Overlay', href: 'http://gallery.smartadserver.com/overlay-video-instream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/overlay_video.png', tag: [27], format: 3 },
      { id: 72, name: 'Ad pods', href: 'http://gallery.smartadserver.com/adpods-video-instream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/video_vast_linear.png', tag: [27], format: 3 },
      { id: 73, name: 'Travelling Video', href: 'http://gallery.smartadserver.com/travelling-video-mobile-ad-format', imgSrc: 'assets/_include/img/work/thumbs/travelling_video_mobileapp.png', tag: [29], format: 3 },
      { id: 74, name: 'Bouncing Video', href: 'http://gallery.smartadserver.com/bouncing-video-mobile-ad-format', imgSrc: 'assets/_include/img/work/thumbs/bouncing_video_mobileapp.png', tag: [29], format: 3 },
      { id: 75, name: 'Vignette video', href: 'http://gallery.smartadserver.com/video-vignette-mobile-ad-format', imgSrc: 'assets/_include/img/work/thumbs/vignette_video_mobileweb.png', tag: [29], format: 3 },
      { id: 76, name: 'Smart Video-Vignettes-Interstitial (1)', href: 'http://gallery.smartadserver.com/smart-video-vignettes-interstitial-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/vignette_video_mobileweb.png', tag: [29], format: 3 },
      { id: 77, name: 'Smart Video-Vignettes-Interstitial (2)', href: 'http://gallery.smartadserver.com/smart-video-vignettes-interstitial-2-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/vignette_video_mobileweb.png', tag: [29], format: 3 },
      { id: 78, name: 'Smart Video-Vignettes-Inline (1)', href: 'http://gallery.smartadserver.com/smart-video-vignettes-inline-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/vignette_video_mobileweb.png', tag: [29], format: 3 },

      // rtb
      { id: 79, name: 'RTB+ Smart Video-Flow', href: 'http://gallery.smartadserver.com/rtb-smart-video-flow-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/smart-video-flow.png', tag: [33, 30], format: 4 },
      { id: 80, name: 'RTB+ Interstitial (Mobile)', href: 'http://gallery.smartadserver.com/rtb-interstitial-mobile', imgSrc: 'assets/_include/img/work/thumbs/interstitial_rwd.png', tag: [31], format: 4 },
      { id: 81, name: 'RTB+ Interstitial (Web)', href: 'http://gallery.smartadserver.com/rtb-interstitial-web', imgSrc: 'assets/_include/img/work/thumbs/interstitial_rwd.png', tag: [30], format: 4 },
      { id: 82, name: 'RTB+ Smart Video-Interstitial', href: 'http://gallery.smartadserver.com/rtb-smart-video-interstitial-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/icon_smart_video-interstitial.png', tag: [30, 33], format: 4 },
      { id: 83, name: 'RTB+ Smart Video-Go-To Vertical Interstitial', href: 'http://gallery.smartadserver.com/rtb-smart-video-go-to-vertical-interstitial', imgSrc: 'assets/_include/img/work/thumbs/mobile_intervideo1_230x169.png', tag: [31, 33], format: 4 },
      { id: 84, name: 'RTB+ Smart Video-Parallax for Mobile', href: 'http://gallery.smartadserver.com/rtb-smart-mobile-video-parallax-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/video_parallax_format_mobile_230x169_gallery.png', tag: [31, 33], format: 4 },
      { id: 85, name: 'RTB+ SDK Parallax Banner', href: 'http://gallery.smartadserver.com/rtb-parallax-banner', imgSrc: 'assets/_include/img/work/thumbs/mobile_parallax_gallery.png', tag: [32, 33], format: 4 },
      { id: 86, name: 'RTB+ Smart Video-Interstitial SDK', href: 'http://gallery.smartadserver.com/rtb-video-interstitial-format', imgSrc: 'assets/_include/img/work/thumbs/mobile_video_interstitital.png', tag: [32, 33], format: 4 },
      { id: 87, name: 'RTB+ Smart Video-Read SDK', href: 'http://gallery.smartadserver.com/rtb-video-read-format', imgSrc: 'assets/_include/img/work/thumbs/video-read-app.png', tag: [32, 33], format: 4 },
      { id: 88, name: 'RTB+ In-Image', href: 'http://gallery.smartadserver.com/rtb-in-image', imgSrc: 'assets/_include/img/work/thumbs/in-image.png', tag: [30, 31], format: 4 },
      { id: 89, name: 'RTB+ In-Feed Native Ad', href: 'http://gallery.smartadserver.com/rtb-native-ad-format', imgSrc: 'assets/_include/img/work/thumbs/native_ad_format.png', tag: [32], format: 4 },
      { id: 90, name: 'RTB+ Smart Video-Interstitial for Mobile ', href: 'http://gallery.smartadserver.com/rtb-smart-mobile-video-interstitial-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/mobile_intervideo2_230x169.png', tag: [33, 31], format: 4 },
      { id: 91, name: 'RTB+ Smart Video-Read', href: 'http://gallery.smartadserver.com/rtb-smart-video-read', imgSrc: 'assets/_include/img/work/thumbs/smart-video-read.png', tag: [33, 30], format: 4 },
      { id: 92, name: 'RTB+ Smart Video-Inline (1)', href: 'http://gallery.smartadserver.com/rtb-smart-video-inline1-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/Smart-Video-inline.png', tag: [30, 33], format: 4 },
      { id: 93, name: 'RTB+ Smart Video-Inline (2)', href: 'http://gallery.smartadserver.com/rtb-smart-video-inline2-outstream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/Smart-Video-inline.png', tag: [30, 33], format: 4 },
      { id: 94, name: 'RTB+ Smart Video-Read for Mobile ', href: 'http://gallery.smartadserver.com/rtb-smart-video-read-for-mobile', imgSrc: 'assets/_include/img/work/thumbs/videoread-web.png', tag: [33, 31], format: 4 },
      { id: 95, name: 'RTB+ In-Feed Native Ad', href: 'http://gallery.smartadserver.com/rtb-native-ad', imgSrc: 'assets/_include/img/work/thumbs/rtb-native-ad.png', tag: [30, 31], format: 4 },
      { id: 96, name: 'RTB+ Skin', href: 'http://gallery.smartadserver.com/rtb-skin', imgSrc: 'assets/_include/img/work/thumbs/RTB_Skin_230x169.png', tag: [30], format: 4 },
      { id: 97, name: 'RTB+ Floor Ad', href: 'http://gallery.smartadserver.com/rtb-floor-ad-web-ad-format', imgSrc: 'assets/_include/img/work/thumbs/RTB_Floor_Ad_230x169.png', tag: [30], format: 4 },
      { id: 98, name: 'RTB+ iAB Billboard', href: 'http://gallery.smartadserver.com/rtb-iab-billboard', imgSrc: 'assets/_include/img/work/thumbs/RTB_IAB_Billboard_230x169.png', tag: [30], format: 4 },
      { id: 99, name: 'RTB+ Bandrole Ad + Auto Close', href: 'http://gallery.smartadserver.com/rtb-bandrole-ad-auto-close', imgSrc: 'assets/_include/img/work/thumbs/RTB_Banderole Ad_Autoclose_230x169.png', tag: [30], format: 4 },
      { id: 100, name: 'RTB+ Overslide', href: 'http://gallery.smartadserver.com/rtb-mobile-overslide', imgSrc: 'assets/_include/img/work/thumbs/RTB_Overslide_230x169.png', tag: [31, 30], format: 4 },
      { id: 101, name: 'RTB+ Parallax', href: 'http://gallery.smartadserver.com/rtb-mobile-parallax', imgSrc: 'assets/_include/img/work/thumbs/RTB_Parallax_230x169.png', tag: [30, 31], format: 4 },
      { id: 102, name: 'RTB+ Floor ad (portait / landscape)', href: 'http://gallery.smartadserver.com/rtb-floor-ad-for-mobile', imgSrc: 'assets/_include/img/work/thumbs/RTB_Mobile_web_FloorAd_230x169.png', tag: [31], format: 4 },
      { id: 103, name: 'RTB+ Mobile Web Interstitial', href: 'http://gallery.smartadserver.com/rtb-mobile-web-interstitial', imgSrc: 'assets/_include/img/work/thumbs/RTB_Mobile_Web_Intertitial_230x169.png', tag: [31], format: 4 },
      { id: 104, name: 'RTB+ Mobile App Interstitial', href: 'http://gallery.smartadserver.com/rtb-mobile-app-interstitial', imgSrc: 'assets/_include/img/work/thumbs/RTB_Mobile_App_Intertitial_230x169.png', tag: [32], format: 4 },
      { id: 105, name: 'RTB+ In-Stream Video', href: 'http://gallery.smartadserver.com/rtb-preroll-midroll-postroll-instream-ad-format', imgSrc: 'assets/_include/img/work/thumbs/RTB_In-stream_Video_230x160.png', tag: [33], format: 4 }
    ];

    const tags: Tag[] = [
      // web tags
      { id: 11, name: 'Rising Star', url: 'rising-star', format: 1 },
      { id: 12, name: 'Background', url: 'background', format: 1 },
      { id: 13, name: 'Expand', url: 'expand-web', format: 1 },
      { id: 14, name: 'Interstitial', url: 'interstitial-web', format: 1 },
      { id: 15, name: 'Floating', url: 'floating', format: 1 },
      { id: 16, name: 'Native', url: 'native', format: 1 },
      { id: 17, name: 'More Interactive Formats', url: 'more-web', format: 1 },

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
      { id: 1, name: 'Cars', url: 'cars', imgSrc: 'assets/_include/img/profile/web-gallery6.png', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum non diam et porta. Sed aliquam aliquam facilisis. Nam sit amet diam porttitor, suscipit augue ut, aliquam ante. Vestibulum felis est, rhoncus sit amet convallis nec, mattis vel diam. Aliquam maximus viverra purus, et hendrerit erat hendrerit at. Praesent vel vehicula urna, non sagittis mauris. Mauris vestibulum lectus ac ligula euismod, vel venenatis velit ullamcorper.' },
      { id: 2, name: 'Women', url: 'women', imgSrc: 'assets/_include/img/profile/mobile-gallery6.png', desc: 'Sed pellentesque tincidunt mi, cursus rhoncus elit rhoncus sit amet. Nunc vel sodales augue, vitae varius tortor. Nam feugiat luctus tellus. Maecenas quis dolor lacinia, elementum nisl sit amet, pretium ex. Aenean at mi ut mauris hendrerit consectetur. Vestibulum feugiat eros vel imperdiet venenatis. Suspendisse in ullamcorper libero, mollis rutrum augue.' },
      { id: 3, name: 'Sport', url: 'sport', imgSrc: 'assets/_include/img/profile/video-gallery6.png', desc: 'Donec tincidunt dui quis est consequat, vel ornare velit convallis. Morbi nulla tellus, rutrum vel lacinia sed, posuere eu justo. Proin enim arcu, sollicitudin et sapien non, gravida tempor metus. Fusce bibendum lectus at urna blandit, eu pellentesque dui facilisis. Nam maximus, massa id volutpat convallis, magna mauris efficitur sapien, eu cursus velit dui eu dui. Aliquam erat volutpat. Nullam accumsan mollis dolor nec interdum. Donec vel pellentesque odio.' },
      { id: 4, name: 'Mountains', url: 'mountains', imgSrc: 'assets/_include/img/profile/RTB-gallery6.png', desc: 'Praesent aliquam pellentesque ante, sit amet blandit elit euismod id. Aenean eleifend dui ut lacus sollicitudin, sit amet rhoncus urna porta. Duis non nunc sed dolor consectetur auctor. Vivamus et arcu fringilla, tempor nulla a, semper quam. Integer elit neque, mollis at euismod at, posuere id lectus. Donec pulvinar ipsum et odio dapibus, rutrum fermentum dolor vehicula. Nullam vulputate lorem id massa eleifend iaculis quis in augue. Ut tempus diam mi, quis pharetra ex viverra id. Praesent cursus dolor nec elit finibus maximus. Vivamus lectus mauris, interdum et neque eu, gravida euismod ante. Praesent pulvinar quis nunc id fringilla.' }
    ];

    return { templates, tags, formats };
  }
}
