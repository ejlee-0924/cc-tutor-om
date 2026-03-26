# 모듈 2: 파일 다루기 + Plan 모드

> 배우는 기능: Read, Write, Edit, Glob, Grep, Plan 모드, Think Harder
> OM 실습: 교안 PPT 검수 + 만족도 CSV 분석

---

## WHY

Step1에서 교안 검수봇, 만족도 분석 에이전트를 만들 때 가장 큰 한계가 "파일을 직접 다루지 못하는 것"이었다.
김세린 님은 40분→10분까지 줄였지만 PPT 직접 수정은 못 했고, 박규은 님은 PDF로 우회해야 했고, 조여경 님은 시트 자동 생성이 안 됐다.

Claude Code의 5가지 파일 도구(Read/Write/Edit/Glob/Grep)와 Plan 모드를 배우면 이 한계가 모두 해결된다.

**Before (Step1 Gems):**
- PPT 내용 복사 → 붙여넣기 → 결과 복사 → PPT에 다시 붙여넣기
- CSV 전체를 텍스트로 복사 (용량 제한, 잘림)
- 코드 오류 → 에러 메시지 복사 → 답변 받기 → 수동 적용

**After (Claude Code 파일 도구):**
- "이 PPT 읽고 오탈자 찾아줘" → 직접 읽고 분석
- "이 CSV 분석해서 보고서 만들어줘" → 파일 읽기 → 분석 → 파일 생성
- "이 코드 뭐가 문제야?" → 코드 읽기 → 원인 분석 → 수정본 생성

**공식 문서:** https://docs.anthropic.com/en/docs/claude-code/tools

---

## EXPLAIN

### 5가지 파일 도구

| 도구 | OM 비유 | 하는 일 | 예시 |
|------|---------|--------|------|
| **Read** | 교안 꺼내 읽기 | 파일 내용을 읽어옴 | "이 PPT 읽어줘" |
| **Write** | 새 보고서 작성 | 새 파일을 만듦 | "분석 결과를 report.md로 저장해줘" |
| **Edit** | 기존 보고서 수정 | 파일 일부를 수정 | "3번째 슬라이드 제목 수정해줘" |
| **Glob** | 폴더에서 파일 찾기 | 이름 패턴으로 파일 검색 | "PDF 파일만 찾아줘" |
| **Grep** | 문서 내용 검색 | 파일 안에서 특정 텍스트 검색 | "'개선'이 들어간 응답 찾아줘" |

### Plan 모드 = "계획서 먼저, 실행은 나중에"

복잡한 작업을 바로 실행하면 실수할 수 있다.
Plan 모드에서는:
1. 먼저 계획을 세움 (무엇을, 어떤 순서로, 어떤 도구로)
2. 사용자가 계획 확인
3. 확인 후 실행

OM 비유: "출장 가기 전에 체크리스트 먼저 확인하는 것"

### Think Harder = "더 깊이 생각해"

"think harder", "ultrathink" 등의 키워드로 Claude Code에게 더 신중한 분석을 요청할 수 있다.
복잡한 검수나 대량 데이터 분석 시 유용.

### Claude in Office 소개

| | Claude Code | Claude in PowerPoint / Excel |
|---|---|---|
| 작동 방식 | 터미널에서 코드로 파일 처리 | Office 앱 안에서 직접 AI 호출 |
| 장점 | 대량 일괄 처리, 스크립트화 | 개별 수정, 실시간 상호작용 |
| 적합한 상황 | "PPT 10개 한꺼번에 검수" | "이 슬라이드 하나만 수정" |
| 비유 | 공장 자동화 라인 | 수작업 장인 |

**역할 분담 원칙**: 대량 검수 = Code, 개별 수정 = Office

### 검수 프로토콜 (박규은 모델)

M1에서 CLAUDE.md에 넣은 검수 기준이 여기서 실제로 적용된다:

