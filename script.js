const today = new Date();

console.log("Pokemon GO Daily");

document.querySelector("header p").innerHTML =
`毎日役立つ情報を更新！<br>
更新日：${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()}`;
