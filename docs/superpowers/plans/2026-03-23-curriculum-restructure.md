# cc-tutor-om 커리큘럼 리뉴얼 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** cc-tutor-om 커리큘럼을 실무 문서 기반으로 리뉴얼 — M3~M4 실습 교체, M5를 4개 서브모듈로 확장, M6~M8 실무 시나리오 적용, SKILL.md 진도 스키마/잠금 로직 업데이트.

**Architecture:** 기존 SKILL.md + 10개 레퍼런스 파일 구조를 유지하면서, M5 레퍼런스를 4개로 분리하고, M3~M8 레퍼런스 내용을 교체한다. 신규 CSV 샘플 7개를 추가하고, `/싱크업요약` 프로젝트 스킬을 생성한다.

**Tech Stack:** Markdown (SKILL.md, 레퍼런스), CSV (샘플 데이터), JSON (진도 스키마)

**Spec:** `docs/superpowers/specs/2026-03-23-curriculum-restructure-design.md`

---

## File Map

### 수정 대상
| 파일 | 변경 내용 |
|------|----------|
| `.claude/skills/cc-tutor-om/SKILL.md` | 모듈 테이블 (M5→5-1~5-4), 진도 스키마, 잠금 로직 |
| `.claude/skills/cc-tutor-om/references/module-03-skill-usage.md` | Step 3 `/싱크업요약`으로 교체 |
| `.claude/skills/cc-tutor-om/references/module-04-subagent.md` | 전체 실습을 실무 CSV 기반으로 교체 |
| `.claude/skills/cc-tutor-om/references/module-06-clarify.md` | 실습 시나리오를 실무 Sheets 기반으로 교체 |
| `.claude/skills/cc-tutor-om/references/module-07-skill-creator.md` | `/만족도분석` 스킬을 MCP Sheets 연동으로 변경 |
| `.claude/skills/cc-tutor-om/references/module-08-agent-teams.md` | 교육 종료 TF 파이프라인으로 교체 |
| `.claude/skills/cc-tutor-om/references/module-09-github.md` | 온보딩 가이드에 MCP 설정 항목 추가 |
| `.claude/skills/cc-tutor-om/references/module-10-capstone.md` | 추천 주제에 실무 시나리오 추가 |
| `samples/README-samples.md` | 기존 5개 + 신규 7개 = 12개 전체 파일 문서화 |

### 신규 생성
| 파일 | 내용 |
|------|------|
| `.claude/skills/cc-tutor-om/references/module-05-1-mcp-setup.md` | MCP 개념 + 설치 (workspace-mcp, Slack, 세일즈맵) |
| `.claude/skills/cc-tutor-om/references/module-05-2-sheets.md` | Google Sheets 조회 + 입력 |
| `.claude/skills/cc-tutor-om/references/module-05-3-forms-gmail.md` | Forms + Sheets + Gmail (만족도 E2E) |
| `.claude/skills/cc-tutor-om/references/module-05-4-slack-salesmap.md` | Slack + 세일즈맵 + Context Sync |
| `samples/syncup-sample.csv` | 싱크업 시트 샘플 (가명) |
| `samples/coach-schedule-sample.csv` | 코치일정 샘플 (3명, 가명) |
| `samples/review-log-sample.csv` | 종료/회고 샘플 (가명) |
| `samples/gpt-accounts-sample.csv` | GPT 계정 사용일정 샘플 |
| `samples/egg-sample.csv` | 에그 관리 샘플 |
| `samples/checklist-sample.csv` | 강의관리 체크리스트 샘플 |
| `samples/mail-templates-sample.csv` | 운영 메일 템플릿 샘플 |
| `.claude/skills/syncup-summary/SKILL.md` | `/싱크업요약` 프로젝트 스킬 |

### 삭제 대상
| 파일 | 사유 |
|------|------|
| `.claude/skills/cc-tutor-om/references/module-05-mcp.md` | 4개 서브모듈 파일로 대체 |

---

## Task 1: 신규 CSV 샘플 7개 생성

다른 모든 태스크가 이 샘플을 참조하므로 먼저 생성한다.

