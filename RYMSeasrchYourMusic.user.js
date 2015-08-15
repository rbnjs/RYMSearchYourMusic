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

Get = {
  artistAndReleaseInfo: function(artistPage) {
    var resultInfo = []
    if (artistPage) {
      resultInfo.push(this.getArtistNameOnArtistPage());
    } else {
      resultInfo.push(this.getArtistNameOnReleasePage());
      resultInfo.push(this.getAlbumName());
    }
    return resultInfo
  },
  getArtistNameOnArtistPage: function() {
    var header_name = document.getElementsByClassName("artist_name_hdr")[0];
    return header_name.innerHTML
  },
  getArtistNameOnReleasePage: function() {
    return document.getElementsByClassName("artist")[0].innerHTML;
  },
  getAlbumName: function() {
    return document.getElementsByClassName("album_title")[0].firstChild
      .textContent.trim(); 
  }
};

Get.artistAndReleaseInfo(Location.artistPage());
