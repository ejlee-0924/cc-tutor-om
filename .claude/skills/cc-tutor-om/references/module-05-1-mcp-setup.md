# 모듈 5-1: MCP 개념 + 설치

> 배우는 기능: Model Context Protocol (MCP), workspace-mcp/Slack/세일즈맵 MCP 설치, settings.json 설정
> OM 실습: MCP 3개 설치 + 학습용 시트 접근 테스트

---

## WHY

M4에서 CSV 파일로 코치일정/GPT계정/에그를 분석했다.
하지만 이 데이터는 실제로 Google Sheets에 있다. CSV는 다운받는 순간 이미 과거 데이터.
MCP를 쓰면 항상 최신 데이터에 직접 접근한다.

**Before (M4까지):**
- CSV 다운로드 → 로컬 분석 → 시트가 업데이트되면 다시 다운
- 분석 결과를 복사해서 다른 앱에 붙여넣기
- Slack, Gmail, 세일즈맵을 각각 열어서 확인

**After (MCP):**
- "코치일정 시트에서 빈 날짜 찾아줘" → 실시간 최신 데이터
- "분석 결과를 Slack에 공유해줘" → 직접 전송
- "세일즈맵에서 딜 정보 확인해줘" → 직접 조회

**공식 문서:** https://docs.anthropic.com/en/docs/claude-code/mcp

---

## EXPLAIN

### MCP = Claude Code에 외부 도구 플러그인

스마트폰에 앱을 설치하면 기능이 늘어나듯, Claude Code에 MCP 서버를 연결하면 외부 시스템에 접근할 수 있다.

| 비유 | 설명 |
|------|------|
| 스마트폰에 앱 설치 | Claude Code에 Sheets/Slack/세일즈맵 "앱" 설치 |
| USB 허브에 장치 연결 | Claude Code에 외부 서비스를 연결 |

### 3개 MCP 서버

| MCP 서버 | 용도 | OM 업무 예시 |
|----------|------|-------------|
| workspace-mcp | Gmail, Sheets, Forms, Calendar, Drive | 시트 조회/수정, 메일 임시저장, 설문 생성 |
| Slack MCP | 채널 읽기/쓰기 | LD 소통, 이슈 공유, 결과 보고 |
| 세일즈맵 MCP | 딜 정보 조회 | 싱크업 보완, 기업 정보 확인 |

### MCP 서버 구조

```
Claude Code
  ├── workspace-mcp → Gmail, Sheets, Forms, Calendar, Drive
  ├── Slack MCP → Slack 채널 읽기/쓰기
  ├── 세일즈맵 MCP → 딜/레코드 조회
  └── (필요한 만큼 추가 가능)
```

### settings.json 구조

MCP 서버는 `settings.json` 파일에 설정한다. 각 서버의 실행 명령어, 인증 정보, 환경변수를 정의.

```json
{
  "mcpServers": {
    "서버이름": {
      "command": "실행 명령어",
      "args": ["인자"],
      "env": {
        "API_KEY": "${환경변수}"
      }
    }
  }
}
```

### 보안 원칙

- **최소 권한:** 필요한 권한만 부여 (읽기만 필요하면 읽기만)
- **API 키 관리:** 코드에 직접 넣지 않고 환경변수로 관리
- **학습 모드:** 학습용 시트/테스트 계정만 사용

---

## EXECUTE

---

### Step 1 — MCP 개념 이해

📋 아래를 복사해서 입력하세요:

    MCP가 뭔지 설명해줘. 어떤 외부 도구들을 연결할 수 있어?

Claude Code가 MCP의 개념과 연결 가능한 서비스 목록을 설명한다.

---

### Step 2 — workspace-mcp 설치

workspace-mcp는 Google Workspace(Sheets, Gmail, Forms, Calendar, Drive)에 접근하는 MCP 서버다.

📋 아래를 복사해서 입력하세요:

    workspace-mcp를 설치해줘. settings.json에 추가하고 인증까지 진행해줘.

설치 중 인증 URL이 표시되면:
1. URL을 클릭하여 브라우저에서 Google 계정 인증
2. 권한 허용 후 돌아오면 자동으로 연결 완료

---

### Step 3 — Slack MCP 설치

