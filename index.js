function parseGraphml(graphml) {
  var jsonArrayOut = [];
  const lines = graphml.split("\n");
  const isNumeric = (obj) => {
    return !Array.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
  };
  const parse = (str) => {
    return str
      .split(" ")
      .map((x) => x.split("="))
      .map((x) =>
        typeof x[1] === "undefined" ? x[0] : [x[0], x[1].replace(/"/g, "")],
      );
  };
  const toObj = (arr) => {
    var obj = { type: null };
    if (arr[0] === "node" || arr[0] === "edge") obj["type"] = arr.shift();
    for (var i = 0; i < arr.length; i++)
      obj[arr[i][0]] = isNumeric(arr[i][1]) ? Number(arr[i][1]) : arr[i][1];
    return obj;
  };

  lines.forEach((line) => {
    if (!/^<edge|node/.test(line)) {
    } else {
      var parsed = parse(line);
      parsed = parsed.slice(0, parsed.length - 2); // remove last item
      if (parsed[0].match(/^</)) parsed[0] = parsed[0].replace("<", "");
      jsonArrayOut.push(toObj(parsed));
    }
  });
  //return jsonArrayOut;
  var jsonObjOut = { nodes: [], edges: [] };
  for (var i = 0; i < jsonArrayOut.length; i++) {
    const key = `${jsonArrayOut[i].type}s`;
    jsonObjOut[key].push(jsonArrayOut[i]);
  }
  return jsonObjOut;
}
textToParse = `
<?xml version="1.0" encoding="UTF-8"?>
<graphml>
<graph id="Graph" uidGraph="18" uidEdge="10018">
<node positionX="539.4102630615234" positionY="48.30450439453125" id="0" mainText="Home" upText="" size="30" ></node>
<node positionX="389.41026306152344" positionY="133.30450439453125" id="1" mainText="Produkte" upText="" size="30" ></node>
<node positionX="543.4102630615234" positionY="136.30450439453125" id="2" mainText="Neues" upText="" size="30" ></node>
<node positionX="680.4102630615234" positionY="131.30450439453125" id="3" mainText="Dienstleistungen" upText="" size="30" ></node>
<node positionX="224.41026306152344" positionY="257.30450439453125" id="4" mainText="Haus und Garten" upText="" size="30" ></node>
<node positionX="330.41026306152344" positionY="301.30450439453125" id="5" mainText="Office" upText="" size="30" ></node>
<node positionX="412.41026306152344" positionY="253.30450439453125" id="6" mainText="Werkzeuge" upText="" size="30" ></node>
<node positionX="425.41026306152344" positionY="355.30450439453125" id="7" mainText="Innovative Produkte" upText="" size="30" ></node>
<node positionX="553.4102630615234" positionY="316.30450439453125" id="8" mainText="Unternehmen" upText="" size="30" ></node>
<node positionX="695.4102630615234" positionY="440.30450439453125" id="9" mainText="Pressemeldungen" upText="" size="30" ></node>
<node positionX="633.4102630615234" positionY="244.30450439453125" id="10" mainText="Online" upText="" size="30" ></node>
<node positionX="703.4102630615234" positionY="242.30450439453125" id="11" mainText="Filiale" upText="" size="30" ></node>
<node positionX="767.4102630615234" positionY="241.30450439453125" id="12" mainText="vor Ort" upText="" size="30" ></node>
<node positionX="433.41026306152344" positionY="446.30450439453125" id="13" mainText="Standorte" upText="" size="30" ></node>
<node positionX="582.4102630615234" positionY="407.30450439453125" id="14" mainText="Investor Relations" upText="" size="30" ></node>
<node positionX="850.4102630615234" positionY="130.30450439453125" id="15" mainText="Buchen" upText="" size="30" ></node>
<node positionX="269.41026306152344" positionY="132.30450439453125" id="16" mainText="Service" upText="" size="30" ></node>
<node positionX="680.4102630615234" positionY="50.30450439453125" id="17" mainText="Team" upText="" size="30" ></node>
<edge source="0" target="2" isDirect="true" weight="7" useWeight="true" id="10000" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge>
<edge source="0" target="3" isDirect="true" weight="7" useWeight="true" id="10002" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge>
<edge source="0" target="17" isDirect="true" weight="1" useWeight="true" id="10003" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge>
<edge source="1" target="16" isDirect="true" weight="1" useWeight="true" id="10004" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge>
<edge source="3" target="15" isDirect="true" weight="1" useWeight="true" id="10005" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge>
<edge source="2" target="7" isDirect="true" weight="5" useWeight="true" id="10006" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge>
<edge source="2" target="8" isDirect="true" weight="5" useWeight="true" id="10007" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge>
<edge source="2" target="9" isDirect="true" weight="5" useWeight="true" id="10008" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge>
<edge source="1" target="4" isDirect="true" weight="5" useWeight="true" id="10009" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge>
<edge source="1" target="5" isDirect="true" weight="5" useWeight="true" id="10010" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge>
<edge source="1" target="6" isDirect="true" weight="5" useWeight="true" id="10011" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge>
<edge source="3" target="10" isDirect="true" weight="5" useWeight="true" id="10012" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge>
<edge source="3" target="11" isDirect="true" weight="5" useWeight="true" id="10013" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge>
<edge source="3" target="12" isDirect="true" weight="5" useWeight="true" id="10014" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge>
<edge source="8" target="13" isDirect="true" weight="3" useWeight="true" id="10015" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge>
<edge source="8" target="14" isDirect="true" weight="3" useWeight="true" id="10016" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge>
<edge source="0" target="1" isDirect="true" weight="1" useWeight="false" id="10017" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge>
</graph>
</graphml>`;
console.log(JSON.stringify(parseGraphml(textToParse), null, 4));
