import styles from "../styles/DateRow.module.css"
export default function DateRow({ date }) {
  let splitDate = date.split(" ");

  return (
    <div className={styles.row}>
      <div className="dayNum">{splitDate[2]} </div>
      <div className="dayAlph">{splitDate[0]}</div>
      <form action="">
        <input type="text" name="dailyLine" id="dailyLine" />
      </form>
    </div>
  );
}
