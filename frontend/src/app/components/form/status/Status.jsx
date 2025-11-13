import status from "./styles.module.css";

export const Status = ({ state }) => {
  let stateClass = "";
  let text;

  if(state == 'active'){
    stateClass = status.activo;
    text = "Activo";
  }else{
    stateClass = status.inactivo;
    text = "Inactivo";
  }

  return (
    <span className={`${status.badge} ${stateClass}`}>
      <span className={status.dot}></span>
      {text}
    </span>
  );
};
