import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISModul_uchetaДирОтдПоРабСКлLForm from './forms/i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-l';
import IISModul_uchetaДоговорLForm from './forms/i-i-s-modul-ucheta-договор-l';
import IISModul_uchetaКлиентLForm from './forms/i-i-s-modul-ucheta-клиент-l';
import IISModul_uchetaРасчетОстВремLForm from './forms/i-i-s-modul-ucheta-расчет-ост-врем-l';
import IISModul_uchetaУслугиLForm from './forms/i-i-s-modul-ucheta-услуги-l';
import IISModul_uchetaДирОтдПоРабСКлEForm from './forms/i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-e';
import IISModul_uchetaДоговорEForm from './forms/i-i-s-modul-ucheta-договор-e';
import IISModul_uchetaКлиентEForm from './forms/i-i-s-modul-ucheta-клиент-e';
import IISModul_uchetaРасчетОстВремEForm from './forms/i-i-s-modul-ucheta-расчет-ост-врем-e';
import IISModul_uchetaУслугиEForm from './forms/i-i-s-modul-ucheta-услуги-e';
import IISModul_uchetaДоговорModel from './models/i-i-s-modul-ucheta-договор';
import IISModul_uchetaКлиентModel from './models/i-i-s-modul-ucheta-клиент';
import IISModul_uchetaОказУслугModel from './models/i-i-s-modul-ucheta-оказ-услуг';
import IISModul_uchetaРасчетОстВремModel from './models/i-i-s-modul-ucheta-расчет-ост-врем';
import IISModul_uchetaУслугиModel from './models/i-i-s-modul-ucheta-услуги';
import ДиректорModel from './models/директор';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-modul-ucheta-договор': IISModul_uchetaДоговорModel,
    'i-i-s-modul-ucheta-клиент': IISModul_uchetaКлиентModel,
    'i-i-s-modul-ucheta-оказ-услуг': IISModul_uchetaОказУслугModel,
    'i-i-s-modul-ucheta-расчет-ост-врем': IISModul_uchetaРасчетОстВремModel,
    'i-i-s-modul-ucheta-услуги': IISModul_uchetaУслугиModel,
    'директор': ДиректорModel
  },

  'application-name': 'Modul_ucheta',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Modul_ucheta',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Modul_ucheta',
          title: 'Modul_ucheta'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'modul-ucheta': {
          caption: 'Modul_ucheta',
          title: 'Modul_ucheta',
          'i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-modul-ucheta-услуги-l': {
            caption: 'Услуги',
            title: ''
          },
          'i-i-s-modul-ucheta-договор-l': {
            caption: 'Договор',
            title: ''
          },
          'i-i-s-modul-ucheta-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          },
          'i-i-s-modul-ucheta-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-l': IISModul_uchetaДирОтдПоРабСКлLForm,
    'i-i-s-modul-ucheta-договор-l': IISModul_uchetaДоговорLForm,
    'i-i-s-modul-ucheta-клиент-l': IISModul_uchetaКлиентLForm,
    'i-i-s-modul-ucheta-расчет-ост-врем-l': IISModul_uchetaРасчетОстВремLForm,
    'i-i-s-modul-ucheta-услуги-l': IISModul_uchetaУслугиLForm,
    'i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-e': IISModul_uchetaДирОтдПоРабСКлEForm,
    'i-i-s-modul-ucheta-договор-e': IISModul_uchetaДоговорEForm,
    'i-i-s-modul-ucheta-клиент-e': IISModul_uchetaКлиентEForm,
    'i-i-s-modul-ucheta-расчет-ост-врем-e': IISModul_uchetaРасчетОстВремEForm,
    'i-i-s-modul-ucheta-услуги-e': IISModul_uchetaУслугиEForm
  },

});

export default translations;
