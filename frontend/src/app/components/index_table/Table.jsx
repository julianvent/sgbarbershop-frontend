import styles from "./styles.module.css";

export default function Table({ entries,fields,actions }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {
            fields.map( (e) => (
                <th key={e.field} scope="col">{e.name}</th>
            ))
           }
          <th scope="col" className={styles.actionsColumn}></th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <tr key={entry.id}>
                {fields.map( field => (
                    <td key={field.field}>{entry[field.field]}</td>
                ))}

                {(actions != null) ? 
                    <td className={styles.actionsCell}>
                        <ul className={styles.actions}>
                            <li>
                            <button className={styles.actionsButton}>
                                <img
                                src="/ellipsis-solid-full.svg"
                                alt="more"
                                className={styles.icon}
                                />
                            </button>
                            <ul className={styles.actionsMenu}>
                                {actions.map(action => (
                                    <li key={action.text}>
                                        <a href={action.base_url + entry.id}>{action.text}</a>
                                    </li>
                                ))}
                            </ul>
                            </li>
                        </ul>
                    </td>
                : null}
                
          </tr>
        ))}
      </tbody>
    </table>
  );
}
