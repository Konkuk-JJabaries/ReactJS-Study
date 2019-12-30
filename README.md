# ReactJS-Study

ReactJS를 공부하는 레포지토리 입니다.

---

# Week1

- create-react-app을 이용하여 Project를 생성

```shell
  npm install -g create-react-app
  create-react-app todo
```

- Todo App 작성

```jsx
  ...
  return (
    <div className="App">
      <TodoItemManager appendTodoItem={appendTodoItem}></TodoItemManager>
      <TodoItemList>
        {todo.map(item => (
          <TodoItem itemName={item.name} key={item.no} done={item.done} />
        ))}
      </TodoItemList>
    </div>
  );
  ...
```

- development server port 설정(package.json)

```javascript
  {
    ...,
    "scripts": {
      "start": "export PORT=3001 && react-scripts start",
        ...
    }
  }
```
