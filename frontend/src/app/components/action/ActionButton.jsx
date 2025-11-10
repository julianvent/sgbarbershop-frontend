"use client";
import { useRouter } from "next/navigation";
import styles from './styles.module.css';

export function ActionButton({ id, actions }) {
  const router = useRouter();

  const handleClick = (action) => {
    const finalRoute = action.route.replace("${id}", id);
    router.push(finalRoute);
  };

  const edit = actions.find(u => u.name === 'edit');
  const see = actions.find(u => u.name === 'see');

  return (
    <div className={styles.buttons}>
        {edit && (    
            <button onClick={() => handleClick(edit)} >
                Editar
            </button>
        )}

        {see && (    
            <button onClick={() => handleClick(see)}>
                Ver
            </button>
        )}
    </div>

  );
}
