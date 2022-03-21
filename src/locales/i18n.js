import { createI18n } from "vue-i18n";
import id from './id.json';
import en from './en.json';
import man from './man.json';
const i18n = createI18n({
    locale: localStorage.getItem("lang"),
    messages: {
        id,
        en,
        man,
    }
})

export default i18n;