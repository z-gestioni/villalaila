var APP_DATA = {
  "scenes": [
    {
      "id": "0-letto-matrimoniale",
      "name": "letto matrimoniale",
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
        "yaw": -2.899553813067339,
        "pitch": 0.35651465179751796,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -1.9678502473995074,
          "pitch": 0.5134924259048272,
          "rotation": 0.7853981633974483,
          "target": "3-bagno"
        },
        {
          "yaw": -0.4971640184445558,
          "pitch": 0.47081273945488,
          "rotation": 0,
          "target": "1-letto-singolo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-letto-singolo",
      "name": "letto singolo",
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
        "yaw": 1.9140382169215417,
        "pitch": 0.40440736639626884,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 0.19045654536928502,
          "pitch": 0.6803157922310916,
          "rotation": 0,
          "target": "2-entrata"
        },
        {
          "yaw": -3.035218441736168,
          "pitch": 0.5743578284326709,
          "rotation": 5.497787143782138,
          "target": "0-letto-matrimoniale"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrata",
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
        "yaw": -1.841081387989771,
        "pitch": 0.12281946577054015,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -1.9462447455634653,
          "pitch": 0.7898430184519256,
          "rotation": 0,
          "target": "1-letto-singolo"
        },
        {
          "yaw": -0.011057986209046078,
          "pitch": 0.5281895463152804,
          "rotation": 0,
          "target": "4-pianerottolo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1218353672616423,
          "pitch": 0.4136015915711617,
          "title": "sala colazioni",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-bagno",
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
        "yaw": 2.044891116320997,
        "pitch": 0.5462758309481153,
        "fov": 1.335888521808506
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "4-pianerottolo",
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
        "yaw": 2.504934665130847,
        "pitch": 0.23089723410164353,
        "fov": 1.335888521808506
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Camera Gialla",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
