// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "1.本調査について",
          "content": "これは、情報の利用状況に関する調査です。本調査への参加はあなたの任意によるものです。"
        },
        {
          "required": true,
          "type": "text",
          "title": "2.本調査の手続き",
          "content": "本調査では、提示された情報を見て、質問に答えていただきます。所要時間は約5分です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "3.潜在的なリスク・苦痛など",
          "content": "調査による多少の疲労は除き、潜在的なリスクや苦痛はありません。また、いつでも自由に調査を中止していただけます(5.参加と中止もご参照ください)。"
        },
        {
          "required": true,
          "type": "text",
          "title": "4.匿名性の確保",
          "content": "本調査によって得られた情報は、法律による開示請求を除き、匿名性が維持されます。匿名性は回答者番号の付与、統計的解析によって保たれます。収集されたデータは、個人が特定できるものとして公表されることはありません。"
        },
        {
          "required": true,
          "type": "text",
          "title": "5.参加と中止",
          "content": "本調査への参加・不参加は自由に選択できます。また参加した場合でも、いつでも、どのような理由でも、途中で調査を中止することができます。もし途中で調査を中止したくなった場合は、「ESCキー」を押した後、ウィンドウを閉じることで調査を中止できます。"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "調査への参加に同意いただけますか？同意いただける方はチェックをお願いします。同意いただけない方は，ESCを押した後，ウィンドウを閉じてください。",
          "options": [
            {
              "label": "上記の説明をよく読み，理解した上で，調査への参加に同意します。",
              "coding": "informedConsent"
            }
          ],
          "name": "esc"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const digits = 10;
const participantID = this.random.range(10**digits, 10**(digits+1));

this.parameters.participantID = participantID;
const id = Number(this.parameters.participantID);

this.state.condition = (id % 4) + 1;

}
      },
      "title": "informedconsent"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "input",
          "attributes": {
            "type": "number",
            "min": "10",
            "max": "100"
          },
          "label": "年齢を記入してください。",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "age"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "title": "情報を得るために用いる各媒体の利用頻度について、以下の選択肢から回答してください。"
        },
        {
          "required": true,
          "type": "radio",
          "label": "テレビ",
          "options": [
            {
              "label": "よく見る",
              "coding": "5"
            },
            {
              "label": "時々見る",
              "coding": "4"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "あまり見ない",
              "coding": "2"
            },
            {
              "label": "全く見ない",
              "coding": "1"
            }
          ],
          "name": "tv"
        },
        {
          "required": true,
          "type": "radio",
          "label": "新聞",
          "options": [
            {
              "label": "よく見る",
              "coding": "5"
            },
            {
              "label": "時々見る",
              "coding": "4"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "あまり見ない",
              "coding": "2"
            },
            {
              "label": "全く見ない",
              "coding": "1"
            }
          ],
          "name": "newspaper"
        },
        {
          "required": true,
          "type": "radio",
          "label": "SNS",
          "options": [
            {
              "label": "よく見る",
              "coding": "5"
            },
            {
              "label": "時々見る",
              "coding": "4"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "あまり見ない",
              "coding": "2"
            },
            {
              "label": "全く見ない",
              "coding": "1"
            }
          ],
          "name": "sns"
        },
        {
          "required": true,
          "type": "radio",
          "label": "ネットニュース、インターネット記事等",
          "options": [
            {
              "label": "よく見る",
              "coding": "5"
            },
            {
              "label": "時々見る",
              "coding": "4"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "あまり見ない",
              "coding": "2"
            },
            {
              "label": "全く見ない",
              "coding": "1"
            }
          ],
          "name": "article"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "quationnaire"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "SNS引用のsequence",
      "skip": "${this.state.condition != 1}",
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "②引用SNS",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 724,
                  "height": 543,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"SNS（引用）②.png\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "テレビ（引用）②.png": "embedded\u002Fa4151267103240adabc517303575ffcdd85aff601b2c42940419d5174f5ba60e.png",
                "SNS（引用）②.png": "embedded\u002Fd93ae08fd681f2302af717b07e225cd2e427e3a4335adfd65a406a7bfb4baa44.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 2,
                  "height": 31.64,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "28",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "image",
                  "left": 0,
                  "top": 63,
                  "angle": 0,
                  "width": 783.36,
                  "height": 522.24,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"Copilot_20260717_125913.png\"] }"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -150,
                  "angle": 0,
                  "width": 689.54,
                  "height": 56.14,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "このネックサポーターの売れ残り状況はどの程度だと思いますか。\n以下の0%~100%の選択肢からいずれか一つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -307.86,
                  "top": 36.46,
                  "angle": 0,
                  "width": 143.99,
                  "height": 212.48,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                },
                {
                  "type": "aoi",
                  "left": -40.58,
                  "top": 31.45,
                  "angle": 0,
                  "width": 129.58,
                  "height": 207.6,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": -169.38,
                  "top": 33.31,
                  "angle": 0,
                  "width": 123.24,
                  "height": 210.24,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": 277.5,
                  "top": 34.79,
                  "angle": 0,
                  "width": 199.28,
                  "height": 213.26,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "aoi",
                  "left": 101.59,
                  "top": 33.51,
                  "angle": 0,
                  "width": 143.06,
                  "height": 207.48,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "信頼度②.png": "embedded\u002Ff30f694e6e697be484bc7d94a5f61710e1d93ff3139288a7b98ddc4de6492ab0.png",
                "Copilot_20260717_125913.png": "embedded\u002F280ad7ecd1f127aaa5a81679030c6e72b129cb57ee7e433f45a10aecffac9764.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 499.5,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\nネックサポーターを買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "③引用SNS",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 737.28,
                  "height": 491.52,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"テレビ③.png\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "SNS③.png": "embedded\u002F6936c6d90bef7cad6532d418044c0dcdecde3555f089f76de441317ed205c58f.png",
                "SNS（引用）③.png": "embedded\u002F7760f6fa091e543eb920662b4c4df26caa1b41d28a6cf4c4378426aa1841de76.png",
                "テレビ③.png": "embedded\u002F0badba32c39a92e09c6f3dacb1fa8a2414d00d0c586c59f173d86d5e5796ce1f.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 63,
                  "angle": 0,
                  "width": 716.76,
                  "height": 260.64,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"信頼度③.png\"] }"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -190,
                  "angle": 0,
                  "width": 735.54,
                  "height": 25.99,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "このドーナツ屋のドーナツの今日の行列はどのくらいだと思いますか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -150,
                  "angle": 0,
                  "width": 508.53,
                  "height": 25.99,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "以下の①~⑤のいずれか1つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -280.85,
                  "top": 57.82,
                  "angle": 0,
                  "width": 134.08,
                  "height": 237.41,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                },
                {
                  "type": "aoi",
                  "left": 0.03,
                  "top": 62.04,
                  "angle": 0,
                  "width": 129.16,
                  "height": 244.25,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": -138.8,
                  "top": 62.67,
                  "angle": 0,
                  "width": 132.02,
                  "height": 243.34,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": 280.6,
                  "top": 63.69,
                  "angle": 0,
                  "width": 133.16,
                  "height": 241.68,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "aoi",
                  "left": 140.04,
                  "top": 61.63,
                  "angle": 0,
                  "width": 136.25,
                  "height": 245.17,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "信頼度③.png": "embedded\u002Fabc590008a135ab89e7e2d1005b2531207434775153471b95e8d1d733c35a50e.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 399.5,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\nドーナツを買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "①引用SNS",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 724,
                  "height": 543,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"ChatGPT Image 2026年7月17日 16_15_24.png\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "テレビ①.jpg": "embedded\u002F086db3e70f3a9440d82a7551ecc2483d9fd01dd819f87114033439be941377ce.jpg",
                "テレビ（引用）①.jpg": "embedded\u002Ffb28ab229a90efa7b6f63c65c33f9143df9309d7fe30fd36e45b2c9b7dff888b.jpg",
                "SNS（引用）①.png": "embedded\u002Fe48b7742b49ef09b4c0a6ce6efb474e2beb586697fa8186aea54944987c4bb59.png",
                "ChatGPT Image 2026年7月17日 16_15_24.png": "embedded\u002F61f0e6b22b2feb31d358f7670259435929c67f755711c310875eceb08f336f9f.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 75,
                  "angle": 0,
                  "width": 691.74,
                  "height": 376.98,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"信頼度①.png\"] }"
                },
                {
                  "type": "aoi",
                  "left": -277.36,
                  "top": 74.2,
                  "angle": 0,
                  "width": 133.11,
                  "height": 379.86,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                },
                {
                  "type": "aoi",
                  "left": -139.49,
                  "top": 74.36,
                  "angle": 0,
                  "width": 135.33,
                  "height": 378.61,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": 0.12,
                  "top": 75.48,
                  "angle": 0,
                  "width": 134.12,
                  "height": 378.31,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": 138.18,
                  "top": 75.17,
                  "angle": 0,
                  "width": 136.01,
                  "height": 378.67,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                },
                {
                  "type": "aoi",
                  "left": 278.1,
                  "top": 76.23,
                  "angle": 0,
                  "width": 136.12,
                  "height": 378.55,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -175,
                  "angle": 0,
                  "width": 712.31,
                  "height": 56.14,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "このトイレットペーパーの売れ残り状況はどの程度だと思いますか。\n以下の0%~100%の選択肢からいずれか一つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "logo_loading_2x.png": "embedded\u002F5a9834ee64e1fb2c0559cb325b003788c1a35e9a73f713af0e6e4cdba8c9e4db.png",
                "logo_drive_2026_color_1x_web_512dp.png": "embedded\u002F90bc322c6b447b75d726dbdc115c6c23f3258f4ef1adefea7914752e890ca5df.png",
                "信頼度①.png": "embedded\u002F1f91037beb564e34ce8734be48c7196dd148357919d4eaf5f39f96375966715e.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 524.25,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\nトイレットペーパーを買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "④引用SNS",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 752.96,
                  "height": 564.72,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"SNS（引用）④.png\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "テレビ④.png": "embedded\u002F19ccbd9d8ad4717919feb11f5d1466e8d8804f9e0b1e684f3aa7094cb40ade34.png",
                "テレビ（引用）④.png": "embedded\u002F3a562e4ab7e87c0e24ae9c466dba189d392732eac031c9f239e0bf87d2507add.png",
                "SNS（引用）④.png": "embedded\u002F3d32e503fc695d6efa5eaf81a87c4fd5a89546868a74fd561c981e2926953348.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "label": "この旅行券について詳しく調べようと思いましたか。",
                  "options": [
                    {
                      "label": "とても思った",
                      "coding": "5"
                    },
                    {
                      "label": "少し思った",
                      "coding": "4"
                    },
                    {
                      "label": "どちらともいえない",
                      "coding": "3"
                    },
                    {
                      "label": "あまり思わなかった",
                      "coding": "2"
                    },
                    {
                      "label": "全く思わなかった",
                      "coding": "1"
                    }
                  ],
                  "name": "travelticket"
                },
                {
                  "required": true,
                  "type": "radio",
                  "options": [],
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -75,
                  "angle": 0,
                  "width": 374.5,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\n旅行券を買いたいと思いますか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "⑤引用SNS",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 733.12,
                  "height": 488.93999999999994,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"SNS(引用)⑤.jpg\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "テレビ⑤.png": "embedded\u002Faa8ef748e6d81afda6d1499d79cd070f9c9f05d5609e0ea397da54cc4fac5611.png",
                "テレビ(引用)⑤.png": "embedded\u002F997c0b7b533e4e33228a0abbedc4272ba28efe539d0d45cce16c6d17b82613c7.png",
                "SNS(引用)⑤.jpg": "embedded\u002F6d490193d6e59ed5e9009b63bc7839ad9fce3b94dbb55bd42a65de2b12c7db9d.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 75,
                  "angle": 0,
                  "width": 785.8399999999999,
                  "height": 479.91,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"信頼度⑤.png\"] }"
                },
                {
                  "type": "aoi",
                  "left": 0.08,
                  "top": 41.21,
                  "angle": 0,
                  "width": 149.01,
                  "height": 287.04,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": 153.45,
                  "top": 44.13,
                  "angle": 0,
                  "width": 148.75,
                  "height": 294.07,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                },
                {
                  "type": "aoi",
                  "left": 306.11,
                  "top": 44.69,
                  "angle": 0,
                  "width": 147.99,
                  "height": 295.05,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "aoi",
                  "left": -153.4,
                  "top": 45.13,
                  "angle": 0,
                  "width": 148.99,
                  "height": 294.07,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": -306.38,
                  "top": 45.25,
                  "angle": 0,
                  "width": 146.98,
                  "height": 292.04,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -175,
                  "angle": 0,
                  "width": 681.19,
                  "height": 56.14,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "この枕の売れ残り状況はどの程度だと思いますか。\n以下の0%~100%の選択肢からいずれか一つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ⑤.png": "embedded\u002Faa8ef748e6d81afda6d1499d79cd070f9c9f05d5609e0ea397da54cc4fac5611.png",
                "信頼度⑤.png": "embedded\u002F540914a31008b7b797cbe8bfd1484b3dcd550355a364c08107a92addb6261f12.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 348.75,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\n枕を買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "⑥引用SNS",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": -25,
                  "angle": 0,
                  "width": 675.84,
                  "height": 450.56,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"SNS⑥.JPG\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "テレビ(引用)⑥.JPG": "embedded\u002F951b1dbf877080bb3cb36aa5be254afd5cb090da516edd0fb455369368b71c87.JPG",
                "SNS⑥.JPG": "embedded\u002F4a8ac5bf0dc6948f84e27f4c89a2f95cc9666c727961bafec8ebf8e7149fb2e3.JPG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 75,
                  "angle": 0,
                  "width": 727.99,
                  "height": 399.46999999999997,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"信頼度⑥.png\"] }"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -190,
                  "angle": 0,
                  "width": 639.6,
                  "height": 48.82,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "この詰め替え用シャンプーの売れ行き状況はどの程度だと思いますか。\n以下の0%~100%の選択肢からいずれか一つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "20",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -2.88,
                  "top": 71.15,
                  "angle": 0,
                  "width": 140.06,
                  "height": 384.3,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": 287.54,
                  "top": 70.81,
                  "angle": 0,
                  "width": 141.11,
                  "height": 384.41,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "aoi",
                  "left": 142.2,
                  "top": 70.28,
                  "angle": 0,
                  "width": 140.22,
                  "height": 384.42,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                },
                {
                  "type": "aoi",
                  "left": -145.9,
                  "top": 70.53,
                  "angle": 0,
                  "width": 136.13,
                  "height": 382.58,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": -291.37,
                  "top": 70.46,
                  "angle": 0,
                  "width": 139.06,
                  "height": 382.55,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "信頼度⑥.png": "embedded\u002Faa5edf46b6cb0bdf5664d6a13110ce597622250338ca7596d990b2f16aa07f8e.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 549.5,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\n詰め替え用シャンプーを買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "テレビのSequence",
      "skip": "${this.state.condition != 2}",
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "②テレビ",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 10.93,
                  "top": 0,
                  "angle": 0,
                  "width": 752.4,
                  "height": 423.45,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"テレビ②.png\"] }",
                  "autoScale": "width"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 2,
                  "height": 31.64,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "28",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "image",
                  "left": 0,
                  "top": 63,
                  "angle": 0,
                  "width": 783.36,
                  "height": 522.24,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"Copilot_20260717_125913.png\"] }"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -150,
                  "angle": 0,
                  "width": 689.54,
                  "height": 56.14,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "このネックサポーターの売れ残り状況はどの程度だと思いますか。\n以下の0%~100%の選択肢からいずれか一つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -307.86,
                  "top": 36.46,
                  "angle": 0,
                  "width": 143.99,
                  "height": 212.48,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                },
                {
                  "type": "aoi",
                  "left": -40.58,
                  "top": 31.45,
                  "angle": 0,
                  "width": 129.58,
                  "height": 207.6,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": -169.38,
                  "top": 33.31,
                  "angle": 0,
                  "width": 123.24,
                  "height": 210.24,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": 277.5,
                  "top": 34.79,
                  "angle": 0,
                  "width": 199.28,
                  "height": 213.26,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "aoi",
                  "left": 101.59,
                  "top": 33.51,
                  "angle": 0,
                  "width": 143.06,
                  "height": 207.48,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "信頼度②.png": "embedded\u002Ff30f694e6e697be484bc7d94a5f61710e1d93ff3139288a7b98ddc4de6492ab0.png",
                "Copilot_20260717_125913.png": "embedded\u002F280ad7ecd1f127aaa5a81679030c6e72b129cb57ee7e433f45a10aecffac9764.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 499.5,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\nネックサポーターを買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "③テレビ",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 680.56,
                  "height": 510.41999999999996,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"SNS③.png\"] }",
                  "autoScale": false
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "SNS③.png": "embedded\u002F6936c6d90bef7cad6532d418044c0dcdecde3555f089f76de441317ed205c58f.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 63,
                  "angle": 0,
                  "width": 716.76,
                  "height": 260.64,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"信頼度③.png\"] }"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -190,
                  "angle": 0,
                  "width": 735.54,
                  "height": 25.99,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "このドーナツ屋のドーナツの今日の行列はどのくらいだと思いますか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -150,
                  "angle": 0,
                  "width": 508.53,
                  "height": 25.99,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "以下の①~⑤のいずれか1つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -280.85,
                  "top": 57.82,
                  "angle": 0,
                  "width": 134.08,
                  "height": 237.41,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                },
                {
                  "type": "aoi",
                  "left": 0.03,
                  "top": 62.04,
                  "angle": 0,
                  "width": 129.16,
                  "height": 244.25,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": -138.8,
                  "top": 62.67,
                  "angle": 0,
                  "width": 132.02,
                  "height": 243.34,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": 280.6,
                  "top": 63.69,
                  "angle": 0,
                  "width": 133.16,
                  "height": 241.68,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "aoi",
                  "left": 140.04,
                  "top": 61.63,
                  "angle": 0,
                  "width": 136.25,
                  "height": 245.17,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "信頼度③.png": "embedded\u002Fabc590008a135ab89e7e2d1005b2531207434775153471b95e8d1d733c35a50e.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 399.5,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\nドーナツを買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "①テレビ",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 783.36,
                  "height": 522.24,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"テレビ①.jpg\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "テレビ①.jpg": "embedded\u002F086db3e70f3a9440d82a7551ecc2483d9fd01dd819f87114033439be941377ce.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 75,
                  "angle": 0,
                  "width": 691.74,
                  "height": 376.98,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"信頼度①.png\"] }"
                },
                {
                  "type": "aoi",
                  "left": -277.36,
                  "top": 74.2,
                  "angle": 0,
                  "width": 133.11,
                  "height": 379.86,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                },
                {
                  "type": "aoi",
                  "left": -139.49,
                  "top": 74.36,
                  "angle": 0,
                  "width": 135.33,
                  "height": 378.61,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": 0.12,
                  "top": 75.48,
                  "angle": 0,
                  "width": 134.12,
                  "height": 378.31,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": 138.18,
                  "top": 75.17,
                  "angle": 0,
                  "width": 136.01,
                  "height": 378.67,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                },
                {
                  "type": "aoi",
                  "left": 278.1,
                  "top": 76.23,
                  "angle": 0,
                  "width": 136.12,
                  "height": 378.55,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -175,
                  "angle": 0,
                  "width": 712.31,
                  "height": 56.14,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "このトイレットペーパーの売れ残り状況はどの程度だと思いますか。\n以下の0%~100%の選択肢からいずれか一つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "logo_loading_2x.png": "embedded\u002F5a9834ee64e1fb2c0559cb325b003788c1a35e9a73f713af0e6e4cdba8c9e4db.png",
                "logo_drive_2026_color_1x_web_512dp.png": "embedded\u002F90bc322c6b447b75d726dbdc115c6c23f3258f4ef1adefea7914752e890ca5df.png",
                "信頼度①.png": "embedded\u002F1f91037beb564e34ce8734be48c7196dd148357919d4eaf5f39f96375966715e.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 524.25,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\nトイレットペーパーを買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "④テレビ",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 709.52,
                  "height": 532.14,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"テレビ④.png\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "テレビ④.png": "embedded\u002F19ccbd9d8ad4717919feb11f5d1466e8d8804f9e0b1e684f3aa7094cb40ade34.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "label": "この旅行券について詳しく調べようと思いましたか。",
                  "options": [
                    {
                      "label": "とても思った",
                      "coding": "5"
                    },
                    {
                      "label": "少し思った",
                      "coding": "4"
                    },
                    {
                      "label": "どちらともいえない",
                      "coding": "3"
                    },
                    {
                      "label": "あまり思わなかった",
                      "coding": "2"
                    },
                    {
                      "label": "全く思わなかった",
                      "coding": "1"
                    }
                  ],
                  "name": "travelticket"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -75,
                  "angle": 0,
                  "width": 374.5,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\n旅行券を買いたいと思いますか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "⑤テレビ",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": -10.71,
                  "angle": 0,
                  "width": 706.5600000000001,
                  "height": 471.04,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"テレビ⑤.png\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "テレビ⑤.png": "embedded\u002Faa8ef748e6d81afda6d1499d79cd070f9c9f05d5609e0ea397da54cc4fac5611.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 75,
                  "angle": 0,
                  "width": 785.8399999999999,
                  "height": 479.91,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"信頼度⑤.png\"] }"
                },
                {
                  "type": "aoi",
                  "left": 0.08,
                  "top": 41.21,
                  "angle": 0,
                  "width": 149.01,
                  "height": 287.04,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": 153.45,
                  "top": 44.13,
                  "angle": 0,
                  "width": 148.75,
                  "height": 294.07,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                },
                {
                  "type": "aoi",
                  "left": 306.11,
                  "top": 44.69,
                  "angle": 0,
                  "width": 147.99,
                  "height": 295.05,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "aoi",
                  "left": -153.4,
                  "top": 45.13,
                  "angle": 0,
                  "width": 148.99,
                  "height": 294.07,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": -306.38,
                  "top": 45.25,
                  "angle": 0,
                  "width": 146.98,
                  "height": 292.04,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -175,
                  "angle": 0,
                  "width": 681.19,
                  "height": 56.14,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "この枕の売れ残り状況はどの程度だと思いますか。\n以下の0%~100%の選択肢からいずれか一つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ⑤.png": "embedded\u002Faa8ef748e6d81afda6d1499d79cd070f9c9f05d5609e0ea397da54cc4fac5611.png",
                "信頼度⑤.png": "embedded\u002F540914a31008b7b797cbe8bfd1484b3dcd550355a364c08107a92addb6261f12.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 348.75,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\n枕を買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "⑥テレビ",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": -25,
                  "top": 10.65,
                  "angle": 0,
                  "width": 658.9399999999999,
                  "height": 527.3399999999999,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"テレビ(引用)⑥.JPG\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "テレビ(引用)⑥.JPG": "embedded\u002F951b1dbf877080bb3cb36aa5be254afd5cb090da516edd0fb455369368b71c87.JPG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 75,
                  "angle": 0,
                  "width": 727.99,
                  "height": 399.46999999999997,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"信頼度⑥.png\"] }"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -190,
                  "angle": 0,
                  "width": 639.6,
                  "height": 48.82,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "この詰め替え用シャンプーの売れ行き状況はどの程度だと思いますか。\n以下の0%~100%の選択肢からいずれか一つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "20",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -2.88,
                  "top": 71.15,
                  "angle": 0,
                  "width": 140.06,
                  "height": 384.3,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": 287.54,
                  "top": 70.81,
                  "angle": 0,
                  "width": 141.11,
                  "height": 384.41,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "aoi",
                  "left": 142.2,
                  "top": 70.28,
                  "angle": 0,
                  "width": 140.22,
                  "height": 384.42,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                },
                {
                  "type": "aoi",
                  "left": -145.9,
                  "top": 70.53,
                  "angle": 0,
                  "width": 136.13,
                  "height": 382.58,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": -291.37,
                  "top": 70.46,
                  "angle": 0,
                  "width": 139.06,
                  "height": 382.55,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "信頼度⑥.png": "embedded\u002Faa5edf46b6cb0bdf5664d6a13110ce597622250338ca7596d990b2f16aa07f8e.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 549.5,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\n詰め替え用シャンプーを買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "SNSのSequence",
      "skip": "${this.state.condition != 3}",
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "②SNS",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 25,
                  "angle": 0,
                  "width": 651.6,
                  "height": 488.7,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"SNS②.png\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "SNS②.png": "embedded\u002F6aca8d8fe3aac111b42e06ded3f3e3f8fbafb6146a4cb7616bc885f2f2c0121b.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 2,
                  "height": 31.64,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "28",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "image",
                  "left": 0,
                  "top": 63,
                  "angle": 0,
                  "width": 783.36,
                  "height": 522.24,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"Copilot_20260717_125913.png\"] }"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -150,
                  "angle": 0,
                  "width": 689.54,
                  "height": 56.14,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "このネックサポーターの売れ残り状況はどの程度だと思いますか。\n以下の0%~100%の選択肢からいずれか一つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -307.86,
                  "top": 36.46,
                  "angle": 0,
                  "width": 143.99,
                  "height": 212.48,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                },
                {
                  "type": "aoi",
                  "left": -40.58,
                  "top": 31.45,
                  "angle": 0,
                  "width": 129.58,
                  "height": 207.6,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": -169.38,
                  "top": 33.31,
                  "angle": 0,
                  "width": 123.24,
                  "height": 210.24,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": 277.5,
                  "top": 34.79,
                  "angle": 0,
                  "width": 199.28,
                  "height": 213.26,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "aoi",
                  "left": 101.59,
                  "top": 33.51,
                  "angle": 0,
                  "width": 143.06,
                  "height": 207.48,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "信頼度②.png": "embedded\u002Ff30f694e6e697be484bc7d94a5f61710e1d93ff3139288a7b98ddc4de6492ab0.png",
                "Copilot_20260717_125913.png": "embedded\u002F280ad7ecd1f127aaa5a81679030c6e72b129cb57ee7e433f45a10aecffac9764.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 499.5,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\nネックサポーターを買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "③SNS",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": -15,
                  "top": 0,
                  "angle": 0,
                  "width": 680.56,
                  "height": 510.41999999999996,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"テレビ（引用）③.png\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "SNS③.png": "embedded\u002F6936c6d90bef7cad6532d418044c0dcdecde3555f089f76de441317ed205c58f.png",
                "テレビ（引用）③.png": "embedded\u002F51ff135f1addb393c204670bbaa9ad00db81eeae1368ac7aefb94c37771c2851.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 63,
                  "angle": 0,
                  "width": 716.76,
                  "height": 260.64,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"信頼度③.png\"] }"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -190,
                  "angle": 0,
                  "width": 735.54,
                  "height": 25.99,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "このドーナツ屋のドーナツの今日の行列はどのくらいだと思いますか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -150,
                  "angle": 0,
                  "width": 508.53,
                  "height": 25.99,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "以下の①~⑤のいずれか1つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -280.85,
                  "top": 57.82,
                  "angle": 0,
                  "width": 134.08,
                  "height": 237.41,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                },
                {
                  "type": "aoi",
                  "left": 0.03,
                  "top": 62.04,
                  "angle": 0,
                  "width": 129.16,
                  "height": 244.25,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": -138.8,
                  "top": 62.67,
                  "angle": 0,
                  "width": 132.02,
                  "height": 243.34,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": 280.6,
                  "top": 63.69,
                  "angle": 0,
                  "width": 133.16,
                  "height": 241.68,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "aoi",
                  "left": 140.04,
                  "top": 61.63,
                  "angle": 0,
                  "width": 136.25,
                  "height": 245.17,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "信頼度③.png": "embedded\u002Fabc590008a135ab89e7e2d1005b2531207434775153471b95e8d1d733c35a50e.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 399.5,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\nドーナツを買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "①SNS",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": -23.45,
                  "top": -11.34,
                  "angle": 0,
                  "width": 593.68,
                  "height": 445.26,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"SNS①.png\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "テレビ①.jpg": "embedded\u002F086db3e70f3a9440d82a7551ecc2483d9fd01dd819f87114033439be941377ce.jpg",
                "SNS①.png": "embedded\u002F1d1b5edecc06a64995ba5cee1016bcf7287c879b4fb70857faa19cd572b440a7.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 75,
                  "angle": 0,
                  "width": 691.74,
                  "height": 376.98,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"信頼度①.png\"] }"
                },
                {
                  "type": "aoi",
                  "left": -277.36,
                  "top": 74.2,
                  "angle": 0,
                  "width": 133.11,
                  "height": 379.86,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                },
                {
                  "type": "aoi",
                  "left": -139.49,
                  "top": 74.36,
                  "angle": 0,
                  "width": 135.33,
                  "height": 378.61,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": 0.12,
                  "top": 75.48,
                  "angle": 0,
                  "width": 134.12,
                  "height": 378.31,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": 138.18,
                  "top": 75.17,
                  "angle": 0,
                  "width": 136.01,
                  "height": 378.67,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                },
                {
                  "type": "aoi",
                  "left": 278.1,
                  "top": 76.23,
                  "angle": 0,
                  "width": 136.12,
                  "height": 378.55,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -175,
                  "angle": 0,
                  "width": 712.31,
                  "height": 56.14,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "このトイレットペーパーの売れ残り状況はどの程度だと思いますか。\n以下の0%~100%の選択肢からいずれか一つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "logo_loading_2x.png": "embedded\u002F5a9834ee64e1fb2c0559cb325b003788c1a35e9a73f713af0e6e4cdba8c9e4db.png",
                "logo_drive_2026_color_1x_web_512dp.png": "embedded\u002F90bc322c6b447b75d726dbdc115c6c23f3258f4ef1adefea7914752e890ca5df.png",
                "信頼度①.png": "embedded\u002F1f91037beb564e34ce8734be48c7196dd148357919d4eaf5f39f96375966715e.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 524.25,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\nトイレットペーパーを買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "④SNS",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 25,
                  "angle": 0,
                  "width": 680.56,
                  "height": 510.41999999999996,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"SNS④.png\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "テレビ④.png": "embedded\u002F19ccbd9d8ad4717919feb11f5d1466e8d8804f9e0b1e684f3aa7094cb40ade34.png",
                "SNS④.png": "embedded\u002F5013c6b87961093564329cf0dbbe50590e0e080d1abd61433c92f537625e84f3.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "label": "この旅行券について詳しく調べようと思いましたか。",
                  "options": [
                    {
                      "label": "とても思った",
                      "coding": "5"
                    },
                    {
                      "label": "少し思った",
                      "coding": "4"
                    },
                    {
                      "label": "どちらともいえない",
                      "coding": "3"
                    },
                    {
                      "label": "あまり思わなかった",
                      "coding": "2"
                    },
                    {
                      "label": "全く思わなかった",
                      "coding": "1"
                    }
                  ],
                  "name": "travelticket"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -75,
                  "angle": 0,
                  "width": 374.5,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\n旅行券を買いたいと思いますか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "⑤SNS",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 10.18,
                  "angle": 0,
                  "width": 495.04,
                  "height": 424.06,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"SNS⑤.png\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "テレビ⑤.png": "embedded\u002Faa8ef748e6d81afda6d1499d79cd070f9c9f05d5609e0ea397da54cc4fac5611.png",
                "SNS⑤.png": "embedded\u002Ffa921d252d70505c6eecf27a288137a6c913d8e59276b96a6944ea6c69de6271.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 75,
                  "angle": 0,
                  "width": 785.8399999999999,
                  "height": 479.91,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"信頼度⑤.png\"] }"
                },
                {
                  "type": "aoi",
                  "left": 0.08,
                  "top": 41.21,
                  "angle": 0,
                  "width": 149.01,
                  "height": 287.04,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": 153.45,
                  "top": 44.13,
                  "angle": 0,
                  "width": 148.75,
                  "height": 294.07,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                },
                {
                  "type": "aoi",
                  "left": 306.11,
                  "top": 44.69,
                  "angle": 0,
                  "width": 147.99,
                  "height": 295.05,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "aoi",
                  "left": -153.4,
                  "top": 45.13,
                  "angle": 0,
                  "width": 148.99,
                  "height": 294.07,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": -306.38,
                  "top": 45.25,
                  "angle": 0,
                  "width": 146.98,
                  "height": 292.04,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -175,
                  "angle": 0,
                  "width": 681.19,
                  "height": 56.14,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "この枕の売れ残り状況はどの程度だと思いますか。\n以下の0%~100%の選択肢からいずれか一つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ⑤.png": "embedded\u002Faa8ef748e6d81afda6d1499d79cd070f9c9f05d5609e0ea397da54cc4fac5611.png",
                "信頼度⑤.png": "embedded\u002F540914a31008b7b797cbe8bfd1484b3dcd550355a364c08107a92addb6261f12.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 348.75,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\n枕を買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "⑥SNS",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": -25,
                  "top": 25,
                  "angle": 0,
                  "width": 630.9,
                  "height": 504.90000000000003,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"テレビ⑥.JPG\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "テレビ(引用)⑥.JPG": "embedded\u002F951b1dbf877080bb3cb36aa5be254afd5cb090da516edd0fb455369368b71c87.JPG",
                "テレビ⑥.JPG": "embedded\u002Fbfdfdf80e05a98c6b9cf0dffbf082cc4f7f4fa1baf2b074b46e75d6856cec9a5.JPG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 75,
                  "angle": 0,
                  "width": 727.99,
                  "height": 399.46999999999997,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"信頼度⑥.png\"] }"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -190,
                  "angle": 0,
                  "width": 639.6,
                  "height": 48.82,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "この詰め替え用シャンプーの売れ行き状況はどの程度だと思いますか。\n以下の0%~100%の選択肢からいずれか一つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "20",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -2.88,
                  "top": 71.15,
                  "angle": 0,
                  "width": 140.06,
                  "height": 384.3,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": 287.54,
                  "top": 70.81,
                  "angle": 0,
                  "width": 141.11,
                  "height": 384.41,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "aoi",
                  "left": 142.2,
                  "top": 70.28,
                  "angle": 0,
                  "width": 140.22,
                  "height": 384.42,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                },
                {
                  "type": "aoi",
                  "left": -145.9,
                  "top": 70.53,
                  "angle": 0,
                  "width": 136.13,
                  "height": 382.58,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": -291.37,
                  "top": 70.46,
                  "angle": 0,
                  "width": 139.06,
                  "height": 382.55,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "信頼度⑥.png": "embedded\u002Faa5edf46b6cb0bdf5664d6a13110ce597622250338ca7596d990b2f16aa07f8e.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 549.5,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\n詰め替え用シャンプーを買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "引用テレビのSequence",
      "skip": "${this.state.condition != 4}",
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "2",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 10.39,
                  "angle": 0,
                  "width": 752.96,
                  "height": 564.72,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"テレビ（引用）②.png\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "テレビ（引用）②.png": "embedded\u002Fa4151267103240adabc517303575ffcdd85aff601b2c42940419d5174f5ba60e.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 2,
                  "height": 31.64,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "28",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "image",
                  "left": 0,
                  "top": 63,
                  "angle": 0,
                  "width": 783.36,
                  "height": 522.24,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"Copilot_20260717_125913.png\"] }"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -150,
                  "angle": 0,
                  "width": 689.54,
                  "height": 56.14,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "このネックサポーターの売れ残り状況はどの程度だと思いますか。\n以下の0%~100%の選択肢からいずれか一つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -307.86,
                  "top": 36.46,
                  "angle": 0,
                  "width": 143.99,
                  "height": 212.48,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                },
                {
                  "type": "aoi",
                  "left": -40.58,
                  "top": 31.45,
                  "angle": 0,
                  "width": 129.58,
                  "height": 207.6,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": -169.38,
                  "top": 33.31,
                  "angle": 0,
                  "width": 123.24,
                  "height": 210.24,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": 277.5,
                  "top": 34.79,
                  "angle": 0,
                  "width": 199.28,
                  "height": 213.26,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "aoi",
                  "left": 101.59,
                  "top": 33.51,
                  "angle": 0,
                  "width": 143.06,
                  "height": 207.48,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "信頼度②.png": "embedded\u002Ff30f694e6e697be484bc7d94a5f61710e1d93ff3139288a7b98ddc4de6492ab0.png",
                "Copilot_20260717_125913.png": "embedded\u002F280ad7ecd1f127aaa5a81679030c6e72b129cb57ee7e433f45a10aecffac9764.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 499.5,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\nネックサポーターを買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "3",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 680.56,
                  "height": 510.41999999999996,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"SNS③.png\"] }",
                  "autoScale": false
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "SNS③.png": "embedded\u002F6936c6d90bef7cad6532d418044c0dcdecde3555f089f76de441317ed205c58f.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 63,
                  "angle": 0,
                  "width": 716.76,
                  "height": 260.64,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"信頼度③.png\"] }"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -190,
                  "angle": 0,
                  "width": 735.54,
                  "height": 25.99,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "このドーナツ屋のドーナツの今日の行列はどのくらいだと思いますか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -150,
                  "angle": 0,
                  "width": 508.53,
                  "height": 25.99,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "以下の①~⑤のいずれか1つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -280.85,
                  "top": 57.82,
                  "angle": 0,
                  "width": 134.08,
                  "height": 237.41,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                },
                {
                  "type": "aoi",
                  "left": 0.03,
                  "top": 62.04,
                  "angle": 0,
                  "width": 129.16,
                  "height": 244.25,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": -138.8,
                  "top": 62.67,
                  "angle": 0,
                  "width": 132.02,
                  "height": 243.34,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": 280.6,
                  "top": 63.69,
                  "angle": 0,
                  "width": 133.16,
                  "height": 241.68,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "aoi",
                  "left": 140.04,
                  "top": 61.63,
                  "angle": 0,
                  "width": 136.25,
                  "height": 245.17,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "信頼度③.png": "embedded\u002Fabc590008a135ab89e7e2d1005b2531207434775153471b95e8d1d733c35a50e.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 399.5,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\nドーナツを買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "1",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 783.36,
                  "height": 522.24,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"テレビ①.jpg\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "テレビ①.jpg": "embedded\u002F086db3e70f3a9440d82a7551ecc2483d9fd01dd819f87114033439be941377ce.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 75,
                  "angle": 0,
                  "width": 691.74,
                  "height": 376.98,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"信頼度①.png\"] }"
                },
                {
                  "type": "aoi",
                  "left": -277.36,
                  "top": 74.2,
                  "angle": 0,
                  "width": 133.11,
                  "height": 379.86,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                },
                {
                  "type": "aoi",
                  "left": -139.49,
                  "top": 74.36,
                  "angle": 0,
                  "width": 135.33,
                  "height": 378.61,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": 0.12,
                  "top": 75.48,
                  "angle": 0,
                  "width": 134.12,
                  "height": 378.31,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": 138.18,
                  "top": 75.17,
                  "angle": 0,
                  "width": 136.01,
                  "height": 378.67,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                },
                {
                  "type": "aoi",
                  "left": 278.1,
                  "top": 76.23,
                  "angle": 0,
                  "width": 136.12,
                  "height": 378.55,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -175,
                  "angle": 0,
                  "width": 712.31,
                  "height": 56.14,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "このトイレットペーパーの売れ残り状況はどの程度だと思いますか。\n以下の0%~100%の選択肢からいずれか一つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "logo_loading_2x.png": "embedded\u002F5a9834ee64e1fb2c0559cb325b003788c1a35e9a73f713af0e6e4cdba8c9e4db.png",
                "logo_drive_2026_color_1x_web_512dp.png": "embedded\u002F90bc322c6b447b75d726dbdc115c6c23f3258f4ef1adefea7914752e890ca5df.png",
                "信頼度①.png": "embedded\u002F1f91037beb564e34ce8734be48c7196dd148357919d4eaf5f39f96375966715e.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 524.25,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\nトイレットペーパーを買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "4",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 12.46,
                  "angle": 0,
                  "width": 738.48,
                  "height": 553.86,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"テレビ（引用）④.png\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "テレビ④.png": "embedded\u002F19ccbd9d8ad4717919feb11f5d1466e8d8804f9e0b1e684f3aa7094cb40ade34.png",
                "テレビ（引用）④.png": "embedded\u002F3a562e4ab7e87c0e24ae9c466dba189d392732eac031c9f239e0bf87d2507add.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "label": "この旅行券について詳しく調べようと思いましたか。",
                  "options": [
                    {
                      "label": "とても思った",
                      "coding": "5"
                    },
                    {
                      "label": "少し思った",
                      "coding": "4"
                    },
                    {
                      "label": "どちらともいえない",
                      "coding": "3"
                    },
                    {
                      "label": "あまり思わなかった",
                      "coding": "2"
                    },
                    {
                      "label": "全く思わなかった",
                      "coding": "1"
                    }
                  ],
                  "name": "travelticket"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -75,
                  "angle": 0,
                  "width": 374.5,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\n旅行券を買いたいと思いますか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "5",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 10,
                  "angle": 0,
                  "width": 724,
                  "height": 543,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"テレビ(引用)⑤.png\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "テレビ⑤.png": "embedded\u002Faa8ef748e6d81afda6d1499d79cd070f9c9f05d5609e0ea397da54cc4fac5611.png",
                "テレビ(引用)⑤.png": "embedded\u002F997c0b7b533e4e33228a0abbedc4272ba28efe539d0d45cce16c6d17b82613c7.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 75,
                  "angle": 0,
                  "width": 785.8399999999999,
                  "height": 479.91,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"信頼度⑤.png\"] }"
                },
                {
                  "type": "aoi",
                  "left": 0.08,
                  "top": 41.21,
                  "angle": 0,
                  "width": 149.01,
                  "height": 287.04,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": 153.45,
                  "top": 44.13,
                  "angle": 0,
                  "width": 148.75,
                  "height": 294.07,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                },
                {
                  "type": "aoi",
                  "left": 306.11,
                  "top": 44.69,
                  "angle": 0,
                  "width": 147.99,
                  "height": 295.05,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "aoi",
                  "left": -153.4,
                  "top": 45.13,
                  "angle": 0,
                  "width": 148.99,
                  "height": 294.07,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": -306.38,
                  "top": 45.25,
                  "angle": 0,
                  "width": 146.98,
                  "height": 292.04,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -175,
                  "angle": 0,
                  "width": 681.19,
                  "height": 56.14,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "この枕の売れ残り状況はどの程度だと思いますか。\n以下の0%~100%の選択肢からいずれか一つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "23",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ⑤.png": "embedded\u002Faa8ef748e6d81afda6d1499d79cd070f9c9f05d5609e0ea397da54cc4fac5611.png",
                "信頼度⑤.png": "embedded\u002F540914a31008b7b797cbe8bfd1484b3dcd550355a364c08107a92addb6261f12.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 348.75,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\n枕を買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "6",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に提示される情報を10秒間見てください（「次へ」を押すと情報が提示されます）。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Page"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": -25,
                  "angle": 0,
                  "width": 675.84,
                  "height": 450.56,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"SNS⑥.JPG\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "テレビ②.png": "embedded\u002F4b88b3558faee4b61e6b8178712bdea5c2b53f30160974e1ac6b8afa016e2a81.png",
                "テレビ(引用)⑥.JPG": "embedded\u002F951b1dbf877080bb3cb36aa5be254afd5cb090da516edd0fb455369368b71c87.JPG",
                "SNS⑥.JPG": "embedded\u002F4a8ac5bf0dc6948f84e27f4c89a2f95cc9666c727961bafec8ebf8e7149fb2e3.JPG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen",
              "timeout": "10000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 75,
                  "angle": 0,
                  "width": 727.99,
                  "height": 399.46999999999997,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"信頼度⑥.png\"] }"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -190,
                  "angle": 0,
                  "width": 639.6,
                  "height": 48.82,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "この詰め替え用シャンプーの売れ行き状況はどの程度だと思いますか。\n以下の0%~100%の選択肢からいずれか一つを選択してください。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "20",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -2.88,
                  "top": 71.15,
                  "angle": 0,
                  "width": 140.06,
                  "height": 384.3,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "3"
                },
                {
                  "type": "aoi",
                  "left": 287.54,
                  "top": 70.81,
                  "angle": 0,
                  "width": 141.11,
                  "height": 384.41,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "5"
                },
                {
                  "type": "aoi",
                  "left": 142.2,
                  "top": 70.28,
                  "angle": 0,
                  "width": 140.22,
                  "height": 384.42,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "4"
                },
                {
                  "type": "aoi",
                  "left": -145.9,
                  "top": 70.53,
                  "angle": 0,
                  "width": 136.13,
                  "height": 382.58,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "2"
                },
                {
                  "type": "aoi",
                  "left": -291.37,
                  "top": 70.46,
                  "angle": 0,
                  "width": 139.06,
                  "height": 382.55,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "1"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "信頼度⑥.png": "embedded\u002Faa5edf46b6cb0bdf5664d6a13110ce597622250338ca7596d990b2f16aa07f8e.png"
              },
              "responses": {
                "click @1": "1",
                "click @2": "2",
                "click @3": "3",
                "click @4": "4",
                "click @5": "5"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": -114,
                  "angle": 0,
                  "width": 549.5,
                  "height": 61.02,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "先程提示した情報を踏まえて、\n詰め替え用シャンプーを買いに行きたいですか。",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "25",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "ellipse",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 149.82,
                  "height": 124.85,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f8c6bf"
                },
                {
                  "type": "ellipse",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 155.18,
                  "height": 129.32,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#f7bab0"
                },
                {
                  "type": "i-text",
                  "left": -175,
                  "top": 100,
                  "angle": 0,
                  "width": 64,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "はい",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 150,
                  "top": 100,
                  "angle": 0,
                  "width": 96,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "いいえ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "aoi",
                  "left": -174.9,
                  "top": 100.96,
                  "angle": 0,
                  "width": 149.65,
                  "height": 124.81,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "yes"
                },
                {
                  "type": "aoi",
                  "left": 151.12,
                  "top": 100.01,
                  "angle": 0,
                  "width": 151.77,
                  "height": 128.95,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "rgba(0, 0, 0, 0.2)",
                  "label": "no"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "click @yes": "yes",
                "click @no": "no"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Screen"
            }
          ]
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "これで調査は終了となります。ご協力いただき、ありがとうございました。\n本調査は、SNSやマスメディアの報道の根拠の提示の仕方が、ニュースの印象や信頼度の判断にどのような影響を与えるかを調べていました。本調査で提示したSNS記事は意図的に作成したものであり、実際には存在しない出来事や事実とは異なる内容が含まれています。これらの情報はすべて研究のために作成されたものであり、実際の報道や事件とは関係ありません。具体的には、SNS上のニュースがテレビ報道を引用しているか否か、また同時にテレビニュースがSNS上の投稿を引用しているか否かによって、ニュースの正確性や信頼性の評価にどのような違いをもたらすのかを検討しています。\n実験中には、SNSやテレビニュースを模した画像が使用されていますが、これらはすべて実際の報道・投稿をそのまま使用したものではありません。"
        },
        {
          "required": true,
          "type": "radio",
          "label": "最後に次の質問にお答えください。 実験中に、本研究の目的（「SNSやマスメディアの報道内で、他媒体の情報を引用することがニュースの信頼性の評価に影響するか」）にお気づきになりましたか？",
          "options": [
            {
              "label": "すぐに気づいた",
              "coding": "5"
            },
            {
              "label": "少し時間が経ってから気づいた",
              "coding": "4"
            },
            {
              "label": "時間が経ってから気付いた",
              "coding": "3"
            },
            {
              "label": "実験であることには気づいたが、目的には気づかなかった",
              "coding": "2"
            },
            {
              "label": "全く気付かなかった",
              "coding": "1"
            }
          ],
          "name": "realization"
        },
        {
          "required": true,
          "type": "radio",
          "label": "実験結果の研究利用にご同意いただける場合は「はい」を、ご同意いただけない場合は「いいえ」を選択してください。なお、本実験で得られた結果は個人が特定できる形で公表されることはありません。",
          "options": [
            {
              "label": "はい",
              "coding": "yes"
            },
            {
              "label": "いいえ",
              "coding": "no"
            }
          ],
          "name": "consent"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "おわり"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "input",
          "label": "実験にご協力いただいた方には、謝礼として Amazon e-Gift お送りいたしますので、メールアドレスのご記入をお願いいたします。",
          "name": "mailadress"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "終了",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をユーザーIDにする
const participantID = this.parameters.participantID

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "iC4CjSVMwM7N",
    filename: filename,
    data: data,
  }),
});
}
      },
      "title": "Page",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()