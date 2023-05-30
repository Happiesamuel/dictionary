import * as model from './model'
import RenderView from './resultView'
import View from './search'
const restAll =  document.querySelector('.rest-all')
const preloader = document.querySelector('.preloader')
const controlSearch = async function(){
try { 
       const search = View.getValue()
    if (!search) return
    restAll.classList.remove('hidden')
    RenderView.loadSpinner()
 await model.searchFunction(search)

    RenderView.render(model.searchField.result)
}
catch(err){
console.log(err)
RenderView.renderError(err)
}

}
View.addListern(controlSearch)
window.addEventListener('load',function(){
   preloader.classList.add('disappear')
})