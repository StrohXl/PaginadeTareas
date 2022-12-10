import axios from "axios";
const loadData = async (state)=>{
const lista = await axios.get('http://localhost:8080/Tasks')
state(lista)
}
export{loadData}