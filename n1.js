

import express from 'express';
import { request } from 'http';

const app =express(); 

const students=[

  {id: 1,
   name: 'nesma',
   city:"shibeen"

},
{id: 2,
    name: 'yasmina',
    city:"cairo"
    
 },  {id: 3,
    name: 'weaam',
    city:"cairo"
 
 }

]

const studentfunction =(request,response)=>{
   let output='<ul>';
   
   for(let i=0;i<students.length;i++){
      const student = students[i];

      output+='<li>' + student.name + '</li>'
     

   }
   
   output+='</ul>'
    response.send(output)

};


app.get('/students',studentfunction )

app.listen(1000);