| 판정 | 조건 | 조치 |
|------|------|------|
| **REJECT** | Fatal Error 1건 이상 | 즉시 수정 필수 |
| **CONDITIONAL** | Fatal 0건, Quality 1~3건 | 경미한 수정 |
| **PASS** | Fatal 0건, Quality 0건 | 수정 불필요 |

- **Fatal Error**: 내용 오류, 기업명 오타, 누락 섹션, 잘못된 데이터
- **Quality Issue**: 톤앤매너, 여백, 줄간격, 폰트 불일치

---

## EXECUTE

### Part A: 파일 도구 기본

---

### Step 1 — Read: PPT 읽기

📋 아래를 복사해서 입력하세요:

    samples/slide-sample.pptx를 읽고 슬라이드별 내용을 요약해줘

각 슬라이드의 제목과 본문이 추출되는 것을 확인한다.

---

### Step 2 — Glob: 파일 찾기

📋 아래를 복사해서 입력하세요:

    samples/ 폴더에서 PDF 파일만 찾아줘

Glob이 패턴 매칭으로 파일을 찾는 것을 확인한다.

---

### Step 3 — Grep: 내용 검색

📋 아래를 복사해서 입력하세요:

    survey-sample.csv에서 '개선'이 들어간 응답만 찾아줘

Grep이 파일 내용에서 텍스트를 검색하는 것을 확인한다.

---

### Step 4 — Write: 결과 저장

📋 아래를 복사해서 입력하세요:

    위 분석 결과를 reports/search-results.md로 저장해줘

Write로 새 파일이 생성되는 것을 확인한다.

### Part B: Plan 모드 + 교안 검수

---

### Step 5 — Plan 모드로 검수 계획

📋 아래를 복사해서 입력하세요:

    slide-sample.pptx를 curriculum-sample.pdf 기준으로 검수하는 계획을 세워줘.
    실행은 하지 말고 계획만 보여줘.

Plan 모드에서 계획이 나오면 내용을 확인한다.

---

### Step 6 — 계획 실행: 검수 리포트

📋 아래를 복사해서 입력하세요:

    좋아, 실행해줘. 검수 결과를 reports/review-report.md로 저장해줘.

CLAUDE.md의 검수 프로토콜(REJECT/PASS/CONDITIONAL)이 자동 적용되는지 확인한다.

---

### Step 7 — python-pptx로 오탈자 수정

📋 아래를 복사해서 입력하세요:

    slide-sample.pptx에서 발견된 오탈자를 수정하고 slide-sample-fixed.pptx로 저장해줘

python-pptx 설치 필요 시 Claude Code가 자동으로 설치를 시도한다.

### Part C: 만족도 분석

---

### Step 8 — CSV 분석

📋 아래를 복사해서 입력하세요:

    survey-sample.csv를 읽고 전체 분석해줘:
    - 총 응답 수, 평균 만족도
    - 항목별 평균 (강의내용, 강사역량, 실습만족도)
    - 주관식 긍정/부정 분류

CLAUDE.md의 분석 규칙(원문 보존, 긍정/부정 분류)이 적용되는지 확인한다.

> 💡 **참고:** Claude in PowerPoint/Excel도 있습니다. 대량 일괄 처리 = Code, 개별 수정 = Office. 역할 분담 원칙으로 기억하세요.

---

## QUIZ

**Q1.** Read, Glob, Grep의 차이는?

- A) 모두 같은 기능이다
- B) Read는 파일 내용 읽기, Glob은 파일 이름으로 찾기, Grep은 파일 내용에서 텍스트 검색
- C) Read만 있으면 나머지는 필요 없다
- D) Grep이 가장 빠르다

**정답: B**
> Read=파일 읽기, Glob=파일 찾기(이름 패턴), Grep=내용 검색(텍스트 패턴). 세 도구를 조합하면 "폴더에서 PDF 찾고(Glob) → 그 중 '교육' 키워드 있는 것만 골라(Grep) → 내용 읽기(Read)" 같은 복합 작업이 가능합니다.

