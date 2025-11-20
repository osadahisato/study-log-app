import { useState } from "react";
import "./Records.css";

export const Records = () => {
  const [lerningTitle, setLerningTitle] = useState("");
  const [lerningTime, setLerningTime] = useState("");
  const [records, setRecords] = useState([]);
  const [error, setError] = useState("");
  const [totalTime, setTotalTime] = useState("");

  const onChangeLerningTitle = (e) => {
    setLerningTitle(e.target.value);
  };
  const onChangeLerningTime = (e) => {
    setLerningTime(e.target.value);
  };
  const onClickRegister = () => {
    if (!lerningTitle || !lerningTime) {
      setError("入力されていない項目があります！");
      return;
    }
    const newRecords = [
      ...records,
      { title: lerningTitle, time: parseInt(lerningTime) },
    ];
    const newTotalTime = newRecords.reduce((sum, current) => {
      return sum + current.time;
    }, 0);

    setRecords(newRecords);
    setTotalTime(newTotalTime);
    setLerningTitle("");
    setLerningTime(0);
    setError("");
  };

  return (
    <>
      <h1>学習記録一覧</h1>
      <p>
        <span>学習内容</span>
        <input
          type="text"
          value={lerningTitle}
          onChange={onChangeLerningTitle}
        />
      </p>
      <p>
        <span>学習時間</span>
        <input
          type="number"
          value={lerningTime}
          onChange={onChangeLerningTime}
        />
        時間
      </p>
      <p>
        <span>入力されている内容:</span>
        <span>{lerningTitle}</span>
      </p>
      <p>
        <span>入力されている時間:</span>
        <span>{lerningTime}</span>
        時間
      </p>
      {records.map((record) => {
        return (
          <p key={record.title}>
            <span>{record.title} </span>
            <span>{record.time}</span>
          </p>
        );
      })}
      <button onClick={onClickRegister}>登録</button>
      {error && <p className="error">{error}</p>}
      <p>
        <span>合計時間:</span>
        <span>{totalTime} /1000(h)</span>
      </p>
    </>
  );
};
