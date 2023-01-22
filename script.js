(function(){
    var script = {
 "definitions": [{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
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
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 19.31,
  "pitch": -4.74
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
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
 "class": "PanoramaCamera",
 "id": "panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_camera",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_C90C4F2E_D717_BC28_41DD_D2236D126377",
 "timeToIdle": 3100,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": -3.89,
  "pitch": 0
 },
 "initialSequence": "this.sequence_C90C4F2E_D717_BC28_41DD_D2236D126377",
 "class": "PanoramaCamera",
 "id": "camera_C90FBF2E_D717_BC28_41D7_2A17C14842A7",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_CD3A2801_D714_63D9_41E9_924E51D23739",
   "camera": "this.panorama_CD3A2801_D714_63D9_41E9_924E51D23739_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343",
   "camera": "this.panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E",
   "camera": "this.panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E",
   "camera": "this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D835B754_CC42_2ECD_41DA_496D670D19DA",
   "camera": "this.panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4",
   "camera": "this.panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0",
   "camera": "this.panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68",
   "camera": "this.panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
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
 "class": "PanoramaCamera",
 "id": "panorama_CD3A2801_D714_63D9_41E9_924E51D23739_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 }
},
{
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
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
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.04,
  "pitch": -17.33
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
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
 "class": "PanoramaCamera",
 "id": "panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_camera",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
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
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -30.1,
  "pitch": -19.7
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
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
 "class": "PanoramaCamera",
 "id": "panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_camera",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_CE4BF28E_D715_A4EB_4181_8F921BD59989",
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -76.09,
  "pitch": -10.64
 },
 "initialSequence": "this.sequence_CE4BF28E_D715_A4EB_4181_8F921BD59989",
 "class": "PanoramaCamera",
 "id": "panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_camera",
 "automaticZoomSpeed": 10
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
 "pitch": 0,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
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
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_CD3A2801_D714_63D9_41E9_924E51D23739",
   "camera": "this.panorama_CD3A2801_D714_63D9_41E9_924E51D23739_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343",
   "camera": "this.panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E",
   "camera": "this.panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E",
   "camera": "this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D835B754_CC42_2ECD_41DA_496D670D19DA",
   "camera": "this.panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4",
   "camera": "this.panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0",
   "camera": "this.panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68",
   "camera": "this.panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82",
   "camera": "this.panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 8, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist"
},
{
 "label": "V\u00eddeo teste",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_F61CC428_D30E_B7D5_41D6_A15FFC8ABEBE_t.jpg",
 "width": 1920,
 "class": "Video",
 "loop": false,
 "id": "video_F61CC428_D30E_B7D5_41D6_A15FFC8ABEBE",
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
 "pitch": 0,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
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
 "idleSequence": "this.sequence_C9B3EE27_D717_BFD8_41B8_EE9C36254B3C",
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.47,
  "pitch": 0
 },
 "initialSequence": "this.sequence_C9B3EE27_D717_BFD8_41B8_EE9C36254B3C",
 "class": "PanoramaCamera",
 "id": "camera_C9B3DE27_D717_BFD8_41EA_B0A400B77E1F",
 "automaticZoomSpeed": 10
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
 "pitch": 0,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
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
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
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
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 167.92,
  "pitch": 0.42
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
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
 "class": "PanoramaCamera",
 "id": "panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_camera",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_C9D3BE9F_D717_BCE8_41E6_25DA30FFD3CA",
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 13.02,
  "pitch": 0
 },
 "initialSequence": "this.sequence_C9D3BE9F_D717_BCE8_41E6_25DA30FFD3CA",
 "class": "PanoramaCamera",
 "id": "camera_C9D3AE9F_D717_BCE8_41D9_7AEBEFAA1D46",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
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
 "timeToIdle": 3100,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 20.5,
  "pitch": -24.8
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
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
 "class": "PanoramaCamera",
 "id": "panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_camera",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_C9C9CE47_D717_BC58_41E8_3D67570F7FDF",
 "timeToIdle": 3100,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": -23.32,
  "pitch": 0
 },
 "initialSequence": "this.sequence_C9C9CE47_D717_BC58_41E8_3D67570F7FDF",
 "class": "PanoramaCamera",
 "id": "camera_C9C92E47_D717_BC58_419D_8CD3B90FCABA",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_C9DD0E67_D717_BC58_41E7_D95A57973218",
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.44,
  "pitch": 0
 },
 "initialSequence": "this.sequence_C9DD0E67_D717_BC58_41E7_D95A57973218",
 "class": "PanoramaCamera",
 "id": "camera_C9DD7E67_D717_BC58_41E9_0F6436D7AB3D",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.video_F61CC428_D30E_B7D5_41D6_A15FFC8ABEBE",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C9972DCF_D717_BC69_41D3_D4732A3CFB0A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C9972DCF_D717_BC69_41D3_D4732A3CFB0A, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "class": "VideoPlayListItem",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_C9972DCF_D717_BC69_41D3_D4732A3CFB0A"
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
 "pitch": 0,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
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
 "idleSequence": "this.sequence_C9E48ECE_D717_BC68_41D5_AB81D08BD1E4",
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -66.76,
  "pitch": 0
 },
 "initialSequence": "this.sequence_C9E48ECE_D717_BC68_41D5_AB81D08BD1E4",
 "class": "PanoramaCamera",
 "id": "camera_C9E4DECE_D717_BC68_41B5_E8696A3941C0",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_C9FBDEFF_D717_BC29_417E_8D1DDB5931AE",
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 101.79,
  "pitch": 0
 },
 "initialSequence": "this.sequence_C9FBDEFF_D717_BC29_417E_8D1DDB5931AE",
 "class": "PanoramaCamera",
 "id": "camera_C9FBCEFF_D717_BC29_41DD_4E03979E0210",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_C9BDEE04_D717_BFDF_41C0_63929B263BB8",
 "timeToIdle": 3100,
 "initialPosition": {
  "hfov": 118,
  "class": "PanoramaCameraPosition",
  "yaw": 38.38,
  "pitch": 0
 },
 "initialSequence": "this.sequence_C9BDEE04_D717_BFDF_41C0_63929B263BB8",
 "class": "PanoramaCamera",
 "id": "camera_C9BDDE04_D717_BFDF_41B8_436867F078D4",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
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
 "timeToIdle": 3100,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
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
 "class": "PanoramaCamera",
 "id": "panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_camera",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
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
 "timeToIdle": 3100,
 "initialPosition": {
  "hfov": 118,
  "class": "PanoramaCameraPosition",
  "yaw": -0.72,
  "pitch": -2.65
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
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
 "class": "PanoramaCamera",
 "id": "panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true
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
 "pitch": 0,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
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
 "hfovMax": 140,
 "hfovMin": "150%",
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Sacada e Churrasqueira",
 "id": "panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E",
 "thumbnailUrl": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_t.jpg",
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
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 140,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
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
   "yaw": 156.68,
   "backwardYaw": -166.98,
   "distance": 1,
   "panorama": "this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E"
  },
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
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Su\u00edte 2",
 "id": "panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0",
 "thumbnailUrl": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 140,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
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
 "hfovMax": 140,
 "hfovMin": "150%",
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Su\u00edte 1",
 "id": "panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68",
 "thumbnailUrl": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_F4BADACC_D57D_906D_41CB_DA7DDAC8CCD7"
 ]
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "toolTipOpacity": 0.5,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 50,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA"
 ],
 "class": "Container",
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "12.832%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--- MENU"
 },
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": false,
 "layout": "absolute",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "class": "Container",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": 115.05,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 641,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": false,
 "layout": "absolute",
 "scrollBarWidth": 10
},
{
 "class": "Container",
 "id": "Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
 "left": 30,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "width": 573,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": 25,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 116,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--STICKER"
 },
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": false,
 "layout": "absolute",
 "scrollBarWidth": 10
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
  "this.Container_386C28AA_17CC_0B05_41B7_3334E854CA29"
 ],
 "class": "Container",
 "id": "Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--INFO photoalbum"
 },
 "visible": false,
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_3811F7E8_17DC_0505_417B_3406AEA143C9"
 ],
 "class": "Container",
 "id": "Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "visible": false,
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_2792F64D_17CC_071F_415E_8686768A06D3"
 ],
 "class": "Container",
 "id": "Container_2792A64E_17CC_071D_41B0_BEA23997C067",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--LOCATION"
 },
 "visible": false,
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E"
 ],
 "class": "Container",
 "id": "Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "visible": false,
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076"
 ],
 "class": "Container",
 "id": "Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "visible": false,
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
  "this.Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27"
 ],
 "class": "Container",
 "id": "Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--CONTACT"
 },
 "visible": false,
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F"
 ],
 "id": "Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
 "scrollBarColor": "#000000",
 "width": 319,
 "class": "Container",
 "backgroundColorDirection": "horizontal",
 "shadowColor": "#000000",
 "right": 79,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.7,
 "shadowVerticalLength": 8,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": 32,
 "contentOpaque": false,
 "shadowBlurRadius": 6,
 "height": 44,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.58,
 "minWidth": 1,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.49,
 "borderRadius": 0,
 "backgroundColor": [
  "#FF361B",
  "#000000",
  "#000000",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "red block"
 },
 "backgroundColorRatios": [
  0.33,
  0.73,
  0.89,
  0.99
 ],
 "layout": "absolute",
 "shadowHorizontalLength": -6,
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Image_CEA0A359_D70B_E469_41E6_1193BE5EC764"
 ],
 "class": "Container",
 "id": "Container_CE2A29A9_D70C_E429_41EA_24823840BBC8",
 "left": "2.17%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "2.86%",
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "13.406%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "25.378%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container25544"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "absolute",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_CD73DD53_D7FD_BC78_41E1_CCF9C2A65B44"
 ],
 "class": "Container",
 "id": "Container_CEACD04B_D7FC_6468_41E4_5FFA5AF041FB",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "7.88%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "17.45%",
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "5.525%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "8.403%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container26829"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "absolute",
 "scrollBarWidth": 10
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "class": "IconButton",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "class": "IconButton",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 37,
 "maxWidth": 49,
 "class": "IconButton",
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "horizontalAlign": "center",
 "right": 30,
 "width": 49,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
 "bottom": 8,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 37,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "class": "IconButton",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "class": "IconButton",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton HS "
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "class": "IconButton",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "class": "PanoramaCameraSequence",
 "id": "sequence_C90C4F2E_D717_BC28_41DD_D2236D126377",
 "restartMovementOnUserInteraction": false,
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
 "class": "PanoramaCameraSequence",
 "id": "sequence_CE4BF28E_D715_A4EB_4181_8F921BD59989",
 "restartMovementOnUserInteraction": false,
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
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 25.68,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CBDC0823_D71C_63D8_41DA_53ABC4D6CBC0",
   "pitch": -31.5,
   "yaw": 67.02,
   "distance": 100
  }
 ],
 "id": "overlay_CCE335DB_D71C_AC69_41D3_517F4FF0A18D",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 25.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -31.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 23.72,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CBDCD824_D71C_63D8_41AD_7CF2F3EF3482",
   "pitch": -38.05,
   "yaw": -46.71,
   "distance": 100
  }
 ],
 "id": "overlay_CB9FE8E0_D71C_6458_41DC_4B32F5666C33",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 23.72,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CD3A2801_D714_63D9_41E9_924E51D23739_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -38.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E, this.camera_C9FBCEFF_D717_BC29_41DD_4E03979E0210); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 20.37,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F8F21285_D57E_90DF_41DE_1CBEAD5E3D4C",
   "pitch": -47.45,
   "yaw": -101.53,
   "distance": 100
  }
 ],
 "id": "overlay_F4EAC60F_D50A_B3EB_418B_A8D6FF618DC8",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 20.37,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -47.45
  }
 ]
},
{
 "class": "PanoramaCameraSequence",
 "id": "sequence_C9B3EE27_D717_BFD8_41B8_EE9C36254B3C",
 "restartMovementOnUserInteraction": false,
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
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4, this.camera_C9B3DE27_D717_BFD8_41EA_B0A400B77E1F); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 17,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F44F5660_D30D_B055_41DE_04C5B91F4092",
   "pitch": -55.64,
   "yaw": -78.21,
   "distance": 100
  }
 ],
 "id": "overlay_F41A9AF8_D30E_9035_41D3_6DD0F95708A1",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -78.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -55.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D835B754_CC42_2ECD_41DA_496D670D19DA, this.camera_C9BDDE04_D717_BFDF_41B8_436867F078D4); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 17.36,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F44F3660_D30D_B055_41D4_D1A7ADD2C004",
   "pitch": -54.82,
   "yaw": 82.56,
   "distance": 100
  }
 ],
 "id": "overlay_F5F46F3B_D30D_702B_41D4_F968E6DED12B",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -54.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0, this.camera_C9C92E47_D717_BC58_419D_8CD3B90FCABA); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 12.98,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB299A4D_D716_F06F_41D2_0E089B6841D2",
   "pitch": -67.7,
   "yaw": -166.98,
   "distance": 100
  }
 ],
 "id": "overlay_F40F2518_D70D_71F5_41CE_BE5B687C6EC4",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -67.7
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DFC30CDB_CC42_63FB_41CD_E1329877661C, this.camera_CC7CA17D_D7FC_A428_41E8_99E694573770)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB294A4D_D716_F06F_41E0_56F5AB7FA295",
   "pitch": -63.82,
   "yaw": 0.74,
   "distance": 100
  }
 ],
 "id": "overlay_F7EF1A07_D70A_F3DC_41D7_DE7DC3F5336D",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -63.82
  }
 ]
},
{
 "class": "PanoramaCameraSequence",
 "id": "sequence_C9D3BE9F_D717_BCE8_41E6_25DA30FFD3CA",
 "restartMovementOnUserInteraction": false,
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
 "class": "PanoramaCameraSequence",
 "id": "sequence_C9C9CE47_D717_BC58_41E8_3D67570F7FDF",
 "restartMovementOnUserInteraction": false,
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
 "class": "PanoramaCameraSequence",
 "id": "sequence_C9DD0E67_D717_BC58_41E7_D95A57973218",
 "restartMovementOnUserInteraction": false,
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
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DFC30CDB_CC42_63FB_41CD_E1329877661C, this.camera_CC41D2A2_D7FC_A4D8_41BF_B4E6928E0F11)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.21,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F9B98E5D_D315_906F_41D4_74C786D8CEDE",
   "pitch": -14.51,
   "yaw": -52.17,
   "distance": 100
  }
 ],
 "id": "overlay_F24FCB87_D30A_B0DB_41DF_2E129F2B9213",
 "data": {
  "label": "Circle Generic 03"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -14.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 18.45,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F9B9FE5D_D315_906F_41D8_494DEFA8A3E4",
   "pitch": -27.2,
   "yaw": 108.96,
   "distance": 100
  }
 ],
 "id": "overlay_F3A0EDF8_D30B_7035_41D4_5E7CFF41C72D",
 "data": {
  "label": "Circle 03c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.45,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 108.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -27.2
  }
 ]
},
{
 "class": "PanoramaCameraSequence",
 "id": "sequence_C9E48ECE_D717_BC68_41D5_AB81D08BD1E4",
 "restartMovementOnUserInteraction": false,
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
 "class": "PanoramaCameraSequence",
 "id": "sequence_C9FBDEFF_D717_BC29_417E_8D1DDB5931AE",
 "restartMovementOnUserInteraction": false,
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
 "class": "PanoramaCameraSequence",
 "id": "sequence_C9BDEE04_D717_BFDF_41C0_63929B263BB8",
 "restartMovementOnUserInteraction": false,
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
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0, this.camera_C90FBF2E_D717_BC28_41D7_2A17C14842A7); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.21,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB2B8A4D_D716_F06F_41C0_35A52B8A755E",
   "pitch": -72.2,
   "yaw": 113.24,
   "distance": 100
  }
 ],
 "id": "overlay_F45ACD7E_D715_902D_41DD_78A446BA54B7",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 10.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 113.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -72.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 22.42,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F4C95DB4_D30E_903C_41E8_8D20887AD8C9",
   "pitch": -17.59,
   "yaw": 1.13,
   "distance": 100
  }
 ],
 "id": "overlay_F50A3415_D317_97FC_41CE_97EA474842C8",
 "data": {
  "label": "Arrow 05"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 22.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -17.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 14.46,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F4C89DB4_D30E_903C_41DF_F0A26D8957CC",
   "pitch": -45,
   "yaw": -83.86,
   "distance": 50
  }
 ],
 "id": "overlay_F9522F06_D316_91DD_41C0_23904D8570AE",
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFB2B5BE_CC42_6DBD_41B7_6D4C6522A85E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -45
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E, this.camera_C9DD7E67_D717_BC58_41E9_0F6436D7AB3D); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 17,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F8F28285_D57E_90DF_41DE_B0F3050F1139",
   "pitch": -55.64,
   "yaw": -141.62,
   "distance": 100
  }
 ],
 "id": "overlay_F72FDCFF_D50B_902C_41D6_08CB464306C5",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -141.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -55.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E, this.camera_C9D3AE9F_D717_BCE8_41D9_7AEBEFAA1D46); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F8F25285_D57E_90DF_41C8_BC1ABA1CBF86",
   "pitch": -34.85,
   "yaw": 156.68,
   "distance": 100
  }
 ],
 "id": "overlay_F4F7F2A7_D576_B0DB_41D8_6B6C6E7B8EC6",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -34.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82, this.camera_C9E4DECE_D717_BC68_41B5_E8696A3941C0); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 17.15,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB2A1A4D_D716_F06F_41D1_EF8EB924628A",
   "pitch": -34.7,
   "yaw": 176.11,
   "distance": 100
  }
 ],
 "id": "overlay_F5AC04E7_D70A_F05B_41D4_91CB1A12F9D7",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -34.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 18.42,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F424D3FA_D71B_9035_41E2_B3A60BF65C61",
   "pitch": -25.77,
   "yaw": -2.45,
   "distance": 100
  }
 ],
 "id": "overlay_F47DC0A4_D71B_70DD_41E2_9D2A9F52FFDE",
 "data": {
  "label": "Arrow 04"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFC061B8_CC42_E245_41D7_54F78D087AB0_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -25.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 25.02,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F8F3C285_D57E_90DF_41C2_81DA0FD6B4BD",
   "pitch": -21.27,
   "yaw": 178.7,
   "distance": 100
  }
 ],
 "id": "overlay_F4BADACC_D57D_906D_41CB_DA7DDAC8CCD7",
 "data": {
  "label": "Circle 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 25.02,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -21.27
  }
 ]
},
{
 "maxHeight": 2,
 "maxWidth": 3000,
 "class": "Image",
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "left": "0%",
 "horizontalAlign": "center",
 "right": "0%",
 "borderSize": 0,
 "minHeight": 1,
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "paddingRight": 0,
 "bottom": 53,
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 2,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "white line"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "scaleMode": "fit_outside"
},
{
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
  "this.Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
  "this.Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
  "this.Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
  "this.Button_33E0F47E_11C1_A20D_419F_BB809AD89259"
 ],
 "class": "Container",
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "width": 1199,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "gap": 3,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 51,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-button set container"
 },
 "paddingLeft": 30,
 "propagateClick": false,
 "layout": "horizontal",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "class": "Container",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": 110,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 110,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "button menu sup"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "horizontal",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "class": "Container",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "91.304%",
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 3,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "85.959%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-button set"
 },
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": false,
 "layout": "vertical",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
  "this.Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3"
 ],
 "id": "Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
 "left": "10%",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "10%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "5%",
 "contentOpaque": false,
 "bottom": "5%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0"
 ],
 "class": "Container",
 "id": "Container_386C28AA_17CC_0B05_41B7_3334E854CA29",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "10%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "top": "5%",
 "contentOpaque": false,
 "bottom": "80%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "vertical",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_3811E7E8_17DC_0505_4189_A53F22044B22",
  "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B"
 ],
 "id": "Container_3811F7E8_17DC_0505_417B_3406AEA143C9",
 "left": "15%",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "7%",
 "contentOpaque": false,
 "bottom": "7%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
  "this.WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8"
 ],
 "id": "Container_2792F64D_17CC_071F_415E_8686768A06D3",
 "left": "15%",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "7%",
 "contentOpaque": false,
 "bottom": "7%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 4,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
  "this.MapViewer"
 ],
 "id": "Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E",
 "left": "15%",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "7%",
 "contentOpaque": false,
 "bottom": "7%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 4,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_20EC87A3_174C_050A_4198_F9830A58FD09",
  "this.Container_2F7D65D9_1744_0506_41B3_4FD17B01B645"
 ],
 "id": "Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076",
 "left": "15%",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "7%",
 "contentOpaque": false,
 "bottom": "7%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 6,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
  "this.Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82"
 ],
 "id": "Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
 "left": "10%",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "10%",
 "borderSize": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "top": "5%",
 "scrollBarVisible": "rollOver",
 "bottom": "5%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6"
 ],
 "class": "Container",
 "id": "Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "10%",
 "borderSize": 0,
 "overflow": "visible",
 "minHeight": 1,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "top": "5%",
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "vertical",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "class": "Label",
 "id": "Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
 "horizontalAlign": "left",
 "right": -5,
 "width": 319,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "textShadowOpacity": 1,
 "minHeight": 1,
 "textShadowColor": "#000000",
 "text": "CAMPINAS-SÃO JOSÉ/SC",
 "textShadowVerticalLength": 0,
 "paddingRight": 0,
 "bottom": -2,
 "verticalAlign": "top",
 "minWidth": 1,
 "textShadowHorizontalLength": 0,
 "fontSize": "29px",
 "backgroundOpacity": 0,
 "textShadowBlurRadius": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 44,
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "textDecoration": "none",
 "paddingLeft": 0,
 "propagateClick": false,
 "data": {
  "name": "text 1"
 },
 "fontWeight": "bold"
},
{
 "maxHeight": 1000,
 "maxWidth": 1000,
 "class": "Image",
 "id": "Image_CEA0A359_D70B_E469_41E6_1193BE5EC764",
 "left": "0%",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "url": "skin/Image_CEA0A359_D70B_E469_41E6_1193BE5EC764.png",
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Image25555"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "scaleMode": "fit_inside"
},
{
 "transparencyActive": false,
 "maxHeight": 1095,
 "maxWidth": 1095,
 "class": "IconButton",
 "id": "IconButton_CD73DD53_D7FD_BC78_41E1_CCF9C2A65B44",
 "horizontalAlign": "center",
 "right": "0%",
 "width": 60,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconURL": "skin/IconButton_CD73DD53_D7FD_BC78_41E1_CCF9C2A65B44.png",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.openLink('http://wa.me/5548991171170', '_blank')",
 "borderRadius": 0,
 "height": 47,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton27471"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
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
   "class": "ImageResourceLevel",
   "width": 1080,
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
   "class": "ImageResourceLevel",
   "width": 1080,
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
 "id": "AnimatedImageResource_F8F21285_D57E_90DF_41DE_1CBEAD5E3D4C",
 "levels": [
  {
   "url": "media/panorama_DFC37E27_CC42_7E4B_41BD_2D95D45128D4_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
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
 "id": "AnimatedImageResource_F44F5660_D30D_B055_41DE_04C5B91F4092",
 "levels": [
  {
   "url": "media/panorama_DFB006A3_CC42_6E4B_41E7_EC02A4E7EB3E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
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
   "class": "ImageResourceLevel",
   "width": 1080,
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
   "class": "ImageResourceLevel",
   "width": 1080,
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
   "class": "ImageResourceLevel",
   "width": 1080,
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
 "id": "AnimatedImageResource_F9B98E5D_D315_906F_41D4_74C786D8CEDE",
 "levels": [
  {
   "url": "media/panorama_DFC082C8_CC42_27C6_41D2_A0AC6B299343_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
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
   "class": "ImageResourceLevel",
   "width": 1080,
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
 "id": "AnimatedImageResource_FB2B8A4D_D716_F06F_41C0_35A52B8A755E",
 "levels": [
  {
   "url": "media/panorama_DFC23F38_CC42_1E45_41C2_6CE7F5887F82_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
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
   "class": "ImageResourceLevel",
   "width": 460,
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
   "class": "ImageResourceLevel",
   "width": 400,
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
 "id": "AnimatedImageResource_F8F28285_D57E_90DF_41DE_B0F3050F1139",
 "levels": [
  {
   "url": "media/panorama_D835B754_CC42_2ECD_41DA_496D670D19DA_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
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
   "class": "ImageResourceLevel",
   "width": 1080,
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
   "class": "ImageResourceLevel",
   "width": 1080,
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
   "class": "ImageResourceLevel",
   "width": 1080,
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
 "id": "AnimatedImageResource_F8F3C285_D57E_90DF_41C2_81DA0FD6B4BD",
 "levels": [
  {
   "url": "media/panorama_DFBCBA72_CC42_26C5_41D4_D88AAD0BDF68_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button house info"
 },
 "class": "Button",
 "shadowSpread": 1,
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "horizontalAlign": "center",
 "fontFamily": "Oswald",
 "width": 120,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 0,
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "HOUSE INFO",
 "borderRadius": 0,
 "height": 40,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, true, 0, null, null, false)",
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button panorama list"
 },
 "class": "Button",
 "shadowSpread": 1,
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "horizontalAlign": "center",
 "fontFamily": "Oswald",
 "width": 140,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "mode": "push",
 "fontSize": 18,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "PANORAMA LIST",
 "borderRadius": 0,
 "height": 40,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, true, 0, null, null, false)",
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button location"
 },
 "class": "Button",
 "shadowSpread": 1,
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "horizontalAlign": "center",
 "fontFamily": "Oswald",
 "width": 100,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "mode": "push",
 "fontSize": 18,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "LOCATION",
 "borderRadius": 0,
 "height": 40,
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, true, 0, null, null, false)",
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button floorplan"
 },
 "class": "Button",
 "shadowSpread": 1,
 "id": "Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
 "horizontalAlign": "center",
 "fontFamily": "Oswald",
 "width": 113,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "mode": "push",
 "fontSize": 18,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "FLOORPLAN",
 "borderRadius": 0,
 "height": 40,
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, true, 0, null, null, false)",
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "rollOverFontColor": "#FFFFFF",
 "paddingLeft": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button photoalbum"
 },
 "class": "Button",
 "shadowSpread": 1,
 "id": "Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
 "horizontalAlign": "center",
 "fontFamily": "Oswald",
 "width": 122,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "mode": "push",
 "fontSize": 18,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "PHOTOALBUM",
 "borderRadius": 0,
 "height": 40,
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, true, 0, null, null, false)",
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "rollOverFontColor": "#FFFFFF",
 "paddingLeft": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button contact"
 },
 "class": "Button",
 "shadowSpread": 1,
 "id": "Button_33E0F47E_11C1_A20D_419F_BB809AD89259",
 "horizontalAlign": "center",
 "fontFamily": "Oswald",
 "width": 100,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "mode": "push",
 "fontSize": 18,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "CONTACT",
 "borderRadius": 0,
 "height": 40,
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, true, 0, null, null, false)",
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "transparencyActive": true,
 "maxHeight": 60,
 "maxWidth": 60,
 "class": "IconButton",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "horizontalAlign": "center",
 "width": 60,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "borderRadius": 0,
 "height": 60,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "image button menu"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "class": "IconButton",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingTop": 0,
 "click": "this.shareTwitter(window.location.href)",
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "class": "IconButton",
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingTop": 0,
 "click": "this.shareFacebook(window.location.href)",
 "borderRadius": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FB"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
  "this.Container_386D68AA_17CC_0B05_41B3_8E850505A16B"
 ],
 "class": "Container",
 "id": "Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "85%",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
  "this.Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
  "this.Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF"
 ],
 "class": "Container",
 "id": "Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 50,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 460,
 "width": "50%",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 50,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "class": "IconButton",
 "id": "IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "25%",
 "minHeight": 40,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0.jpg",
 "verticalAlign": "middle",
 "minWidth": 40,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
  "this.IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E"
 ],
 "class": "Container",
 "id": "Container_3811E7E8_17DC_0505_4189_A53F22044B22",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FF361B"
 ],
 "width": "100%",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 80,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "itemMaxWidth": 1000,
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B",
 "scrollBarColor": "#FF361B",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "itemLabelFontStyle": "normal",
 "scrollBarVisible": "rollOver",
 "rollOverItemLabelFontSize": 16,
 "horizontalAlign": "center",
 "itemPaddingRight": 3,
 "minHeight": 1,
 "itemMode": "normal",
 "rollOverItemThumbnailShadowColor": "#FF361B",
 "itemThumbnailOpacity": 1,
 "itemLabelFontFamily": "Oswald Regular",
 "itemMaxHeight": 1000,
 "itemBorderRadius": 0,
 "paddingRight": 70,
 "minWidth": 1,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "width": "100%",
 "verticalAlign": "middle",
 "selectedItemLabelFontColor": "#C1280E",
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "backgroundOpacity": 0,
 "itemOpacity": 1,
 "itemHorizontalAlign": "center",
 "itemBackgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 0,
 "height": "100%",
 "shadow": false,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "paddingLeft": 70,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "propagateClick": false,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "class": "ThumbnailGrid",
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemLabelFontSize": 16,
 "selectedItemThumbnailShadow": true,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#C1280E",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "scrollBarMargin": 2,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 16,
 "itemThumbnailScaleMode": "fit_outside",
 "itemMinWidth": 50,
 "itemHeight": 160,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "paddingTop": 30,
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "paddingBottom": 70,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "scrollBarWidth": 10,
 "itemThumbnailShadow": false,
 "itemLabelGap": 7,
 "itemPaddingBottom": 3,
 "data": {
  "name": "ThumbnailList5161"
 },
 "itemThumbnailWidth": 220
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
  "this.IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14"
 ],
 "class": "Container",
 "id": "Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FF361B"
 ],
 "width": "100%",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 80,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "class": "WebFrame",
 "id": "WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14376.151861634273!2d-73.99351941263586!3d40.75732561349075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses!2ses!4v1542287427714\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "scrollEnabled": true,
 "paddingRight": 0,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame52781"
 },
 "height": "100%",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
  "this.IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14"
 ],
 "class": "Container",
 "id": "Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FF361B"
 ],
 "width": "100%",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 80,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 1,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
  "this.IconButton_20ECE7A3_174C_050A_41B4_AF609035102C"
 ],
 "class": "Container",
 "id": "Container_20EC87A3_174C_050A_4198_F9830A58FD09",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FF361B"
 ],
 "width": "100%",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 80,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
  "this.Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0"
 ],
 "class": "Container",
 "id": "Container_2F7D65D9_1744_0506_41B3_4FD17B01B645",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "100%",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-photoalbum"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_182FD4E7_17B7_EF41_41AA_D495544C1972"
 ],
 "class": "Container",
 "id": "Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "85%",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
  "this.Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
  "this.Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353"
 ],
 "class": "Container",
 "id": "Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 50,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 460,
 "width": "50%",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 50,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "class": "IconButton",
 "id": "IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "25%",
 "minHeight": 40,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6.jpg",
 "verticalAlign": "middle",
 "minWidth": 40,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
 "left": 0,
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "right": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "minHeight": 1,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "bottom": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "children": [
  "this.IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
  "this.Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
  "this.IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6"
 ],
 "class": "Container",
 "id": "Container_386D68AA_17CC_0B05_41B3_8E850505A16B",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container arrows"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "horizontal",
 "scrollBarWidth": 10
},
{
 "scrollBarWidth": 10,
 "class": "Container",
 "id": "Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "height": 60,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
  "this.Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4"
 ],
 "class": "Container",
 "id": "Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 100,
 "width": "100%",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "class": "Container",
 "id": "Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 40,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "class": "HTMLText",
 "id": "HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingRight": 0,
 "top": "0%",
 "width": "77.115%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingTop": 17,
 "borderRadius": 0,
 "height": 80,
 "shadow": false,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.7vh;font-family:'Oswald';\"><B>PANORAMA LIST/</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingLeft": 80,
 "propagateClick": false,
 "scrollBarWidth": 10
},
{
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "class": "IconButton",
 "id": "IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E",
 "horizontalAlign": "right",
 "right": 15,
 "width": 50,
 "borderSize": 0,
 "minHeight": 40,
 "paddingRight": 0,
 "top": 15,
 "verticalAlign": "top",
 "minWidth": 40,
 "mode": "push",
 "iconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E.jpg",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_pressed.jpg",
 "borderRadius": 0,
 "height": 50,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "class": "HTMLText",
 "id": "HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingRight": 0,
 "top": "0%",
 "width": "77.115%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingTop": 17,
 "borderRadius": 0,
 "height": 80,
 "shadow": false,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.7vh;font-family:'Oswald';\"><B>LOCATION/</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingLeft": 80,
 "propagateClick": false,
 "scrollBarWidth": 10
},
{
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "class": "IconButton",
 "id": "IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14",
 "horizontalAlign": "right",
 "right": 15,
 "width": 70,
 "borderSize": 0,
 "minHeight": 40,
 "paddingRight": 0,
 "top": 15,
 "verticalAlign": "top",
 "minWidth": 40,
 "mode": "push",
 "iconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14.jpg",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_pressed.jpg",
 "borderRadius": 0,
 "height": 70,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "class": "HTMLText",
 "id": "HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingRight": 0,
 "top": "0%",
 "width": "77.115%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingTop": 17,
 "borderRadius": 0,
 "height": 80,
 "shadow": false,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.7vh;font-family:'Oswald';\"><B>FLOORPLAN/</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingLeft": 80,
 "propagateClick": false,
 "scrollBarWidth": 10
},
{
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "class": "IconButton",
 "id": "IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14",
 "horizontalAlign": "right",
 "right": 15,
 "width": 70,
 "borderSize": 0,
 "minHeight": 40,
 "paddingRight": 0,
 "top": 15,
 "verticalAlign": "top",
 "minWidth": 40,
 "mode": "push",
 "iconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14.jpg",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_pressed.jpg",
 "borderRadius": 0,
 "height": 70,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "class": "HTMLText",
 "id": "HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingRight": 0,
 "top": "0%",
 "width": "77.115%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingTop": 17,
 "borderRadius": 0,
 "height": 80,
 "shadow": false,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.7vh;font-family:'Oswald';\"><B>PHOTOALBUM/</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingLeft": 80,
 "propagateClick": false,
 "scrollBarWidth": 10
},
{
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "class": "IconButton",
 "id": "IconButton_20ECE7A3_174C_050A_41B4_AF609035102C",
 "horizontalAlign": "right",
 "right": 15,
 "width": 50,
 "borderSize": 0,
 "minHeight": 40,
 "paddingRight": 0,
 "top": 15,
 "verticalAlign": "top",
 "minWidth": 40,
 "mode": "push",
 "iconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C.jpg",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_pressed.jpg",
 "borderRadius": 0,
 "height": 50,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
 "left": 0,
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "right": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "minHeight": 1,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "bottom": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Viewer photoalbum"
 }
},
{
 "children": [
  "this.IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
  "this.Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
  "this.IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33"
 ],
 "class": "Container",
 "id": "Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container arrows"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "horizontal",
 "scrollBarWidth": 10
},
{
 "maxHeight": 894,
 "maxWidth": 1341,
 "class": "Image",
 "id": "Image_182FD4E7_17B7_EF41_41AA_D495544C1972",
 "left": "0%",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "url": "skin/Image_182FD4E7_17B7_EF41_41AA_D495544C1972.jpg",
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Image5820"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "scaleMode": "fit_outside"
},
{
 "scrollBarWidth": 10,
 "class": "Container",
 "id": "Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "height": 50,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
  "this.Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
  "this.Button_1830D20E_17B1_6AC3_4198_688BED36E073"
 ],
 "class": "Container",
 "id": "Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 100,
 "width": "100%",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "gap": 25,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 30,
 "data": {
  "name": "-Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "class": "Container",
 "id": "Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 40,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": true,
 "maxHeight": 130,
 "maxWidth": 130,
 "class": "IconButton",
 "id": "IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "8%",
 "minHeight": 70,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D.png",
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_pressed.png",
 "borderRadius": 0,
 "height": "8%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton left arrow"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "class": "Container",
 "id": "Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "84%",
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "30%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container separator"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": false
},
{
 "transparencyActive": true,
 "maxHeight": 130,
 "maxWidth": 130,
 "class": "IconButton",
 "id": "IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "8%",
 "minHeight": 70,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6.png",
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_pressed.png",
 "borderRadius": 0,
 "height": "8%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton right arrow"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "class": "HTMLText",
 "id": "HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
 "scrollBarColor": "#FF361B",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:8.4vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.05vh;font-family:'Oswald';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.69vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.69vh;font-family:'Oswald Regular';\">Dolor sit amet, consectetur adipiscing elit. Nunc porttitor ac nulla vitae bibendum.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.68vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.68vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "propagateClick": false
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button31015"
 },
 "class": "Button",
 "id": "Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "fontFamily": "Bebas Neue Bold",
 "width": 207,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "rollOverBackgroundOpacity": 1,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "height": 59,
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "mode": "push",
 "fontSize": "3.7vh",
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "lorem ipsum",
 "borderRadius": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 0,
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "transparencyActive": true,
 "maxHeight": 150,
 "maxWidth": 150,
 "class": "IconButton",
 "id": "IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "10%",
 "minHeight": 70,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F.png",
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_pressed.png",
 "borderRadius": 0,
 "height": "10%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton left arrow"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "class": "Container",
 "id": "Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "80%",
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "30%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container separator"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": false
},
{
 "transparencyActive": true,
 "maxHeight": 150,
 "maxWidth": 150,
 "class": "IconButton",
 "id": "IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "10%",
 "minHeight": 70,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33.png",
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_pressed.png",
 "borderRadius": 0,
 "height": "10%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton right arrow"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand"
},
{
 "class": "HTMLText",
 "id": "HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
 "scrollBarColor": "#FF361B",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "62.894%",
 "shadow": false,
 "paddingBottom": 3,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:4.87vh;font-family:'Oswald';\"><B>______</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.05vh;font-family:'Oswald';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.69vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.69vh;font-family:'Oswald Regular';\"><B>Dolor sit amet, consectetur adipiscing elit. Nunc porttitor ac nulla vitae.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.85vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.85vh;font-family:'Oswald';\"><B>www.loremipsum.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.85vh;font-family:'Oswald';\"><B>info@loremipsum.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.85vh;font-family:'Oswald';\"><B>Tlf.: +11 111 111 111</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.85vh;font-family:'Oswald';\"><B>Address line 1</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.85vh;font-family:'Oswald';\"><B>Address line 2</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "propagateClick": false
},
{
 "maxHeight": 120,
 "maxWidth": 211,
 "class": "Image",
 "id": "Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
 "horizontalAlign": "left",
 "borderSize": 0,
 "width": "70%",
 "minHeight": 1,
 "url": "skin/Image_16B75461_1B87_4970_41B9_4F94F65FB1C1.jpg",
 "paddingRight": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "30%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Image logo"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "scaleMode": "fit_inside"
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Contact"
 },
 "class": "Button",
 "id": "Button_1830D20E_17B1_6AC3_4198_688BED36E073",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "fontFamily": "Oswald Regular",
 "width": 140,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "rollOverBackgroundOpacity": 1,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "height": 59,
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "mode": "push",
 "fontSize": "2.83vh",
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "CONTACT",
 "borderRadius": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "click": "this.openLink('http://www.loremipsum.com', '_blank')",
 "shadow": false,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
}],
 "scrollBarWidth": 10,
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
 "class": "Player",
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.54,
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "overflow": "visible",
 "borderSize": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "horizontalAlign": "left",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){  delete window[key]; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getKey": function(key){  return window[key]; }
 },
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "defaultVRPointer": "laser",
 "verticalAlign": "top",
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "downloadEnabled": false,
 "contentOpaque": false,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "height": "100%",
 "propagateClick": false,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "desktopMipmappingEnabled": false,
 "paddingLeft": 0,
 "layout": "absolute"
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
