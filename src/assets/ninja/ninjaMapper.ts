import NinjaMapper from './ninjaMapping.json';
const ReverseMap = Object.entries(NinjaMapper).reduce((cur, it)=>{
  it[1].forEach(detailsId=>{
    if(cur.has(detailsId))
      console.warn("duplicated detailsId Detected", detailsId, cur.get(detailsId), it[1]);
    cur.set(detailsId, it[0]);
  })
  return cur;
}, new Map<string, string>());
export const getDetailsIdType= (detailsId:string)=>{
  return ReverseMap.get(detailsId);
}

