let program=[]
let parsePlaces
let pro_b_ody=document.getElementById('b_ody')
let pro_form=document.getElementById('form1')
let programmer=function(name,school,languge){
  this.name=name
  this.school=school
  this.languge=languge
}
if(localStorage.stored){
  parsePlaces = localStorage.getItem('stored')
  program = JSON.parse(parsePlaces)
}
else{
  let student1=new programmer('X','xx','xxx')
  let student2=new programmer('Y','YY','YYY')
}

let u_list=document.createElement('ul')
pro_b_ody.appendChild(u_list)

u_list.innerHTML="Programmer_List"
programmer.prototype.fun=function(){
  for(let i=0;i<program.length;i++){
    let list=document.createElement('li')
    list.innerHTML='<u><b><h3>Name</b></u> '+program[i].name + ' <u><b>Coding_School</b></u> '+program[i].school + ' <u><b>languge</b></u> '+program[i].languge
    u_list.appendChild(list)

  }
}

pro_form.addEventListener('submit',function(event){
  event.preventDefault()
  let number1=pro_form.value1
  let number2=pro_form.value2
  let number3=pro_form.value3
  let new_row = new programmer(number1.value,number2.value,number3.value)
  program.push(new_row)
  new_row.fun()
  localStorage.setItem('stored', JSON.stringify(program))
})