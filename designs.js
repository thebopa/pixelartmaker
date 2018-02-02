let sizePicker = $('#sizePicker'),
    inputHeight = $('#inputHeight'),
    inputWidth = $('#inputWidth'),
    colorPicker = $('#colorPicker'),
    pixelCanvas = $('#pixelCanvas');

let color = '#000000';
// Select color input
colorPicker.on('change',function () {
    color = colorPicker.val();
});
$('#pixelCanvas').on('click','td',function () {
    $(this).attr('bgcolor', color);
});
// Select size input
sizePicker.on('submit', function (event) {
    event.preventDefault();
    let x = inputWidth.val();
    let y = inputHeight.val();
    // When size is submitted by the user, call makeGrid()
    makeGrid(x,y)
});

function makeGrid(width, height) {
    pixelCanvas.empty();
// Your code goes here!
    for (let row = 0; row < height; row++) {
        let rowhtml = $('<tr></tr>');
        for (let col = 0; col < width; col++) {
            let colhtml = $('<td bgcolor="' + color + '"></td>');
            rowhtml.append(colhtml);
        }
        pixelCanvas.append(rowhtml);
    }

}