📋 아래를 복사해서 입력하세요:

    Slack MCP를 설치해줘. settings.json에 추가해줘.

Slack MCP는 채널 메시지 읽기, 검색, 메시지 보내기를 지원한다.

---

### Step 4 — 세일즈맵 MCP 설치

📋 아래를 복사해서 입력하세요:

    세일즈맵 MCP를 설치해줘. settings.json에 추가해줘.

세일즈맵 MCP는 딜/레코드 조회를 지원한다. (시퀀스 조회는 미지원)

---

### Step 5 — 연결 확인

📋 아래를 복사해서 입력하세요:

    /mcp

`/mcp` 명령어로 현재 연결된 MCP 서버 목록과 상태를 확인한다. 3개 서버가 모두 "connected" 상태인지 체크.

---

### Step 6 — 학습용 시트 접근 테스트

📋 아래를 복사해서 입력하세요:

    [학습용] 코치일정 캘린더 시트를 읽어줘.

workspace-mcp가 정상 연결되었다면 학습용 코치일정 시트의 내용이 표시된다.

---

## QUIZ

**Q1.** MCP가 필요한 이유는?

- A) Claude Code의 속도를 높이기 위해
- B) Claude Code 혼자서는 외부 시스템(Sheets, Slack 등)에 접근할 수 없기 때문
- C) 파일을 더 빠르게 읽기 위해
- D) 프로그래밍 언어를 배우기 위해

**정답: B**
> Claude Code는 로컬 파일은 읽을 수 있지만, Google Sheets나 Slack 같은 외부 시스템에는 MCP 없이 접근할 수 없습니다. MCP가 그 다리 역할을 합니다.

**Q2.** settings.json에서 가장 주의할 점은?

- A) 파일 이름을 정확히 써야 한다
- B) API 키를 환경변수로 관리하고, 최소 권한 원칙을 지켜야 한다
- C) 서버 이름을 영어로 써야 한다
- D) JSON 파일을 매일 백업해야 한다

**정답: B**
> API 키를 코드에 직접 넣으면 보안 사고 위험. 환경변수로 관리하고, 필요한 권한만 부여하는 최소 권한 원칙이 핵심입니다.

---

## LEADER-TIP

1. **팀 공용 MCP 설정 공유**: settings.json 템플릿을 팀 공유 폴더에 저장하여 신규 인원 온보딩 시간 단축
2. **IT 보안 정책 확인**: MCP 서버가 접근하는 데이터 범위를 IT팀과 사전 협의
3. **학습용 시트 관리**: 실습용 시트를 별도로 만들어 원본 데이터 보호
4. **인증 갱신 주기 파악**: 토큰 만료 시 재인증 절차를 팀에 미리 안내

---

## WEEKLY-MISSION

MCP 3개(workspace-mcp, Slack, 세일즈맵)를 모두 설치하고 `/mcp`로 연결 상태를 확인하세요.
학습용 시트 1개를 읽어보고, 결과 스크린샷을 #cc-tutor-om-help에 공유.
각자 **다른 교육 건**을 대상으로 실습 (동시 편집 충돌 방지).

---

## TROUBLESHOOTING

### "MCP 설치 중 오류가 나요"
- Node.js 버전 확인 (최소 18 이상 권장)
- `npx` 명령어가 동작하는지 터미널에서 테스트
- 네트워크 환경 확인 (회사 VPN이 차단할 수 있음)

### "인증 URL이 안 열려요"
- URL을 직접 복사해서 브라우저에 붙여넣기
- 회사 계정으로 로그인했는지 확인 (개인 계정 X)
- 팝업 차단 해제 확인

### "settings.json 문법 오류"
- JSON 문법: 쉼표, 따옴표, 중괄호 짝 확인
- "이 JSON 문법 맞는지 확인해줘"라고 Claude Code에 요청
- 마지막 항목 뒤에 쉼표가 있으면 오류 (trailing comma)

### "학습용 시트에 접근이 안 돼요"
- 시트 공유 권한 확인 (본인 계정에 뷰어 이상 권한 필요)
- workspace-mcp 인증이 올바른 계정으로 되었는지 확인
- `/mcp`로 workspace-mcp 상태가 "connected"인지 재확인