**Q2.** Plan 모드는 언제 쓰면 좋은가?

- A) 항상 써야 한다
- B) 간단한 질문할 때
- C) 복잡한 다단계 작업을 계획→검토→실행으로 분리할 때
- D) 파일을 읽을 때만

**정답: C**
> Plan 모드는 "출장 전 체크리스트"입니다. 교안 검수처럼 여러 단계가 있는 작업에서 계획을 먼저 보고 확인한 후 실행하면 실수를 줄일 수 있습니다.

**Q3.** Claude Code와 Claude in PPT/Excel의 역할 분담은?

- A) Claude Code만 쓰면 된다
- B) Claude in Office만 쓰면 된다
- C) 대량 일괄 처리는 Code, 개별 수정은 Office
- D) 상관없다

**정답: C**
> "PPT 10개 한꺼번에 검수" = Code, "이 슬라이드 하나만 수정" = PPT. 이은지 코칭: "어설프게 고쳐진 PPT보다 완벽한 오답 노트가 현실적" — python-pptx는 디자인을 망가뜨릴 수 있으니 텍스트 교체 수준만.

---

## LEADER-TIP

1. **팀 교안 검수 표준 구축**: 박규은 검수 프로토콜(REJECT/CONDITIONAL/PASS)을 팀 표준으로 채택
2. **"Code→Report, Office→Edit" 가이드**: 역할 분담 문서를 팀 공유
3. **이은지 코칭 반영**:
   - 인풋 형식별 성능: 이미지 < PDF < 워드. 가능하면 텍스트 기반으로 제공
   - AI 결과물 vs 직접 한 결과물 비교 검증 필수 — 처음엔 반드시 비교
4. **환각 방지**: Claude Code는 파일을 직접 읽으므로 Gems 대비 환각 위험이 낮음 (장수진 케이스)

---

## WEEKLY-MISSION

실제 업무 파일 1개를 Claude Code로 분석해보세요:
- 교안 PPT 검수 (검수 프로토콜 적용)
- 또는 만족도 CSV 분석 (긍정/부정 분류)
- 결과를 기존 수작업 결과와 비교하고, 차이점을 #cc-tutor-om-help에 공유

---

## TROUBLESHOOTING

### "python-pptx 설치 에러"
- "pip install python-pptx 실행해줘" 요청
- PEP 668 에러 시: `pip install --break-system-packages python-pptx`
- 또는 가상환경: `python -m venv .venv && source .venv/bin/activate && pip install python-pptx`

### "PPT 읽었는데 텍스트가 안 나와요"
- 이미지 기반 슬라이드(텍스트가 이미지로 들어간 경우)는 텍스트 추출 불가
- 이 경우 PDF로 변환 후 읽기 시도
- 이은지 코칭: 인풋 형식별 성능 — 이미지 < PDF < 워드

### "PPT 수정 후 디자인이 망가졌어요"
- python-pptx의 알려진 한계. 텍스트 교체만 하고 레이아웃은 건드리지 않도록 요청
- 복잡한 수정은 Claude in PowerPoint 사용 권장
- 이은지 코칭: "어설프게 고쳐진 PPT보다 완벽한 오답 노트가 현실적"

### "CSV 한글이 깨져요"
- "UTF-8로 다시 읽어줘" 또는 "EUC-KR 인코딩으로 읽어줘" 요청
- 엑셀에서 CSV 저장 시 "UTF-8 CSV" 선택

### "Plan 모드 어떻게 켜요?"
- "계획만 세워줘, 실행하지 마" 또는 shift+tab으로 Plan 모드 전환
- 계획 확인 후 "실행해줘"로 진행

### "분석 결과가 이전 과정 데이터와 섞여요"
- "날짜 필터링해서 2026년 데이터만 분석해줘" 요청
