
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
   let lowest_d = {distance:100};
   let lowest_d_key = '';
    function success(pos){
        let lat = pos.coords.latitude, lng = pos.coords.longitude;
        for (let i in data){
            if (!data[i].location) continue;
            data[i].distance = 
                Math.sqrt(
                        Math.pow(lat-data[i].location.lat,2)+
                        Math.pow(lng-data[i].location.lng,2));
            if (data[i].distance<lowest_d.distance ){
                lowest_d = data[i];
                lowest_d_key = i;
            }
        }
        console.log(lowest_d, lowest_d_key);
        alert(lowest_d_key);
    }
    
    navigator.geolocation.getCurrentPosition(success,
    function(err){
        alert(err.message);
    });

<<<<<<< HEAD

};
=======
};
>>>>>>> f8627bfc93b35f9cfec205f8f7442b779665a112
