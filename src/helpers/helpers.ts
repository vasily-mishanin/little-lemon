export const scrollToSection = (id:string) => {
  setTimeout(()=>{
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  },0)
  };