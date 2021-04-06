import React from "react";
import { CardFooter } from "reactstrap";
import { useGetAllPeopleQuery } from "./generated/graphql-types";
// import LoadingGiff from ''



function App() {


  // This constant detamine the lenght of data from server to be rendered
  
  const { loading, data, error } = useGetAllPeopleQuery({
    variables: { pageSize: 6 },
    
  });

// The starting page to show at first when the page loads
  if (loading || error || !data) {
    return <div>Processing..</div>;
    
    

  }
 
// Rending the whole data we got from the Star wraps api

  return (

    
    <>
    <br></br>
       <div className="col-md-0 mb-4">


<div className="md-form mt-0">
  <input className="form-control" type="text" placeholder="Search for Name" aria-label="Search" />
</div>

</div>
      <br></br>
     
    
    


    
      <ul className="list-group">
    



     
        
  <li className="list-group-item active">GraphQL Api Assessment</li>
  
  <li className="list-group-item">   {data?.allPeople?.people?.map((p) => (
    
   
        <div>
          
          
          <li className="list-group-item"><button  type="button" className="btn btn-info">People -- </button>{p?.name}: {p?.gender}, {p?.height}cm, born in {p?.birthYear}</li>
          
        </div>
      ))}</li>
  <li className="list-group-item"></li>
  
</ul>

<nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>
   

            



      
    </>
  );
}

export default App;
