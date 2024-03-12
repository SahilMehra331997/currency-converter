"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let country_list = {
    "AED": "AE",
    "AFN": "AF",
    "XCD": "AG",
    "ALL": "AL",
    "AMD": "AM",
    "ANG": "AN",
    "AOA": "AO",
    "AQD": "AQ",
    "ARS": "AR",
    "AUD": "AU",
    "AZN": "AZ",
    "BAM": "BA",
    "BBD": "BB",
    "BDT": "BD",
    "XOF": "BE",
    "BGN": "BG",
    "BHD": "BH",
    "BIF": "BI",
    "BMD": "BM",
    "BND": "BN",
    "BOB": "BO",
    "BRL": "BR",
    "BSD": "BS",
    "NOK": "BV",
    "BWP": "BW",
    "BYR": "BY",
    "BZD": "BZ",
    "CAD": "CA",
    "CDF": "CD",
    "XAF": "CF",
    "CHF": "CH",
    "CLP": "CL",
    "CNY": "CN",
    "COP": "CO",
    "CRC": "CR",
    "CUP": "CU",
    "CVE": "CV",
    "CYP": "CY",
    "CZK": "CZ",
    "DJF": "DJ",
    "DKK": "DK",
    "DOP": "DO",
    "DZD": "DZ",
    "ECS": "EC",
    "EEK": "EE",
    "EGP": "EG",
    "ETB": "ET",
    "EUR": "FR",
    "FJD": "FJ",
    "FKP": "FK",
    "GBP": "GB",
    "GEL": "GE",
    "GGP": "GG",
    "GHS": "GH",
    "GIP": "GI",
    "GMD": "GM",
    "GNF": "GN",
    "GTQ": "GT",
    "GYD": "GY",
    "HKD": "HK",
    "HNL": "HN",
    "HRK": "HR",
    "HTG": "HT",
    "HUF": "HU",
    "IDR": "ID",
    "ILS": "IL",
    "INR": "IN",
    "IQD": "IQ",
    "IRR": "IR",
    "ISK": "IS",
    "JMD": "JM",
    "JOD": "JO",
    "JPY": "JP",
    "KES": "KE",
    "KGS": "KG",
    "KHR": "KH",
    "KMF": "KM",
    "KPW": "KP",
    "KRW": "KR",
    "KWD": "KW",
    "KYD": "KY",
    "KZT": "KZ",
    "LAK": "LA",
    "LBP": "LB",
    "LKR": "LK",
    "LRD": "LR",
    "LSL": "LS",
    "LTL": "LT",
    "LVL": "LV",
    "LYD": "LY",
    "MAD": "MA",
    "MDL": "MD",
    "MGA": "MG",
    "MKD": "MK",
    "MMK": "MM",
    "MNT": "MN",
    "MOP": "MO",
    "MRO": "MR",
    "MTL": "MT",
    "MUR": "MU",
    "MVR": "MV",
    "MWK": "MW",
    "MXN": "MX",
    "MYR": "MY",
    "MZN": "MZ",
    "NAD": "NA",
    "XPF": "NC",
    "NGN": "NG",
    "NIO": "NI",
    "NPR": "NP",
    "NZD": "NZ",
    "OMR": "OM",
    "PAB": "PA",
    "PEN": "PE",
    "PGK": "PG",
    "PHP": "PH",
    "PKR": "PK",
    "PLN": "PL",
    "PYG": "PY",
    "QAR": "QA",
    "RON": "RO",
    "RSD": "RS",
    "RUB": "RU",
    "RWF": "RW",
    "SAR": "SA",
    "SBD": "SB",
    "SCR": "SC",
    "SDG": "SD",
    "SEK": "SE",
    "SGD": "SG",
    "SKK": "SK",
    "SLL": "SL",
    "SOS": "SO",
    "SRD": "SR",
    "STD": "ST",
    "SVC": "SV",
    "SYP": "SY",
    "SZL": "SZ",
    "THB": "TH",
    "TJS": "TJ",
    "TMT": "TM",
    "TND": "TN",
    "TOP": "TO",
    "TRY": "TR",
    "TTD": "TT",
    "TWD": "TW",
    "TZS": "TZ",
    "UAH": "UA",
    "UGX": "UG",
    "USD": "US",
    "UYU": "UY",
    "UZS": "UZ",
    "VEF": "VE",
    "VND": "VN",
    "VUV": "VU",
    "YER": "YE",
    "ZAR": "ZA",
    "ZMK": "ZM",
    "ZWD": "ZW"
};
const btn = document.querySelector("button");
const display = document.querySelector(".exchange-rate");
const base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-02/v1/currencies";
//Populate dropdown
const dropdown = document.querySelector(".dropdown");
const dropselect = document.querySelectorAll(".dropdown select");
for (let select of dropselect)
    for (let country in country_list) {
        let newopt = document.createElement("option");
        newopt.innerText = country;
        newopt.value = country;
        if (select.name === "from" && country === "USD")
            newopt.selected = true;
        if (select.name === "to" && country === "INR")
            newopt.selected = true;
        select.append(newopt);
        select.addEventListener("change", (evt) => { updateflag(evt.target); });
    }
//Change Flag
const updateflag = (element) => {
    let currcode = element.value;
    let country = country_list[currcode].toLowerCase();
    let src = `https://flagcdn.com/48x36/${country}.png`;
    element.parentElement.querySelector("img").src = src;
};
btn.addEventListener("click", (evt) => __awaiter(void 0, void 0, void 0, function* () {
    evt.preventDefault();
    let inputvalue = document.querySelector("input");
    let amount = parseInt(inputvalue.value);
    if (inputvalue.value === '' || parseInt(inputvalue.value) < 1) {
        inputvalue.value = '1';
        amount = 1;
    }
    const fromcurrency = document.querySelector(".from select");
    const from = fromcurrency.value.toLowerCase();
    const tocurrency = document.querySelector(".to select");
    const to = tocurrency.value.toLowerCase();
    const response = yield fetch(`${base_url}/${from}.json`);
    const data = yield response.json();
    const rate = data[from][to];
    display.innerText = (rate * amount).toFixed(4);
}));
