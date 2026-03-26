# 모듈 1: 작업환경 세팅 + CLAUDE.md

> 배우는 기능: 설치, 인증, 권한 시스템, CLAUDE.md (시스템 프롬프트, 프로젝트/개인 레벨, 메모리)
> OM 실습: Claude Code 설치 + samples/ 탐색 + OM팀 CLAUDE.md 작성

---

## WHY

Step1에서 Gems로 에이전트를 만들 때 매번 "한국어로 답변해줘", "이 기준으로 검수해줘", "메일은 이 톤으로 써줘"를 반복 지시했다.
CLAUDE.md를 만들면 한 번 세팅으로 끝난다. Claude Code가 프로젝트 시작 시 자동으로 읽고 따른다.

**Before (Step1 Gems):**
- 매 대화마다 규칙을 반복 입력
- 시스템 프롬프트에 넣어도 길이 제한
- 팀원과 규칙 공유 어려움

**After (Claude Code + CLAUDE.md):**
- CLAUDE.md 한 번 작성 → 영구 적용
- 파일이니까 Git으로 팀 공유 가능
- 누가 실행해도 동일 품질

**공식 문서:** https://docs.anthropic.com/en/docs/claude-code/overview

---

## EXPLAIN

### Claude Code = 현장 출장 전문가

| 비교 | Gems/GPTs | Claude Code |
|------|-----------|-------------|
| 비유 | 전화 상담 | 현장 출장 전문가 |
| 파일 접근 | ❌ 복사-붙여넣기 | ✅ 직접 읽기/쓰기 |
| 규칙 유지 | 매번 반복 지시 | CLAUDE.md 자동 적용 |
| 팀 공유 | 개인 설정만 | 파일로 공유 가능 |

### CLAUDE.md = AI가 읽는 팀 매뉴얼

- **프로젝트 CLAUDE.md** (`프로젝트루트/CLAUDE.md`): 팀 전체 규칙. 이 프로젝트에서 작업하는 누구에게나 적용
- **개인 CLAUDE.md** (`~/.claude/CLAUDE.md`): 개인 선호. 어떤 프로젝트에서든 적용
- Claude Code 시작 시 자동으로 읽음 → 별도 지시 불필요

### 권한 시스템

Claude Code가 파일을 읽거나 쓸 때 사용자에게 허용을 요청한다.
- **Allow once**: 이번 한 번만 허용
- **Allow always**: 이 세션에서 계속 허용
- 민감한 작업은 항상 확인 → 안전한 사용

### 핵심 용어 (용어집 참조)

| 용어 | OM 비유 | 설명 |
|------|---------|------|
| 터미널 | 명령어 입력 창 | 텍스트로 컴퓨터에 지시하는 창 |
| CLI | 텍스트 인터페이스 | GUI(마우스 클릭)의 반대 |
| CLAUDE.md | AI가 읽는 팀 매뉴얼 | 규칙을 자동으로 따르게 하는 파일 |
| /memory | 개인 메모장 | 개인 선호를 저장하는 명령어 |

---

## EXECUTE

### Part A: Setup (설치 + 첫 대화)

---

### Step 1 — Claude Code 설치 확인

터미널에서 `claude --version`을 실행하여 설치 여부를 확인한다.

- 설치됨 → Step 2로 이동
- 미설치 → 아래 설치 안내:
  1. Node.js 설치: https://nodejs.org (LTS 버전)
  2. 터미널에서: `npm install -g @anthropic-ai/claude-code`
  3. 설치 확인: `claude --version`

---

### Step 2 — 학습환경 셋업

cc-tutor-om 레포를 클론한 폴더에서 셋업 스크립트를 실행한다:

    ./setup.sh

이 스크립트가 학습에 필요한 글로벌 스킬(/my-session-wrap, /my-context-sync, /my-content-fetch 등)을 자동으로 설치한다.

---

### Step 3 — 첫 대화 + 도구 체험

