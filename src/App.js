import React, { useState } from 'react';
import './ShiftScheduler.css';

function ShiftScheduler() {
  const [startDate, setStartDate] = useState('');
  const [shifts, setShifts] = useState([]);

  // 2週間分の日付を生成する関数
  const generateTwoWeeks = (date) => {
    const shifts = [];
    const start = new Date(date);
    for (let i = 0; i < 14; i++) {
      const shiftDate = new Date(start);
      shiftDate.setDate(start.getDate() + i);
      const formattedDate = `${shiftDate.getDate()}日(${['日', '月', '火', '水', '木', '金', '土'][shiftDate.getDay()]})`;
      shifts.push({ date: formattedDate, start: '', end: '' });
    }
    return shifts;
  };

  // 開始日が変更された時の処理
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    setShifts(generateTwoWeeks(e.target.value));
  };

  // シフト時間を変更する処理
  const handleShiftChange = (index, field, value) => {
    const updatedShifts = [...shifts];
    updatedShifts[index][field] = value;
    setShifts(updatedShifts);
  };

  // 「ランチ」ボタンが押された時の処理
  const handleLunchClick = (index) => {
    const updatedShifts = [...shifts];
    updatedShifts[index].start = '09:00';
    updatedShifts[index].end = '16:00';
    setShifts(updatedShifts);
  };

  // 「ディナー」ボタンが押された時の処理
  const handleDinnerClick = (index) => {
    const updatedShifts = [...shifts];
    updatedShifts[index].start = '17:00';
    updatedShifts[index].end = '22:00';
    setShifts(updatedShifts);
  };

  // 「クリア」ボタンが押された時の処理
  const handleClearClick = (index) => {
    const updatedShifts = [...shifts];
    updatedShifts[index].start = '';
    updatedShifts[index].end = '';
    setShifts(updatedShifts);
  };

  // 出力結果をコピーする処理
  const handleCopyOutput = () => {
    const outputText = shifts
      .map((shift) => `${shift.date} ${shift.start ? `${shift.start} - ${shift.end}` : '×'}`)
      .join('\n');
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(outputText)
        .then(() => alert('出力結果がコピーされました！'))
        .catch((err) => alert('コピーに失敗しました: ' + err));
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = outputText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert('手動コピーしました。');
    }
  };
  

  return (
    <div className="container">
      <h1>かでかるシフト提出</h1>
      <div className="form-group">
        <label>開始日を入力してください：</label>
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          className="input-field"
        />
      </div>
      {shifts.length > 0 && (
        <>
          <table className="shift-table">
            <thead>
              <tr>
                <th>日付</th>
                <th>何時から</th>
                <th>何時まで</th>
                <th>ランチ or ディナー</th>
              </tr>
            </thead>
            <tbody>
              {shifts.map((shift, index) => (
                <tr key={index}>
                  <td>{shift.date}</td>
                  <td>
                    <input
                      type="time"
                      value={shift.start}
                      onChange={(e) =>
                        handleShiftChange(index, 'start', e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      value={shift.end}
                      onChange={(e) =>
                        handleShiftChange(index, 'end', e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <button onClick={() => handleLunchClick(index)}>ランチ</button>
                    <button onClick={() => handleDinnerClick(index)}>ディナー</button>
                    <button onClick={() => handleClearClick(index)}>クリア</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>出力結果</h2>
          <div className="output">
            {shifts.map((shift, index) => (
              <p key={index}>
                {shift.date} {shift.start ? `${shift.start} - ${shift.end}` : '×'}
              </p>
            ))}
          </div>
          <button onClick={handleCopyOutput}>出力結果をコピー</button>
        </>
      )}
    </div>
  );
}

export default ShiftScheduler;




