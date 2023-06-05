//地図1（地理院タイル 淡色地図）の設定
var map = new maplibregl.Map({
	container: 'map',
	style: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
	center:[35.68, 139.76],
	zoom: 13
	minZoom: 4
	mazZoom: 17
	attribution: "Produced by とちりぬる. Data provided by 国土数値情報. Map tiles by 地理院タイル"
});
