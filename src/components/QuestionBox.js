import styles from "./questionBox.module.css";

export default function QuestionBox({ questionText, boolean, index }) {
  return (
    <div
      className={styles.questionBox}
      style={{
        backgroundColor:
          index % 2 !== 0
            ? "rgba(0, 211, 233, 0.1)"
            : "rgba(38, 148, 139, 0.1)",
      }}
    >
      <p className={styles.questionText}>{questionText}</p>
      <p className={styles.booleanClass} aria-role={boolean}>
        {boolean ? "Yes" : "No"}
      </p>
    </div>
  );
}
