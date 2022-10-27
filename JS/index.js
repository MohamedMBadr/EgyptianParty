
$(document).ready(() => {


    $('nav span').click(function (e) {

        //   console.log(e.target.style.left);

        if (e.target.style.left == '212.562px') {
            //    console.log('hello');
            $('.nav').animate({ left: -$('.nav').outerWidth() }, 500)
            $('nav span').animate({ left: 0 }, 500)

        }

        else {
            $('.nav').css('display', 'block').css('left', -$('.nav').outerWidth())


            $('.nav').animate({ left: 0 }, 1000)
            $('nav span').animate({ left: $('.nav').outerWidth() }, 1000)

            $('.nav i').click(() => {
                $('.nav').animate({ left: -$('.nav').outerWidth() }, 500)
                $('nav span').animate({ left: 0 }, 500)

            })
        }

    });



    $('#one').click(function (e) {


        $('#one').next().slideToggle(1000)

    });
    $('#two').click(function (e) {


        $('#two').next().slideToggle(1000)

    });
    $('#three').click(function (e) {


        $('#three').next().slideToggle(1000)

    });
    $('#four').click(function (e) {


        $('#four').next().slideToggle(1000)

    });




    let countDownDate = new Date(`nov 11, 2022 15:37:25`).getTime();


    // $('#Duration input').value 


    // Update the count down every 1 second
    let x = setInterval(function () {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"

        $(".duration-lyear h2").eq(0).html(days + 'D');
        $(".duration-lyear h2").eq(1).html(hours + 'H');
        $(".duration-lyear h2").eq(2).html(minutes + 'M');
        $(".duration-lyear h2").eq(3).html(seconds + 'S');

        //   document.getElementById("timer").innerHTML = days + "d " + hours + "h "
        //   + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            // document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
    let  CharacyerReamining =100;
    $('textarea').keypress(function () {
         CharacyerReamining = 100 - $('textarea').val().length;



        if (CharacyerReamining >=0) {
            $('.CharacyerReamining').html(CharacyerReamining);
            
        }
        else {
            $('textarea').keydown( (e)=> {
           
                e.stopPropagation();

                return false;
           
            });

        }
    
    })
    $('.btn-danger').click(function clear() {
        $('textarea').val('');
   
        $('.CharacyerReamining').html(100);
    

        $('textarea').keydown( (e)=> {
      
            e.stopPropagation();

            return true;

       
        });

  
   
    });     

});


