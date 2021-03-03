import React,{useState} from 'react';
import {Multiselect} from 'multiselect-react-dropdown';
import {Button,Form,Col} from "react-bootstrap";
import "../css/AddMovie.css"
import axios from 'axios';

// import React, { Component } from 'react';
// import axios from 'axios';
// class AddMovie extends Component {
  
  
//   constructor(props) {
//       super(props);
//         this.state = {
//           selectedFile: null
//         }
     
//     }

  

//     onChangeHandler=event=>{
//       var data=[{
//         name:"rohit"
//       },
//     {
//       name:"chaudhary"
//     }]
//       data[0].name="hello"
//       data[1].name="hello"
//       console.log(data[0])
//       var file = event.target.files[0]
//        this.setState({
//        selectedFile: file,
//     })
//   }
//     onClickHandler = () => {
//       const form = new FormData()
//         form.append('file', this.state.selectedFile)
//         var data={
//           names:"rohit",
//           fname:'chaudhary'
//         }

//         form.append('name',data.names)
//         form.append('name',data.fname)
        
        
//         axios.post("http://localhost:3030/Movie/addMovie", form, {})
        
//     }
  
//     render() {
//       return (
//         <div className="container">
//             <div className="row">
//               <div className="offset-md-3 col-md-6">
//                  <div className="form-group files">
//                   <label>Upload Your File </label>
//                   <input type="file" className="form-control"  onChange={this.onChangeHandler}/>
//                 </div> 
                
//                 <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
  
//             </div>
//         </div>
//         </div>
//       );
//     }
//   }
  
//   export default AddMovie;
  