**Files:**
- Create: `samples/syncup-sample.csv`
- Create: `samples/coach-schedule-sample.csv`
- Create: `samples/review-log-sample.csv`
- Create: `samples/gpt-accounts-sample.csv`
- Create: `samples/egg-sample.csv`
- Create: `samples/checklist-sample.csv`
- Create: `samples/mail-templates-sample.csv`
- Modify: `samples/README-samples.md`

**데이터 원본:** 이 세션에서 workspace-mcp로 읽은 실제 시트 데이터를 가명 처리하여 사용.

- [ ] **Step 1: `syncup-sample.csv` 생성**

싱크업 시트 교육 개요 탭 구조 기반. 컬럼: 과정명, 교육형태, 교육일정, 교육장소, 교육대상, 기업담당자_이름, 기업담당자_이메일, 기업담당자_전화, FC_LDM, FC_LXM, FC_LM, 강사명, 강사이메일, 조교명.
3건의 교육 데이터. 1건은 빈 필드 다수 (싱크업 보완 실습용).
개인정보 가명 처리.

- [ ] **Step 2: `coach-schedule-sample.csv` 생성**

코치일정 캘린더 구조 기반. 컬럼: 코치명, 년월, 날짜, 요일, 일정(기업명_과정명), 시간.
코치 3명 × 1개월분 데이터. 빈 날짜(가용일)와 배정일이 혼재.

- [ ] **Step 3: `review-log-sample.csv` 생성**

종료/회고 시트 구조 기반. 컬럼: 담당LD, 담당LX, 기업명, 과정명, 운영규모, 투입강사명, 평균만족도, 강사만족도, 이슈사항, 조치내용, 운영BP공유, 시작일, 종료일, 결과보고유무.
10건의 과거 교육 데이터. 이슈 유형 다양 (현장운영, 수강생, 강의내용, 기타).

- [ ] **Step 4: `gpt-accounts-sample.csv` 생성**

GPT 계정 사용일정 구조 기반. 컬럼: 년월, 주차, 요일, 날짜, 기업명_과정명, 담당자, 사용계정번호, 사용시간.
1개월분 사용일정. 일부 날짜에 배정 있음, 일부 빈칸.

- [ ] **Step 5: `egg-sample.csv` 생성**

에그 관리 대장 구조 기반. 컬럼: 에그번호, 월, 대여자, 과정명, 대여시작일, 실제사용일, 반납예정일, 반납여부, 비고.
에그 3대 × 2개월분 데이터. 미반납 건 1~2개 포함.

- [ ] **Step 6: `checklist-sample.csv` 생성**

강의관리 시트 (대면) 체크리스트 구조 기반. 컬럼: 업무시기, 분류, 업무상세, 마감일, 완료여부, 완료일.
교육전/교육중/교육후 25개 항목. 완료여부 일부 TRUE.

- [ ] **Step 7: `mail-templates-sample.csv` 생성**

운영 템플릿 메일링크 탭 구조 기반. 컬럼: 수신자, 구분, 템플릿명, 템플릿본문.
주요 메일 템플릿 5종: 강사안내, 강사계약, 만족도결과전달, 교육생입과안내, 조교안내.

- [ ] **Step 8: `README-samples.md` 업데이트**

기존 5개 파일 + 신규 7개 파일의 용도, 사용 모듈, 컬럼 구조 요약을 추가.

- [ ] **Step 9: Commit**

```
git add samples/
git commit -m "feat(samples): 실무 기반 CSV 샘플 7개 추가 + README 업데이트"
```

---

## Task 2: SKILL.md 진도 스키마 + 잠금 로직 + 모듈 테이블 업데이트

**Files:**
- Modify: `.claude/skills/cc-tutor-om/SKILL.md:187-203` (모듈 테이블)
- Modify: `.claude/skills/cc-tutor-om/SKILL.md:266-293` (진도 스키마)
- Modify: `.claude/skills/cc-tutor-om/SKILL.md:205-218` (잠금 로직)

- [ ] **Step 1: 모듈 테이블 수정 — M5 행을 5-1 ~ 5-4로 분리**

Essential 테이블의 M5 행을 삭제하고 4행으로 교체:

