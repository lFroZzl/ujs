$(".btn-disabled").click(function(e) {
    e.preventDefault();
    setTimeout(function () {
        window.location.reload();
    }, 5000);
})
