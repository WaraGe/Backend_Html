window.onload = () => {

  // 네이버로 이동하는 방법 [0]번째 셀렉 가져오기
  // 뒤로가기가 가능.
  const btns = document.querySelectorAll("button");
  btns[0].onclick = () => {
    location.href = "https://naver.com"
  }

  // location.pathname; 현재 경로를 input에 집어넣기
  btns[1].onclick = () => {
    const urlInput = document.querySelector("input");
    urlInput.value = location.pathname;
  }
  
  // location.reload(); 새로고침
  btns[2].onclick = () => {
    location.reload();
  }
  // location.replace("https://google.com")  
  // ("https://google.com")사이트로 강제이동
  // 뒤로가기가 되지않음.
  btns[3].onclick = () => {
    location.replace("https://google.com");
  }
  
}