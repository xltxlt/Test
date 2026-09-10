import {ref} from 'vue'
import {HistoryManager} from '../core/history'

export function useHistory(){
 const history=new HistoryManager()
 const version=ref(0)
 function save(data:any){
   history.push(data)
   version.value++
 }
 return {
   save,
   undo:()=>history.undo(),
   redo:()=>history.redo(),
   version
 }
}