📋 아래를 복사해서 입력하세요:

    안녕! 넌 뭘 할 수 있어?
    그리고 이 프로젝트의 README.md를 읽고 요약해주고,
    samples 폴더에 어떤 파일들이 있는지도 보여줘.

Claude Code의 핵심 도구(Read, Write, Edit, Glob, Grep, Bash)를 소개받고, 파일 읽기 권한 요청(Allow once/always)을 체험하고, Glob으로 파일 목록을 확인한다 — 이 한 번의 대화로 세 가지를 한꺼번에 경험한다.

### Part B: CLAUDE.md 개념 이해

---

### Step 6 — CLAUDE.md 개념 이해

📋 아래를 복사해서 입력하세요:

    CLAUDE.md가 뭔지 설명해줘

CLAUDE.md = "AI가 읽는 팀 매뉴얼". 두 가지 레벨이 있다:
- **작업 폴더 CLAUDE.md**: 내 모든 프로젝트에 적용되는 공통 규칙
- **프로젝트 CLAUDE.md**: 특정 프로젝트에서만 적용되는 규칙
- 프로젝트 폴더에서 Claude Code를 실행하면 → 두 레벨 규칙이 **동시에 적용**

### Part C: 작업환경 세팅 (대화형)

---

### Step 7 — 내 작업환경 만들기

📋 아래를 복사해서 입력하세요:

    내 작업환경을 세팅해줘.

    1. 먼저 지금 내가 어디에 있는지 알려줘
    2. 내가 원하는 위치에 내 이름으로 작업 폴더를 만들어줘
    3. 그 안에 첫 번째 프로젝트 폴더를 만들어줘
       (폴더명은 내가 지금 담당하는 교육 과정으로)
    4. 작업 폴더에 CLAUDE.md를 만들어줘:
       - 내 소개 (이름, 역할, 팀)
       - 팀 공통 규칙:
         a. 항상 한국어로 응답
         b. 파일 저장 시 reports/ 폴더에 날짜 prefix (예: 2026-04-24_)
         c. 강사 피드백 메일은 감사 인사로 시작, 존칭 사용
         d. 고객사 보고 메일은 격식체, 데이터 근거 포함
    5. 프로젝트 폴더에 CLAUDE.md를 만들어줘:
       - 프로젝트 정보 (담당 교육 과정명)
       - 교안 검수 프로토콜:
         a. REJECT: Fatal Error 1건 이상 (내용 오류, 기업명 오타, 누락 섹션)
         b. CONDITIONAL: Fatal 0건, Quality Issue 1~3건
         c. PASS: 수정 불필요
       - 만족도 분석 규칙: 원문 보존, 긍정/부정 분류
    6. 다 만들면 어떤 규칙이 적용되는지 정리해서 보여줘

Claude Code가 위치, 이름, 프로젝트명, 팀명을 순서대로 물어볼 것이다.
답변하면 폴더 2개 + CLAUDE.md 2개가 자동으로 생성된다.

완료되면 아래와 같은 폴더 구조가 만들어진다:

```
📁 (본인이름)-workspace/
├── CLAUDE.md              ← 팀 공통 규칙 (모든 프로젝트에 적용)
└── (프로젝트명)/
    └── CLAUDE.md          ← 프로젝트 전용 규칙 (이 프로젝트에서만 적용)
```

---

### Step 8 — CLAUDE.md 계층 효과 체험

프로젝트 폴더 안에서 실행한다:

📋 아래를 복사해서 입력하세요:

    samples/survey-sample.csv를 분석해줘

CLAUDE.md 두 개의 규칙이 동시에 적용되는 것을 확인한다:
- 작업 폴더 규칙: 한국어 응답, reports/ 저장
- 프로젝트 규칙: 원문 보존, 긍정/부정 분류

"아, 작업 폴더 규칙 + 프로젝트 규칙이 자동으로 합쳐지는구나!" 를 체감한다.

---

### Step 9 — /memory 소개

`/memory` 명령어로 개인 메모를 저장할 수 있습니다.
예: "나는 기업교육 2팀이고 PPT 검수를 주로 합니다"
CLAUDE.md와 달리 /memory는 어떤 프로젝트에서든 개인적으로 적용되는 메모장이다.

