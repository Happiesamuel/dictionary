
class RenderView{
    _boss = document.querySelector('.rest-all')
_parentEl = document.querySelector('.rest')
_message = 'check your internet connections'
constructor(){
    this._parentEl.addEventListener('click',this.addParent.bind(this))
}
_parent(markup){
    this._parentEl.innerHTML = ''
this._parentEl.insertAdjacentHTML('afterbegin',markup)
}
render(data){
    const markup = this._generateMarkup(data).join('')
    this._parent(markup)
}
renderError(message = this._message){
const markup = `${message}`
this._parent(markup)
}
_generateMarkup(data){
return data.map(x => {
return `<div class="rest ">
${this._arrayPhonic(x.phonetics)}
<div class="two">
    <div class="head">${x.word}</div>
    ${this._all(x.phonetics)}
</div>
<div class="hyp"><i>${x.meanings[0].partOfSpeech} <span>${!x.phonetic ? '': x.phonetic}</span></i></div>
${this._generateMapDefination(x.meanings[0].definitions)}
`
})
}
_arrayPhonic(x){
    if(x.length < 1) return '<div class="wo"></div>'
  return `<audio src="${x[0].audio}" class="sound"></audio>`
}
_all(x){
  if(!x) return ''
    if(x.length < 1 || x[0].audio === '') return ''
    else return `<i class="fa fa-volume-up volume"></i>`

}
_generateMapDefination(x){
   return x.map(x => {
return `<div class="meaning">${x.definition}</div>
<div class="examples"><i><b>${x.example || ''}</b></i></div>
`
 }).join('')
}

loadSpinner(){
    const markup = `
    <div class="spinner">
          <i class="fa fa-spinner fas" aria-hidden="true"></i>
        </div>
    `
    this._parent(markup)
}
addParent(e){
    const click = e.target
    if(click.classList.contains('volume')){
   const sound = this._boss.querySelector('.sound')
   sound.play()
}
return click    
}
}
export default new RenderView()
