export default async function postData() {
    const inputField = document.querySelector('input');
    const listElements = Array.from(document.querySelectorAll('li:not(#unsorted > li)'));
    const dataArr = listElements.map(e => {
        const newObj = {};
        const path = JSON.parse(e.dataset.info).name;
        const filename = path.match(/([^\/]+)(?=\.\w+$)/)[0];
        const colorBarData = JSON.parse(e.dataset.infoColorBarData);
        // console.log(JSON.parse(e.dataset.info).name);
        // console.log(e.dataset.infoColorBarData);
        // console.log({[name]:colorBarData});
        newObj.name = [filename,colorBarData];

        return newObj;
    })
    

    // let response = await fetch('http://esko221.smart.blitz.firewall:4415/ws/pack_paint_color_codes', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'json',
    //     },
    //     body: JSON.stringify(dataArr)
    // });

    // let result = await response.json();
    // alert(result.message);

    let formData = new FormData();
    // formData.append('file', JSON.stringify(dataArr), 'data.json');
    formData.append('wfparam1', JSON.stringify(dataArr));


    let response = await fetch(`http://esko221.smart.blitz.firewall:4415/ws/pack_paint_color_codes?jobname=${inputField.value}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/xml',
        },
        body: JSON.stringify(dataArr)
    });

    let result = await response.text();
    console.log(result);
    // alert(result.message);




    console.log(dataArr);
    console.log(JSON.stringify(dataArr));
}