---

## QUIZ

**Q1.** Claude Code와 Gems의 가장 큰 차이는 무엇인가요?

- A) Claude Code가 더 똑똑하다
- B) Claude Code는 내 컴퓨터의 파일을 직접 읽고 수정할 수 있다
- C) Claude Code는 무료이다
- D) Claude Code는 영어만 된다

**정답: B**
> Gems는 브라우저 안에서만 동작하지만, Claude Code는 로컬 파일에 직접 접근합니다. 이것이 "전화 상담 vs 현장 출장"의 차이입니다.

**Q2.** CLAUDE.md가 없을 때와 있을 때의 차이는?

- A) 속도가 빨라진다
- B) 매번 반복 지시하던 규칙이 자동으로 적용된다
- C) 더 많은 파일을 읽을 수 있다
- D) 차이가 없다

**정답: B**
> CLAUDE.md는 "AI가 읽는 팀 매뉴얼"입니다. 한 번 작성하면 매 세션마다 자동으로 적용되어 일관된 품질을 보장합니다.

**Q3.** 작업 폴더 CLAUDE.md와 프로젝트 CLAUDE.md의 관계는?

- A) 둘 중 하나만 적용된다
- B) 프로젝트 폴더에서 실행하면 작업 폴더 + 프로젝트 규칙이 동시에 적용
- C) 작업 폴더 규칙이 항상 우선이다
- D) 프로젝트 규칙이 항상 우선이다

**정답: B**
> 프로젝트 폴더에서 Claude Code를 실행하면, 상위 작업 폴더의 CLAUDE.md(팀 공통 규칙)와 프로젝트 폴더의 CLAUDE.md(프로젝트 전용 규칙)가 **동시에 적용**됩니다. Step 7에서 직접 체험한 것처럼요.

---

## LEADER-TIP

1. **진입 장벽 낮추기**: 팀원에게 "설치하고 '안녕'만 쳐봐"로 시작. 첫 성공 경험이 중요
2. **CLAUDE.md를 팀 표준으로**: 검수 프로토콜, 메일 톤앤매너를 CLAUDE.md에 넣으면 누가 실행해도 동일 품질
3. **Step1 vs Step2 비교 시연**: 같은 질문을 Gems와 Claude Code에 던져서 "파일 접근" 차이를 직접 보여주기
4. **이은지 코칭**: "항상 Pro 모드 사용 — 빠른 모드에서 잘 안 나올 때 모드 설정이 문제"

---

## WEEKLY-MISSION

Claude Code로 업무 파일 1개를 읽어보세요.
- 교안 PPT든, 만족도 CSV든, 보고서 Word든 아무거나 OK
- 읽은 결과 스크린샷을 #cc-tutor-om-help에 공유
- CLAUDE.md에 규칙 1개를 추가해보세요

---

## TROUBLESHOOTING

### "npm 명령어를 못 찾아요"
- Node.js가 설치되지 않은 것. https://nodejs.org 에서 LTS 설치
- 설치 후 터미널을 **새로 열고** 다시 시도

### "claude 명령어가 안 돼요"
- `npm install -g @anthropic-ai/claude-code` 다시 실행
- 권한 오류 시: `sudo npm install -g @anthropic-ai/claude-code`

### "API 키 설정은 어떻게?"
- 킥오프 세션에서 안내한 방법 따르기
- 잊어버렸으면 #cc-tutor-om-help에 문의

### "터미널이 무서워요"
- 괜찮습니다! Claude Code 안에서는 한국어로 대화하면 됩니다
- 코드를 직접 쓸 필요 없어요 — Claude Code가 씁니다

### "CLAUDE.md를 어디에 만들어야 하나요?"
- 프로젝트 최상위 폴더(루트)에 만듭니다
- Claude Code가 자동으로 인식

### "영어로 답변해요"
- "한국어로 답변해줘" 한 마디면 해결
- CLAUDE.md에 "항상 한국어로 응답" 규칙이 있는지 확인
