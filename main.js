
//scrolljacking
$(window).on('scroll', function() {
    //get the total height of whole page
    var totalY = $(document).height() - $(window).height() - $("#footer").height();
    //calculate the pecentage of scrolling progress
    var progress = window.scrollY / totalY;
    //get the target element
    var header = $('#header');
    //set the background-color value
    header.css('background-color',`rgba(0,0,0,${progress*2 > 0.85 ? 0.85:progress*2})`);
});


function check(){
   let lowest_d = undefined;
    function success(lat, lng){
        console.log('hellworld');
        for (i in data){
            i.distance = 
                Math.sqrt(
                        Math.pow(lat-i.location.lat,2)+
                        Math.pow(lng-i.location.lng,2));
            if (i.distance<lowest_d.distance || !lowest_d){
                lowest_d = i;
            }
        }
        alert(lowest_d);
    }
    
    navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude, lng = position.coords.longitude;
        success(lat, lng);
    },
    function(err){
        alert(err.message);
    });

};
