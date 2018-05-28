function watermarkImage() {
    const upload = document.querySelector('input[type=file]').files[0];
    watermark([upload, '/static/images/watermark_template.png'])
        .image(watermark.image.lowerLeft(0.5))
        .then(img => {
            $(img).css("width", "100%");
            $('#container').append(img);
        });
}

