import { API } from "./config"
import { getJSON } from "./helper"

export const searchField = {
result : []
}

export const searchFunction = async function(search){
    try{
    const data = await getJSON(`${API}/${search}`)
searchField.result = data
    }
    catch(err){
        throw err
    }
}
