class View{
    _me = document.querySelector('.together')
    _button = document.querySelector('button')

    getValue(){
        const query = document.querySelector('.input').value
        this._clearInput()

        return query
    }
    addListern(handler){
        this._button.addEventListener('click',function(e){
            e.preventDefault()
          handler()
        }) 
    }
    _clearInput(){
        document.querySelector('.input').value = ''
    }
}
export default new View()