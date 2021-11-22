function Msg({ name, pic }) {
  return (
    <div>
      <img height="300" src={pic} alt={name} />
      <h1 className="name">HI ,{name}!!!</h1>
    </div>
  );

}
