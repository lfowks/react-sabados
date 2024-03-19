import React, { useEffect, useState } from 'react'

const ListUsers = () => {

 const [isLoading, setIsLoading] = useState(false);
 const [isError, setIsError] = useState(false);
 const [usuariosResult, setUsuariosResult] = useState<any>([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((result) => setUsuariosResult(result))
        .catch((err)=> console.log(err))
        .finally(()=>setIsLoading(false));
    }, [])
    
   if(isLoading)
   return <div>...Loading</div>

   if(isError)
   return <div>Error</div>

   return (
    <div>
            {usuariosResult?.map((user)=>(
              <div key={user.id}><div>{user.id}</div>
              <div>{user.name}</div>
              <div>{user.lastName}</div></div>
            ))}
    </div>
  )
}

export default ListUsers