import { API_URL} from "../../settings.js"
import { handleHttpErrors } from "../../utils.js"


//Add id to this URL to get a single user
const URL = `${API_URL}/cars`

// @ts-ignore
export async function initFindEditCar(match){
    //empty field 
    document.getElementById("car-id-input").innerHTML=""
    // @ts-ignore
    const id = document.getElementById("car-id-input").value
    document.getElementById("btn-fetch-car").onclick=getCar
    document.getElementById("btn-submit-edited-car").onclick=editCar
    document.getElementById("btn-delete-car").onclick=deleteCar
    
    

   async function getCar(){
    const car=await fetch(URL+"/"+id).then(handleHttpErrors)
    // @ts-ignore
    document.getElementById("car-id").value=car.id
    // @ts-ignore
    document.getElementById("brand").value=car.brand
    // @ts-ignore
    document.getElementById("model").value=car.model
    // @ts-ignore
    document.getElementById("price-pr-day").value=car.pricePrDay
    // @ts-ignore
    document.getElementById("best-discount").value=car.bestDiscount
   }

   async function editCar(){
    const car=await fetch(URL+"/"+id,{
        method:"PUT",
        body:JSON.stringify({
            // @ts-ignore
            brand:document.getElementById("brand").value,
            // @ts-ignore
            model:document.getElementById("model").value,
            // @ts-ignore
            pricePrDay:document.getElementById("price-pr-day").value,
            // @ts-ignore
            bestDiscount:document.getElementById("best-discount").value
        }),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(handleHttpErrors)
    // @ts-ignore
    document.getElementById("car-id").value=car.id
    // @ts-ignore
    document.getElementById("brand").value=car.brand
    // @ts-ignore
    document.getElementById("model").value=car.model
    // @ts-ignore
    document.getElementById("price-pr-day").value=car.pricePrDay
    // @ts-ignore
    document.getElementById("best-discount").value=car.bestDiscount
   }
   async  function deleteCar() {   
    const car=await fetch(URL+"/"+id,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    }).then(handleHttpErrors)
    // @ts-ignore
    document.getElementById("car-id").value=car.id
}

}
