const parse = (str) => {
  return str
     .split(' ')
     .map(x => x.split('='))
     .map(x => (typeof x[1] === "undefined") ?x[0] : [x[0],x[1]
     .replace(/"/g,'')])
}
const toObj = (arr) => {
  var obj = {"type": null};
  if (arr[0] === 'node' || arr[0] === 'edge') obj["type"] = arr.shift();
  return obj;
}
const lines = `<node positionX="680.4102630615234" positionY="50.30450439453125" id="17" mainText="Team" upText="" size="30" ></node>
<edge source="0" target="2" isDirect="true" weight="7" useWeight="true" id="10000" text="" upText="" arrayStyleStart="" arrayStyleFinish="" model_width="4" model_type="0" model_curveValue="0.1" model_default="true" ></edge>`
.split('\n');
lines.forEach(line => {
  var parsed = parse(line)
  parsed = parsed.slice(0,parsed.length-2); // remove last item
  if (parsed[0].match(/^</)) parsed[0] = parsed[0].replace('<','');
  console.log(parsed);
});
