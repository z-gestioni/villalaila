var APP_DATA = {
  "scenes": [
    {
      "id": "0-giardino",
      "name": "giardino",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.23310904393073528,
        "pitch": 0.25362026218282807,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -0.5159619085361271,
          "pitch": 0.2026806088205113,
          "rotation": 0,
          "target": "1-entrata"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrata",
      "name": "entrata",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.08607103160519713,
        "pitch": -0.002511068650015602,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -0.1092988698614814,
          "pitch": 0.19217597406120035,
          "rotation": 0,
          "target": "2-pianerottolo"
        },
        {
          "yaw": -2.0510559096365704,
          "pitch": 0.6118491963478228,
          "rotation": 5.497787143782138,
          "target": "0-giardino"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pianerottolo",
      "name": "pianerottolo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0.2994552045187966,
        "pitch": 0.25361793365161844,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 1.3328197511759399,
          "pitch": 0.3303912008464991,
          "rotation": 0,
          "target": "3-camera-da-letto"
        },
        {
          "yaw": -0.6250182077805064,
          "pitch": 0.23829702505823036,
          "rotation": 0,
          "target": "4-bagno"
        },
        {
          "yaw": 0.2502461884459226,
          "pitch": 0.27109814671814547,
          "rotation": 0,
          "target": "5-soggiorno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-camera-da-letto",
      "name": "camera da letto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 2.9317945140521218,
        "pitch": 0.29624284098712117,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -1.269090360552383,
          "pitch": 0.5279869713308294,
          "rotation": 12.566370614359176,
          "target": "2-pianerottolo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bagno",
      "name": "bagno",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0.19004945963711606,
        "pitch": 0.23731665244467237,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 2.196604456652949,
          "pitch": 0.5927124664673791,
          "rotation": 0,
          "target": "2-pianerottolo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-soggiorno",
      "name": "soggiorno",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -2.6146019438592756,
        "pitch": 0.30361102768373804,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -2.9507777876905834,
          "pitch": 0.24523628428628186,
          "rotation": 0,
          "target": "2-pianerottolo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "verde",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
