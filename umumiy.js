/* =====================================================================
   Barcha sahifalar uchun umumiy sozlamalar va yordamchi funksiyalar.
   Baza manzili va ochiq kalit brauzerda ochiq turishi uchun mo'ljallangan:
   ular bilan jadvallarni to'g'ridan-to'g'ri o'qib ham, o'zgartirib ham
   bo'lmaydi. Hamma ish bazadagi funksiyalar orqali bajariladi.
   ===================================================================== */

const SB_URL = "https://zbuipyjpyliqqvnmccvu.supabase.co";
const SB_KEY = "sb_publishable_MJMHFlJ0Oghx0sfRD7zMQg_v-530TK6";

/* Tajriba guruhlari: mashg'ulotlar va kundalik faqat ularga ko'rinadi */
const TAJRIBA_GURUHLAR = ["401", "405", "407"];

/* Guruh raqamidan muassasa */
const MUASSASA = {
  "401": "OzMPU",   "402": "OzMPU",
  "405": "UrDPI",   "406": "UrDPI",
  "407": "QoqonDU", "408": "QoqonDU"
};

function guruhRaqami(guruh) {
  var m = String(guruh || "").match(/\d{3}/);
  return m ? m[0] : "";
}
function tajribaGuruhimi(guruh) {
  return TAJRIBA_GURUHLAR.indexOf(guruhRaqami(guruh)) >= 0;
}
function muassasa(guruh) {
  return MUASSASA[guruhRaqami(guruh)] || "";
}

/* Bazadagi funksiyani chaqirish. Natija: {ok, body} yoki {xato} */
function sbRpc(nom, tana) {
  var ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
  var vaqt = setTimeout(function () { if (ctrl) ctrl.abort(); }, 20000);
  var sozlama = {
    method: "POST",
    headers: {
      "apikey": SB_KEY,
      "Authorization": "Bearer " + SB_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tana || {})
  };
  if (ctrl) sozlama.signal = ctrl.signal;
  return fetch(SB_URL + "/rest/v1/rpc/" + nom, sozlama)
    .then(function (r) {
      return r.text().then(function (t) {
        clearTimeout(vaqt);
        var j = null;
        try { j = JSON.parse(t); } catch (e) {}
        if (!r.ok) return { xato: "server", status: r.status, body: j };
        return { ok: true, body: j };
      });
    })
    .catch(function () { clearTimeout(vaqt); return { xato: "tarmoq" }; });
}

function xatoMatni(j) {
  return j && j.xato === "tarmoq"
    ? "Internetga ulanib bo‘lmadi. Aloqani tekshirib, qayta urining."
    : "Server javob bermadi. Birozdan keyin qayta urining.";
}

/* Brauzer xotirasi: xato bo'lsa jim o'tkaziladi */
function xotiraOl(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
function xotiraYoz(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
function xotiraOchir(k) { try { localStorage.removeItem(k); } catch (e) {} }

/* DOM yordamchilari */
function el(id) { return document.getElementById(id); }
function yarat(teg, sinf, matn) {
  var e = document.createElement(teg);
  if (sinf) e.className = sinf;
  if (matn !== undefined && matn !== null) e.appendChild(document.createTextNode(String(matn)));
  return e;
}
function tozala(e) { while (e.firstChild) e.removeChild(e.firstChild); }

function manzilParam(nom) {
  try {
    var m = (window.location.search || "").match(new RegExp("[?&]" + nom + "=([^&]+)"));
    return m ? decodeURIComponent(m[1]).trim() : "";
  } catch (e) { return ""; }
}

function sanaMatn(s) {
  if (!s) return "";
  var d = new Date(s);
  if (isNaN(d.getTime())) return "";
  var p = function (x) { return (x < 10 ? "0" : "") + x; };
  return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate()) +
         " " + p(d.getHours()) + ":" + p(d.getMinutes());
}
