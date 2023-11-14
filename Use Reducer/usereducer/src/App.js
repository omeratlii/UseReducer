import "./App.css";
import React, { useEffect, useReducer } from "react";
import Calculate from "./Calculate";

// başka componentlerden bu context'e ulaşabilmek için başına export koyduk.
export const NumberContext = React.createContext();

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset": //state değeri butonla arttırılıp azaltıldığı için return state dersek o anki değer neyse o gelir fakat biz sıfırlamak istiyoruz o yüzden initialValue kullanıyoruz.
      return initialValue;
    default:
      return state;
  }
};

// ilk başta useReducer kullandık bunun içinde hesaplamayı yapan fonksiyonumuz var (biz reducer adını verdik) ve yanında da başlangıç değeri var (initialValue).
// bu fonksiyonun (reducer fonksiyonu) içinde var olan state değeri ve state değerini güncelleyen action var.
// bunları kontrol edebilmek dispatch kullanıyoruz. dispatch fonksiyona tekabül ediyor ve içerisine bir action type giriyoruz.
// mesela increment dedik ve increment olduğu durumda yapılacak işlemi giriyoruz.
// her bir durum için bir case girdik.

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    console.log("Render Oldu.")
  }, [count])
  return (
    //normalde bir componenti çağırmak için <Componentİsmi/> yazıyoruz fakat Context içerisinde erişmek istediğimizde <Contextİsmi.Provider/> içerisinde yazıyoruz.
    <div className="App">
      <NumberContext.Provider value={{ count: count, dispatch: dispatch }}>
        <Calculate />
      </NumberContext.Provider>
    </div>
  );
}

export default App;
