function uploadImage() {
    let preview = $("#img");
    let file = document.querySelector('input[type=file]').files[0];
    let reader = new FileReader();

    reader.addEventListener("load", function () {
        preview.attr("src", reader.result);

        $.ajax({
            url: "/uploadImage",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(reader.result),
            success: function (response) {
                console.log(response);
            },
            error: function (response) {
                console.log(response);
            }
        });
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}
