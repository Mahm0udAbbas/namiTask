import styles from "./Filters.module.css";

export default function FIlterList({ label, options }) {
  return (
    <span className={styles.hasFloatLabel}>
      <select
        className=" m-2 "
        name="productType"
        id="productType"
        data-vv-as="Kategoria"
      >
        <option value="All" defaultValue>
          All
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="d-inline-block">
            {option}
          </option>
        ))}
      </select>
      <label htmlFor="productType">{label}</label>
    </span>
  );
}
