import getData from "./JsonDataCollector.js";
import cmykCoder from "./cmykCoder.js";
import cmykSorter from "./cmykSorter.js";
import {createPlaceholder, removePlaceholder, render} from "./render.js";
import clearElements from "./clearElements.js";
import xmlToJson from "./xmlToJson.js";
import postData from "./postData.js";

const unsortedContainer = document.getElementById('unsorted');
const init = document.getElementById('getdatabtn');
const resetBtn = document.getElementById('resetbtn');
const sortCMYKButton = document.getElementById('cmyksorter');
const postDataBtn = document.getElementById('postbtn');
const inputField = document.querySelector('input');
const insertPlaceholderBtn = document.querySelectorAll('.insert-placeholder-btn');
const lists = document.querySelectorAll('.list');
let fetchedData;

// removePlaceholder
document.addEventListener('dblclick', e => {
    if (e.target.dataset.info === 'Placeholder') {
        e.target.remove();
        cmykCoder();
    }
})

// initialize
init.addEventListener('click', e => {
    clearElements();

    var url = `http://esko221.smart.blitz.firewall:4415/ws/pack_get_pdf_color_info?jobname=${inputField.value}`;

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const xmlDoc = xhttp.responseXML;
        const jsonFromXml = xmlToJson(xmlDoc);
        fetchedData = getData(jsonFromXml);
        render(fetchedData, unsortedContainer);
    }
    xhttp.open("GET", url);
    xhttp.send();
});

insertPlaceholderBtn.forEach(item => {
    item.addEventListener('click', e => {
        const currentOffset = document.scrollingElement.offsetHeight;
        const currentList = e.path[1].children[1];
        currentList.append(createPlaceholder());
        window.scrollTo(pageXOffset, pageYOffset + (document.scrollingElement.offsetHeight - currentOffset));
        console.log(pageYOffset)
        console.log(currentOffset)
    })
})

sortCMYKButton.addEventListener('click', (e) => {
     cmykSorter()
});

resetBtn.addEventListener('click', (e) => {
    clearElements();
    render(fetchedData, unsortedContainer);
});

postDataBtn.addEventListener('click', (e) => {
    postData();
});

lists.forEach((list) => {
    new Sortable(list, {
        multiDrag: true, // Enable multi-drag
        selectedClass: 'selected', // The class applied to the selected items
        fallbackTolerance: 3, // So that we can select items on mobile
        group: "shared",
        animation: 200,
        ghostClass: "ghost",
        // forceFallback: true, 
        dragClass: "sortable-drag",
        // easing: "cubic-bezier(1, 0, 0, 1)",
        // ondrag: function (evt) {
        //     evt.preventDefault();
        // },
        onChange: function (/**Event*/evt) {
            cmykCoder(evt);
            evt.newIndex // most likely why this event is used is to get the dragging element's current index
            // same properties as onEnd
        },
        onEnd: function (/**Event*/evt) {
            cmykCoder(evt);
            var itemEl = evt.item;  // dragged HTMLElement
            removePlaceholder(evt);
            evt.to;    // target list
            evt.from;  // previous list
            evt.oldIndex;  // element's old index within old parent
            evt.newIndex;  // element's new index within new parent
            evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
            evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
            evt.clone // the clone element
            evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
        },
        // Called by any change to the list (add / update / remove)
        // onSort: function (/**Event*/evt) {
        //     cmykCoder(evt);
        //     // same properties as onEnd
        // },
        // onChoose: function (/**Event*/evt) {
        //     cmykCoder(evt);
        //     evt.oldIndex;  // element index within parent
        // },

    });
});