```markdown
| 5-1 | MCP 개념 + 설치 | workspace-mcp, Slack, 세일즈맵 설치 | `references/module-05-1-mcp-setup.md` | 모듈 4 완료 |
| 5-2 | Google Sheets 조회+입력 | Sheets 읽기/쓰기 | `references/module-05-2-sheets.md` | 모듈 5-1 완료 |
| 5-3 | Forms+Sheets+Gmail | 설문 생성, 분석, 메일 발송 | `references/module-05-3-forms-gmail.md` | 모듈 5-2 완료 |
| 5-4 | Slack+세일즈맵+Context Sync | 싱크업 보완, 결과 공유, 통합 수집 | `references/module-05-4-slack-salesmap.md` | 모듈 5-3 완료 |
```

Advanced 테이블의 해금 조건을 "모듈 5 완료" → "모듈 5-4 완료"로 변경.

- [ ] **Step 2: 진도 스키마 수정 — `"5"` 키를 `"5-1"` ~ `"5-4"`로 교체**

```json
"5-1": { "status": "locked", "quiz_score": 0, "quiz_total": 0, "last_step": "", "weekly_mission": "not_started" },
"5-2": { "status": "locked", "quiz_score": 0, "quiz_total": 0, "last_step": "", "weekly_mission": "not_started" },
"5-3": { "status": "locked", "quiz_score": 0, "quiz_total": 0, "last_step": "", "weekly_mission": "not_started" },
"5-4": { "status": "locked", "quiz_score": 0, "quiz_total": 0, "last_step": "", "weekly_mission": "not_started" },
```

기존 `"5": { ... }` 행 제거.

- [ ] **Step 3: 잠금 로직 수정**

Essential 잠금 로직에 서브모듈 순차 해금 추가:

```markdown
**Essential (1–5):**
- 모듈 N의 `status`가 `"completed"`여야 모듈 N+1이 해금
- 모듈 1은 항상 열려 있음
- **M5 서브모듈:** 5-1 → 5-2 → 5-3 → 5-4 순차 해금
- M5-4 완료 = M5 전체 완료

**Advanced (6–10):**
- 기본: 모듈 5-4가 `"completed"`여야 모듈 6–10 전체 해금
```

- [ ] **Step 4: 배지 조건 확인 + 업데이트**

"연결 전문가" 배지 획득 조건을 M5-4 완료로 수정 (해당 배지 섹션이 있으면).

- [ ] **Step 5: CLAUDE.md에 학습용 시트 ID 플레이스홀더 + Gmail 안전 규칙 추가**

cc-tutor-om 프로젝트 루트의 CLAUDE.md (`/Users/ga/work/apps/cc-tutor/cc-tutor-om/CLAUDE.md`)에 다음 추가:

```markdown
## 학습용 시트 (cc-tutor-om)
- [학습용] 코치일정 캘린더: {SHEET_ID}
- [학습용] GPT 계정 관리: {SHEET_ID}
- [학습용] 에그 관리 대장: {SHEET_ID}
- [학습용] 위클리 시트: {SHEET_ID}
- [학습용] 강의관리 시트: {SHEET_ID}
- [학습용] 싱크업 시트: {SHEET_ID}

## 학습 모드 규칙
- Gmail은 `draft_gmail_message`(임시저장)만 사용, 실제 발송 금지
- 학습용 시트의 이메일은 팀 내부 테스트 계정만 사용
```

- [ ] **Step 6: Commit**

```
git add .claude/skills/cc-tutor-om/SKILL.md CLAUDE.md
git commit -m "feat(SKILL.md): M5 서브모듈 진도 스키마 + 잠금 로직 + 학습 안전 규칙

CLAUDE.md 경로: cc-tutor-om 프로젝트 루트 (~/work/apps/cc-tutor/cc-tutor-om/CLAUDE.md)"
```

---

## Task 3: M5 레퍼런스 파일 4개 신규 생성

기존 `module-05-mcp.md`를 4개 서브모듈 파일로 분리 생성한다.
각 파일은 기존 레퍼런스와 동일한 구조(WHY, EXPLAIN, EXECUTE, QUIZ, LEADER-TIP, WEEKLY-MISSION, TROUBLESHOOTING)를 따른다.

