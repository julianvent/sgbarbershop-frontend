import status from "./styles.module.css";

export const Status = ({ state }) => {
  let stateClass = "";

  if(state){
    stateClass = status.activo;
  }else{
    stateClass = status.inactivo;
  }

  return (
    <span className={`${status.badge} ${stateClass}`}>
      <span className={status.dot}></span>
      {state}
    </span>
  );
};
