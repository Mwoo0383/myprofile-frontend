/**
 * ISO 날짜 문자열 → YYYY.MM
 * 예: 2024-12-31T15:00:00.000Z → 2024.12
 */
export function formatYearMonth(dateString: string): string {
    const date = new Date(dateString);
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
  
    return `${year}.${month}`;
}


/**
 * 프로젝트 기간 표시용
 * endDate가 null이면 "진행중"
 */
export function formatProjectPeriod(
    startDate: string,
    endDate: string | null
  ): string {
    const start = formatYearMonth(startDate);
    const end = endDate ? formatYearMonth(endDate) : "진행중";
  
    return `${start} ~ ${end}`;
}