**Files:**
- Create: `.claude/skills/cc-tutor-om/references/module-05-1-mcp-setup.md`
- Create: `.claude/skills/cc-tutor-om/references/module-05-2-sheets.md`
- Create: `.claude/skills/cc-tutor-om/references/module-05-3-forms-gmail.md`
- Create: `.claude/skills/cc-tutor-om/references/module-05-4-slack-salesmap.md`
- Delete: `.claude/skills/cc-tutor-om/references/module-05-mcp.md`

- [ ] **Step 1: `module-05-1-mcp-setup.md` 작성**

WHY: M4에서 CSV로 했던 코치일정/GPT계정/에그 조회를 실제 Sheets에서 직접 하려면 MCP가 필요. Before(CSV 다운로드→로컬 분석) vs After(Sheets 직접 접근).

EXPLAIN: MCP 개념 (Claude Code에 외부 도구 플러그인), settings.json 구조, API 키 환경변수 관리, 보안 주의사항.

EXECUTE (6 Steps):
1. MCP 개념 이해
2. workspace-mcp 설치 (settings.json 수정 방법, 인증 URL 처리)
3. Slack MCP 설치
4. 세일즈맵 MCP 설치
5. `/mcp` 명령어로 연결 상태 확인
6. 학습용 시트 접근 테스트 — "[학습용] 코치일정" 읽기

QUIZ: MCP가 필요한 이유, settings.json에서 가장 주의할 점.

- [ ] **Step 2: `module-05-2-sheets.md` 작성**

WHY: OM 업무의 70%가 Google Sheets. 코치일정, GPT 계정, 에그, 종료/회고 — 매일 여러 시트를 오가며 조회+입력. Claude Code에서 바로 처리하면 시트 전환 시간 절약.

EXPLAIN: Sheets 읽기(`read_sheet_values`), 쓰기(`modify_sheet_values`), 시트 정보 확인(`get_spreadsheet_info`). 학습용 시트 사본 개념.

EXECUTE (7 Steps):
1. 코치일정 조회: "박요한 코치 이번 달 빈 날짜 찾아줘"
2. 코치일정 입력: "4/15에 삼성생명 AI특강 추가해줘"
3. GPT 계정 조회: "4/15 사용 가능한 계정 번호 알려줘"
4. GPT 계정 입력: "1~15번 계정을 삼성생명 과정에 배정 기록"
5. 에그 조회: "미반납 에그 목록 확인"
6. 에그 입력: "1번 에그 반납 완료 체크"
7. 종료/회고 조회: "이번 달 만족도 4.5 미만 건 찾아줘"

동시 편집 주의: "각자 다른 날짜/행에 데이터 입력. 본인 이니셜+날짜로 구분 (예: JY_0424)."

WEEKLY-MISSION: 각자 **다른 교육 건**을 대상으로 실습 (동시 편집 충돌 방지). 이 규칙은 M5-2 ~ M5-4 모든 WEEKLY-MISSION에 동일 적용.

QUIZ: Sheets 읽기와 쓰기의 차이, 학습용 시트를 쓰는 이유.

- [ ] **Step 3: `module-05-3-forms-gmail.md` 작성**

WHY: 교육 종료 후 만족도 설문 생성→응답 수집→분석→리포트→메일 발송이 OM 핵심 업무. 현재는 Forms/Sheets/Gmail을 각각 열어서 수작업. MCP로 한 번에.

EXPLAIN: Forms 생성(`create_form`), 응답 조회(`list_form_responses`), Sheets 분석, Gmail 임시저장(`draft_gmail_message`). 안전장치: 학습 모드에서는 임시저장만.

EXECUTE (6 Steps):
1. 만족도 설문지 자동 생성 (Google Forms) — 항목: 강의내용/강사역량/실습만족도(5점) + 주관식
2. 설문 응답 확인 (학습용 더미 응답)
3. 응답 데이터 분석 (항목별 평균, 주관식 긍정/부정 분류)
4. 강의 결과 리포트 생성 (마크다운 → 로컬 저장)
5. 강사에게 결과 메일 임시저장 (Gmail draft) — 운영 템플릿 형식
6. 기업 담당자에게 결과 메일 임시저장 — 격식체, 싱크업 시트에서 담당자 이메일 조회

