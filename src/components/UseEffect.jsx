
import { useEffect, useState } from "react"

const UseEffect = () => {
     const [mensaje, setMensaje] = useState ("Mensaje inicial")
     const [contador, setContador] = useState(0)

     useEffect(()=> {
         console.log("efecto secundario")
     }, [contador])

   const sumar =()=> {
         setContador(contador + 1)
     }

     const restar =() => {
          setContador(contador - 1 )


      const reset = ()=> {
           if (contador < 0 ){}
       }

  }

  const UseEffect = () => {

     return (
     <div>
         <p>{mensaje} </p>
         <button onClick={()=>setMensaje("Mensaje Modificado")}> Cambiar </button>
         <p>{contador} </p>
         <button onClick={sumar}>Sumar</button>
         <button onClick={restar}>Restar</button>
         {/* <button onClick={reset}>Reset</button> */}


      </div>
    )
  } 
}
  export default UseEffect