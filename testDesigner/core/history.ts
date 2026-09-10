export class HistoryManager {
  private stack:any[]=[]
  private index=-1

  push(data:any){
    this.stack=this.stack.slice(0,this.index+1)
    this.stack.push(JSON.parse(JSON.stringify(data)))
    this.index++
  }

  undo(){
    if(this.index<=0)return null
    this.index--
    return this.stack[this.index]
  }

  redo(){
    if(this.index>=this.stack.length-1)return null
    this.index++
    return this.stack[this.index]
  }
}
