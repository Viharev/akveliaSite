ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [58.622612740788995,49.66393514418017],
        zoom: 18,
        controls: []
        
    });
    
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        balloonContentBody: [
            '<address>',
            '<strong>сауна Аквелия</strong>',
            '<br/>',
            'Адрес: г. Киров, ул. Семаковская, 41',
            '<br/>',
            // 'Подробнее: <a href="https://company.yandex.ru/">https://company.yandex.ru</a>',
            '</address>'
        ].join('')
    }, {
        preset: 'islands#redDotIcon'
    });

    myMap.geoObjects.add(myPlacemark);
    // Создадим панель маршрутизации.
    var routePanelControl = new ymaps.control.RoutePanel({
        options: {
            // Добавим заголовок панели.
            showHeader: true,
            // Зададим текст заголовка панели.
            title: 'Вызов такси',
            // Пользователь сможет построить только маршрут на такси.
            routePanelTypes: {taxi: true},
            // Зададим ширину панели.
            maxWidth: '80px'
        }
    });
    // Зададим тип маршрутизации по умолчанию.
    routePanelControl.routePanel.state.set({
        // Зададим тип маршрутизации - такси.
        type: "taxi",
        // Зададим адрес пункта назначения.
        to: 'Аквелия',
        // Отключим возможность задавать пункт отправления в поле ввода.
        toEnabled: false
    });
    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            size: 'small',
            float: 'none',
            position: {
                bottom: 145,
                right: 10
            }
        }
    });

    myMap.controls.add(routePanelControl).add(zoomControl);
    // Зададим местоположение пользователя в качестве начальной точки маршрута.
    routePanelControl.routePanel.geolocate('from');
}