export class Map {
    constructor() { }

    render(coord) {
        if (!google) {
            console.log('Could not load maps library - please try again');
            return;
        }

        const listMapElement = document.querySelectorAll('._content__my-location');

        const mapConfig = {
            center: { lat: coord.lat, lng: coord.lng },
            zoom: 6,
        };

        const map1 = new google.maps.Map(listMapElement[0], mapConfig);
        const map2 = new google.maps.Map(listMapElement[1], mapConfig);

        new google.maps.Marker({
            position: { lat: coord.lat, lng: coord.lng },
            map: map1,
        });
        new google.maps.Marker({
            position: { lat: coord.lat, lng: coord.lng },
            map: map2,
        });
    }
}
