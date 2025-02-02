import styles from "./SwitchToggle.module.css";

const SwitchToggle = ({ id, name, onChange, checked }) => {
  return (
    <div className={styles.toggle_switch}>
      <input
        className={styles.toggle_input}
        id={id}
        type="checkbox"
        name={name}
        value={name}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
      />
      <label className={styles.toggle_label} htmlFor={id} />
    </div>
  );
};

export default SwitchToggle;
