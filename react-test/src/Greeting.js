export function Greeting(props) {
  return <h1>hola soy {props.name}</h1>;
}

export function UserCard({ name, age, married, address }) {
  return (
    <div>
      <p>
        Mi nombre es {name}, tengo {age} años, y{" "}
        {married ? "Estoy casado" : "No estoy casado"}{" "}
      </p>
      <ul>
        <li>City: {address.city}</li>
        <li>House: {address.house}</li>
      </ul>
    </div>
  );
}

export function Name() {
  const name = "Arian";
  return <h1>{name}</h1>;
}

export function Casado() {
  const married = false;
  return <h1>{married ? "Estoy casado" : "No estoy casado"}</h1>;
}

export function ObjectGreet() {
  const user = {
    name: "Arian",
    age: "19",
  };
  return (
    <div>
      <h1>Mi nombre es {user.name}</h1>
      <h1>tengo {user.age} años</h1>
    </div>
  );
}
