let  promise=new Promise((resolve,reject)=>{
    var request=new XMLHttpRequest();
    request.open('GET','https://openlibrary.org/works/OL45804W.json');
    request.send();
    request.onload=function(){
        if(request.status==200){
            var data=JSON.parse(request.response)
            resolve(data);
            promise.then((data)=>{console.log(data)}).catch((err)=>{console.log(err)});
            let wordinfo = document.getElementById('bookdata');
            wordinfo.innerHTML=`<div class="card">
    <div class="card-body">
      <h2 class="card-title">Fantastic_Mr._FOX</h2>
      <p class="card-text"><b>Story description:</b> ${data.description} </p><hr>
      <p class="card-text"><b>Subjects in the story:</b> ${data.subjects} </p>
    </div>
  </div>`
    
        }
        else
        {
            reject("some error")
        }
        }
      
})