var fs = require("fs");
var json1 = fs.readFileSync("first.json");
var json2 = fs.readFileSync("second.json");
var jsonContent1 = JSON.parse(json1);
var jsonContent2 = JSON.parse(json2);
function Printjson(name, value) { console.log("\t\t" + name + ":" + value); };
for (var key1 in jsonContent1) {

    for (var key2 in jsonContent2) {
        if (key1 == key2)//ищем ключи что совпадают
        {
            if ((JSON.stringify(jsonContent1[key1]) == JSON.stringify(jsonContent2[key2])) == false)//Если в Объектах есть различия, печатаем ключ
            {
                console.log(key1);
            }
            for (var variable in jsonContent1[key1]) {
                if ((JSON.stringify(jsonContent1[key1][variable]) == JSON.stringify(jsonContent2[key2][variable])) == false) {
                    console.log("\t" + variable);
                    Printjson("json1", jsonContent1[key1][variable]);
                    Printjson("json2", jsonContent2[key2][variable]);
                }
            }

        }

    }

}



