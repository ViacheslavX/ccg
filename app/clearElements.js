export default function clearElements(id) {
    let zzz;
    if (id) {
        zzz = document.querySelectorAll(`${id} > li`)
    } else {
        zzz = document.querySelectorAll(`li`);

    }
    for (const iterator of zzz) {
        iterator.remove()
    }
}
