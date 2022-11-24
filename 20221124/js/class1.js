// let user = {
//   username: "seunguk",
//   password: "2134"
// };
// console.log(user.username);
// console.log(user.password);

class User {
  username; /* #을 붙이면 private랑 같은 효과 */
  password;
  name;
  email;

  // 생성자 만드는 방법
  constructor(username, password, name, email) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.email = email;
  }

  printName() {
    console.log(this.name + "님의 정보");
  }

  // setUsername(username) {
  //   this.#username = username; /* #은 무조건 따라 가야함 */
  // }
  // getUsername() {
  //   return this.#username;
  // }
}
class UserMain {
  // 싱글톤
  static #instance = null;
  static getInstance() {
    if (this.#instance == null) {
      this.#instance = new UserMain();
    }
    return this.#instance;
  }

  main() {
    let user = new User(
      "Seunguk",
      "1234",
      "성욱",
      "zpfhfh774@naver.com"
    ); /*user 생성*/

    // user.username = "seunguk";
    // user.password = "1234";
    // user.name = "성욱";
    // user.email = "zpfhfh774@naver.com";

    console.log(user);

    localStorage.username = user.username;
    // localStorage는 전역임 (페이지가 이동이 되어도 계속 남아 있음)

    console.log("username: " + localStorage.username);
    // localStorage = pc안에 데이터를 저장

    user.printName();
  }
}
window.onload = () => {
  let userMain = UserMain.getInstance();

  userMain.main();
};
