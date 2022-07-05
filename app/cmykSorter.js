import { createPlaceholder, render } from './render.js';
import cmykCoder from "./cmykCoder.js";
import clearElements from "./clearElements.js";

export default function cmykSorter() {

    const unsorted = document.getElementById('unsorted');
    const unsortedList = Array.from(document.querySelectorAll('#unsorted > li'));
    if (unsortedList.length > 0) clearElements('#cmyk');
    const cmyk = document.getElementById('cmyk');

    let outputContainerCMYK = [];
    let outputContainerCMY = [];
    let outputContainerCMK = [];
    let outputContainerCYK = [];
    let outputContainerMYK = [];
    let outputContainerCM = [];
    let outputContainerMY = [];
    let outputContainerCY = [];
    let outputContainerCK = [];
    let outputContainerMK = [];
    let outputContainerYK = [];
    let outputContainerC = [];
    let outputContainerM = [];
    let outputContainerY = [];
    let outputContainerK = [];
    let outputContainerRest = [];

    function dizSorterProcessColors(unsortedList) {
        for (let i = 0; i < unsortedList.length; i++) {

            let item = unsortedList[i];
            let itemSepars = JSON.parse(item.dataset.info).separs
            // console.log(item)
            // console.log(itemSepars)

            if ((itemSepars[0] !== undefined ? itemSepars[0] : "undefined") === "Cyan" &&
                (itemSepars[1] !== undefined ? itemSepars[1] : "undefined") === "Magenta" &&
                (itemSepars[2] !== undefined ? itemSepars[2] : "undefined") === "Yellow" &&
                (itemSepars[3] !== undefined ? itemSepars[3] : "undefined") === "Black") {
                item.tag = "CMYK";
                outputContainerCMYK.push(item);
                document.querySelector(`#unsorted li:nth-child(${i + 1})`).remove();

                unsortedList.splice(i, 1);
                i--
                continue;
            }

            if ((itemSepars[0] !== undefined ? itemSepars[0] : "undefined") === "Cyan" &&
                (itemSepars[1] !== undefined ? itemSepars[1] : "undefined") === "Magenta" &&
                (itemSepars[2] !== undefined ? itemSepars[2] : "undefined") === "Yellow") {
                item.tag = "CMY";
                outputContainerCMY.push(item);
                document.querySelector(`#unsorted li:nth-child(${i + 1})`).remove();

                unsortedList.splice(i, 1);
                i--
                continue;
            }

            if ((itemSepars[0] !== undefined ? itemSepars[0] : "undefined") === "Cyan" &&
                (itemSepars[1] !== undefined ? itemSepars[1] : "undefined") === "Magenta" &&
                (itemSepars[2] !== undefined ? itemSepars[2] : "undefined") === "Black") {
                item.tag = "CMK";
                outputContainerCMK.push(item);
                document.querySelector(`#unsorted li:nth-child(${i + 1})`).remove();

                unsortedList.splice(i, 1);
                i--
                continue;
            }

            if ((itemSepars[0] !== undefined ? itemSepars[0] : "undefined") === "Cyan" &&
                (itemSepars[1] !== undefined ? itemSepars[1] : "undefined") === "Yellow" &&
                (itemSepars[2] !== undefined ? itemSepars[2] : "undefined") === "Black") {
                item.tag = "CYK";
                outputContainerCYK.push(item);
                document.querySelector(`#unsorted li:nth-child(${i + 1})`).remove();

                unsortedList.splice(i, 1);
                i--
                continue;
            }

            if ((itemSepars[0] !== undefined ? itemSepars[0] : "undefined") === "Magenta" &&
                (itemSepars[1] !== undefined ? itemSepars[1] : "undefined") === "Yellow" &&
                (itemSepars[2] !== undefined ? itemSepars[2] : "undefined") === "Black") {
                item.tag = "MYK";
                outputContainerMYK.push(item);
                document.querySelector(`#unsorted li:nth-child(${i + 1})`).remove();

                unsortedList.splice(i, 1);
                i--
                continue;
            }

            if ((itemSepars[0] !== undefined ? itemSepars[0] : "undefined") === "Cyan" &&
                (itemSepars[1] !== undefined ? itemSepars[1] : "undefined") === "Magenta") {
                item.tag = "CM";
                outputContainerCM.push(item);
                document.querySelector(`#unsorted li:nth-child(${i + 1})`).remove();

                unsortedList.splice(i, 1);
                i--
                continue;
            }

            if ((itemSepars[0] !== undefined ? itemSepars[0] : "undefined") === "Magenta" &&
                (itemSepars[1] !== undefined ? itemSepars[1] : "undefined") === "Yellow") {
                item.tag = "MY";
                outputContainerMY.push(item);
                document.querySelector(`#unsorted li:nth-child(${i + 1})`).remove();

                unsortedList.splice(i, 1);
                i--
                continue;
            }

            if ((itemSepars[0] !== undefined ? itemSepars[0] : "undefined") === "Cyan" &&
                (itemSepars[1] !== undefined ? itemSepars[1] : "undefined") === "Yellow") {
                item.tag = "CY";
                outputContainerCY.push(item);
                document.querySelector(`#unsorted li:nth-child(${i + 1})`).remove();

                unsortedList.splice(i, 1);
                i--
                continue;
            }

            if ((itemSepars[0] !== undefined ? itemSepars[0] : "undefined") === "Cyan" &&
                (itemSepars[1] !== undefined ? itemSepars[1] : "undefined") === "Black") {
                item.tag = "CK";
                outputContainerCK.push(item);
                document.querySelector(`#unsorted li:nth-child(${i + 1})`).remove();

                unsortedList.splice(i, 1);
                i--
                continue;
            }

            if ((itemSepars[0] !== undefined ? itemSepars[0] : "undefined") === "Magenta" &&
                (itemSepars[1] !== undefined ? itemSepars[1] : "undefined") === "Black") {
                item.tag = "MK";
                outputContainerMK.push(item);
                document.querySelector(`#unsorted li:nth-child(${i + 1})`).remove();

                unsortedList.splice(i, 1);
                i--
                continue;
            }

            if ((itemSepars[0] !== undefined ? itemSepars[0] : "undefined") === "Yellow" &&
                (itemSepars[1] !== undefined ? itemSepars[1] : "undefined") === "Black") {
                item.tag = "YK";
                outputContainerYK.push(item);
                document.querySelector(`#unsorted li:nth-child(${i + 1})`).remove();

                unsortedList.splice(i, 1);
                i--
                continue;
            }

            if ((itemSepars[0] !== undefined ? itemSepars[0] : "undefined") === "Cyan") {
                item.tag = "C";
                outputContainerC.push(item);
                document.querySelector(`#unsorted li:nth-child(${i + 1})`).remove();

                unsortedList.splice(i, 1);
                i--
                continue;
            }

            if ((itemSepars[0] !== undefined ? itemSepars[0] : "undefined") === "Magenta") {
                item.tag = "M";
                outputContainerM.push(item);
                document.querySelector(`#unsorted li:nth-child(${i + 1})`).remove();

                unsortedList.splice(i, 1);
                i--
                continue;
            }

            if ((itemSepars[0] !== undefined ? itemSepars[0] : "undefined") === "Yellow") {
                item.tag = "Y";
                outputContainerY.push(item);
                document.querySelector(`#unsorted li:nth-child(${i + 1})`).remove();

                unsortedList.splice(i, 1);
                i--
                continue;
            }

            if ((itemSepars[0] !== undefined ? itemSepars[0] : "undefined") === "Black") {
                item.tag = "K";
                outputContainerK.push(item);
                document.querySelector(`#unsorted li:nth-child(${i + 1})`).remove();

                unsortedList.splice(i, 1);
                i--
                continue;
            }
        }
    }

    dizSorterProcessColors(unsortedList);

    function mergeCMYKArr() {
        const cmykContainer = document.getElementById('cmyk');
        for (let i = 1; i <= 100; i++) {

            if (
                outputContainerC[0] || outputContainerM[0] || outputContainerY[0] || outputContainerK[0] ||
                outputContainerCM[0] || outputContainerCY[0] || outputContainerCK[0] || outputContainerMK[0] ||
                outputContainerMY[0] || outputContainerYK[0] || outputContainerCMY[0] || outputContainerCMK[0] ||
                outputContainerCYK[0] || outputContainerMYK[0] || outputContainerCMYK[0]
            ) {
                switch (i) {
                    case 1:
                    case 5:
                    case 21:
                    case 25:
                        var z = i - 1;
                        cmykContainer.append(
                            outputContainerC.shift() || outputContainerCK.shift() || outputContainerCM.shift() || outputContainerCY.shift() ||
                            outputContainerCMK.shift() || outputContainerCYK.shift() || outputContainerCMY.shift() || outputContainerCMYK.shift() || createPlaceholder()
                        );
                        break;

                    case 2:
                    case 10:
                    case 42:
                    case 50:
                        var z = i - 1;
                        cmykContainer.append(
                            outputContainerM.shift() || outputContainerMK.shift() || outputContainerMY.shift() || outputContainerCM.shift() ||
                            outputContainerCMK.shift() || outputContainerMYK.shift() || outputContainerCMY.shift() || outputContainerCMYK.shift() || createPlaceholder()
                        );
                        break;

                    case 3:
                    case 15:
                    case 63:
                    case 75:
                        var z = i - 1;
                        cmykContainer.append(
                            outputContainerY.shift() || outputContainerYK.shift() || outputContainerMY.shift() || outputContainerCY.shift() ||
                            outputContainerMYK.shift() || outputContainerCYK.shift() || outputContainerCMY.shift() || outputContainerCMYK.shift() || createPlaceholder()
                        );
                        break;

                    case 4:
                    case 20:
                    case 84:
                    case 100:
                        var z = i - 1;
                        cmykContainer.append(
                            outputContainerK.shift() || outputContainerCK.shift() || outputContainerMK.shift() || outputContainerYK.shift() ||
                            outputContainerCMK.shift() || outputContainerCYK.shift() || outputContainerMYK.shift() || outputContainerCMYK.shift() || createPlaceholder()
                        );
                        break;

                    case 6:
                    case 9:
                    case 22:
                    case 26:
                    case 29:
                    case 30:
                    case 41:
                    case 45:
                    case 46:
                    case 49:
                        var z = i - 1;
                        cmykContainer.append(
                            outputContainerCM.shift() || outputContainerCMK.shift() || outputContainerCMY.shift() || outputContainerCMYK.shift() || createPlaceholder()

                        );
                        break;

                    case 7:
                    case 13:
                    case 23:
                    case 27:
                    case 33:
                    case 35:
                    case 61:
                    case 65:
                    case 67:
                    case 73:
                        var z = i - 1;
                        cmykContainer.append(
                            outputContainerCY.shift() || outputContainerCYK.shift() || outputContainerCMY.shift() || outputContainerCMYK.shift() || createPlaceholder()
                        );
                        break;

                    case 8:
                    case 17:
                    case 24:
                    case 28:
                    case 37:
                    case 40:
                    case 81:
                    case 85:
                    case 88:
                    case 97:
                        var z = i - 1;
                        cmykContainer.append(
                            outputContainerCK.shift() || outputContainerCMK.shift() || outputContainerCYK.shift() || outputContainerCMYK.shift() || createPlaceholder()
                        );
                        break;

                    case 11:
                    case 14:
                    case 43:
                    case 51:
                    case 54:
                    case 55:
                    case 62:
                    case 70:
                    case 71:
                    case 74:
                        var z = i - 1;
                        cmykContainer.append(
                            outputContainerMY.shift() || outputContainerMYK.shift() || outputContainerCMY.shift() || outputContainerCMYK.shift() || createPlaceholder()
                        );
                        break;

                    case 12:
                    case 18:
                    case 44:
                    case 52:
                    case 58:
                    case 60:
                    case 82:
                    case 90:
                    case 92:
                    case 98:
                        var z = i - 1;
                        cmykContainer.append(
                            outputContainerMK.shift() || outputContainerMYK.shift() || outputContainerCMK.shift() || outputContainerCMYK.shift() || createPlaceholder()
                        );
                        break;

                    case 16:
                    case 19:
                    case 64:
                    case 76:
                    case 79:
                    case 80:
                    case 83:
                    case 95:
                    case 96:
                    case 99:
                        var z = i - 1;
                        cmykContainer.append(
                            outputContainerYK.shift() || outputContainerCYK.shift() || outputContainerMYK.shift() || outputContainerCMYK.shift() || createPlaceholder()
                        );
                        break;

                    case 31:
                    case 34:
                    case 47:
                    case 53:
                    case 66:
                    case 69:
                        var z = i - 1;
                        cmykContainer.append(
                            outputContainerCMY.shift() || outputContainerCMYK.shift() || createPlaceholder()
                        );
                        break;

                    case 32:
                    case 38:
                    case 48:
                    case 57:
                    case 86:
                    case 89:
                        var z = i - 1;
                        cmykContainer.append(
                            outputContainerCMK.shift() || outputContainerCMYK.shift() || createPlaceholder()
                        );
                        break;

                    case 36:
                    case 39:
                    case 68:
                    case 77:
                    case 87:
                    case 93:
                        var z = i - 1;
                        cmykContainer.append(
                            outputContainerCYK.shift() || outputContainerCMYK.shift() || createPlaceholder()
                        );
                        break;

                    case 56:
                    case 59:
                    case 72:
                    case 78:
                    case 91:
                    case 94:
                        var z = i - 1;
                        cmykContainer.append(
                            outputContainerMYK.shift() || outputContainerCMYK.shift() || createPlaceholder()
                        );
                        break;

                    default:
                        break;
                }
            } else {
                break;
                // cmykContainer.append(
                //     outputContainerTwoSpotColors.shift() || outputContainerOneSpotColors.shift()
                // );
            }
        }
    }

    mergeCMYKArr()

    function collectRest() {

        outputContainerRest = outputContainerRest.concat(
            outputContainerC,
            outputContainerM,
            outputContainerY,
            outputContainerK,
            outputContainerCM,
            outputContainerCY,
            outputContainerCK,
            outputContainerMK,
            outputContainerMY,
            outputContainerYK,
            outputContainerCMY,
            outputContainerCMK,
            outputContainerCYK,
            outputContainerMYK,
            outputContainerCMYK
        );

        for (let i = 0; i < outputContainerRest.length; i++) {
            const element = outputContainerRest[i];
            unsorted.append(element);
            outputContainerRest.shift()
            i--;
        }
    }

    collectRest();

    // render(databuffer, unsorted);
    // render(outputContainerRest, unsorted);
    // render(mergedArray, cmyk);
    cmykCoder();

    // alert('OK');
}