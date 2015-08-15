// ==UserScript==
// @name        RYMSearchYourMusic
// @namespace   https://greasyfork.org/users/14256
// @description Search in YouTube the music that you are viewing in RYM
// @include     https://rateyourmusic.com/release/*
// @include     http://rateyourmusic.com/release/*
// @include     https://rateyourmusic.com/artist/*
// @include     http://rateyourmusic.com/artist/*
// @version     0.1.0
// @grant       none
// ==/UserScript==

Location = {
  artistPage: function(){
    var location = window.location.href;
    var reg_ex = /\/artist/;
    var info = reg_ex.exec(location);
    if (info && (info.index == 25 || info.index == 24)){
      return true;
    }
    return false;
  }
};