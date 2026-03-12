# 모듈 5: MCP + Context Sync

> 배우는 기능: Model Context Protocol (MCP), 외부 시스템 연결 (Slack, Notion, Gmail)
> OM 실습: 만족도 분석 결과 → Slack 자동 공유 + Notion 강사 DB 조회 + Context Sync 체험

---

## WHY

M1~M4에서 파일을 읽고, 분석하고, 병렬로 처리하는 법을 배웠다.
그런데 결과를 Slack에 공유하거나, Notion에서 강사 정보를 찾거나, Gmail로 메일을 보내려면?
지금까지는 분석 결과를 복사해서 다른 앱에 붙여넣어야 했다.

MCP(Model Context Protocol)를 쓰면 Claude Code가 Slack, Notion, Gmail에 직접 연결된다.

**Before (복사-붙여넣기):**
- Claude Code에서 분석 → 결과 복사 → Slack에 붙여넣기
- Notion에서 강사 정보 직접 검색 → 복사 → Claude Code에 붙여넣기
- 메일 초안 → 복사 → Gmail에 붙여넣기

**After (MCP 연동):**
- "분석 결과를 #교육운영 채널에 공유해줘" → 직접 전송
- "Notion 강사 DB에서 AI 교육 가능한 강사 찾아줘" → 직접 조회
- "이 메일 초안을 Gmail로 보내줘" → 직접 발송

**공식 문서:** https://docs.anthropic.com/en/docs/claude-code/mcp

---

## EXPLAIN

### MCP = Claude Code에 외부 도구 플러그인

| 비유 | 설명 |
|------|------|
| 스마트폰에 앱 설치 | Claude Code에 Slack/Notion/Gmail "앱" 설치 |
| USB 허브에 장치 연결 | Claude Code에 외부 서비스를 연결 |

### MCP 서버 구조

```
Claude Code
  ├── Slack MCP 서버 → Slack 채널 읽기/쓰기
  ├── Notion MCP 서버 → Notion 페이지/DB 조회
  ├── Gmail MCP 서버 → 메일 읽기/보내기
  └── (필요한 만큼 추가 가능)
```

### 설정 방법

Claude Code의 MCP 설정 파일(`.claude/mcp.json` 또는 설정 메뉴)에서 MCP 서버를 추가한다.
각 서버마다 API 키가 필요하며, 환경 변수로 관리한다.

### Context Sync = 여러 소스를 한 문서로

/my-context-sync 스킬은 MCP를 활용하여:
1. Slack에서 최근 메시지 수집
2. Notion에서 관련 페이지 조회
3. Gmail에서 관련 메일 확인
4. → 하나의 통합 문서로 정리

OM 비유: "여러 창구에서 정보를 모아 한 장 보고서로 만드는 것"

### 보안 주의사항

| 항목 | 규칙 |
|------|------|
| API 키 | 환경 변수로만 관리 (코드에 직접 넣지 않음) |
| 권한 | 최소 권한 원칙 (읽기만 필요하면 읽기만 허용) |
| 민감 데이터 | Slack에 개인정보 자동 전송 주의 |

---

## EXECUTE

**Step 1 — MCP 개념 이해**

    MCP가 뭔지 설명해줘. 어떤 외부 서비스를 연결할 수 있어?

MCP의 개념과 연결 가능한 서비스 목록을 확인한다.

**Step 2 — MCP 설정 확인**

    현재 연결된 MCP 서버 목록을 보여줘.

이미 설정된 MCP 서버가 있는지 확인한다.

**Step 3 — Slack MCP 체험** (설정 완료 시)

    #cc-tutor-om-help 채널의 최근 메시지를 읽어줘.

Slack MCP가 연결되어 있으면 채널 메시지를 직접 읽는 것을 체험한다.

**Step 4 — 분석 결과 Slack 공유** (설정 완료 시)

    survey-sample.csv를 분석하고, 핵심 요약을
    Slack #cc-tutor-om-help 채널에 공유해줘.

분석 → Slack 전송이 한 번에 되는 것을 체험한다.

**Step 5 — Notion MCP 체험** (설정 완료 시)

    Notion에서 강사 관련 데이터베이스를 찾아줘.

Notion DB를 직접 조회하는 것을 체험한다.

**Step 6 — Context Sync 체험**

    /my-context-sync를 실행하여 Slack + Notion + Gmail에서
    이번 주 교육 관련 정보를 한 문서로 정리해줘.

여러 소스의 정보가 하나로 합쳐지는 것을 확인한다.

**Step 7 — MCP 미설정 시 대안**

MCP 서버가 설정되어 있지 않은 경우:
- MCP 설정 방법을 안내받는다
- 설정 전까지는 수동 복사-붙여넣기로 대체
- "MCP 설정은 IT 부서와 협의 후 진행" 안내

---

## QUIZ

**Q1.** MCP가 필요한 이유는?

- A) Claude Code 속도를 높이려고
- B) Claude Code 혼자서는 Slack/Notion/Gmail에 접근할 수 없어서
- C) 파일을 더 잘 읽으려고
- D) 보안을 강화하려고

**정답: B**
> MCP는 Claude Code에 외부 서비스를 연결하는 프로토콜입니다. MCP 없이는 Slack에 메시지를 보내거나 Notion DB를 조회할 수 없습니다.

**Q2.** MCP 설정에서 가장 주의할 점은?

- A) 속도
- B) API 키를 환경 변수로 관리하고, 최소 권한만 부여
- C) 많이 연결할수록 좋다
- D) 한 번 설정하면 변경 불가

**정답: B**
> 보안이 가장 중요합니다. API 키는 코드에 직접 넣지 않고 환경 변수로 관리하며, 필요한 권한만 부여합니다.

---

## LEADER-TIP

1. **팀 공용 MCP 설정**: Slack, Notion 연동 설정 파일을 팀 공유 (API 키는 각자 발급)
2. **자동화 파이프라인**: "교육 종료 → 분석 → Slack 공유 → 메일 발송" E2E 자동화
3. **보안 가이드**: API 키 관리 규칙을 팀 CLAUDE.md에 추가
4. **IT 부서 협업**: MCP 서버 설정은 IT 보안 정책과 맞추어 진행

---

## WEEKLY-MISSION

MCP로 연결된 서비스 하나를 업무에 활용해보세요.
- Slack에 분석 결과 공유
- 또는 Notion에서 정보 조회
- MCP 미설정 시: 설정 방법을 조사하고 IT 부서에 요청서 작성

---

## TROUBLESHOOTING

### "MCP 설정이 어려워요"
- Claude Code에 "MCP 설정 방법 알려줘" 요청
- IT 친화적인 동료(피어 버디)와 함께 설정
- #cc-tutor-om-help에 도움 요청

### "API 키가 뭔지 모르겠어요"
- API 키 = 서비스 접속 비밀번호
- Slack, Notion 각 서비스의 개발자 설정에서 발급
- 절대 다른 사람에게 공유하지 않기

### "Slack 메시지 전송이 안 돼요"
- MCP 서버가 제대로 실행 중인지 확인
- Slack 봇의 채널 접근 권한 확인
- API 키가 유효한지 확인

### "회사 보안 정책상 MCP 설치가 안 돼요"
- IT 부서와 협의: 어떤 서비스 연동이 허용되는지 확인
- 허용 범위 내에서만 설정
- MCP 없이도 Claude Code 핵심 기능(파일 처리)은 모두 사용 가능
