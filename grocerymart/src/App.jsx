import './App.css'
import './bootstrap-grid.css';
import './login.css'
import './admin.css'

function App() {

   function Tabs(tabName){
   var i ;
   var x = document.getElementsByClassName('prodForm') ;

   for(i = 0; i<x.length; i++){
      x[i].computedStyleMap.display = "none" ;
   }
   document.getElementsByClassName(tabName).style.display = "block" ;
   }
   
   return (
      <>

         <h3 className=''> DASHBOARD </h3>

         <div className="AdminBod">
            <br />

            <div className='TabBox'>
               <ul>
                  <li > 
                     <button onClick='OpenTab(Editform)'> Edit </button>   
                  </li>   
                  <li> 
                     <button onClick='OpenTab(Deleteform)'> Delete </button>   
                  </li>  
                  <li> 
                     <button onClick='OpenTab(Createform)'> Create </button>   
                  </li>  
                  <li> 
                     <button onClick='OpenTab(Viewform)'> View </button>   
                  </li>  
                  
               </ul>
            </div>

            <div className='CRUDbox '>
               <h3 >Product Information </h3>

               <form className='Editform' id='prodForm'>
                  <h4 className=''> Edit Info </h4>

                  <div className='infoBox'>
                     <label> Product Name </label><br />
                     <input type='text' placeholder=' name' />
                  </div>

                  <div className='infoBox'>
                     <label> Product Price </label><br />
                     <input type='number' placeholder=' price' />
                  </div>

                  <div className='infoBox'>
                     <label> Product Image Link </label><br />
                     <input type='text' placeholder='img Link e.g https://www.googleimages.com/image1' />
                     <i className='infoImg'> This is done so as to save storage space as this is a DEMO application on SUPABASE</i>
                  </div>

                  <button className='EditProd'> Submit </button>

               </form>

               <form className='Deleteform' id='prodForm'>
                  <h4 className=''> Delete Product </h4>

                  <div className='infoBox'>
                     <label> Product ID </label><br />
                     <input type='text' placeholder=' ID' />
                  </div>

                  <button className='EditProd'> Delete </button>

               </form>

               <form className='Createform' id='prodForm'>
                  <h4 className=''> Create Product </h4>

                  <div className='infoBox'>
                     <label> Product Name </label><br />
                     <input type='text' placeholder=' name' />
                  </div>

                  <div className='infoBox'>
                     <label> Product Price </label><br />
                     <input type='number' placeholder=' price' />
                  </div>

                  <div className='infoBox'>
                     <label> Product Image Link </label><br />
                     <input type='text' placeholder='img Link e.g https://www.googleimages.com/image1' />
                     <i className='infoImg'> This is done so as to save storage space as this is a DEMO application on SUPABASE</i>
                  </div>

                  <button className='EditProd'> Create </button>

               </form>

               <form className='Viewform' id='prodForm'>
                  <h4 className=''> View Products </h4>

                  <div className=''>
                     <table className='tableCon'>
                        <tr>
                           <th> ID </th>
                           <th> NAME </th>
                           <th> PRICE  </th>
                           <th> IMG Link </th>
                        </tr>

                        <tr>
                           <td> 25453</td>
                           <td> Beauty Mar 2 </td>
                           <td> 1202 </td>
                           <td> https://www.googleimages.com/image1 </td>
                        </tr>
                        <tr>
                           <td> 25443</td>
                           <td> Beauty Mar 2 </td>
                           <td> 1202 </td>
                           <td> https://www.googleimages.com/image1 </td>
                        </tr>
                     </table>
                  </div>   
               </form>
            </div>
         </div>

      </>
   )
}

export default App
