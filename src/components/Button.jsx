import '../styles/ComponentsStyles.css'

function Button({texto , id}) {

  return (
    <button className="button" id={id}>{texto}</button>
  );
}

export default Button