const AddMovie = () =>{
 
  const formdata= new FormData();
  var language=[]
  var genre=[]
  var cast=[]
 var file1="",file2=""

  const [input,setInput]=useState(
    {
        moviename: "",
        movieinfo : "",
        director : "",
        duration :"" ,
        url:""
    })

    function handleChange(event){
       
      const {name,value}=event.target;
  
      setInput(prevInput=>{
          return {
              ...prevInput,
              [name]:value
          }
      })
  }



    // const [state,setState]=useState({
    //         file:null
    //     })

  const languages=[
      {Language:'English',id:1},
      {Language:'Hindi',id:2}, 
      {Language:'Gujarti',id:3},  
      {Language:'tamail',id:4},  
      {Language:'telugu',id:5}   
  ]

  const genres=[
    {Genre:'Comedy',id:1}, 
    {Genre:'Crime',id:2},
    {Genre:'Drama',id:3},
    {Genre:'Romance',id:4},
    {Genre:'Historical',id:5},
    {Genre:' Mystery',id:6},
    {Genre:' Social',id:7},
    {Genre:' Saga',id:8},
    {Genre:' Urban',id:9},
    {Genre:'Western',id:10},
    {Genre:'Animation',id:11},
    {Genre:'Thriller',id:12},
    {Genre:'Horror',id:13},
    {Genre:'Fantasy',id:14},
    {Genre:'Adventure',id:15}
  ]

 const casts=[
      {Cast:'Sunny khatik',id:1},
      {Cast:'Jenish Dholaria',id:2}, 
      {Cast:'Rohit Chaudhary',id:3},  
      {Cast:'Gal Gadot',id:4}
    ]
 

  const [languageoptions]=useState(languages);

  const [genreoptions]=useState(genres);

  const [castptions]=useState(casts);


  function handleLanguage(item,name){
    language.push(name.Language) 
    console.log(language)
  
  }
  
  function handleLanguageRemove(item,name){
    var index=language.indexOf(name.Language); 
    language[index]="";
  
    var temp=[]
    for(let i of language)
      i && temp.push(i);
      
    language=temp;  
    console.log(language)
  }
  function handleCast(item,name){
    cast.push(name.Cast) 
    console.log(cast)
 
  }
  
  function handleCastRemove(item,name){
    var index=cast.indexOf(name.Cast); 
    cast[index]="";
  
    var temp=[]
    for(let i of cast)
      i && temp.push(i);
      
    cast=temp;  
    console.log(cast)
  }
  
  function handleGenres(item,name){
    genre.push(name.Genre) 
    console.log(genre)
  }
  
  function handleGenreRemove(item,name){
    var index=genre.indexOf(name.Genre); 
    genre[index]="";
  
    var temp=[]
    for(let i of genre)
      i && temp.push(i);
      
    genre=temp;  
    console.log(genre)
  }



  
  function handleFile(e){
    file1=e.target.files[0]
    file2=e.target.files[1]
 
     console.log(file1)
    console.log(file2)
  
    
  }

function handleClick(event){
  formdata.append('file',file1);
  formdata.append('file',file2);
  formdata.append('info',input)

  formdata.append('moviename',input.moviename)
  formdata.append('movieinfo',input.movieinfo)
  formdata.append('director',input.director)
  formdata.append('duration',input.duration)
  formdata.append('url',input.url)

  language.forEach(ele=>{
    formdata.append('lang',ele);
  })

  genre.forEach(ele=>{
    formdata.append('genre',ele);
  })
  cast.forEach(ele=>{
    formdata.append('cast',ele);
  })

 axios.post('http://localhost:3030/Movie/addMovie',formdata,{}).then((res)=>{})
// axios.post('http://localhost:3030/Movie/addMovie',Array,{}).then((res)=>{})
  
  }
return(<>
 <div className="addmovie" >
 <div style={{marginTop:'100px'}}>
 <div className="authBox">
 <div className="leftBox">
     <div className="bgGreen"></div>
     <div className="imageAuth"></div>
     {/* <div className="imagetext bold style1">Movie Mood</div> */}
     <div className="imagetext style2">Add Movie</div>
 </div>
 <div className="rightBox"> 
 <Form >
    <Form.Row>
        <Form.Group as={Col}>
        <Form.Label>Movie Name</Form.Label>
        <Form.Control  type="text" onChange={handleChange} value={input.moviename} name="moviename" placeholder="Movie Name" />
        </Form.Group>

        
        <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Director</Form.Label>
        <Form.Control  type="text" onChange={handleChange} value={input.director} name="director" placeholder="Director" />
        </Form.Group>
       
        
        <Form.Group as={Col}>
        <Form.Label>Time Duration</Form.Label>
        <Form.Control  type="text" onChange={handleChange} value={input.duration} name="duration" placeholder="TIme Duration" />
        </Form.Group>
       </Form.Row>
{/*    
    <Form.Group  >
         <Form.Label>Cast Description</Form.Label>
         <Form.Control  type="text" name="castinfo" placeholder="Enter Cast Description" />
      </Form.Group>
    */}
    <Form.Row>
    <Form.Group as={Col}>
         <Form.Label>Movie Description</Form.Label>
         <Form.Control  type="text" onChange={handleChange} value={input.movieinfo} name="movieinfo" placeholder="Enter Movie Description" />
      
      </Form.Group>
      
    <Form.Group as={Col} >
         <Form.Label>Movie Trailer Url</Form.Label>
         <Form.Control  type="text"  onChange={handleChange} value={input.url} name="url" placeholder="Movie Trailer Url" />
      </Form.Group>
    
        </Form.Row>
        <Form.Group  >
            <Form.Label>Language</Form.Label>
            <Multiselect options={languageoptions}  displayValue="Language" onRemove={handleLanguageRemove} onSelect={handleLanguage}  />
        </Form.Group>
        
    
      <Form.Group >
        <Form.Label>Genres</Form.Label>
        <Multiselect options={genreoptions} displayValue="Genre" onSelect={handleGenres} onRemove={handleGenreRemove}  />
  
        </Form.Group>    

   <Form.Group  >
        <Form.Label>Cast</Form.Label>
        <Multiselect options={castptions} displayValue="Cast" onSelect={handleCast} onRemove={handleCastRemove}  />
    </Form.Group>

<Form.Row as={Col}>
      <Form.Group  >
         <Form.Label>Poster</Form.Label>
         <Form.Control  type="file" name='file' onChange={handleFile} multiple/>
     </Form.Group>
    <Form.Group>
      <Button onClick={handleClick} variant="primary" style={{marginTop:'20px'}}>
              Upload
      </Button>
 </Form.Group>  
</Form.Row>

  </Form>
    </div>
    </div>
    </div>
    </div>
 </>
 );
}

export default AddMovie;


