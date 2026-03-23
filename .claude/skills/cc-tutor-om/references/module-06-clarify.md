# 모듈 6: Plugin + Clarify

> 배우는 기능: 플러그인 vs 스킬 차이, Clarify 플러그인 3모드 (vague/unknown/metamedium)
> OM 실습: 교육 기획서의 모호한 요구사항을 Clarify로 구조화

---

## WHY

교육 담당자에게서 "이번에 AI 교육 해주세요"라고만 오면 곤란하다.
대상이 누군지, 수준이 어느 정도인지, 기대 성과가 뭔지 — 이걸 하나하나 확인하는 데 시간이 많이 걸린다.

Clarify 플러그인은 모호한 요구사항을 체계적으로 구조화하고, 계획의 맹점을 찾아주고, 내용 vs 형식 최적화를 도와준다.

**Before (수동 확인):**
- "AI 교육 해주세요" → 메일/미팅으로 10가지 질문 → 왕복 3~5일
- 교육 계획서 작성 → "빠진 게 뭐지?" 감으로 체크

**After (Clarify):**
- "AI 교육 해주세요" → Clarify(vague) → 10분 만에 구체적 스펙
- 교육 계획서 → Clarify(unknown) → 숨겨진 가정과 맹점 자동 분석

**공식 문서:** https://docs.anthropic.com/en/docs/claude-code/plugins

---

## EXPLAIN

### Plugin vs Skill

| | Plugin | Skill |
|---|---|---|
| 제공자 | Anthropic 또는 커뮤니티 | 누구나 (직접 제작 가능) |
| 설치 | 플러그인 시스템으로 설치 | .claude/skills/ 폴더에 파일 추가 |
| 기능 | Claude Code의 행동 방식을 확장 | 특정 워크플로우를 자동화 |
| 비유 | 스마트폰의 시스템 업데이트 | 스마트폰에 앱 설치 |

### Clarify 3가지 모드

| 모드 | 언제 쓰는가 | OM 업무 예시 |
|------|-----------|------------|
| **vague** | 요구사항이 모호할 때 | "AI 교육 해주세요" → 구체적 스펙 |
| **unknown** | 계획의 맹점을 찾을 때 | 교육 계획서의 숨겨진 가정 분석 |
| **metamedium** | 내용 vs 형식 최적화 | "이 교안을 어떤 형태로 전달할까?" |

### Clarify(vague) 작동 방식

1. 모호한 요구사항 입력
2. Clarify가 구조화된 질문 생성 (가설 기반 선택지)
3. 사용자가 선택/수정
4. 구체적 스펙 문서 출력

### Known/Unknown 프레임워크 (unknown 모드)

| | 아는 것 | 모르는 것 |
|---|---|---|
| **아는 것** | Known Knowns (체계화) | Known Unknowns (실험 설계) |
| **모르는 것** | Unknown Knowns (숨겨진 자산) | Unknown Unknowns (안테나 설치) |

---

## EXECUTE

---

### Step 1 — Plugin vs Skill 차이 이해

📋 아래를 복사해서 입력하세요:

    Plugin과 Skill의 차이를 설명해줘.

두 개념의 차이를 확인한다.

---

### Step 2 — Clarify(vague) 체험: 싱크업 시트 요구사항 구조화

📋 아래를 복사해서 입력하세요:

    [학습용] 싱크업 시트를 읽고, 교육 요구사항이 모호하거나
    부족한 부분을 Clarify(vague)로 구조화해줘.

싱크업 시트의 빈칸과 모호한 내용을 Clarify가 체계적 질문으로 구체화하는 것을 관찰한다.
LD에게 역으로 질문 리스트를 보내면 확인 시간도 줄일 수 있다.

---

### Step 3 — 질문 답변 → 스펙 문서 생성

Clarify의 질문에 답변하고, 구체적인 교육 스펙 문서가 생성되는 것을 확인한다.

---

### Step 4 — Clarify(unknown) 체험: 체크리스트 맹점 분석

📋 아래를 복사해서 입력하세요:

    [학습용] 강의관리 시트의 (대면) 체크리스트 탭을 읽고
    Clarify(unknown)으로 분석해줘.
    빠진 항목이나 숨겨진 리스크를 찾아줘.

Known/Unknown 4사분면으로 체크리스트의 맹점이 분석되는 것을 확인한다.
"이 체크리스트에 없지만 실제로 필요한 항목"이 발견되는지 확인한다.

---

### Step 5 — Clarify(metamedium) 맛보기

📋 아래를 복사해서 입력하세요:

    만족도 분석 결과를 전달하는 가장 효과적인 형태는?
    - Gmail 메일 리포트
    - Google Sheets 링크 공유
    - Slack 요약 메시지
    - PDF 첨부 보고서

    이 질문을 Clarify(metamedium)으로 분석해줘.

---

## QUIZ

**Q1.** Plugin과 Skill의 차이는?

- A) Plugin은 Claude Code 행동 방식을 확장, Skill은 워크플로우 자동화
- B) 같은 것이다
- C) Plugin이 더 강력하다
- D) Skill이 더 빠르다

**정답: A**
> Plugin은 시스템 레벨에서 Claude Code의 능력을 확장하고, Skill은 특정 작업을 자동화하는 레시피입니다.

**Q2.** "AI 교육 해주세요"처럼 모호한 요구사항에 쓸 Clarify 모드는?

- A) unknown
- B) metamedium
- C) vague
- D) 아무거나

**정답: C**
> vague 모드는 모호한 요구사항을 가설 기반 질문으로 구체화합니다. unknown은 계획의 맹점 분석, metamedium은 내용 vs 형식 최적화에 사용합니다.

---

## LEADER-TIP

1. **교육 기획 초기에 Clarify(vague)**: 요구사항이 올 때마다 바로 구조화 → 왕복 시간 단축
2. **분기별 계획 검토에 Clarify(unknown)**: 교육 계획의 숨겨진 리스크 사전 발견
3. **팀 내 "기획 전 Clarify" 프로세스**: 요구사항 → Clarify → 스펙 → 기획 순서 표준화
4. **이은지 코칭 연결**: "프롬프트가 뚱뚱하면 오류 증가" → Clarify로 정리하면 프롬프트가 날씬해짐

---

## WEEKLY-MISSION

실제 교육 요구사항 1건을 Clarify(vague)로 구조화해보세요.
- 최근 받은 교육 요청 메일이나 요구사항 문서 사용
- 생성된 스펙 문서를 #cc-tutor-om-help에 공유

---

## TROUBLESHOOTING

### "Clarify가 뭔지 모르겠어요"
- Clarify는 "모호한 것을 구체적으로 만드는 도구"
- 3가지 모드 중 상황에 맞는 것을 선택

### "질문이 너무 많아요"
- Clarify는 보통 3라운드, 총 7~10개 질문
- 모르는 질문은 "모르겠다"고 답해도 됨
- 중요한 질문에만 집중해도 충분한 스펙 생성 가능

### "Clarify 플러그인이 설치 안 돼요"
- Claude Code에 "Clarify 플러그인 설치해줘" 요청
- 또는 직접 `clarify:vague`, `clarify:unknown`, `clarify:metamedium` 호출

### "unknown 모드 결과가 너무 복잡해요"
- Known/Unknown 4사분면 중 "Known Unknowns" (실험 설계 필요 항목)에만 집중
- 나머지는 참고용으로 활용
