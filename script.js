(function(){
    var script = {
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 167.92,
  "pitch": 0.42
 },
 "id": "panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "playList_D9DD60BF_D79C_7240_41DE_F237542BC967",
 "items": [
  {
   "media": "this.video_F61CC428_D30E_B7D5_41D6_A15FFC8ABEBE",
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_D9DD60BF_D79C_7240_41DE_F237542BC967, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_D9DD60BF_D79C_7240_41DE_F237542BC967, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 3100,
 "initialPosition": {
  "hfov": 118,
  "class": "PanoramaCameraPosition",
  "yaw": 38.38,
  "pitch": 0
 },
 "id": "camera_D9C6F0F3_D79C_73C0_41C1_8297F5B279CC",
 "idleSequence": "this.sequence_D9C610F4_D79C_73C0_41BD_453CDA34ADBD",
 "initialSequence": "this.sequence_D9C610F4_D79C_73C0_41BD_453CDA34ADBD"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -141.62,
   "backwardYaw": 82.56,
   "distance": 1,
   "panorama": "this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E"
  }
 ],
 "hfovMin": "142%",
 "hfov": 360,
 "label": "Banheiro Social",
 "id": "panorama_D835B754_CC42_2ECD_41DA_496D670D19DA",
 "thumbnailUrl": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F72FDCFF_D50B_902C_41D6_08CB464306C5"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 176.11,
   "backwardYaw": 113.24,
   "distance": 1,
   "panorama": "this.panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 156.68,
   "backwardYaw": -166.98,
   "distance": 1,
   "panorama": "this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Su\u00edte 2",
 "id": "panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0",
 "thumbnailUrl": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F4F7F2A7_D576_B0DB_41D8_6B6C6E7B8EC6",
  "this.overlay_F5AC04E7_D70A_F05B_41D4_91CB1A12F9D7",
  "this.overlay_F47DC0A4_D71B_70DD_41E2_9D2A9F52FFDE"
 ]
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_CD3A2801_D714_63D9_41E9_924E51D23739",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CD3A2801_D714_63D9_41E9_924E51D23739_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D835B754_CC42_2ECD_41DA_496D670D19DA",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82",
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.04,
  "pitch": -17.33
 },
 "id": "panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 3100,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 20.5,
  "pitch": -24.8
 },
 "id": "panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343",
 "thumbnailUrl": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_t.jpg",
 "label": "Sala de Tv e Cozinha",
 "class": "Panorama",
 "pitch": 0,
 "hfovMax": 140,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F24FCB87_D30A_B0DB_41DF_2E129F2B9213",
  "this.overlay_F3A0EDF8_D30B_7035_41D4_5E7CFF41C72D"
 ]
},
{
 "label": "V\u00eddeo teste",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_F61CC428_D30E_B7D5_41D6_A15FFC8ABEBE_t.jpg",
 "width": 1920,
 "class": "Video",
 "id": "video_F61CC428_D30E_B7D5_41D6_A15FFC8ABEBE",
 "loop": false,
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_F61CC428_D30E_B7D5_41D6_A15FFC8ABEBE.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -101.53,
   "backwardYaw": -78.21,
   "distance": 1,
   "panorama": "this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4",
 "thumbnailUrl": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_t.jpg",
 "label": "Dormit\u00f3rio 1",
 "class": "Panorama",
 "pitch": 0,
 "hfovMax": 140,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F4EAC60F_D50A_B3EB_418B_A8D6FF618DC8"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 13.02,
  "pitch": 0
 },
 "id": "camera_D958E1CE_D79C_75C0_41E6_34206E37049E",
 "idleSequence": "this.sequence_D958F1CE_D79C_75C0_41D1_8FE287149054",
 "initialSequence": "this.sequence_D958F1CE_D79C_75C0_41D1_8FE287149054"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.47,
  "pitch": 0
 },
 "id": "camera_D9F14114_D79C_7247_41E0_51913C672CED",
 "idleSequence": "this.sequence_D9F15114_D79C_7247_41C7_29D4FE47A7BF",
 "initialSequence": "this.sequence_D9F15114_D79C_7247_41C7_29D4FE47A7BF"
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_CD3A2801_D714_63D9_41E9_924E51D23739_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0
  }
 ],
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 3100,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": -3.89,
  "pitch": 0
 },
 "id": "camera_D90AE171_D79C_72C0_41C4_315EFF5D3384",
 "idleSequence": "this.sequence_D90A1171_D79C_72C0_41D7_25104AE64548",
 "initialSequence": "this.sequence_D90A1171_D79C_72C0_41D7_25104AE64548"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_CD3A2801_D714_63D9_41E9_924E51D23739",
 "thumbnailUrl": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_t.jpg",
 "label": "Sala de Jantar",
 "class": "Panorama",
 "pitch": 0,
 "hfovMax": 140,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CCE335DB_D71C_AC69_41D3_517F4FF0A18D",
  "this.overlay_CB9FE8E0_D71C_6458_41DC_4B32F5666C33"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 3100,
 "initialPosition": {
  "hfov": 118,
  "class": "PanoramaCameraPosition",
  "yaw": -0.72,
  "pitch": -2.65
 },
 "id": "panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 3100,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": -23.32,
  "pitch": 0
 },
 "id": "camera_D9EC6135_D79C_7241_41B8_41615262BF29",
 "idleSequence": "this.sequence_D9EC7135_D79C_7241_41D1_68C88C156BF8",
 "initialSequence": "this.sequence_D9EC7135_D79C_7241_41D1_68C88C156BF8"
},
{
 "hfovMax": 140,
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Su\u00edte 1",
 "id": "panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68",
 "thumbnailUrl": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_F4BADACC_D57D_906D_41CB_DA7DDAC8CCD7"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -30.1,
  "pitch": -19.7
 },
 "id": "panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 101.79,
  "pitch": 0
 },
 "id": "camera_D91B5153_D79C_72C1_4173_A2A2DDF111C8",
 "idleSequence": "this.sequence_D91B6153_D79C_72C1_41B3_7C70EDB14012",
 "initialSequence": "this.sequence_D91B6153_D79C_72C1_41B3_7C70EDB14012"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 113.24,
   "backwardYaw": 176.11,
   "distance": 1,
   "panorama": "this.panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82",
 "thumbnailUrl": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_t.jpg",
 "label": "Banheiro Su\u00edte",
 "class": "Panorama",
 "pitch": 0,
 "hfovMax": 140,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F45ACD7E_D715_902D_41DD_78A446BA54B7"
 ]
},
{
 "viewerArea": "this.MainViewer",
 "class": "VideoPlayer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "PlayList",
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "items": [
  {
   "media": "this.panorama_CD3A2801_D714_63D9_41E9_924E51D23739",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CD3A2801_D714_63D9_41E9_924E51D23739_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D835B754_CC42_2ECD_41DA_496D670D19DA",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 8, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.44,
  "pitch": 0
 },
 "id": "camera_D93AA191_D79C_7240_41DC_B31E20BE3A0F",
 "idleSequence": "this.sequence_D93AB191_D79C_7240_41E7_532C89BC7D3C",
 "initialSequence": "this.sequence_D93AB191_D79C_7240_41E7_532C89BC7D3C"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 19.31,
  "pitch": -4.74
 },
 "id": "panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 14.32,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -76.09,
  "pitch": -10.64
 },
 "id": "panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_camera",
 "idleSequence": "this.sequence_CE4BF28E_D715_A4EB_4181_8F921BD59989",
 "initialSequence": "this.sequence_CE4BF28E_D715_A4EB_4181_8F921BD59989"
},
{
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "touchControlMode": "drag_rotation",
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "hfovMax": 140,
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Sacada e Churrasqueira",
 "id": "panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E",
 "thumbnailUrl": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_F50A3415_D317_97FC_41CE_97EA474842C8",
  "this.overlay_F9522F06_D316_91DD_41C0_23904D8570AE"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 82.56,
   "backwardYaw": -141.62,
   "distance": 1,
   "panorama": "this.panorama_D835B754_CC42_2ECD_41DA_496D670D19DA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -78.21,
   "backwardYaw": -101.53,
   "distance": 1,
   "panorama": "this.panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -166.98,
   "backwardYaw": 156.68,
   "distance": 1,
   "panorama": "this.panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0"
  }
 ],
 "hfovMin": "100%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E",
 "thumbnailUrl": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_t.jpg",
 "label": "Circula\u00e7\u00e3o",
 "class": "Panorama",
 "pitch": 0,
 "hfovMax": 140,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F41A9AF8_D30E_9035_41D3_6DD0F95708A1",
  "this.overlay_F5F46F3B_D30D_702B_41D4_F968E6DED12B",
  "this.overlay_F40F2518_D70D_71F5_41CE_BE5B687C6EC4",
  "this.overlay_F7EF1A07_D70A_F3DC_41D7_DE7DC3F5336D"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -66.76,
  "pitch": 0
 },
 "id": "camera_D928E1AF_D79C_7240_41D3_BD1527552C0C",
 "idleSequence": "this.sequence_D92801AF_D79C_7240_41E5_C94B8CCB522B",
 "initialSequence": "this.sequence_D92801AF_D79C_7240_41E5_C94B8CCB522B"
},
{
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minWidth": 100,
 "toolTipBorderColor": "#767676",
 "left": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "shadow": false,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "minHeight": 50,
 "toolTipPaddingBottom": 7,
 "progressBarBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": false,
 "paddingLeft": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "top": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "layout": "absolute",
 "data": {
  "name": "--- MENU"
 },
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA"
 ],
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "height": "12.832%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "data": {
  "name": "-- SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 641,
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "data": {
  "name": "--STICKER"
 },
 "id": "Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
 "left": 30,
 "width": 573,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "top": 25,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 116,
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photoalbum"
 },
 "children": [
  "this.Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
  "this.Container_386C28AA_17CC_0B05_41B7_3334E854CA29"
 ],
 "id": "Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "minHeight": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_3811F7E8_17DC_0505_417B_3406AEA143C9"
 ],
 "id": "Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "minHeight": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_2792F64D_17CC_071F_415E_8686768A06D3"
 ],
 "id": "Container_2792A64E_17CC_071D_41B0_BEA23997C067",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "minHeight": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--FLOORPLAN"
 },
 "children": [
  "this.Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E"
 ],
 "id": "Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "minHeight": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076"
 ],
 "id": "Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "minHeight": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--CONTACT"
 },
 "children": [
  "this.Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
  "this.Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27"
 ],
 "id": "Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "minHeight": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "children": [
  "this.Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F"
 ],
 "id": "Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
 "width": 319,
 "minWidth": 1,
 "data": {
  "name": "red block"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": 79,
 "scrollBarOpacity": 0.7,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "backgroundColorDirection": "horizontal",
 "borderSize": 0,
 "shadow": true,
 "verticalAlign": "top",
 "top": 32,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 44,
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#FF361B",
  "#000000",
  "#000000",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadowHorizontalLength": -6,
 "backgroundOpacity": 0.58,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.49,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadowVerticalLength": 8,
 "horizontalAlign": "left",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0.33,
  0.73,
  0.89,
  0.99
 ]
},
{
 "layout": "absolute",
 "data": {
  "name": "Container25544"
 },
 "children": [
  "this.Image_CEA0A359_D70B_E469_41E6_1193BE5EC764"
 ],
 "id": "Container_CE2A29A9_D70C_E429_41EA_24823840BBC8",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "left": "2.17%",
 "scrollBarVisible": "rollOver",
 "width": "13.406%",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "top": "2.86%",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": "25.378%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "data": {
  "name": "Container26829"
 },
 "children": [
  "this.IconButton_CD73DD53_D7FD_BC78_41E1_CCF9C2A65B44"
 ],
 "id": "Container_CEACD04B_D7FC_6468_41E4_5FFA5AF041FB",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "right": "8.24%",
 "width": "5.525%",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 1,
 "bottom": "9.27%",
 "contentOpaque": false,
 "height": "8.403%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "borderSize": 0,
 "transparencyActive": true,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 1,
 "height": 58,
 "paddingRight": 0,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "data": {
  "name": "IconButton MUTE"
 },
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "borderSize": 0,
 "transparencyActive": true,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 1,
 "height": 58,
 "paddingRight": 0,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_D9C610F4_D79C_73C0_41BD_453CDA34ADBD",
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "cubic_in",
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "linear",
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "cubic_out",
   "yawDelta": 18.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17,
   "image": "this.AnimatedImageResource_F8F28285_D57E_90DF_41DE_B0F3050F1139",
   "pitch": -55.64,
   "yaw": -141.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F72FDCFF_D50B_902C_41D6_08CB464306C5",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E, this.camera_D93AA191_D79C_7240_41DC_B31E20BE3A0F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 17,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -141.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -55.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.79,
   "image": "this.AnimatedImageResource_F8F25285_D57E_90DF_41C8_BC1ABA1CBF86",
   "pitch": -34.85,
   "yaw": 156.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F4F7F2A7_D576_B0DB_41D8_6B6C6E7B8EC6",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E, this.camera_D958E1CE_D79C_75C0_41E6_34206E37049E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 16.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.15,
   "image": "this.AnimatedImageResource_FB2A1A4D_D716_F06F_41D1_EF8EB924628A",
   "pitch": -34.7,
   "yaw": 176.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F5AC04E7_D70A_F05B_41D4_91CB1A12F9D7",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82, this.camera_D928E1AF_D79C_7240_41D3_BD1527552C0C); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 17.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.42,
   "image": "this.AnimatedImageResource_F424D3FA_D71B_9035_41E2_B3A60BF65C61",
   "pitch": -25.77,
   "yaw": -2.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F47DC0A4_D71B_70DD_41E2_9D2A9F52FFDE",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 18.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.77
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 03"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.21,
   "image": "this.AnimatedImageResource_F9B98E5D_D315_906F_41D4_74C786D8CEDE",
   "pitch": -14.51,
   "yaw": -52.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F24FCB87_D30A_B0DB_41DF_2E129F2B9213",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFC30CDB_CC42_63FB_41CD_E1329877661C, this.camera_CC41D2A2_D7FC_A4D8_41BF_B4E6928E0F11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 16.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.45,
   "image": "this.AnimatedImageResource_F9B9FE5D_D315_906F_41D8_494DEFA8A3E4",
   "pitch": -27.2,
   "yaw": 108.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F3A0EDF8_D30B_7035_41D4_5E7CFF41C72D",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 18.45,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 108.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.37,
   "image": "this.AnimatedImageResource_F8F21285_D57E_90DF_41DE_1CBEAD5E3D4C",
   "pitch": -47.45,
   "yaw": -101.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F4EAC60F_D50A_B3EB_418B_A8D6FF618DC8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E, this.camera_D91B5153_D79C_72C1_4173_A2A2DDF111C8); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 20.37,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -47.45
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_D958F1CE_D79C_75C0_41D1_8FE287149054",
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "cubic_in",
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "linear",
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "cubic_out",
   "yawDelta": 18.5
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_D9F15114_D79C_7247_41C7_29D4FE47A7BF",
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "cubic_in",
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "linear",
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "cubic_out",
   "yawDelta": 18.5
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_D90A1171_D79C_72C0_41D7_25104AE64548",
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "cubic_in",
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "linear",
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "cubic_out",
   "yawDelta": 18.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.68,
   "image": "this.AnimatedImageResource_CBDC0823_D71C_63D8_41DA_53ABC4D6CBC0",
   "pitch": -31.5,
   "yaw": 67.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CCE335DB_D71C_AC69_41D3_517F4FF0A18D",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 25.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.72,
   "image": "this.AnimatedImageResource_CBDCD824_D71C_63D8_41AD_7CF2F3EF3482",
   "pitch": -38.05,
   "yaw": -46.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CB9FE8E0_D71C_6458_41DC_4B32F5666C33",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 23.72,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.05
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_D9EC7135_D79C_7241_41D1_68C88C156BF8",
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "cubic_in",
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "linear",
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "cubic_out",
   "yawDelta": 18.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03b"
 },
 "items": [
  {
   "hfov": 25.02,
   "image": "this.AnimatedImageResource_F8F3C285_D57E_90DF_41C2_81DA0FD6B4BD",
   "pitch": -21.27,
   "yaw": 178.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F4BADACC_D57D_906D_41CB_DA7DDAC8CCD7",
 "maps": [
  {
   "hfov": 25.02,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.27
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_D91B6153_D79C_72C1_41B3_7C70EDB14012",
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "cubic_in",
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "linear",
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "cubic_out",
   "yawDelta": 18.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.21,
   "image": "this.AnimatedImageResource_FB2B8A4D_D716_F06F_41C0_35A52B8A755E",
   "pitch": -72.2,
   "yaw": 113.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F45ACD7E_D715_902D_41DD_78A446BA54B7",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0, this.camera_D90AE171_D79C_72C0_41C4_315EFF5D3384); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 113.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -72.2
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_D93AB191_D79C_7240_41E7_532C89BC7D3C",
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "cubic_in",
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "linear",
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "cubic_out",
   "yawDelta": 18.5
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_CE4BF28E_D715_A4EB_4181_8F921BD59989",
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "cubic_in",
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "linear",
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "cubic_out",
   "yawDelta": 18.5
  }
 ]
},
{
 "cursor": "hand",
 "data": {
  "name": "IconButton HS "
 },
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "borderSize": 0,
 "transparencyActive": true,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 1,
 "height": 58,
 "paddingRight": 0,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "data": {
  "name": "IconButton VR"
 },
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "width": 49,
 "minWidth": 1,
 "cursor": "hand",
 "right": 30,
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
 "borderSize": 0,
 "transparencyActive": true,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 1,
 "bottom": 8,
 "height": 37,
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 37,
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "horizontalAlign": "center",
 "maxWidth": 49,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "data": {
  "name": "IconButton VR"
 },
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "borderSize": 0,
 "transparencyActive": true,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 1,
 "height": 58,
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "visible": false,
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "data": {
  "name": "IconButton GYRO"
 },
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "borderSize": 0,
 "transparencyActive": true,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 1,
 "height": 58,
 "paddingRight": 0,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05"
 },
 "items": [
  {
   "hfov": 22.42,
   "image": "this.AnimatedImageResource_F4C95DB4_D30E_903C_41E8_8D20887AD8C9",
   "pitch": -17.59,
   "yaw": 1.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F50A3415_D317_97FC_41CE_97EA474842C8",
 "maps": [
  {
   "hfov": 22.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "items": [
  {
   "hfov": 14.46,
   "image": "this.AnimatedImageResource_F4C89DB4_D30E_903C_41DF_F0A26D8957CC",
   "pitch": -45,
   "yaw": -83.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F9522F06_D316_91DD_41C0_23904D8570AE",
 "maps": [
  {
   "hfov": 14.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17,
   "image": "this.AnimatedImageResource_F44F5660_D30D_B055_41DE_04C5B91F4092",
   "pitch": -55.64,
   "yaw": -78.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F41A9AF8_D30E_9035_41D3_6DD0F95708A1",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4, this.camera_D9F14114_D79C_7247_41E0_51913C672CED); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 17,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -78.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -55.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.36,
   "image": "this.AnimatedImageResource_F44F3660_D30D_B055_41D4_D1A7ADD2C004",
   "pitch": -54.82,
   "yaw": 82.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F5F46F3B_D30D_702B_41D4_F968E6DED12B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D835B754_CC42_2ECD_41DA_496D670D19DA, this.camera_D9C6F0F3_D79C_73C0_41C1_8297F5B279CC); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 17.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -54.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.98,
   "image": "this.AnimatedImageResource_FB299A4D_D716_F06F_41D2_0E089B6841D2",
   "pitch": -67.7,
   "yaw": -166.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F40F2518_D70D_71F5_41CE_BE5B687C6EC4",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0, this.camera_D9EC6135_D79C_7241_41B8_41615262BF29); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 12.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -67.7
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.29,
   "image": "this.AnimatedImageResource_FB294A4D_D716_F06F_41E0_56F5AB7FA295",
   "pitch": -63.82,
   "yaw": 0.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F7EF1A07_D70A_F3DC_41D7_DE7DC3F5336D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFC30CDB_CC42_63FB_41CD_E1329877661C, this.camera_CC7CA17D_D7FC_A428_41E8_99E694573770)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -63.82
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_D92801AF_D79C_7240_41E5_C94B8CCB522B",
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "cubic_in",
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "linear",
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 14.32,
   "easing": "cubic_out",
   "yawDelta": 18.5
  }
 ]
},
{
 "data": {
  "name": "white line"
 },
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "left": "0%",
 "minWidth": 1,
 "right": "0%",
 "borderSize": 0,
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 1,
 "bottom": 53,
 "height": 2,
 "paddingRight": 0,
 "class": "Image",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 2,
 "scaleMode": "fit_outside",
 "horizontalAlign": "center",
 "maxWidth": 3000,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "horizontal",
 "data": {
  "name": "-button set container"
 },
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
  "this.Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
  "this.Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
  "this.Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
  "this.Button_33E0F47E_11C1_A20D_419F_BB809AD89259"
 ],
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "left": "0%",
 "width": 1199,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "height": 51,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 3,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 30
},
{
 "layout": "horizontal",
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "top": "0%",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": 110,
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "vertical",
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "height": "85.959%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 3,
 "visible": false,
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
  "this.Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3"
 ],
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "data": {
  "name": "Global"
 },
 "id": "Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": true,
 "verticalAlign": "top",
 "top": "5%",
 "minHeight": 1,
 "bottom": "5%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0"
 ],
 "id": "Container_386C28AA_17CC_0B05_41B7_3334E854CA29",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "top": "5%",
 "minHeight": 1,
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "vertical",
 "children": [
  "this.Container_3811E7E8_17DC_0505_4189_A53F22044B22",
  "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B"
 ],
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "data": {
  "name": "Global"
 },
 "id": "Container_3811F7E8_17DC_0505_417B_3406AEA143C9",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": true,
 "verticalAlign": "top",
 "top": "7%",
 "minHeight": 1,
 "bottom": "7%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "visible",
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "children": [
  "this.Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
  "this.WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8"
 ],
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "data": {
  "name": "Global"
 },
 "id": "Container_2792F64D_17CC_071F_415E_8686768A06D3",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": true,
 "verticalAlign": "top",
 "top": "7%",
 "minHeight": 1,
 "bottom": "7%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "visible",
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 4,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "children": [
  "this.Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
  "this.MapViewer"
 ],
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "data": {
  "name": "Global"
 },
 "id": "Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": true,
 "verticalAlign": "top",
 "top": "7%",
 "minHeight": 1,
 "bottom": "7%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "visible",
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 4,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "children": [
  "this.Container_20EC87A3_174C_050A_4198_F9830A58FD09",
  "this.Container_2F7D65D9_1744_0506_41B3_4FD17B01B645"
 ],
 "id": "Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": true,
 "verticalAlign": "top",
 "top": "7%",
 "minHeight": 1,
 "bottom": "7%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 6,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
  "this.Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82"
 ],
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "data": {
  "name": "Global"
 },
 "id": "Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": true,
 "verticalAlign": "top",
 "top": "5%",
 "minHeight": 1,
 "bottom": "5%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6"
 ],
 "id": "Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "top": "5%",
 "minHeight": 1,
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "text 1"
 },
 "id": "Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
 "textShadowColor": "#000000",
 "width": 319,
 "minWidth": 1,
 "right": -5,
 "fontWeight": "bold",
 "borderSize": 0,
 "shadow": false,
 "text": "CAMPINAS-SÃO JOSÉ/SC",
 "fontColor": "#FFFFFF",
 "verticalAlign": "top",
 "textShadowHorizontalLength": 0,
 "textShadowOpacity": 1,
 "minHeight": 1,
 "bottom": -2,
 "height": 44,
 "paddingRight": 0,
 "fontSize": "29px",
 "textShadowVerticalLength": 0,
 "class": "Label",
 "paddingTop": 0,
 "textShadowBlurRadius": 10,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "horizontalAlign": "left",
 "fontStyle": "normal",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "maxWidth": 1000,
 "data": {
  "name": "Image25555"
 },
 "id": "Image_CEA0A359_D70B_E469_41E6_1193BE5EC764",
 "width": "100%",
 "minWidth": 1,
 "left": "0%",
 "borderSize": 0,
 "url": "skin/Image_CEA0A359_D70B_E469_41E6_1193BE5EC764.png",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "0%",
 "minHeight": 1,
 "paddingRight": 0,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 1000,
 "scaleMode": "fit_inside",
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "data": {
  "name": "IconButton27471"
 },
 "id": "IconButton_CD73DD53_D7FD_BC78_41E1_CCF9C2A65B44",
 "width": 60,
 "minWidth": 1,
 "maxWidth": 1095,
 "right": "0%",
 "iconURL": "skin/IconButton_CD73DD53_D7FD_BC78_41E1_CCF9C2A65B44.png",
 "borderSize": 0,
 "transparencyActive": false,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "mode": "push",
 "height": 50,
 "click": "this.openLink('http://wa.me/5548991171170', '_blank')",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 1095,
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F8F28285_D57E_90DF_41DE_B0F3050F1139",
 "levels": [
  {
   "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F8F25285_D57E_90DF_41C8_BC1ABA1CBF86",
 "levels": [
  {
   "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB2A1A4D_D716_F06F_41D1_EF8EB924628A",
 "levels": [
  {
   "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F424D3FA_D71B_9035_41E2_B3A60BF65C61",
 "levels": [
  {
   "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9B98E5D_D315_906F_41D4_74C786D8CEDE",
 "levels": [
  {
   "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9B9FE5D_D315_906F_41D8_494DEFA8A3E4",
 "levels": [
  {
   "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F8F21285_D57E_90DF_41DE_1CBEAD5E3D4C",
 "levels": [
  {
   "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_CBDC0823_D71C_63D8_41DA_53ABC4D6CBC0",
 "levels": [
  {
   "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_CBDCD824_D71C_63D8_41AD_7CF2F3EF3482",
 "levels": [
  {
   "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F8F3C285_D57E_90DF_41C2_81DA0FD6B4BD",
 "levels": [
  {
   "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB2B8A4D_D716_F06F_41C0_35A52B8A755E",
 "levels": [
  {
   "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F4C95DB4_D30E_903C_41E8_8D20887AD8C9",
 "levels": [
  {
   "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F4C89DB4_D30E_903C_41DF_F0A26D8957CC",
 "levels": [
  {
   "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F44F5660_D30D_B055_41DE_04C5B91F4092",
 "levels": [
  {
   "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F44F3660_D30D_B055_41D4_D1A7ADD2C004",
 "levels": [
  {
   "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB299A4D_D716_F06F_41D2_0E089B6841D2",
 "levels": [
  {
   "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB294A4D_D716_F06F_41E0_56F5AB7FA295",
 "levels": [
  {
   "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "width": 120,
 "minWidth": 1,
 "data": {
  "name": "Button house info"
 },
 "fontSize": 18,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "paddingRight": 0,
 "fontWeight": "normal",
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "label": "HOUSE INFO",
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, true, 0, null, null, false)",
 "class": "Button",
 "iconHeight": 0,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "paddingLeft": 0,
 "iconWidth": 0,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "width": 140,
 "minWidth": 1,
 "data": {
  "name": "Button panorama list"
 },
 "fontSize": 18,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "paddingRight": 0,
 "fontWeight": "normal",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "PANORAMA LIST",
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, true, 0, null, null, false)",
 "class": "Button",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "paddingLeft": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "width": 100,
 "minWidth": 1,
 "data": {
  "name": "Button location"
 },
 "fontSize": 18,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "paddingRight": 0,
 "fontWeight": "normal",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "LOCATION",
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, true, 0, null, null, false)",
 "class": "Button",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "paddingLeft": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "width": 113,
 "minWidth": 1,
 "data": {
  "name": "Button floorplan"
 },
 "fontSize": 18,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "rollOverFontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "paddingRight": 0,
 "fontWeight": "normal",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "FLOORPLAN",
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, true, 0, null, null, false)",
 "class": "Button",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "paddingLeft": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "width": 122,
 "minWidth": 1,
 "data": {
  "name": "Button photoalbum"
 },
 "fontSize": 18,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "rollOverFontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "paddingRight": 0,
 "fontWeight": "normal",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "PHOTOALBUM",
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, true, 0, null, null, false)",
 "class": "Button",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "paddingLeft": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_33E0F47E_11C1_A20D_419F_BB809AD89259",
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "width": 100,
 "minWidth": 1,
 "data": {
  "name": "Button contact"
 },
 "fontSize": 18,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "paddingRight": 0,
 "fontWeight": "normal",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "CONTACT",
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, true, 0, null, null, false)",
 "class": "Button",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "paddingLeft": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "cursor": "hand",
 "data": {
  "name": "image button menu"
 },
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "minWidth": 1,
 "maxWidth": 60,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "borderSize": 0,
 "transparencyActive": true,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 1,
 "height": 60,
 "paddingRight": 0,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "data": {
  "name": "IconButton TWITTER"
 },
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "borderSize": 0,
 "transparencyActive": true,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 1,
 "height": 58,
 "paddingRight": 0,
 "mode": "push",
 "click": "this.shareTwitter(window.location.href)",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 58,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "data": {
  "name": "IconButton FB"
 },
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "borderSize": 0,
 "transparencyActive": true,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 1,
 "height": 58,
 "paddingRight": 0,
 "mode": "push",
 "click": "this.shareFacebook(window.location.href)",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 58,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "children": [
  "this.ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
  "this.Container_386D68AA_17CC_0B05_41B3_8E850505A16B"
 ],
 "id": "Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "data": {
  "name": "-left"
 },
 "scrollBarVisible": "rollOver",
 "width": "85%",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0
},
{
 "layout": "vertical",
 "children": [
  "this.Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
  "this.Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
  "this.Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF"
 ],
 "id": "Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3",
 "scrollBarOpacity": 0.51,
 "minWidth": 460,
 "data": {
  "name": "-right"
 },
 "scrollBarVisible": "rollOver",
 "width": "50%",
 "scrollBarColor": "#0069A3",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 50,
 "height": "100%",
 "class": "Container",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "paddingBottom": 20,
 "borderRadius": 0,
 "gap": 0,
 "horizontalAlign": "left",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 50
},
{
 "cursor": "hand",
 "data": {
  "name": "X"
 },
 "id": "IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0",
 "iconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0.jpg",
 "minWidth": 40,
 "maxWidth": 50,
 "width": "25%",
 "borderSize": 0,
 "transparencyActive": false,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 40,
 "height": "75%",
 "paddingRight": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 50,
 "rollOverIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_rollover.jpg",
 "pressedIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_pressed.jpg",
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "children": [
  "this.HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
  "this.IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E"
 ],
 "id": "Container_3811E7E8_17DC_0505_4189_A53F22044B22",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "data": {
  "name": "header"
 },
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 80,
 "paddingRight": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "class": "Container",
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0
},
{
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "itemLabelFontStyle": "normal",
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#FF361B",
 "itemMode": "normal",
 "itemThumbnailOpacity": 1,
 "width": "100%",
 "itemLabelHorizontalAlign": "center",
 "itemPaddingRight": 3,
 "shadow": false,
 "itemMaxWidth": 1000,
 "rollOverItemThumbnailShadowColor": "#FF361B",
 "verticalAlign": "middle",
 "itemLabelFontFamily": "Oswald Regular",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "rollOverItemLabelFontSize": 16,
 "itemMaxHeight": 1000,
 "minHeight": 1,
 "itemBorderRadius": 0,
 "height": "100%",
 "paddingRight": 70,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemPaddingLeft": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "selectedItemLabelFontColor": "#C1280E",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "class": "ThumbnailGrid",
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0,
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "paddingLeft": 70,
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemLabelFontSize": 16,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#C1280E",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "scrollBarMargin": 2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontColor": "#666666",
 "itemHeight": 160,
 "itemThumbnailHeight": 125,
 "paddingTop": 30,
 "itemBackgroundColorDirection": "vertical",
 "paddingBottom": 70,
 "borderRadius": 5,
 "gap": 26,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "horizontalAlign": "center",
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "data": {
  "name": "ThumbnailList5161"
 },
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "children": [
  "this.HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
  "this.IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14"
 ],
 "id": "Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "data": {
  "name": "header"
 },
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 80,
 "paddingRight": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "class": "Container",
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0
},
{
 "id": "WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8",
 "width": "100%",
 "minWidth": 1,
 "data": {
  "name": "WebFrame52781"
 },
 "backgroundColorDirection": "vertical",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14376.151861634273!2d-73.99351941263586!3d40.75732561349075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses!2ses!4v1542287427714\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "borderSize": 0,
 "shadow": false,
 "scrollEnabled": true,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": "100%",
 "class": "WebFrame",
 "insetBorder": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "children": [
  "this.HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
  "this.IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14"
 ],
 "id": "Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "data": {
  "name": "header"
 },
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 80,
 "paddingRight": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "class": "Container",
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0
},
{
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MapViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minWidth": 1,
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "shadow": false,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "minHeight": 1,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "paddingLeft": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
  "this.IconButton_20ECE7A3_174C_050A_41B4_AF609035102C"
 ],
 "id": "Container_20EC87A3_174C_050A_4198_F9830A58FD09",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "data": {
  "name": "header"
 },
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 80,
 "paddingRight": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "class": "Container",
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "children": [
  "this.ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
  "this.Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0"
 ],
 "id": "Container_2F7D65D9_1744_0506_41B3_4FD17B01B645",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "data": {
  "name": "-photoalbum"
 },
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "children": [
  "this.Image_182FD4E7_17B7_EF41_41AA_D495544C1972"
 ],
 "id": "Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "data": {
  "name": "-left"
 },
 "scrollBarVisible": "rollOver",
 "width": "85%",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0
},
{
 "layout": "vertical",
 "children": [
  "this.Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
  "this.Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
  "this.Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353"
 ],
 "id": "Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82",
 "scrollBarOpacity": 0.51,
 "minWidth": 460,
 "data": {
  "name": "-right"
 },
 "scrollBarVisible": "rollOver",
 "width": "50%",
 "scrollBarColor": "#0069A3",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 50,
 "height": "100%",
 "class": "Container",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "paddingBottom": 20,
 "borderRadius": 0,
 "gap": 0,
 "horizontalAlign": "left",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 50
},
{
 "cursor": "hand",
 "data": {
  "name": "X"
 },
 "id": "IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6",
 "iconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6.jpg",
 "minWidth": 40,
 "maxWidth": 50,
 "width": "25%",
 "borderSize": 0,
 "transparencyActive": false,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 40,
 "height": "75%",
 "paddingRight": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 50,
 "rollOverIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_rollover.jpg",
 "pressedIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_pressed.jpg",
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minWidth": 1,
 "toolTipBorderColor": "#767676",
 "right": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "shadow": false,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "minHeight": 1,
 "progressBarBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "class": "ViewerArea",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "paddingLeft": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "top": 0,
 "vrPointerColor": "#FFFFFF",
 "bottom": 0,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "layout": "horizontal",
 "data": {
  "name": "Container arrows"
 },
 "children": [
  "this.IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
  "this.Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
  "this.IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6"
 ],
 "id": "Container_386D68AA_17CC_0B05_41B3_8E850505A16B",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "top": "0%",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "horizontal",
 "id": "Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "data": {
  "name": "Container space"
 },
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 60,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "horizontalAlign": "right",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0
},
{
 "layout": "vertical",
 "children": [
  "this.HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
  "this.Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4"
 ],
 "id": "Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
 "scrollBarOpacity": 0.79,
 "minWidth": 100,
 "data": {
  "name": "Container text"
 },
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#E73B2C",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 520,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 30,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0
},
{
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF",
 "width": 370,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "data": {
  "name": "HTMLText54192"
 },
 "id": "HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "width": "77.115%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "top": "0%",
 "minHeight": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "height": 80,
 "class": "HTMLText",
 "paddingTop": 17,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.7vh;font-family:'Oswald';\"><B>PANORAMA LIST/</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 80
},
{
 "cursor": "hand",
 "data": {
  "name": "X"
 },
 "id": "IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E",
 "width": 50,
 "minWidth": 40,
 "maxWidth": 50,
 "right": 15,
 "iconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E.jpg",
 "borderSize": 0,
 "transparencyActive": false,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 40,
 "top": 15,
 "paddingRight": 0,
 "mode": "push",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 50,
 "rollOverIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_rollover.jpg",
 "pressedIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_pressed.jpg",
 "horizontalAlign": "right",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "data": {
  "name": "HTMLText54192"
 },
 "id": "HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "width": "77.115%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "top": "0%",
 "minHeight": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "height": 80,
 "class": "HTMLText",
 "paddingTop": 17,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.7vh;font-family:'Oswald';\"><B>LOCATION/</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 80
},
{
 "cursor": "hand",
 "data": {
  "name": "X"
 },
 "id": "IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14",
 "width": 70,
 "minWidth": 40,
 "maxWidth": 50,
 "right": 15,
 "iconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14.jpg",
 "borderSize": 0,
 "transparencyActive": false,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 40,
 "top": 15,
 "paddingRight": 0,
 "mode": "push",
 "height": 70,
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 50,
 "rollOverIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_rollover.jpg",
 "pressedIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_pressed.jpg",
 "horizontalAlign": "right",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "data": {
  "name": "HTMLText54192"
 },
 "id": "HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "width": "77.115%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "top": "0%",
 "minHeight": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "height": 80,
 "class": "HTMLText",
 "paddingTop": 17,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.7vh;font-family:'Oswald';\"><B>FLOORPLAN/</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 80
},
{
 "cursor": "hand",
 "data": {
  "name": "X"
 },
 "id": "IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14",
 "width": 70,
 "minWidth": 40,
 "maxWidth": 50,
 "right": 15,
 "iconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14.jpg",
 "borderSize": 0,
 "transparencyActive": false,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 40,
 "top": 15,
 "paddingRight": 0,
 "mode": "push",
 "height": 70,
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 50,
 "rollOverIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_rollover.jpg",
 "pressedIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_pressed.jpg",
 "horizontalAlign": "right",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "data": {
  "name": "HTMLText54192"
 },
 "id": "HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "width": "77.115%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "top": "0%",
 "minHeight": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "height": 80,
 "class": "HTMLText",
 "paddingTop": 17,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.7vh;font-family:'Oswald';\"><B>PHOTOALBUM/</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 80
},
{
 "cursor": "hand",
 "data": {
  "name": "X"
 },
 "id": "IconButton_20ECE7A3_174C_050A_41B4_AF609035102C",
 "width": 50,
 "minWidth": 40,
 "maxWidth": 50,
 "right": 15,
 "iconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C.jpg",
 "borderSize": 0,
 "transparencyActive": false,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 40,
 "top": 15,
 "paddingRight": 0,
 "mode": "push",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 50,
 "rollOverIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_rollover.jpg",
 "pressedIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_pressed.jpg",
 "horizontalAlign": "right",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minWidth": 1,
 "toolTipBorderColor": "#767676",
 "right": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "shadow": false,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "minHeight": 1,
 "progressBarBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "class": "ViewerArea",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "paddingLeft": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "top": 0,
 "vrPointerColor": "#FFFFFF",
 "bottom": 0,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Viewer photoalbum"
 }
},
{
 "layout": "horizontal",
 "data": {
  "name": "Container arrows"
 },
 "children": [
  "this.IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
  "this.Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
  "this.IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33"
 ],
 "id": "Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "top": "0%",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "maxWidth": 1341,
 "data": {
  "name": "Image5820"
 },
 "id": "Image_182FD4E7_17B7_EF41_41AA_D495544C1972",
 "width": "100%",
 "minWidth": 1,
 "left": "0%",
 "borderSize": 0,
 "url": "skin/Image_182FD4E7_17B7_EF41_41AA_D495544C1972.jpg",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "0%",
 "minHeight": 1,
 "paddingRight": 0,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 894,
 "scaleMode": "fit_outside",
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "horizontal",
 "id": "Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "data": {
  "name": "Container space"
 },
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 50,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "horizontalAlign": "right",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0
},
{
 "layout": "vertical",
 "children": [
  "this.HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
  "this.Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
  "this.Button_1830D20E_17B1_6AC3_4198_688BED36E073"
 ],
 "id": "Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
 "scrollBarOpacity": 0.79,
 "minWidth": 100,
 "data": {
  "name": "-Container text"
 },
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#E73B2C",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 520,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 30,
 "borderRadius": 0,
 "gap": 25,
 "horizontalAlign": "left",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0
},
{
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353",
 "width": 370,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "data": {
  "name": "IconButton left arrow"
 },
 "id": "IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
 "iconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D.png",
 "minWidth": 70,
 "maxWidth": 130,
 "width": "8%",
 "borderSize": 0,
 "transparencyActive": true,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 70,
 "height": "8%",
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 130,
 "rollOverIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_rollover.png",
 "pressedIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "data": {
  "name": "Container separator"
 },
 "id": "Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "width": "84%",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": "30%",
 "paddingRight": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "data": {
  "name": "IconButton right arrow"
 },
 "id": "IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6",
 "iconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6.png",
 "minWidth": 70,
 "maxWidth": 130,
 "width": "8%",
 "borderSize": 0,
 "transparencyActive": true,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 70,
 "height": "8%",
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 130,
 "rollOverIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_rollover.png",
 "pressedIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "data": {
  "name": "HTMLText"
 },
 "id": "HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#FF361B",
 "borderSize": 0,
 "shadow": false,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingRight": 10,
 "class": "HTMLText",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 20,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:8.24vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.88vh;font-family:'Oswald';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.69vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.69vh;font-family:'Oswald Regular';\">Dolor sit amet, consectetur adipiscing elit. Nunc porttitor ac nulla vitae bibendum.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.51vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.51vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.51vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.51vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.51vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 10
},
{
 "fontFamily": "Bebas Neue Bold",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4",
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "width": 207,
 "minWidth": 1,
 "data": {
  "name": "Button31015"
 },
 "fontSize": "3.7vh",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 59,
 "paddingRight": 0,
 "fontWeight": "normal",
 "mode": "push",
 "backgroundColor": [
  "#FF361B"
 ],
 "label": "lorem ipsum",
 "class": "Button",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 1,
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "paddingLeft": 0,
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "cursor": "hand",
 "data": {
  "name": "IconButton left arrow"
 },
 "id": "IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
 "iconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F.png",
 "minWidth": 70,
 "maxWidth": 150,
 "width": "10%",
 "borderSize": 0,
 "transparencyActive": true,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 70,
 "height": "10%",
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 150,
 "rollOverIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_rollover.png",
 "pressedIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "data": {
  "name": "Container separator"
 },
 "id": "Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "width": "80%",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": "30%",
 "paddingRight": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "data": {
  "name": "IconButton right arrow"
 },
 "id": "IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33",
 "iconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33.png",
 "minWidth": 70,
 "maxWidth": 150,
 "width": "10%",
 "borderSize": 0,
 "transparencyActive": true,
 "shadow": false,
 "verticalAlign": "middle",
 "minHeight": 70,
 "height": "10%",
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 150,
 "rollOverIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_rollover.png",
 "pressedIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "data": {
  "name": "HTMLText"
 },
 "id": "HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#FF361B",
 "borderSize": 0,
 "shadow": false,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "height": "62.894%",
 "paddingRight": 10,
 "class": "HTMLText",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 3,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:4.71vh;font-family:'Oswald';\"><B>______</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.88vh;font-family:'Oswald';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.69vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.69vh;font-family:'Oswald Regular';\"><B>Dolor sit amet, consectetur adipiscing elit. Nunc porttitor ac nulla vitae.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.85vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.85vh;font-family:'Oswald';\"><B>www.loremipsum.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.85vh;font-family:'Oswald';\"><B>info@loremipsum.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.85vh;font-family:'Oswald';\"><B>Tlf.: +11 111 111 111</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.85vh;font-family:'Oswald';\"><B>Address line 1</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.85vh;font-family:'Oswald';\"><B>Address line 2</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 10
},
{
 "maxWidth": 211,
 "data": {
  "name": "Image logo"
 },
 "id": "Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
 "width": "70%",
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_16B75461_1B87_4970_41B9_4F94F65FB1C1.jpg",
 "shadow": false,
 "verticalAlign": "top",
 "minHeight": 1,
 "height": "30%",
 "paddingRight": 0,
 "class": "Image",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "maxHeight": 120,
 "scaleMode": "fit_inside",
 "horizontalAlign": "left",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "fontFamily": "Oswald Regular",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1830D20E_17B1_6AC3_4198_688BED36E073",
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "width": 140,
 "minWidth": 1,
 "data": {
  "name": "Button Contact"
 },
 "fontSize": "2.83vh",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 59,
 "paddingRight": 0,
 "fontWeight": "normal",
 "mode": "push",
 "backgroundColor": [
  "#FF361B"
 ],
 "label": "CONTACT",
 "click": "this.openLink('http://www.loremipsum.com', '_blank')",
 "class": "Button",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "paddingLeft": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 1
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "children": [
  "this.MainViewer",
  "this.Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
  "this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
  "this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
  "this.Container_2792A64E_17CC_071D_41B0_BEA23997C067",
  "this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1",
  "this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F",
  "this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5",
  "this.Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
  "this.Container_CE2A29A9_D70C_E429_41EA_24823840BBC8",
  "this.Container_CEACD04B_D7FC_6468_41E4_5FFA5AF041FB"
 ],
 "id": "rootPlayer",
 "vrPolyfillScale": 0.54,
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "data": {
  "name": "Player468"
 },
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "layout": "absolute",
 "borderSize": 0,
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "verticalAlign": "top",
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "existsKey": function(key){  return key in window; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "minHeight": 20,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "downloadEnabled": false,
 "paddingRight": 0,
 "height": "100%",
 "class": "Player",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "horizontalAlign": "left",
 "propagateClick": false,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
