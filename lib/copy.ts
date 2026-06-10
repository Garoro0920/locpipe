export type Lang = "ja" | "en";

export const copy = {
  ja: {
    nav: { features: "特徴", pricing: "価格", faq: "FAQ", switch: "English", switchHref: "/en" },
    hero: {
      eyebrow: "FOR INDIE GAME DEVS — UNITY / STEAM",
      h1: "ゲームの翻訳、\nタグも口調も壊さない。",
      sub: "LocPipe は個人・小規模ゲーム開発者のための AI ローカライズパイプライン。Unity Localization の CSV / XLIFF をそのまま取り込み、用語集とキャラ口調を守った AI 下訳を生成。レビューして、無劣化で書き戻します。",
      cta: "早期アクセスに登録（無料）",
      note: "現在クローズドβを準備中。登録いただいた方から順にご案内します。",
    },
    demo: {
      source: "原文",
      target: "訳文 (EN)",
      sourceText: "<color=#ff5544>致命傷</color>を受けた！ HPが{0}減少した。",
      targetText: "Took a <color=#ff5544>fatal wound</color>! HP decreased by {0}.",
      checks: ["タグ保持", "変数 {0} 保持", "口調: 兵士（ぞんざい）"],
    },
    pain: {
      h2: "ローカライズ、後回しにしていませんか？",
      items: [
        {
          title: "予算が合わない",
          body: "翻訳会社は数十万円から。スタジオ向け SaaS は月2〜7万円。個人開発の予算では、そもそも選択肢に入らない。",
        },
        {
          title: "ChatGPT 手作業は破綻する",
          body: "タグが壊れる。キャラの一人称がブレる。数千行のコピペと書き戻しで、リリース前の貴重な時間が溶けていく。",
        },
        {
          title: "市場を取りこぼしている",
          body: "Steam で英語のプレイヤーは約36%。母国語で遊べるゲームはウィッシュリストも売上も伸びやすいことが知られています。",
        },
      ],
    },
    features: {
      h2: "LocPipe がやること",
      items: [
        {
          title: "文脈を理解する AI 下訳",
          body: "ゲーム概要・トーン・用語集・キャラ口調シートを翻訳に反映。「俺」と「私」が混ざらない、固有名詞がブレない下訳を生成します。",
        },
        {
          title: "タグと変数の保護・自動検証",
          body: "<color> などのリッチテキストタグや {0} プレースホルダの欠落を機械チェック。問題のある行は警告フラグつきでレビューに回します。",
        },
        {
          title: "無劣化の往復",
          body: "Unity Localization の CSV / XLIFF、汎用 CSV / JSON に対応。取り込んだ形式のまま書き戻すので、インポートで壊れません。",
        },
        {
          title: "人間レビュー前提のワークフロー",
          body: "対訳テーブルで確認・修正してから書き出し。「AI 下訳＋人間レビュー」の形なので、Steam の AI コンテンツ開示にも対応しやすい設計です。",
        },
      ],
    },
    how: {
      h2: "使い方は3ステップ",
      steps: [
        { title: "アップロード", body: "翻訳ファイル（CSV / XLIFF / JSON）をアップロード。" },
        { title: "文脈を設定して AI 下訳", body: "ゲームの説明・用語集・キャラ口調を登録して翻訳を実行。" },
        { title: "レビューして書き出し", body: "気になる行だけ直して、元の形式でエクスポート。" },
      ],
    },
    pricing: {
      h2: "価格（予定）",
      items: [
        { name: "Free", price: "¥0", desc: "2,000語までお試し" },
        { name: "Indie", price: "¥1,480/月", desc: "個人開発者向け。月間語数上限つき（予価）" },
        { name: "Credits", price: "買い切り", desc: "リリース前に1回だけ使いたい方向けのクレジットパック" },
      ],
      note: "価格は正式リリース時に変更される可能性があります。早期登録者には優待を予定しています。",
    },
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "機械翻訳をそのまま出すツールですか？",
          a: "いいえ。AI 下訳＋人間レビューを前提にしたワークフローです。全自動の品質を約束するのではなく、一貫性の維持とレビューの手間の最小化に焦点を当てています。",
        },
        {
          q: "対応フォーマットは？",
          a: "最初のバージョンでは Unity Localization（CSV / XLIFF）と汎用 CSV / JSON に対応予定です。Unity エディタ拡張も計画しています。",
        },
        {
          q: "対応言語は？",
          a: "英語・日本語・中国語（簡体/繁体）・韓国語・フランス語・ドイツ語・スペイン語などの主要言語から始めます。",
        },
        {
          q: "アップロードしたテキストは AI の学習に使われますか？",
          a: "使われません。商用 API 経由で翻訳処理のためだけに使用され、入力テキストがモデルの学習に利用されることはありません。",
        },
      ],
    },
    form: {
      h2: "早期アクセス登録",
      sub: "クローズドβの案内を受け取る（登録は無料・いつでも解除できます）",
      emailLabel: "メールアドレス",
      emailPlaceholder: "you@example.com",
      projectLabel: "開発中のゲームと翻訳したい言語（任意）",
      projectPlaceholder: "例: Unity製ローグライク。日本語→英語・中国語(簡体)に翻訳したい",
      releaseLabel: "リリース予定（任意）",
      releaseOptions: {
        unselected: "選択してください",
        within_3_months: "3ヶ月以内",
        within_6_months: "6ヶ月以内",
        within_1_year: "1年以内",
        undecided: "未定",
      },
      submit: "登録する",
      submitting: "送信中…",
      success: "登録ありがとうございます！クローズドβの準備ができ次第、ご案内をお送りします。",
      errorEmail: "メールアドレスの形式を確認してください。",
      errorServer: "送信に失敗しました。時間をおいて再度お試しください。",
    },
    footer: "LocPipe — インディーゲームのための AI ローカライズパイプライン",
  },
  en: {
    nav: { features: "Features", pricing: "Pricing", faq: "FAQ", switch: "日本語", switchHref: "/" },
    hero: {
      eyebrow: "FOR INDIE GAME DEVS — UNITY / STEAM",
      h1: "Localize your game\nwithout breaking tags or voice.",
      sub: "LocPipe is an AI localization pipeline built for solo and small indie game developers. Import your Unity Localization CSV / XLIFF as-is, get an AI draft that respects your glossary and character voices, review it, and export back losslessly.",
      cta: "Join the early access list (free)",
      note: "Closed beta in preparation. We'll invite people from the list in order.",
    },
    demo: {
      source: "Source (JA)",
      target: "Target (EN)",
      sourceText: "<color=#ff5544>致命傷</color>を受けた！ HPが{0}減少した。",
      targetText: "Took a <color=#ff5544>fatal wound</color>! HP decreased by {0}.",
      checks: ["tags preserved", "placeholder {0} intact", "voice: soldier (gruff)"],
    },
    pain: {
      h2: "Still postponing localization?",
      items: [
        {
          title: "Pricing doesn't fit",
          body: "Agencies start at thousands of dollars. Studio-grade TMS tools run $50–500/month. Neither fits an indie budget.",
        },
        {
          title: "Hand-feeding ChatGPT breaks down",
          body: "Tags get mangled. Character voices drift. Thousands of rows of copy-paste and write-back eat the weeks before launch.",
        },
        {
          title: "You're leaving players behind",
          body: "Only ~36% of Steam players play in English. Localized games are known to earn more wishlists and revenue.",
        },
      ],
    },
    features: {
      h2: "What LocPipe does",
      items: [
        {
          title: "Context-aware AI drafts",
          body: "Your game's premise, tone, glossary, and per-character voice sheets are injected into the translation. Consistent terms, consistent voices.",
        },
        {
          title: "Tag & placeholder protection",
          body: "Rich-text tags like <color> and placeholders like {0} are checked mechanically. Broken rows get flagged for review.",
        },
        {
          title: "Lossless round-trip",
          body: "Unity Localization CSV / XLIFF, plain CSV and JSON. Export in exactly the format you imported — no broken re-imports.",
        },
        {
          title: "Built for human review",
          body: "Review and fix in a side-by-side table before exporting. The AI-draft + human-review workflow also plays well with Steam's AI content disclosure.",
        },
      ],
    },
    how: {
      h2: "Three steps",
      steps: [
        { title: "Upload", body: "Upload your translation files (CSV / XLIFF / JSON)." },
        { title: "Set context & translate", body: "Register your game's description, glossary, and character voices, then run the AI draft." },
        { title: "Review & export", body: "Fix only the rows that need it, then export in the original format." },
      ],
    },
    pricing: {
      h2: "Pricing (planned)",
      items: [
        { name: "Free", price: "$0", desc: "Try it with up to 2,000 words" },
        { name: "Indie", price: "~$10/mo", desc: "For solo devs. Monthly word cap (tentative)" },
        { name: "Credits", price: "One-time", desc: "Credit packs for a single pre-release localization pass" },
      ],
      note: "Pricing may change at launch. Early subscribers will get a discount.",
    },
    faq: {
      h2: "FAQ",
      items: [
        {
          q: "Is this raw machine translation?",
          a: "No. LocPipe is a workflow built around AI drafts plus human review. We don't promise fully-automatic quality — we focus on consistency and minimizing review effort.",
        },
        {
          q: "Which formats are supported?",
          a: "The first version targets Unity Localization (CSV / XLIFF) and plain CSV / JSON. A Unity editor extension is planned.",
        },
        {
          q: "Which languages?",
          a: "Starting with major languages: English, Japanese, Chinese (Simplified/Traditional), Korean, French, German, and Spanish.",
        },
        {
          q: "Is my text used to train AI models?",
          a: "No. Your text is processed via commercial APIs solely for translation and is not used for model training.",
        },
      ],
    },
    form: {
      h2: "Join the early access list",
      sub: "Get notified when the closed beta opens (free, unsubscribe anytime)",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      projectLabel: "Your game & target languages (optional)",
      projectPlaceholder: "e.g. Unity roguelike, translating EN -> JA / zh-CN",
      releaseLabel: "Planned release (optional)",
      releaseOptions: {
        unselected: "Select…",
        within_3_months: "Within 3 months",
        within_6_months: "Within 6 months",
        within_1_year: "Within a year",
        undecided: "Undecided",
      },
      submit: "Sign up",
      submitting: "Sending…",
      success: "Thanks for signing up! We'll email you when the closed beta is ready.",
      errorEmail: "Please check your email address.",
      errorServer: "Something went wrong. Please try again later.",
    },
    footer: "LocPipe — an AI localization pipeline for indie games",
  },
} as const;