QUIZ: Forms→Sheets→Gmail 파이프라인에서 MCP가 하는 역할, draft vs send 차이.

- [ ] **Step 4: `module-05-4-slack-salesmap.md` 작성**

WHY: LD가 싱크업을 대충 써도 세일즈맵에서 보완 가능. 결과 공유도 Slack에서 바로. 여러 소스를 합치면 더 완전한 정보.

EXPLAIN: Slack 읽기/쓰기, 세일즈맵 딜 조회(`salesmap_search_records`, `salesmap_get_record`), 세일즈맵 제한사항(시퀀스 조회 불가), Context Sync 개념.

EXECUTE (5 Steps):
1. Slack 채널 읽기: 최근 메시지 확인
2. 세일즈맵 딜 조회: 특정 기업 딜 정보 가져오기
3. 싱크업 빈칸 보완: 싱크업 시트 빈 필드 → 세일즈맵+Gmail+Slack에서 수집 → 보완안 제시
4. LD에게 만족도 결과 Slack 공유
5. `/my-context-sync` 체험 — Slack+Gmail+Sheets 통합 수집

QUIZ: 싱크업 보완 시 어떤 MCP를 조합하는지, Context Sync의 장점.

- [ ] **Step 5: 기존 `module-05-mcp.md` 삭제**

```
git rm .claude/skills/cc-tutor-om/references/module-05-mcp.md
```

- [ ] **Step 6: Commit**

```
git add .claude/skills/cc-tutor-om/references/module-05-*
git commit -m "feat(M5): 서브모듈 레퍼런스 4개 생성 + 기존 단일 파일 삭제"
```

---

## Task 4: M3 레퍼런스 수정 — `/싱크업요약` 스킬 체험

> **의존성:** Task 1 완료 필요 (`syncup-sample.csv`가 존재해야 `/싱크업요약` 스킬이 동작)

**Files:**
- Modify: `.claude/skills/cc-tutor-om/references/module-03-skill-usage.md:86-93` (Step 3)
- Create: `.claude/skills/syncup-summary/SKILL.md`

- [ ] **Step 1: `/싱크업요약` 프로젝트 스킬 생성**

```markdown
---
name: 싱크업요약
description: 싱크업 시트(CSV 또는 Sheets)를 읽고 교육 개요를 한 장으로 요약. 빈 필드 경고 포함. "/싱크업요약", "싱크업 요약", "교육 개요 요약" 요청에 사용.
---

# /싱크업요약

## 목적
싱크업 시트에서 교육 과정 개요를 추출하여 한 눈에 볼 수 있는 요약을 생성한다.
빈 필드나 내용이 부족한 항목을 경고로 표시한다.

## 실행 절차
1. syncup-sample.csv 또는 학습용 싱크업 Sheets에서 교육 개요 데이터 읽기
2. 핵심 정보 추출: 과정명, 교육형태, 일정, 장소, 대상, 담당자(기업/FC), 강사, 조교
3. 빈 필드 감지 → ⚠️ 경고 표시
4. 요약 카드 형태로 출력

## 출력 형식
교육 개요 요약 카드 + 빈 필드 경고 리스트
```

- [ ] **Step 2: M3 레퍼런스 Step 3 수정**

기존 Step 3 (`/my-context-sync` 체험)을 교체:

```markdown
### Step 3 — 실무 스킬 체험: /싱크업요약

📋 아래를 복사해서 입력하세요:

    /싱크업요약

싱크업 시트(syncup-sample.csv)를 읽고 교육 개요를 한 장으로 요약하는 과정을 관찰한다.
빈 필드가 경고로 표시되는 것을 확인한다.

M2에서 CSV를 직접 읽고 분석했던 것이, 스킬 한 마디로 끝나는 것을 체감한다.
```

- [ ] **Step 3: Commit**

```
git add .claude/skills/syncup-summary/ .claude/skills/cc-tutor-om/references/module-03-skill-usage.md
git commit -m "feat(M3): /싱크업요약 스킬 생성 + Step 3 교체"
```

