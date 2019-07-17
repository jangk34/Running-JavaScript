// 이벤트취소

// document.querySelector('a').addEventListener('click', function(event){
//     if(document.getElementById('prevent').checked)
//         event.preventDefault();
// });

// document.querySelector('form').addEventListener('submit', function(event){
//     if(document.getElementById('prevent').checked)
//         event.preventDefault();
// });

// 폼 전송
var t = document.getElementById('succ');
t.addEventListener('submit', function(){
    if(document.getElementById('name').value.length === 0){
        alert('Name 필드의 값이 누락 되었습니다');
        // 전송취소구문
        event.preventDefault();
    }
});