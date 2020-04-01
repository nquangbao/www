const pageable = new Pageable("main", {
    animation: 400,
    delay: 100,
    freeScroll: true,
    swipeThreshold: 200,
    infinite: true,
});
var x = window.innerWidth;

if (x <= 1046) {
    var li = document.getElementsByTagName('li')
    var checke = document.querySelector('input')
    for (let i = 0; i < li.length; i++) {
        li[i].onclick = function() {
            alert('alo')
            if (checke.checked == true) {
                checke.checked = false;

            }


        }
    }
}
var y = window.innerHeight
var btn = document.getElementById('viewand')
btn.onclick = function() {
    document.getElementById('view').style.display = "block";
    document.getElementById('view').style.display = "flex";
    document.getElementById('page-3').style.paddingTop = "5rem";
    this.style.display = 'none'


}

var text = ["THIẾT KẾ WEBSITE CHUYÊN NGHIỆP", "GỈAI PHÁP MARKETTING CHO DOANH NGHIỆP"];
var counter = 0;
var elem = $("#changer");
setInterval(change, 3000);

function change() {
    elem.fadeOut(function() {
        elem.html(text[counter]);
        counter++;
        if (counter >= text.length) { counter = 0; }
        elem.fadeIn();
    });
}