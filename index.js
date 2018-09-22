$(() => {
    console.log('connected');
    // topNav icon changer and modal 
    let topNav = document.getElementById('topNav'), 
    	innerNav = document.getElementById('innerNav');
    $('.icon').click(() => {
    	console.log(topNav.className);
        if (topNav.className === 'navbar') {
        	topNav.className += " responsive";
            $('.icon').toggleClass('change');
            innerNav.style.display = 'flex';
            // add modal box 
        } else {
        	topNav.className = 'navbar'
            $('.icon').removeClass('change');
            // remove modal box 
            innerNav.style.display = 'none';

        }
    })


});
// end of jquery