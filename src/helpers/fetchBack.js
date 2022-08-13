
export const fetchBack = () => {

 const requestFetch = () => {
    fetch( 'http://localhost:3001/' )
    .then( resp => resp.json() )
    .then( results => console.log(results) )
 }

return {
    requestFetch
}

}