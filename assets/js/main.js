const eye = document.querySelector('.pc-svg');  
  window.addEventListener('mousemove', (event) => {  
  const x = (window.innerWidth / 2 - event.pageX) / 10;  
  const y = (window.innerHeight / 2 - event.pageY) / 10;
  let root_svg = document.querySelector('.pc-svg');
  let all_svg_roots = root_svg.querySelectorAll('.pc-anim');
  for (let svg in all_svg_roots){
     let ss = all_svg_roots[svg];
     try{
        ss.style = `transform: translateY(-${(2)*(y)}px) translateX(${(-1)*(x)}px);`; 
     } catch{
        let u = '';
     }
  }
  }); 