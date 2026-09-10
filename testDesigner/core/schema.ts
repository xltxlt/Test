import type { DesignerField } from '../types/designer';

export function createField(type:number|string,label:string):DesignerField{
 const fieldName='field_'+Date.now();
 return {
   formType:type,
   fieldName,
   title:label,
   placeholder:'请输入'+label,
   must:false,
   hide:false,
   props:{},
   comProps:{},
   comOn:{},
 };
}

export function createSchema(){
 return {
   cols:2,
   formData:{},
   form:[],
   options:{},
   rules:{},
   design:true
 };
}