---

## Task 5: M4 레퍼런스 수정 — 실무 CSV 병렬 처리

**Files:**
- Modify: `.claude/skills/cc-tutor-om/references/module-04-subagent.md` (EXECUTE 섹션 전체 교체)

- [ ] **Step 1: WHY 섹션 수정**

기존 slide-sample/survey-sample 예시를 코치일정/GPT계정/에그로 교체.
Before: "PPT 1→PPT 2→PPT 3 순서대로 검수 30분"
After: "코치일정+GPT 계정+에그 동시 확인 → 준비 상황 한 번에 파악"

- [ ] **Step 2: EXPLAIN 섹션 병렬 판별 예시 교체**

```markdown
| 상황 | 병렬 가능? | 이유 |
|------|-----------|------|
| 코치 3명 일정 각각 조회 | ✅ 가능 | 서로 독립적 |
| 코치일정 + GPT 계정 + 에그 동시 확인 | ✅ 가능 | 서로 독립적 |
| 만족도 분석 → 분석 결과로 메일 작성 | ❌ 불가능 | 메일이 분석 결과에 의존 |
| 종료/회고 데이터 강사별/기업별 동시 분석 | ✅ 가능 | 서로 독립적 |
```

- [ ] **Step 3: EXECUTE 5개 Step 전체 교체**

Step 1: 순차 — coach-schedule-sample.csv 1명 조회 → egg-sample.csv 조회
Step 2: 병렬 — 코치 3명 일정 동시 조회
Step 3: 병렬 — 코치일정 + GPT 계정 + 에그 3가지 동시
Step 4: 병렬 — review-log-sample.csv에서 강사별/기업별/이슈유형별 동시 분석
Step 5: 병렬 가능 여부 판별 (실무 예시)

- [ ] **Step 4: QUIZ 예시 교체**

기존 PPT/CSV 예시를 코치일정/만족도/메일 예시로.

- [ ] **Step 5: LEADER-TIP, WEEKLY-MISSION 업데이트**

실무 연결: "분기별 만족도 5건 동시 분석", "교안 10개 일괄 검수" → "코치 일정 + GPT 계정 + 에그 동시 확인", "종료/회고 누적 데이터 다관점 병렬 분석".

마무리에 M5 연결 멘트 추가:
"이 CSV는 실제로 Google Sheets에 있는 데이터입니다. M5에서 MCP를 배우면 시트를 직접 읽고 쓸 수 있습니다."

- [ ] **Step 6: Commit**

```
git add .claude/skills/cc-tutor-om/references/module-04-subagent.md
git commit -m "feat(M4): 실무 CSV 기반 병렬 처리 실습으로 교체"
```

---

## Task 6: M6 레퍼런스 수정 — 실무 Sheets 기반 Clarify

> **참고:** 기존 M6 Step 4가 참조하던 `step2-education-plan.md`는 더 이상 사용하지 않음. 해당 참조를 제거하고 학습용 Sheets로 교체.

**Files:**
- Modify: `.claude/skills/cc-tutor-om/references/module-06-clarify.md` (EXECUTE 섹션 시나리오 교체, `step2-education-plan.md` 참조 제거)

- [ ] **Step 1: EXECUTE Step 2 교체 — Clarify(vague)**

기존: 가상 "AI 교육 해주세요"
변경: 학습용 싱크업 Sheets의 불완전한 요구사항을 MCP로 읽고 Clarify(vague)로 구조화.

```markdown
### Step 2 — Clarify(vague) 체험: 싱크업 시트 요구사항 구조화

📋 아래를 복사해서 입력하세요:

    [학습용] 싱크업 시트를 읽고, 교육 요구사항이 모호한 부분을
    Clarify(vague)로 구조화해줘.
```

- [ ] **Step 2: EXECUTE Step 4 교체 — Clarify(unknown)**

기존: step2-education-plan.md 참조
변경: 학습용 강의관리 Sheets 체크리스트 탭의 맹점 분석.

```markdown
### Step 4 — Clarify(unknown) 체험: 체크리스트 맹점 분석

📋 아래를 복사해서 입력하세요:

    [학습용] 강의관리 시트의 (대면) 체크리스트를 읽고
    Clarify(unknown)으로 분석해줘. 빠진 항목이나 리스크를 찾아줘.
```

