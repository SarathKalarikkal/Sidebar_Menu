const body = document.querySelector('body'),
      sidebar = body.querySelector('.sidebar'),
      toggle = body.querySelector('.toggle'),
      searchBox = body.querySelector('.seacrh-box'),
      modeSwitch = body.querySelector('.mode'),
      modeText = body.querySelector('.mode-text');

      toggle.addEventListener('click',()=>{
        sidebar.classList.toggle('close')
      })
      
      searchBox.addEventListener('click',()=>{
        sidebar.classList.remove('close')
      })




      modeSwitch.addEventListener('click',()=>{
        body.classList.toggle('dark')
       
         if(body.classList.contains('dark')){
            modeText.innerHTML = "Light mode"
         }else{
            modeText.innerHTML = "Dark mode"
         }

      })