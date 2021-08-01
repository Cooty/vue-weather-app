import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './translations/en'
import de from './translations/de'
import hu from './translations/hu'
import bg from './translations/bg'
import langCodes from './lang-codes'

Vue.use(VueI18n)

const messages = {
    en,
    de,
    hu,
    bg
}

const i18n = new VueI18n({
    locale: langCodes.EN,
    messages
})

export default i18n