- [ ] **Step 3: EXECUTE Step 5 교체 — Clarify(metamedium)**

기존: 검수 결과 전달 형태
변경: 만족도 결과 전달 형태 최적화.

```markdown
### Step 5 — Clarify(metamedium): 만족도 결과 전달 형태

📋 아래를 복사해서 입력하세요:

    만족도 분석 결과를 전달하는 가장 효과적인 형태는?
    - Gmail 메일 리포트
    - Google Sheets 링크 공유
    - Slack 요약 메시지
    - PDF 첨부 보고서

    이 질문을 Clarify(metamedium)으로 분석해줘.
```

- [ ] **Step 4: Commit**

```
git add .claude/skills/cc-tutor-om/references/module-06-clarify.md
git commit -m "feat(M6): 실무 Sheets 기반 Clarify 시나리오로 교체"
```

---

## Task 7: M7 레퍼런스 수정 — `/만족도분석` MCP Sheets 연동

**Files:**
- Modify: `.claude/skills/cc-tutor-om/references/module-07-skill-creator.md` (EXECUTE 섹션 MCP 연동으로 변경)

- [ ] **Step 1: WHY/EXPLAIN 업데이트**

"survey-sample.csv를 읽고 분석" → "학습용 만족도 Sheets를 MCP로 읽고 분석하여 리포트 생성"으로 변경.
스킬이 MCP를 활용하는 첫 사례임을 강조.

- [ ] **Step 2: EXECUTE Step 2 수정 — 스킬 설계**

```markdown
다음 워크플로우를 스킬로 만들 거야. 먼저 설계만 해줘:

1. 학습용 만족도 Sheets에서 응답 데이터 읽기 (MCP)
2. 항목별 평균 만족도 계산
3. 주관식 긍정/부정 분류 (원문 보존)
4. 분석 결과를 reports/survey-analysis.md로 저장
5. 강사용 + 기업담당자용 결과 요약 생성

⚠️ 이 스킬은 분석+리포트 생성까지만 수행.
메일 발송은 포함하지 않음 (Gmail 안전 규칙: 학습 모드에서는 draft만 사용).
메일이 필요하면 M8 Agent Teams의 전달팀에서 처리.
```

- [ ] **Step 3: EXECUTE Step 4 수정 — 테스트 대상**

"survey-sample.csv로 테스트" → "학습용 Sheets로 테스트 (MCP)"

- [ ] **Step 4: Commit**

```
git add .claude/skills/cc-tutor-om/references/module-07-skill-creator.md
git commit -m "feat(M7): /만족도분석 스킬을 MCP Sheets 연동으로 변경"
```

---

## Task 8: M8 레퍼런스 수정 — 교육 종료 TF 파이프라인

**Files:**
- Modify: `.claude/skills/cc-tutor-om/references/module-08-agent-teams.md` (전체 시나리오 교체)

- [ ] **Step 1: WHY/EXPLAIN 업데이트**

기존 "검수→분석→메일" 파이프라인을 "교육 종료 후 업무 자동화" TF로 교체.
Agent Teams vs Subagent 비교 표는 유지하되 예시를 실무로 변경.

AGENTS.md 예시:
```markdown
## 에이전트 1: 분석팀
- 역할: 학습용 만족도 Sheets 분석 (항목별 평균, 주관식 분류)
- 출력: 분석 결과 JSON → 리포트팀에 전달

## 에이전트 2: 리포트팀
- 역할: 분석 결과를 강의 결과 리포트로 생성
- 출력: reports/결과리포트.md → 전달팀에 전달

## 에이전트 3: 전달팀
- 역할: 강사(Gmail draft) + 기업담당자(Gmail draft) + LD(Slack)
- 출력: 메일 임시저장 + Slack 메시지
```

- [ ] **Step 2: EXECUTE Step 2 수정 — 3개 에이전트 TF 설계**

먼저 3개(분석+리포트+전달)로 시작하는 것을 명시.

- [ ] **Step 3: EXECUTE Step 5 수정 — 다관점 검증**

