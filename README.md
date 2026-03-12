# cc-tutor-om: OM을 위한 Claude Code 학습 튜터

교육 운영 매니저(OM)를 위한 Claude Code 기능 학습 레포지토리.

cc-tutor-b2b와 동일한 기능 학습축에 OM 업무 실습(교안 검수, 만족도 분석, 강사 매칭 등)을 결합한 10모듈 커리큘럼입니다.

## 시작하기

### 1. 이 레포를 클론합니다

```bash
git clone https://github.com/ejlee-0924/cc-tutor-om.git
cd cc-tutor-om
```

### 2. Claude Code를 설치합니다

```bash
npm install -g @anthropic-ai/claude-code
```

### 3. Claude Code를 실행하고 학습을 시작합니다

```bash
claude
```

Claude Code가 실행되면 아래 명령어를 입력하세요:

```
/cc-tutor-om
```

## 커리큘럼

### Essential (순차 진행, M1→M5)

| # | 모듈명 | 배우는 기능 | OM 실습 | 배지 |
|---|--------|-----------|--------|------|
| 1 | 작업환경 세팅 + CLAUDE.md | 설치, 인증, 권한, CLAUDE.md | 설치 + OM팀 규칙 문서 작성 | 🌱 |
| 2 | 파일 다루기 + Plan 모드 | Read/Write/Edit/Glob/Grep, Plan | PPT 검수 + CSV 분석 + 코드 디버깅 | 📄 |
| 3 | Skill 사용 | 스킬 탐색/설치/실행 | /교안검수 체험 + 기존 스킬 탐색 | 🔧 |
| 4 | Subagent | 병렬 작업 분배 | PPT 3개 동시 검수, 대량 이력서 분석 | 🚀 |
| 5 | MCP + Context Sync | 외부 시스템 연결 | 만족도→Slack 공유, Notion 강사DB | 🔌 |

### Advanced (M5 완료 후 자유 선택 — 시급 케이스 예외 허용)

| # | 모듈명 | 배우는 기능 | OM 실습 | 배지 |
|---|--------|-----------|--------|------|
| 6 | Plugin + Clarify | Clarify 3모드 | 교육 요구사항 구조화 | 🔍 |
| 7 | Skill Creator | 스킬 제작, Eval | /만족도분석 스킬 직접 제작 | ⚡ |
| 8 | Agent Teams | AGENTS.md, TF 파이프라인 | 검수→분석→메일 자동화 | 🤝 |
| 9 | 팀 전파 + GitHub | 배포, 온보딩, Session Wrap | 레포 공유 + 온보딩 가이드 | 📦 |
| 10 | 종합 실전 프로젝트 | M1~M9 통합 | 본인 업무 1건 E2E 자동화 | 🎖️ |

## 실습 데이터

- `samples/` — 폴백용 샘플 데이터 (레포에 포함)
- `my-data/` — 본인의 실제 업무 데이터를 여기에 넣으세요 (.gitignore 처리됨)

## 지원

- **자동**: 스킬 내장 트러블슈팅 가이드가 막힘을 감지하고 자동 안내
- **비동기**: #cc-tutor-om-help 슬랙 채널에 스크린샷 + 에러 메시지
- **동기**: 격주 오프라인 모임에서 함께 해결
