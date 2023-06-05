var map =  new maplibregl.Map({
    container: 'map',
    style: 'https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json', // 地図のスタイル
    center: [139.8108103, 35.7100069], // 中心座標
    zoom: 16, // ズームレベル
    pitch: 0 // 傾き
})