```markdown
다음 3가지 관점에서 교육 종료 TF 파이프라인을 검토해줘:
1. OM 관점: 운영 효율이 충분한가?
2. 강사 관점: 피드백이 유용한 형태인가?
3. 기업담당자 관점: 보고가 충분한가?
```

- [ ] **Step 4: EXECUTE Step 6 수정 — 회수팀 추가**

```markdown
TF 파이프라인에 4번째 에이전트를 추가해줘:
"회수팀" — GPT 계정 PW 변경 + 에그 반납 확인 + 종료/회고 시트 기록

그리고 이 과정에서 "이 교육에는 GPT 계정을 안 썼으니 회수팀이 필요 없다"는
케이스도 설명해줘. 불필요한 에이전트를 빼는 것도 설계다.
```

- [ ] **Step 5: QUIZ, LEADER-TIP, WEEKLY-MISSION 업데이트**

실무 TF 예시로 교체.

- [ ] **Step 6: Commit**

```
git add .claude/skills/cc-tutor-om/references/module-08-agent-teams.md
git commit -m "feat(M8): 교육 종료 TF 파이프라인으로 교체"
```

---

## Task 9: M9, M10 레퍼런스 최소 수정

**Files:**
- Modify: `.claude/skills/cc-tutor-om/references/module-09-github.md` (Step 6 온보딩 가이드 항목 추가)
- Modify: `.claude/skills/cc-tutor-om/references/module-10-capstone.md` (추천 주제 확장)

- [ ] **Step 1: M9 Step 6 수정 — 온보딩 가이드에 MCP 항목 추가**

기존 온보딩 가이드 항목(clone, 설치, CLAUDE.md, /교안검수, 첫 업무)에 추가:

```markdown
6. MCP 설정 (workspace-mcp, Slack, 세일즈맵) — M5-1 참고
7. 학습용 시트 접근 확인
```

- [ ] **Step 2: M10 추천 주제 확장**

기존 추천 주제 테이블에 실무 시나리오 5개 추가:

```markdown
| `/교육준비` E2E 스킬 | 싱크업 보완(세일즈맵+Gmail+Slack) + 코치일정 + 체크리스트 | ★★★ |
| 월간 만족도 트렌드 분석 | Sheets 다중 과정 → 트렌드 → Slack 공유 | ★★ |
| 코치 가용성 자동 매칭 | 코치일정 + 싱크업 → 최적 강사 추천 | ★★ |
| 교육 기획 요구사항 자동 구조화 | Clarify + 세일즈맵 + Slack | ★★ |
| 신규 OM 온보딩 자동화 | CLAUDE.md + GitHub + MCP E2E | ★ |
```

- [ ] **Step 3: Commit**

```
git add .claude/skills/cc-tutor-om/references/module-09-github.md .claude/skills/cc-tutor-om/references/module-10-capstone.md
git commit -m "feat(M9,M10): 온보딩 MCP 항목 + 캡스톤 실무 주제 추가"
```

---

## Task 10: 최종 검증 + 정리

- [ ] **Step 1: 파일 구조 검증**

모든 레퍼런스 파일이 존재하는지 확인:
```
ls .claude/skills/cc-tutor-om/references/module-*.md
```
Expected: 13개 파일 (01, 02, 03, 04, 05-1, 05-2, 05-3, 05-4, 06, 07, 08, 09, 10)
기존 module-05-mcp.md가 삭제되었는지 확인.

- [ ] **Step 2: SKILL.md 모듈 테이블 정합성 확인**

SKILL.md의 모듈 테이블에서 참조하는 레퍼런스 파일 경로가 모두 실제 존재하는지 교차 확인.

- [ ] **Step 3: 샘플 파일 검증**

```
ls samples/*.csv
```
Expected: 기존 1개(survey-sample.csv) + 신규 7개 = 8개 CSV.

- [ ] **Step 4: samples/README-samples.md 정합성 확인**

README에 기재된 파일 목록과 실제 파일이 일치하는지 확인.

- [ ] **Step 5: 최종 Commit**

```
git add -A
git status
git commit -m "chore: 커리큘럼 리뉴얼 최종 검증 완료"
```
