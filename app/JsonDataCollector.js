export default function getData(json) {
    var jsonData = json;

    

    //var jsonData = <<wfp.JSON/>>;
    var jsonRows = jsonData.zvar.DPart;
    // console.log(jsonRows)


    var mappedArr = [];

    function mapArray(jsonRows) {

        for (var i = 0; i < jsonRows.length; i++) {
            var tempObj = {};

            var e1 = jsonRows[i];
            var e2 = jsonRows[++i];
            
            if (true) {
                tempObj.name = e1.DPM["cip4:Root"]["cip4:Production"]["cip4:Resource"]["cip4:RunList"]["cip4:FileSpec"]["@attributes"].URL;
                tempObj.separs = e2.DPM["cip4:Root"]["cip4:Production"]["cip4:Resource"];
            }

            mappedArr.push(tempObj);
        }
    }
    // console.log(mappedArr);

    mapArray(jsonRows);

    function jsonRemoveNonOffsetSepars(mappedArr) {

        for (var i = 0; i < mappedArr.length; i++) {

            var separs = mappedArr[i].separs;

            for (var z = 0; z < separs.length; z++) {

                if (!separs[z]["cip4:Color"]) {
                    separs.splice([z], 1);
                    z--;
                }
             
                if (separs[z]["cip4:Color"]["@attributes"]["cip4:PrintingTechnology"] !== "Offset") {
                    separs.splice([z], 1);
                    z--;
                }
            }
        }
    }

    jsonRemoveNonOffsetSepars(mappedArr);
    // console.log(mappedArr);


    const filteredData = mappedArr.map(el => {
        const obj = {};
        obj.name = el.name;

        obj.separsNum = el.separs.length;
        obj.separs = el.separs.map(el => {
            let separation = [];
            separation = el["cip4:Color"]["@attributes"]["cip4:ActualColorName"];
            return separation;
        })
        return obj;

    })
    // console.log(filteredData);

   return filteredData;

}