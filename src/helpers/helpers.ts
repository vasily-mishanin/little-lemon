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

  export const dateToYYYYMMDD = (date:string) =>{
    let selectedDate = new Date(date);
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const day = String(selectedDate.getDate()).padStart(2, "0");
   return `${year}-${month}-${day}`;
  }