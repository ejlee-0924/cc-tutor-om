# cc-tutor-om: OM을 위한 Claude Code 학습 튜터

교육 운영 매니저(OM)를 위한 Claude Code 실무 학습 레포지토리.

Step1(Gems/GPTs)에서 해결하지 못한 한계를 Claude Code + Claude in Office로 돌파합니다.

## 시작하기

### 1. 이 레포를 클론합니다

```bash
git clone https://github.com/your-org/cc-tutor-om.git
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

### Essential (순차 진행)

| # | 모듈명 | 핵심 내용 | 배지 |
|---|--------|---------|------|
| 1 | Claude Code 첫 만남 | 설치, 첫 대화, Plan 모드, 파일 읽기/쓰기 | 🌱 |
| 2 | 교안 검수 업그레이드 | Claude Code + Claude in PowerPoint 병행. 검수 리포트 + PPT 수정 | 📄 |
| 3 | 만족도 분석 파이프라인 | CSV/Excel 분석 → 시트 정리 → 메일 초안. Claude in Excel 병행 | 🏆 |

### Advanced (모듈 3 완료 후 선택 — 시급 케이스 예외 허용)

| # | 모듈명 | 핵심 내용 | 배지 |
|---|--------|---------|------|
| 4 | 앱스크립트 디버깅 | 오류 코드 디버깅 + 고도화 | ⚡ |
| 5 | 강사 매칭 자동화 | 이력서 일괄 분석 + 매칭 리포트 | 🤝 |
| 6 | 팀 지식 자산화 | CLAUDE.md + 스킬 만들기 + GitHub 공유 | 🎖️ |

## 실습 데이터

- `samples/` — 폴백용 샘플 데이터 (레포에 포함)
- `my-data/` — 본인의 실제 업무 데이터를 여기에 넣으세요 (.gitignore 처리됨)

## 지원

- 막히면: 스킬 내장 트러블슈팅 가이드가 자동으로 안내합니다
- 비동기: #cc-tutor-om-help 슬랙 채널에 스크린샷 + 에러 메시지를 올려주세요
- 동기: 격주 오프라인 모임에서 함께 해결합니다
