// $(document).ready(function () {
//     'use strict';
//     console.log('pro1.js loaded')

//     const multi_line = "line1\n\
//     line2"

//     const abc = document.getElementById("multi_line");
//     console.log('pro1.js multi')
// })

function pro1() {
    document.write("안녕하세요");
}

const hw = document.getElementById('hw');
hw.addEventListener('click', function(){
    alert('Hello world');
});

const multi = document.getElementById('multi');
multi.addEventListener('click', function() {
    alert('line1 line2 line3');
});
multi.addEventListener('click', function() {
    alert('lineout');
});

// 두개의 값 하나의 리스너에 넣기
const a = document.getElementById('oa');
const b = document.getElementById('ob');
// 리스너이름 jang
    function jang() { 
        switch(event.target.id) {
            case 'oa' :
                alert(1);
                break;
                case 'ob' :
                alert(2);
                break;
        }
    }
a.addEventListener('click', jang);
b.addEventListener('click', jang);

const obj = {};

obj.color = "yellow";


