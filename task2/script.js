const Имя = document.getElementById("Имя");
const Фамилия = document.getElementById("Фамилия");
const Пароль = document.getElementById("Пароль");


  function fun(){
    const men = document.getElementById("m");
    
    const fem = document.getElementById("f");
    if (men.checked){
        return "Мужской";}
    if (fem.checked)
    {
        return "Женский";
    }
    else {
      return 'не выбран'
    }
  }


function onOnButtonClick(){
    alert(
        `Пользователь: имя - ${Имя.value}, фамилия - ${
          Фамилия.value}, пол - ${fun()} , пароль - ${Пароль.value}`
      );
    }
