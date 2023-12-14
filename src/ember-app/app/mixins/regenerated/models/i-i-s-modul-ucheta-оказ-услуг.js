import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяКонсульт: DS.attr('decimal'),
  дата: DS.attr('date'),
  едВремени: DS.attr('i-i-s-modul-ucheta-ед-времени'),
  договор: DS.belongsTo('i-i-s-modul-ucheta-договор', { inverse: null, async: false }),
  услуги: DS.belongsTo('i-i-s-modul-ucheta-услуги', { inverse: null, async: false }),
  расчетОстВрем: DS.belongsTo('i-i-s-modul-ucheta-расчет-ост-врем', { inverse: 'оказУслуг', async: false })
});

export let ValidationRules = {
  времяКонсульт: {
    descriptionKey: 'models.i-i-s-modul-ucheta-оказ-услуг.validations.времяКонсульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-modul-ucheta-оказ-услуг.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  едВремени: {
    descriptionKey: 'models.i-i-s-modul-ucheta-оказ-услуг.validations.едВремени.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  договор: {
    descriptionKey: 'models.i-i-s-modul-ucheta-оказ-услуг.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуги: {
    descriptionKey: 'models.i-i-s-modul-ucheta-оказ-услуг.validations.услуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расчетОстВрем: {
    descriptionKey: 'models.i-i-s-modul-ucheta-оказ-услуг.validations.расчетОстВрем.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОказУслугE', 'i-i-s-modul-ucheta-оказ-услуг', {
    дата: attr('Дата', { index: 0 }),
    времяКонсульт: attr('Время консультации', { index: 1, hidden: true }),
    едВремени: attr('Единица времени', { index: 2 }),
    услуги: belongsTo('i-i-s-modul-ucheta-услуги', 'Услуги', {
      затрВремя: attr('Затраченное время', { index: 4 }),
      едВремени: attr('Единица времени', { index: 5 })
    }, { index: 3, displayMemberPath: 'наименование' }),
    договор: belongsTo('i-i-s-modul-ucheta-договор', 'Договор', {
      длительность: attr('Длительность', { index: 7 })
    }, { index: 6, displayMemberPath: 'номер' })
  });
};
