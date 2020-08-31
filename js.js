$('#btn1').click(function(){
    var my_string = $('#subject').val();
    var my_limit = $('#num').val();
    if((my_string !== '') && (my_limit>=1 && my_limit<=20)) {
        loadUsers(my_string, my_limit);
    } else if(my_string === ''){
         $('#gif0').html('<h3>Please write a Subject in the first box!!!!!</h3>');
    }else if(my_limit === ''){
        $('#gif0').html('<h4>Please write a Number in the second box!!!!!</h4>');
    } else if(my_limit<1 || my_limit>5){
        $('#gif0').html('<h5>Please write a Number less than 20</h5>');
    }
});

function loadUsers(my_string, my_limit){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.tenor.com/v1/search?q='+my_string+'&key=9J2SJF8IPQBJ&limit='+my_limit);
    xhr.onload = function(){
        if(this.status == 200){
            var gif = JSON.parse(this.responseText);
            var output = '';
            var action = gif.results
            if(action.length > 0){
                for (var i in action){
                    var x = action[i].media[0].gif.url;
                    output +=
                    '<img src="'+x+'" class="img" onclick="myFunction(this)">'
                }
            }else{
                $('#gif1').html('<h6>There is no Gif with this subject. Please try again with a new subject!</h6>');
            }
            document.getElementById('gif0').innerHTML = output;
        }
    }
    xhr.send();
}

// style //
$('input').focus(function(){
    $(this).css('background', 'gray')
});
$('input').blur(function(){
    $(this).css('background', 'white')
});
function myFunction(x) {
    x.classList.toggle("img1");
};


































// $('#btn1').click(function(){
//     var my_string = $('#subject').val();
//     if(my_string !== ''){
//         loadUsers(my_string)
//     } else {
//         $('#gif0').html('<h3>Please write a subject in the box!!!!!</h3>');
//     }
// })

// function loadUsers(my_string){
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://api.tenor.com/v1/search?q='+my_string+'&key=9J2SJF8IPQBJ&limit='+my_limit);
//     xhr.onload = function(){
//         if(this.status == 200){
//             var gif = JSON.parse(this.responseText);
//             // console.log(Search)
//             var output = '';
//             var action = gif.results
//             if(action.length > 0){
//                 for (var i in action){
//                     var x = action[i].media[0].gif.url
//                     output +=
//                     '<img src="'+x+'" class="img">'
//                 }
//             }else{
//                 $('#gif1').html('<h5>You write a wrong object, please write things with meaning!</h5>');
//             }
//             document.getElementById('gif0').innerHTML = output;
//         }
//     }
//     xhr.send();
// }

// $('input').focus(function(){
//     $(this).css('background', 'gray')
// });
// $('input').blur(function(){
//     $(this).css('background', 'white')
// });






