export const useApp=()=>{
    
    const id="reference"
  
    const handleHideSidebar =()=> {
      let idDiv = document.getElementById(id);
      if(idDiv){
        if(idDiv.classList.contains('fadeOutLeft')){
          idDiv.classList.remove('fadeOutLeft')
          idDiv.classList.add('fadeInLeft')
  
        }else{
          idDiv.classList.add('fadeOutLeft')
  
        }
      }
    }

    return{
        id,
        handleHideSidebar
    }
}