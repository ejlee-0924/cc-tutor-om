# 모듈 9: 팀 전파 + GitHub

> 배우는 기능: GitHub 배포 (repo, clone, commit, push), 팀 온보딩, Session Wrap, Compound, Hook
> OM 실습: cc-tutor-om 레포 GitHub 공유 + 신규 OM 온보딩 가이드 작성

---

## WHY

M1~M8에서 만든 CLAUDE.md, 스킬, AGENTS.md — 지금은 내 컴퓨터에만 있다.
팀원이 쓰려면 파일을 하나하나 전달해야 한다.

GitHub에 올리면 누구든 `git clone` 한 번으로 동일한 환경을 갖게 된다.
신규 입사자도 클론 → 설치 → 바로 업무 투입.

**Before (수동 전달):**
- CLAUDE.md를 메일로 전달 → 수동 복사 → 버전 관리 불가
- "최신 버전이 어디 있지?" → 혼란

**After (GitHub):**
- `git clone` → 최신 환경 즉시 세팅
- 업데이트 시 `git pull` → 모두 동기화
- 기여: "내가 만든 스킬을 PR로 공유"

**공식 문서:** https://docs.github.com/

---

## EXPLAIN

### GitHub = 팀 공유 드라이브 (버전 관리)

| 비유 | Google Drive | GitHub |
|------|-------------|--------|
| 파일 공유 | O | O |
| 버전 관리 | △ (이름에 v1, v2) | O (자동 기록) |
| 변경 추적 | X | O (누가, 언제, 무엇을) |
| 동시 작업 | 충돌 위험 | 병합(merge) 시스템 |

### 핵심 용어

| 용어 | OM 비유 | 설명 |
|------|---------|------|
| **repo** | 프로젝트 폴더 | GitHub에 올린 프로젝트 전체 |
| **clone** | 폴더 복사해오기 | GitHub → 내 컴퓨터 |
| **commit** | 저장 (스냅샷) | 변경 사항을 기록 |
| **push** | 업로드 | 내 변경 → GitHub |
| **pull** | 다운로드 | GitHub 최신 → 내 컴퓨터 |
| **PR (Pull Request)** | 검토 요청 | "내 변경 반영해줘" 요청 |

### Session Wrap = 학습 내용 자동 정리

/my-session-wrap을 실행하면:
1. 이번 세션에서 한 작업 분석
2. 문서 업데이트 필요 사항 확인
3. 자동화 기회 탐지
4. 후속 작업 제안

### Compound = 지식 누적

세션을 거듭할수록 지식이 쌓인다:
- CLAUDE.md에 새 규칙 추가
- 스킬 개선 (v1→v2)
- 트러블슈팅 FAQ 추가

### Hook = 자동 실행 트리거

특정 이벤트 발생 시 자동으로 실행되는 명령:
- 파일 저장 시 → 자동 포맷팅
- 커밋 시 → 자동 검증

---

## EXECUTE

**Step 1 — GitHub 기초 이해**

    GitHub가 뭔지, repo, clone, commit, push를 OM 업무 비유로 설명해줘.

**Step 2 — 레포 준비**

    이 프로젝트(cc-tutor-om)를 GitHub에 올릴 준비를 하자.
    1. README.md를 정비해줘
    2. .gitignore에 민감 데이터가 제외되어 있는지 확인해줘
    3. 불필요한 파일이 있는지 확인해줘

**Step 3 — Git 초기화 + 커밋**

    git init하고 첫 커밋을 만들어줘.

    (또는 이미 git 초기화된 경우)
    현재 변경 사항을 커밋해줘.

Git의 커밋 과정을 체험한다.

**Step 4 — GitHub에 올리기**

    GitHub에 cc-tutor-om 레포를 만들고 push하는 방법을 단계별로 알려줘.

(GitHub 계정이 없거나 권한이 없으면 방법만 이해하고 넘어감)

**Step 5 — Session Wrap 체험**

    /my-session-wrap

이번 세션에서 한 작업이 자동으로 정리되는 것을 체험한다.

**Step 6 — 온보딩 가이드 작성**

    신규 OM이 이 레포를 클론해서 첫 업무를 하기까지의 온보딩 가이드를 만들어줘:

    1. git clone으로 레포 가져오기
    2. Claude Code 설치
    3. CLAUDE.md 확인 (팀 규칙 자동 적용)
    4. /교안검수 스킬 실행
    5. 첫 업무 완료!

    onboarding-guide.md로 저장해줘.

**Step 7 — Compound 체험**

    지금까지 M1~M9에서 배운 내용을 정리해줘.
    CLAUDE.md에 추가할 새 규칙이 있으면 제안해줘.

---

## QUIZ

**Q1.** GitHub에 올리면 좋은 이유는?

- A) 코드를 예쁘게 보여주려고
- B) 버전 관리 + 팀 공유 + 신규 온보딩이 한 번에 해결
- C) GitHub이 유행이라서
- D) 파일을 백업하려고

**정답: B**
> GitHub은 "팀 공유 드라이브 + 버전 관리"입니다. clone 한 번으로 팀원 전체가 동일한 환경을 갖고, 변경 추적도 자동입니다.

**Q2.** .gitignore에 넣어야 할 파일은?

- A) CLAUDE.md
- B) .cc-tutor-om-progress.json, my-data/, .env
- C) README.md
- D) SKILL.md

**정답: B**
> 개인 진도 파일, 실제 업무 데이터, API 키 등 민감하거나 개인적인 파일은 .gitignore에 넣어서 GitHub에 올라가지 않도록 합니다.

---

## LEADER-TIP

1. **Step1→Step2→Step3 로드맵 완성**: Gems→Claude Code Skills→팀 GitHub 허브
2. **CLAUDE.md 유지보수 담당자 지정**: 규칙이 바뀌면 업데이트 + commit + push
3. **팀 기여 문화**: "내가 만든 스킬을 PR로 공유" → 팀 스킬 라이브러리 성장
4. **온보딩 실제 테스트**: 새 사람에게 클론→첫 업무 시켜보기 → 가이드 개선

---

## WEEKLY-MISSION

GitHub에 레포를 하나 만들어보세요 (cc-tutor-om 또는 개인 프로젝트).
- git init → commit → push 과정 체험
- README.md 작성
- 결과를 #cc-tutor-om-help에 공유

---

## TROUBLESHOOTING

### "Git이 뭔지 모르겠어요"
- "Git과 GitHub의 차이를 쉽게 설명해줘" 요청
- Git = 버전 관리 도구 (내 컴퓨터), GitHub = 온라인 저장소

### "GitHub 계정이 없어요"
- https://github.com 에서 무료 가입
- 이메일 인증 필요

### "push가 안 돼요"
- GitHub 인증 확인 (SSH 키 또는 토큰)
- "GitHub push 방법 단계별로 알려줘" 요청
- 팀 내 GitHub 경험자와 피어 버디 매칭

### "Session Wrap이 뭘 하는 건지 모르겠어요"
- 이번 세션에서 한 작업을 자동으로 분석하고 정리하는 기능
- 문서 업데이트, 자동화 기회, 후속 작업을 제안
