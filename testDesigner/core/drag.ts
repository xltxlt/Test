export function createField(type:any,label:string){
  const fieldName='field_'+Date.now()
  return {
    formType:type,
    fieldName,
    title:label,
    placeholder:'请输入'+label,
    must:false
  }
}
