#!/bin/bash
# cc-tutor-om 학습환경 셋업 스크립트
# 사용법: git clone 후 ./setup.sh 실행

echo "🚀 cc-tutor-om 학습환경을 세팅합니다..."
echo ""

# 1. 글로벌 스킬 설치
echo "📦 글로벌 스킬을 설치합니다..."
npx skills add ai-native-camp/camp-2 --agent claude-code --yes

echo ""
echo "✅ 설치 완료!"
echo ""
echo "다음 단계:"
echo "  1. 이 폴더에서 'claude' 을 입력하여 Claude Code를 시작하세요"
echo "  2. '/cc-tutor-om' 을 입력하면 학습이 시작됩니다"
