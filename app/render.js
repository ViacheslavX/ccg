import pantones from "./pantoneCoated.js";

function colorNameTrim(colorName) {
    if (colorName === 'Cyan' || colorName === 'Magenta' || colorName === 'Yellow' || colorName === 'Black') {
        let firstLetter = colorName[0];
        firstLetter === 'B' ? firstLetter = 'K' : firstLetter;
        return firstLetter;
    }
    return colorName.match(/(\d)/g).join('');
}

function pantoneColor(pantone) {
    const pantoneNum = colorNameTrim(pantone);
    const pantoneFromBook = pantones().find(item => item.pantone === `${pantoneNum}-c`)
    return pantoneFromBook.hex;
}

function createEl(selector, classN, text) {
    const newEl = document.createElement(selector);
    newEl.className = classN ? classN : '';
    newEl.textContent = text ? text : '';
    return newEl;
}

function createPlaceholder() {
    const li = createEl('li', 'list-group-item', 'Placeholder');
    li.setAttribute('data-info', 'Placeholder');
    return li;
}

function removePlaceholder(evt) {
    if (evt.to.id === 'unsorted' && evt.item.dataset.info === 'Placeholder') {
        evt.item.remove();
        // console.log(evt);
        // console.log(evt.items.length);
        
    }
    if (evt.items.length !== 0) {
        evt.items.forEach(item => {
            // console.log(item.dataset.info)
            if (evt.to.id === 'unsorted' && item.dataset.info === 'Placeholder')
            item.remove()
        });
    }
    // console.log(evt.item)
    // console.log(evt.item.dataset.info)
    // if (evt.item)
    // evt.item.remove()
}

function render(fetchedData, container) {
        
    fetchedData.forEach((el) => {
        let path;
        let filename;
        let shortColorName
        // console.log(el);
        if (el !== undefined) {
            path = el.name;
            filename = path.match(/([^\/]+)(?=\.\w+$)/)[0];
            shortColorName = el.separs.map(e => colorNameTrim(e))
            const li = createEl('li', 'list-group-item', filename);
            const div = createEl('div', 'separs-name');
            // const div = createEl('div', 'separs-name', `${el.separsNum} sep ${shortColorName.join('|')}`);
            const separs = createEl('div', 'separs');
            const code = createEl('div', 'code', `${el.separsNum}s | >`);
            
            li.setAttribute('data-info', JSON.stringify(el))
            // code.textContent = "COLOR CODE >";
            code.insertAdjacentHTML('beforeend', '<div></div><div></div><div></div><div></div>');
    
            li.append(div)
            div.append(separs, code);
            container.append(li);
    
            el.separs.forEach(el => {
                const sepColor = createEl('div');
                if (el === 'Cyan' || el === 'Magenta' || el === 'Yellow' || el === 'Black') {
                    sepColor.style.backgroundColor = el
                } else {
                    sepColor.style.backgroundColor = pantoneColor(el);
                }
                sepColor.insertAdjacentHTML('beforeend', `<p>${colorNameTrim(el)}</p>`);
                separs.append(sepColor);
            })
        } else {
            container.append(createPlaceholder());
        }
    })
}

export {createPlaceholder, removePlaceholder, render};
