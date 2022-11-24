window.onload = () => {
  console.log("class2.html: " + localStorage.username);
  // window.alert(localStorage.username);

  // 프린터
  const btn = document.querySelectorAll("button");
  
  btn[0].onclick = () => {
    window.print();
  }
  
  // 뒤로가기
  btn[1].onclick = () => {
    history.back();
  } 
  
}