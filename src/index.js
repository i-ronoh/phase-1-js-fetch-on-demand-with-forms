const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event)=>{
      event.preventDefault();
      console.log(event);
      const input = document.querySelector('input#searchByID');
      console.log(input.value);
      //specify the url with user input
      //exception if data not found
      try{
      fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => response.json())
      .then(data => {
          // get dom elements
          const title = document.querySelector('section#movieDetails h4');
          const summary = document.querySelector('section#movieDetails p');
        //write the data to the page
          title.innerText = data.title;
          summary.innerText = data.summary;
      });
      //if movie not found do...
  }catch(error){
      document.querySelector('section#movieDetails h4').innerText = 'Movie not found';
      document.querySelector('section#movieDetails p').innerText = 'Please try again';
  }
  });
  }
  
  
  document.addEventListener('DOMContentLoaded', init);