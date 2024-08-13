function calculateWeeklySlots() {
  // 1週間のスロット数を計算する関数

  // 1日のスロット数を定義
  var slotsPerDay = 24; // 例: 1時間ごとに1スロット

  // 1週間の日数を定義
  var daysPerWeek = 7;

  // 1週間のスロット数を計算
  var weeklySlots = slotsPerDay * daysPerWeek;

  // 結果を返す
  return weeklySlots;
}
