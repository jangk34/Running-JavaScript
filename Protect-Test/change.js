const t = document.getElementById('chan');
t.addEventListener('change', function() {
    document.getElementById('result').innerHTML=event.target.value;
});