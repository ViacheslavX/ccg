export default function cmykCoder(index) {

    function Bar(color, fill) {
        this.arr = [];
        this.arr[0] = color;
        this.arr[1] = fill;
        return this.arr;
      }
    
    function pickColor(colorNum, colorData) {
        let colorName;
        switch (colorNum) {
            case 1:
                colorName = 'Cyan';
                break;
            case 2:
                colorName = 'Magenta';
                break;
            case 3:
                colorName = 'Yellow';
                break;
            case 4:
                colorName = 'Black';
                break;
            default:
                break;
        }
        return colorData.findIndex(e => e === colorName);
    }

    function recolor(element, colorData, colorBarData, colorNum, code) {

        const colorIndex = pickColor(colorNum, colorData);
        let color = element.querySelector(`.separs > div:nth-child(${colorIndex + 1})`);

        if (colorNum !== 0) {

            // colorBarData.push(colorData[colorIndex] ? colorData[colorIndex] : '');
            colorBarData.push(colorData[colorIndex] ? new Bar(colorData[colorIndex], '100') : new Bar('', '0'));
            color = color ? color.style.backgroundColor : color = '#fff';

        } else if (code === 1) {

            if (colorData.find(item => item === 'Black')) {
                colorBarData.push(new Bar('Black', '100'));
                color = 'Black';
            } else if (colorData.find(item => item === 'Cyan')) {
                colorBarData.push(new Bar('Cyan', '100'));
                color = 'Cyan';
            } else if (colorData.find(item => item === 'Magenta')) {
                colorBarData.push(new Bar('Magenta', '100'));
                color = 'Magenta';
            } else if (colorData.find(item => item === 'Yellow')) {
                colorBarData.push(new Bar('Yellow', '100'));
                color = 'Yellow';
            } 

        } else {
            colorBarData.push(new Bar('', '0'));
            color = '#fff';
        }
        
        element.querySelector(`.code > div:nth-child(${code})`).style.backgroundColor = color;
    }

    const cmykList = document.querySelector('#cmyk').querySelectorAll('li');

    let num1 = 0;
    let num2 = 0;
    let num3 = 0;

    for (let i = 0; i < cmykList.length; i++) {

        const element = cmykList[i];
        
        num1 += 1;
        if (num1 >= 5) {
            num1 = 1;
        }
        
        if (i % 4 == 0 && i !== 0) {
            num2 += 1;
            if (num2 >= 5) {
                num2 = 0;
            }
        }
        
        if (i % 20 == 0 && i !== 0) {
            num3 += 1;
            if (num3 >= 5) {
                num3 = 0;
            }
        }

        if (element.dataset.info === "Placeholder") continue;

        const colorData = JSON.parse(element.dataset.info).separs;
        let colorBarData = [];
        
        if (num1 === 1) recolor(element, colorData, colorBarData, 1, 4);
        if (num1 === 2) recolor(element, colorData, colorBarData, 2, 4);
        if (num1 === 3) recolor(element, colorData, colorBarData, 3, 4);
        if (num1 === 4) recolor(element, colorData, colorBarData, 4, 4);
        if (num2 === 0) recolor(element, colorData, colorBarData, 0, 3);
        if (num2 === 1) recolor(element, colorData, colorBarData, 1, 3);
        if (num2 === 2) recolor(element, colorData, colorBarData, 2, 3);
        if (num2 === 3) recolor(element, colorData, colorBarData, 3, 3);
        if (num2 === 4) recolor(element, colorData, colorBarData, 4, 3);
        if (num3 === 0) recolor(element, colorData, colorBarData, 0, 2);
        if (num3 === 1) recolor(element, colorData, colorBarData, 1, 2);
        if (num3 === 2) recolor(element, colorData, colorBarData, 2, 2);
        if (num3 === 3) recolor(element, colorData, colorBarData, 3, 2);
        if (num3 === 4) recolor(element, colorData, colorBarData, 4, 2);
        recolor(element, colorData, colorBarData, 0, 1);

        element.setAttribute('data-info-color-bar-data', JSON.stringify(colorBarData));
        // console.log(colorBarData);
    }
}

