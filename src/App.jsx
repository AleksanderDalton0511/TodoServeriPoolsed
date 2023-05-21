import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
function App() {

  const [text, setText] = createSignal("");

  const [store, setStore] = createStore({
    todos: [{title: "task1", done:true}, {title:"task2", done:false}],
  });

  function doAction(){
  if(text()!=""){
    setStore({
      todos: [
        ...store.todos,
        {
          title: text(),
          done: false,
        },
      ],
    });
    console.log(text())
  }
  else{
    console.log("hello");
  }
}

  return (
    <div>

      <input onChange={(e) => setText(e.currentTarget.value)}></input>
      <button onClick={doAction}>ADD</button>

     <For each={store.todos}>
            {(todo, i) => (
        <ul>
          <li>
            
            <button onClick={() =>
                      setStore("todos", (t) => [
                        ...t.slice(0, i()),
                        ...t.slice(i() + 1),
                      ])
                    }>DELETE</button>
            
            {todo.title}
    </li>
        </ul>
      )}
     </For>
 
  </div>
  );
}
export default App;