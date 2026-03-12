/**
 * 시트 간 강사 데이터 동기화 스크립트 (의도적 오류 포함)
 *
 * 목적: 메인 시트에서 강사명으로 검색 → 강사 시트에 데이터 업데이트
 *
 * 알려진 문제:
 * 1. 강사명에 띄어쓰기가 있으면 매칭 실패
 * 2. 투입 강사가 2명 이상이면 인식 못함
 * 3. 에러 발생 시 어디서 문제인지 알 수 없음
 */

function syncInstructorData() {
  // 메인 시트 열기
  var mainSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("교육실적");
  var instructorSheetId = "INSTRUCTOR_SHEET_ID_HERE"; // 강사 시트 ID

  // 강사 시트 열기
  var instructorSpreadsheet = SpreadsheetApp.openById(instructorSheetId);
  var instructorSheet = instructorSpreadsheet.getSheetByName("강사정보");

  // 메인 시트에서 선택된 행 가져오기
  var selectedRow = mainSheet.getActiveRange().getRow();
  var courseName = mainSheet.getRange(selectedRow, 1).getValue();  // A열: 과정명
  var instructorName = mainSheet.getRange(selectedRow, 3).getValue();  // C열: 강사명
  var satisfaction = mainSheet.getRange(selectedRow, 5).getValue();  // E열: 만족도
  var completionDate = mainSheet.getRange(selectedRow, 6).getValue();  // F열: 완료일

  // BUG 1: 강사명 매칭 - 정확히 같은 문자열만 비교 (띄어쓰기 문제)
  // "홍길동"과 "홍 길동"을 다른 사람으로 인식
  var instructorData = instructorSheet.getDataRange().getValues();
  var matchFound = false;

  for (var i = 1; i < instructorData.length; i++) {
    // BUG: 정확한 문자열 비교만 수행
    if (instructorData[i][0] == instructorName) {
      // 매칭 성공 시 데이터 업데이트
      instructorSheet.getRange(i + 1, 4).setValue(courseName);  // D열: 최근 과정
      instructorSheet.getRange(i + 1, 5).setValue(satisfaction);  // E열: 만족도
      instructorSheet.getRange(i + 1, 6).setValue(completionDate);  // F열: 완료일
      matchFound = true;
      break;  // BUG 2: 첫 번째 매칭에서 종료 → 동명이인 처리 불가
    }
  }

  // BUG 3: 투입 강사가 2명 이상인 경우 처리 없음
  // 예: "홍길동, 김철수" → 매칭 실패
  // 현재 코드는 쉼표로 구분된 복수 강사를 처리하지 못함

  if (matchFound) {
    // BUG 4: 성공 메시지만 표시, 실패 로그 없음
    SpreadsheetApp.getUi().alert("동기화 완료: " + instructorName);
  } else {
    SpreadsheetApp.getUi().alert("강사를 찾을 수 없습니다: " + instructorName);
    // 어떤 시트에서, 어떤 이름으로, 왜 못 찾았는지 정보 없음
  }
}

// BUG 5: 커스텀 메뉴 추가는 되어 있지만
// onOpen 함수가 매번 제대로 실행되지 않는 경우가 있음
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("강사 동기화")
    .addItem("선택된 행 동기화", "syncInstructorData")
    .addToUi();
}
