//scrolljacking
$(window).on('scroll', function () {
    //get the total height of whole page
    var totalY = $(document).height() - $(window).height() - $("#footer").height();
    //calculate the pecentage of scrolling progress
    var progress = window.scrollY / totalY;
    //get the target element
    var header = $('#header');
    //set the background-color value
    header.css('background-color', `rgba(0,0,0,${progress*2 > 0.85 ? 0.85:progress*2})`);
});


function check() {
    let lowest_d = {
        distance: 100
    };
    let lowest_d_key = '';

    function success(pos) {
        let lat = pos.coords.latitude,
            lng = pos.coords.longitude;
        for (let i in data) {
            if (!data[i].location) continue;
            data[i].distance =
                Math.sqrt(
                    Math.pow(lat - data[i].location.lat, 2) +
                    Math.pow(lng - data[i].location.lng, 2));
            if (data[i].distance < lowest_d.distance) {
                lowest_d = data[i];
                lowest_d_key = i;
            }
        }
        window.location = `detail.html?lib_name=${lowest_d_key}`;
    }

    navigator.geolocation.getCurrentPosition(success,
        function (err) {
            alert(err.message);
        });
};

var expandable = false;

function change_list_state() {
    expandable = !expandable;
    let exp = $('#expandable').removeClass('expandable-hide expandable-show')
    expandable ? exp.addClass('expandable-show') : exp.addClass('expandable-hide');
    $('#expand').html($('#expand').text() === '展開' ? '縮小' : '展開')
}

var classify_infomation = {
    center: '澳門中央圖書館 何賢公園圖書館'.split(" "),
    north: '青洲圖書館 望廈圖書館 紀念孫中山公園黃營均圖書館 黑沙環公園黃營均圖書館 黑沙環公園黃營均兒童圖書館'.split(" "),
    west: '沙梨頭圖書館 紅街市圖書館 白鴿巢公園黃營均圖書館'.split(" "),
    south: '何東圖書館 下環圖書館'.split(" "),
    island: '氹仔圖書館 氹仔黃營均圖書館 路環圖書館'.split(" ")
}

    for (token in classify_infomation) {
        for (let i = 0; i < classify_infomation[token].length; i++) {
            $(`#expandable #${token} .a${i}`).attr('href', `detail.html?lib_name=${classify_infomation[token][i]}`);
            $(`#expandable #${token} .a${i}`).html(classify_infomation[token][i]);
        }
    }
